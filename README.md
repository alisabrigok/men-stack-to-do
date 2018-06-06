# RESTful MEN Stack To-Do Application With Authentication (Kimik Doğrulaması İle RESTful MEN Stack Yapılacaklar Listesi Uygulaması)

A **RESTful** to-do application with authentication that developed using **MEN stack (MongoDB, Express, Node.js) and Sass** along with **BEM** front-end methodology and **MVC** software architecture.

This is an old project of mine which I thought would be nice to upload to GitHub. So I updated the dependencies, fixed here and there, tried to make sure everything was working properly and here it is.

Türkçe dökümantasyon için: [Tıklayın](https://github.com/alisabrigok/men-stack-to-do/blob/master/README.tr.md)

## Features

  - CRUD Operations,
  - Add New To-Do, 
  - Update To-Do,
  - Delete To-Do
  - Mark To-Dos As Completed,
  - Authentication (Meaning you need to sign up or login in order to use the app),
  - Ability to update credentials later on,
  - Ability to delete the user later on
  - Authorization (Meaning each user can only interact with stuff that belong to them)
 
## Dependencies And Terms Breakdown

Dependencies are packages we use, we depend on, that make our job easier. 

Packages are collections of codes that put together by a random wonderful person or people, to solve a common problem or provide a feature to make things develop faster. And they do these things efficiently while being super easy to use.

The ones that were used in this application are:

### Dependencies (The ones app can't work without on production build)

First things first: Nearly all packages help you write less code and do more. Keep that in mind.

- **[express](https://expressjs.com/)**: "The most popular Node.js framework. It helps to organize the application into an MVC architecture on the server side (back-end part)." [More info.](https://stackoverflow.com/questions/12616153/what-is-express-js) Basically a great thing that shortens your code a lot comparing to using plain Node.js. It's like using those electronic egg boilers. Sure, you can boil your egg with a pot or what not, but that thing even has a measurement tool/thing that you can adjust how boiled you want your egg for your taste, easily.

- **[express-session](https://www.npmjs.com/package/express-session)**: A session middleware to help the creation and the management of sessions.

- **[body-parser](https://www.npmjs.com/package/express-session)**: "It parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. Because express don't do it for you out of the box. Still, you can parse those incoming datas without body-parser but what's the point? And the package is already maintained by the express team."[More info](https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express) You can access the datas that you passed with a form element using 'name' property, under req.body object. 

- **[ejs](http://ejs.co/)**: A templating language. Meaning you pass data as JSON to your client side (front-end), this thing lets you use that data there by using JavaScript.

- **[mongoose](http://mongoosejs.com/)**: "MongoDB is the database itself, that was used in this application. Mongoose however, is an object modeling tool for MongoDB. [More info.](https://stackoverflow.com/questions/28712248/difference-between-mongodb-and-mongoose) It's built upon MongoDB driver to provide a way to model the data. MongoDB has a native driver for interacting with MongoDB instances but using Mongoose, we use Mongoose way of interacting with them most of the time."

- **[passport](http://www.passportjs.org/)**: An authentication middleware to help creating different kinds of methods (strategies) to authenticate users. Those methods might be: authentication using username and password or an authentication using social media account such as Facebook, Twitter etc. Basically dealing with how to handle sign up and login logics.

- **[passport-local](https://www.npmjs.com/package/passport-local)**: An authentication method (strategy) that lets us use username and password for credentials. It's one of the methods (strategies) that just mentioned above.

- **[passport-local-mongoose](https://stackoverflow.com/questions/28712248/difference-between-mongodb-and-mongoose)**:  "A Mongoose plugin that simplifies building username and password login with Passport." The explanation is pretty straightforward i think.

- **[method-override](https://www.npmjs.com/package/method-override)**: "As of now, GET and POST are the only supported verbs for forms, even in HTML5. So we use this package to let other HTTP verbs such as PUT or DELETE to be used in places where the client doesn't support it."

- **[connect-flash](https://www.npmjs.com/package/connect-flash)**: "The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user." Used for interacting with users via alert messages. Message stays in the session only until that requested page's duration of time. When you move into another page, the message is gone.

### Development Dependencies (The ones that only needed while developing the app)

- **[concurrently](https://www.npmjs.com/package/concurrently)**: Used for running the commands concurrently.

- **[node-sass](https://www.npmjs.com/package/concurrently)**: Natively compiles .scss files to css.

I used 'node-sass' to compile .scss files to css and 'concurrently' to run the server and compliation operations at the same time so I don't manually run the compiler then run the server.

## Prerequisites

Make sure [Node.js](https://nodejs.org/en/) is installed on your machine.

## Installation

Download the project from GitHub, then go to the directory that the project stays at, using your terminal. Simply install all the dependencies by using this simple command:

```
$ npm install
```

Once everything installed, you can either run the server by typing this command: 

```
$ node app
```

Or if you plan to make any changings on Sass files, use this command to both compile Sass and run the server:

```
$ npm dev
```

If you get any error on the last command, install nodemon globally to your machine:

```
$ npm install -g nodemon
```

and try again with the npm dev command given above.


## Author

- Ali Sabri GÖK - You can contact me [@alisabrigok](https://twitter.com/alisabrigok) on Twitter, you can email me or visit [my website](http://www.alisabri.com).

## Contribution

- The application can be further enhanced with even more features. Some that come into my mind right now:

 - To-do creation date-time (maybe using moment.js).
 - To-do expiration time,
 - To-do prioritization (maybe with drag and drop: the first one, the most important one),
 - Forgot my password,
 - An admin user,
 - A better UI. This one is hard to be extended with features like this, unlike classic UIs with menubar and such. 
 - Security. I didn't even implement a sanitizer to scrap entered JavaScript code input. express-sanitizer can be used for it.

Feel free to contact with me if you have any ideas.

Let me ask you guys somethings:

- What directory structure are you using? As you can see, along with classic MVC directories, my other controller logics are distributed to two other directories.
- What kind of web stack are you using? Along with any front-end framework maybe? And why are you using them?

Let's talk about these.

## Acknowledgments

- I'd like to thank my cats; Fındık and Minnak. Thanks guys♥. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/alisabrigok/men-stack-to-do/blob/master/LICENSE) file for details.