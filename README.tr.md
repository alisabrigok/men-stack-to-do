# RESTful MEN Stack To-Do Application With Authentication (Kimik Doğrulaması İle RESTful MEN Stack Yapılacaklar Listesi Uygulaması)

**MEN stack (MongoDB, Express, Node.js) ve Sass** kullanılarak, BEM ön-yüz metodolojisi ve MVC yazılım mimarisi ile birlikte geliştirilmiş, kimlik doğrulamalı, RESTful yapılacaklar listesi uygulaması.

Bu, GitHub'a yüklesem iyi olurdu diye düşündüğüm eski bir projem. Bağlı paketleri (dependencies), sağını solunu biraz güncelleyip, her şeyin düzgünce çalıştığına emin olduktan buraya yükledim ve işte karşınızda.

For English: [Click Here](https://github.com/alisabrigok/men-stack-to-do/blob/master/README.md)

## Özellikler

  - CRUD Operasyonları,
  -- Yeni Yapılacak Ekleme, 
  -- Yapılacakları Güncelleme,
  -- Yapılacakları Silme
  - Yapılacakları tamamlandı olarak işaretleme,
  - Kimlik Doğrulama (Authentication, yani uygulamayı kullanmak için kayıt olmak veya kullanıcı girişi yapmak gerekiyor),
  -- Kimlik bilgilerini daha sonradan güncelleyebilme,
  -- Kullanıcıyı daha sonrada silebilme
  - Yetkilendirme (Authorization, yani her kullanıcı yalnızca kendilerine ait olan şeylerle etkileşime geçebiliyor)
 
## Ön Koşullar

[Node.js](https://nodejs.org/en/)'in bilgisayarına kurulu olduğuna emin ol.

## Kurulum

Paketi GitHub'dan indir, sonra projenin bulunduğu dizine terminalini kullanarak gel. Bu uygulamanın bağlı olduğu tüm paketleri tek bir basit komutla indiriver:

```
$ npm install
```

Her şey yüklendikten sonra ya şu komutla direkt sunucuyu çalıştır:

```
$ node app
```

Ya da eğer Sass dosyalarında bir değişiklik yapacaksan, şu komutu kullanarak hem Sass'ı derle hem de sunucuyu çalıştırmış ol:

```
$ npm dev
```

Eğer son komutta bir hata ile karşılaşırsan, nodemon'u global olarak bilgisayarına kur:

```
$ npm install -g nodemon
```

ve deminki npm dev komutunu kullanarak yeniden dene.
 
## Bağlı Paketler Ve Terimler Analizi

Bağlı paketler, onlara bağlı olduğumuz, işlerimizi kolaylaştıran paketlerdir.

Paketler, harika bir insan veya insanlar tarafından, ortak bir problemi çözmek veya bir özelliği sağlayarak kolayca geliştirme yapabilmek amacıyla bir araya toplanmış kodlar bütünüdür. Bu paketler bu işleri, kullanımı çok kolay tutarken aynı zamanda çok etkili de bir biçimde yaparlar.

Bu uygulamada kullanılan bağlı paketler şunlar:

### Bağlı Paketler (Eksikliğinde uygulamanın çalışmayacağı paketler)

Devam etmeden önce: Bu paketlerin neredeyse hepsi senin daha az kod yazarak daha çok şey yapman için varlar. Bunu aklında tut.

- **[express](https://expressjs.com/)**: "Node.js'in en popüler framework'ü. Arka-yüzde (back-end) uygulamanı MVC mimarisine dönüştürürken sana yardımcı oluyor. [Daha fazla bilgi.](https://stackoverflow.com/questions/12616153/what-is-express-js)" Basitce söylemek gerekirse, saf Node.js kullanımına kıyasla kodlarını daha da kısa tutmanı sağlayacak harika bir şey! Tıpkı şu elektronik yumurta pişirme makineleri var ya, hah onlar gibi. Tabi ki, bir cezvede veya bir tencerede her zaman yumurtanı kaynatabilirsin ama bu cihazın yumurtanın ne kadar pişmiş olmasını ayarlayabileceğin bir ölçü aleti bile var. Böylece tam ağız tadına göre yumurtalarını pişirebilirsin, bilmem anlatabiliyor muyum?

- **[express-session](https://www.npmjs.com/package/express-session)**: Session'ların oluşturulması ve yönetilmesine yardımcı bir session ara katmanı (middleware).

- **[body-parser](https://www.npmjs.com/package/express-session)**: "Bu paket, HTTP POST isteği (request) ile gönderilmiş JSON, buffer, string ya da URL şifreli verileri (encoded data) ayrıştırıyor. Çünkü express bunu senin için doğrudan yapmıyor. Tabi ki, gelen verileri body-parser kullanmadan da ayrıştırabilirsin ama ne gerek var? Hem zaten bu paketin geliştirici ekibi express'i geliştiren ekip." [Daha fazla bilgi.](https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express) Bu paketi kullanarak; "name" altında yolladığın form elementlerinin verilerine req.body objesi içerisinde erişip, hemen kullanabilirsin.

- **[ejs](http://ejs.co/)**: Bir şablonlaştırma (templating) dili. Yani, ön-yüz tarafına (cliend-side) verilerini JSON olarak yolluyorsun, bu paket de sana o verilere orada JavaScript kullanarak HTML içerisinde erişmene izin veriyor.

- **[mongoose](http://mongoosejs.com/)**: "MongoDB'nin kendisi bu uygulamada kullanılmış bir database. Ancak Mongoose, MongoDB için bir obje modelleme aracı. [Daha fazla bilgi.](https://stackoverflow.com/questions/28712248/difference-between-mongodb-and-mongoose) Verimizi modellememize bir yöntem sunmak için MongoDB sürücüsünün üzerine kurulu bir şekilde. MongoDB'nin kendisi zaten MongoDB örnekleri (instance) ile etkileşime geçmek için doğal bir sürücüye sahip ancak Mongoose'u kullanarak bu örneklerle çoğu zaman Mongoose'un yöntemiyle etkileşime geçiyoruz."

- **[passport](http://www.passportjs.org/)**: Kullanıcının kimliğini doğrulamak için farklı yöntemler (stratejiler) oluşturmamızı sağlayan bir kimlik doğrulama ara katmanı (authentication middleware). Bu yöntemler; kullanıcı adı ve şifre, ya da Facebook, Twitter gibi sosyal medya ile kimlik doğrulama yöntemleri olabilir. Kısaca, bu paket üye olma ve giriş yapma ile alakalı.

- **[passport-local](https://www.npmjs.com/package/passport-local)**: Kullanıcı adı ve şifre kullanarak kimlik doğrulaması yapmamızı sağlayan bir kimlik doğrulama yöntemi (stratejisi). Bu yukarıda sayılan yöntemlerden yalnızca biri.

- **[passport-local-mongoose](https://stackoverflow.com/questions/28712248/difference-between-mongodb-and-mongoose)**:  "Passport'u kullanarak kullanıcı adı ve şifre kimlik doğrulaması yöntemi kurmamızı basitleştiren bir Mongoose eklentisi." Açıklama gayet anlaşılabilir sanırım.

- **[method-override](https://www.npmjs.com/package/method-override)**: "Şuanda, HTML5'te bile, GET ve POST dışında desteklenen başka bir HTTP fiili yok. Bu paket bizim bu fiiller dışındaki, örneğin PUT ve DELETE, diğer HTTP fiillerini, desteklenmese bile kullanmamıza olanak sağlar."

- **[connect-flash](https://www.npmjs.com/package/connect-flash)**: "Flash, session içerisinde mesajları saklamak için kullanılan özel bir kısımdır. Mesajlar flash'a yazılır ve kullanıcıya gözüktükten sonra oradan silinirler." Uyarma mesajları ile kullanıcı ile etkileşime geçmek için kullanılır. Mesaj, o anki istek (request) yapılmış sayfanın açık kaldığı süre boyunca session içerisinde kalır. Daha sonra sayfadan başka bir sayfaya geçiş yapıldığında mesaj silinir.

### Geliştirmeye Özel Bağlı Paketler (Sadece uygulamayı geliştirme sürecinde ihtiyacımız olanlar)

- **[concurrently](https://www.npmjs.com/package/concurrently)**: Eşzamanlı komut çalıştırmak için kullanılır.

- **[node-sass](https://www.npmjs.com/package/concurrently)**: .scss dosyalarını css'e doğal olarak derler.

'node-sass' paketini .scss dosylaraını css'e derlemek için ve 'concurrently' paketini de derleme işlemlerini ve sunucuyu aynı anda çalıştırmak için kullandım. Böylece manual olarak derleyiciyi ve sonra da sunucuyu çalıştırmama gerek kalmadı.

## Geliştirici

- Ali Sabri GÖK - Bana [@alisabrigok](https://twitter.com/alisabrigok) ile Twitter'dan ulaşabilir, email atabilir veya [websitemi](http://www.alisabri.com) ziyaret edebilirsin.

## Katkıda Bulunmak

- Bu uygulama daha başka özelliklerle iyice geliştirilebilir. Şuan aklıma gelen bazıları:

 -- Yapılacak oluştururken tarih ve zaman kaydı alma (moment.js kullanırız belki).
 -- Yapılacaklar için son gün atama,
 -- Yapılacak önceliği (hem de belki sürükle bırak ile: ilk sırada yer alanın en önemli olduğu),
 -- Şifremi unuttum özelliği,
 -- Admin özelliklerine sahip bir kullanıcı,
 -- Daha iyi bir arayüzü. Klasik menülü arayüzlere göre, bu uygulamanınki bu tarz özellikler ve daha fazlasıyla iyice geliştirilmek için zor olabilir.
 -- Güvenlik. Input'lara girilen JavaScript kodlarını temizleyen bir güvenlik önlemi bile kullanmadım bu projede. Örneğin express-sanitizer paketi tam bu iş için biçilmiş kaftan, kullanılabilir.

Daha farklı fikirlerin varsa benimle iletişime geçmeye ne dersin?

Peki bi de ben size bir şeyler danışayım:

- Nasıl bir dizin yapılandırması kullanıyorsun? Gördüğün gibi, bu projede klasik MVC dizinlerinin yanında controller logic'leri iki ayrı dizine daha serpiştirilmiş.

- Nasıl bir web stack kullanıyorsun? Ön-yüz framework'u kullanıyor musun mesela? Kullanıyorsan neden özellikle onu kullanıyorsun?

Hadi bu konuları konuşalım.

## Sonsöz

- Kedilerim Fındık ve Minnak'a teşekkürü bir borç bilirim. Sağolun çocuklar♥.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır - detaylar için [LICENSE.md](https://github.com/alisabrigok/men-stack-to-do/blob/master/LICENSE).
