var express                 =   require("express"),
    app                     =   express(), 
    bodyParser              =   require("body-parser"),
    mongoose                =   require("mongoose"),
    flash                   =   require("connect-flash"),
    config                  =   require('./config'),
    methodOverride          =   require("method-override"),
    passport                =   require("passport"),
    LocalStrategy           =   require("passport-local"),
    theSession              =   require("express-session"),
    User                    =   require("./models/user");
    
var todoRoutes    = require("./routes/todos"),
    indexRoutes   = require("./routes/index"); 

mongoose.Promise = global.Promise;

mongoose.connect(config.getDbConnectionString(),  {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/")); 
app.use(methodOverride("_method"));
app.use(flash());

app.use(theSession({
    secret: "super secret stuff",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){ 
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use(indexRoutes);
app.use("/todos", todoRoutes);

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('server is up and running...');
});