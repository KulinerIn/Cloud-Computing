-- Create recipe Table

CREATE TABLE recipe(
   id INT NOT NULL AUTO_INCREMENT,
   steps text,
   PRIMARY KEY (id)
);

-- Populate recipe Table

INSERT INTO recipe(steps) VALUES
    ("1. Buat air daun suji dengan menumbuk 15 lembar daun suji dan 10 lembar daun panda. Peras airnya, lalu campurkan dengan 50 mili air hangat. 
    2. Tempatkan tepung ketan ke dalam wadah, tambahkan air kapur sirih, tuang air suji hangat sedikit demi sedikit sambil diaduk hingga adonan dapat dibentuk. 
    3. Bentuk adonan menjadi bulatan-bulatan sebesar kelereng. Pipihkan, lalu isi dengan 1/2 sendok teh gula merah di tengah bulatan. 
    4. Didihkan air secukupnya dengan api sedang. Masukkan bulatan-bulatan adonan, biarkan mengapung tanda sudah matang. 
    5. Angkat lalu tiriskan. 
    6. Gulingkan klepon pada kelapa parut matang. Klepon siap dihidangkan."),
    ("1. Rebus santan, daun pandan, daun jeruk, dan garam hingga mendidih. Diamkan sampai hangat.
    2. Di dalam wadah, campur tepung sagu, tepung beras, gula pasir, dan garam. Tuang adonan santan ke dalam campuran tepung sedikit-sedikit sambil diaduk rata. 
    3. Bagi dua adonan dan beri warna yang berbeda. Mangkuk 500 ml adonan diberi warna hijau dari tambahan air daun suji. Sisanya biarkan putih. 
    4. Siapkan kukusan yang sudah dipanaskan. Letakan loyang persegi dengan ukuran 20x20x7cm, beri alas plastik. 
    5. Tuang 100 ml adonan putih ke loyang, kukus di atas api sedang selama 5 menit. Tuang lagi 100 ml adonan putih, kukus 5 menit.
    6. Tuang 100 ml adonan hijau, kukus 5 menit. Lakukan hal yang sama, dua kali adonan putih, satu kali adonan hijau.
    7. Terakhir tuang 100 ml adonan putih yang sudah ditambahkan pewarna merah. 
    8. Kukus diatas api sedang selama 20 menit sampai matang lalu matikan kompor. Angkat kue dan biarkan dinginkan."),
    ("1. Kocok kuning telur dan gula halus hingga putih sekitar 7-10 menit. 
    2. Masukkan margarin, dalam kecepatan rendah kocok hingga tercampur. 
    3. Masukkan mentega, kocok rata. Masukkan terigu, bubuk spekuk, vanili, aduk rata. 
    4. Tambahkan susu kental. Tambahkan telur putih, aduk rata dengan spatula. 
    5. Siapkan cetakan yang sudah dialasi kertas roti dan mentega. Siapkan oven. 
    6. Tuang adonan satu sendok sayur dan ratakan dalam cetakan ukuran 24x24x7. 
    7. Panggang dalam oven hingga mengeras, sekitar 5 menit. 
    8. Keluarkan, masukkan adonan satu sendok sayur lagi, ratakan. 
    9. Panggang lagi. Lakukan hingga semua adonan habis. Panas oven sekira 100-150 derajat C. 
    10. Jika sudah matang, keluarkan dari cetakan dan biarkan dingin. Potong potong dalam keadaan dingin"),
    ("1. Kocok telur dan gula hingga mengental dan mengembang. Tuang susu cair, kocok dengan kecepatan rendah. 
    2. Tambahkan dengan tepung terigu, ragi, baking powder, dan garam. Kocok menggunakan mixer dengan kecepatan rendah hingga merata. 
    3. Tambahkan margarin, aduk rata.
    4. Diamkan adonan selama 1 jam atau hingga mengembang. Panaskan teflon dan tuang adonan, ratakan, dan biarkan hingga berbusa. 
    5. Taburi dengan gula pasir di atas permukaan martabak manis, masak hingga matang. Angkat. 
    6. Olesi martabak dengan margarin dan topping yang diinginkan"),
    ("1. Buat kulit martabak terlebih dahulu, campur tepung terigu dan garam. Tuang air sedikit demi sedikit sambil diuleni sampai kalis. Tambahkan minyak goreng. Uleni sampai elastis.
    2. Timbang masing-masing 75 gram. Bulatkan. rendam dalam minyak goreng selama dua jam. 
    3. Buat isian martabak, tumis bawang putih, bawang merah, dan cabai merah sampai harum. Tambahkan daging giling dan ayam giling. Aduk sampai berubah warna. 
    4. Masukkan kari bubuk, garam, merica bubuk, dan gula pasir. Aduk sampai meresap. Tambahkan daun bawang. Aduk rata. Sisihkan. 
    5. Pipihkan kulit dan giling tipis. Sisihkan.
    6. Panaskan minyak dalam teflon. Letakkan selembar kulit. Beri campuran isi. Lipat. Goreng dengan sedikit minyak (jangan sampai terendam) sambil disiram-siram minyak sampai matang."),
    ("1. Untuk selai nanas, parut atau blender nanas yang telah dibersihkan, masukkan ke dalam wajan. Tambahkan cengkih dan kayu manis. Masak hingga air menggering sambil terus diaduk.  
    2. Masukkan gula dan garam, masak kembali hingga mengering sambil diaduk agar tidak gosong. Angkat, sisihkan cengkih dan kayu manisnya, dinginkan.  Bulatkan selai dengan berat empat gram. Sisihkan.  
    3. Mikser mentega, gula, dan telur sebentar hingga rata. Matikan mikser lalu masukkan susu, tepung maizena, tepung terigu, keju, garam, dan vanili, aduk rata. 
    4. Bulatkan adonan sama rata masing-masing sembilan gram. Isi dengan selai nanas, bulatkan kembali lalu susun di atas loyang yang sudah diolesi margarin.  
    5. Oven dengan suhu sekitar 130 derajat celcius selama 20 menit menggunakan api bawah. Pindahkan ke api atas, oven lagi sekitar 10 menit atau hingga matang.  
    6. Keluarkan dari oven, biarkan hingga agak dingin. Olesi atasnya dengan kuning telur. 
    7. Setelah olesan mengering, masukkan kembali ke dalam oven sekitar lima menit. Angkat. Nastar siap disajikan."),
    ("1. Buat isian, kukus kacang hijau selama 20 menit. Angkat. 
    2. Tambahkan gula pasir, daun pandan, garam, dan santan pada kacang hijau. Masak sambil diaduk sampai kalis, kemudian angkat. Biarkan dingin. Timbang masing-masing 10 gram. Bulatkan.
    3. Lanjutkan dengan membuat bagian luar atau kulit onde-onde. Campur tepung ketan putih, kentang, gula pasir halus, dan garam. Aduk rata. 
    4. Tuang air hangat sedikit-sedikit sambil diuleni sampai kalis dan licin. 
    5. Timbang masing-masing 20 gram. Pipihkan. Beri isi. Bentuk bulat. Celupkan kedalam air. Gulingkan di atas wijen.
    6. Goreng dengan minyak tidak terlalu panas dengan api kecil sambil diaduk-aduk berputar sampai mengembang. Besarkan apinya menjadi api sedang. Goreng sampai matang."),
    ("1. Siapkan bahan-bahan lalu ayak tepung terigu. Campurkan dengan ragi instan. Aduk rata.
    2. Kocok telur dan gula sampai kental dan mengental, lalu masukkan campuran tepung terigu sedikit demi sedikit.
    3. Tambahkan santan dan aduk rata. Diamkan adonan selama kurang lebih 30 menit.
    4. Kemudian panaskan cetakan kue pukis. Olesi dengan margarin.
    5. Tuangkan adonan ke dalam cetakan pukis hingga 3/4.
    6. Tunggu sampai matang, angkat, dan sajikan."),
    ("1. Campur tepung beras, tepung kanji, dan tepung terigu dalam satu mangkuk. Tambahkan gula pasir dan garam, aduk rata. 
    2. Masukkan santan cair sedikit demi sedikit sambil terus diaduk hingga membentuk adonan. Kemudian, masukkan santan kental, aduk hingga rata. 
    3. Panaskan cetakan serabi atau teflon, olesi dengan ampas kelapa agar tidak lengket. Tuang satu sendok sayur serabi, kemudian tutup. Masak hingga matang."),
    ("1. Siapkan wadah, aduk margarin menggunakan mixer hingga mengembang, campurkan tepung terigu dan tepung maizena yang sudah diayak, sambil diaduk terus menggunakan mixer sampai mengembang. 
    2. Masukkan telur ayam satu persatu kedalam adonan diatas, aduk sampai tercampur rata bersama parutan keju. 
    3. Pipihkan adonan, sambil dicetak sesuai bentuk yang diinginkan. Panaskan oven, panggang kue dengan suhu 160 derajat selama kurang lebih 15 menit. 
    4. Angkat, dan biarkan sampai suhu ruang, lalu taburkan gula halus diatasnya.");


-- Create ingredient Table

CREATE TABLE ingredient(
   id INT NOT NULL AUTO_INCREMENT,
   name varchar(255) NOT NULL,
   PRIMARY KEY(id)
);

-- Populate ingredient Table

INSERT INTO ingredient(name) VALUES
    ("air"),
    ("tepung ketan"),
    ("air kapur sirih"),
    ("gula merah"),
    ("daun suji"),
    ("daun pandan"),
    ("kelapa parut"),
    ("garam"),
    ("santan"),
    ("daun jeruk"),
    ("tepung sagu"),
    ("tepung beras"),
    ("gula pasir"),
    ("pewarna cabe merah"),
    ("air daun suji"),
    ("pewarna hijau muda"),
    ("tepung terigu"),
    ("tepung maizena"),
    ("margarin"),
    ("keju parut"),
    ("telur ayam"),
    ("gula halus"),
    ("kuning telur"),
    ("mentega"),
    ("susu kental manis"),
    ("bumbu spekuk"),
    ("putih telur"),
    ("vanili"),
    ("minyak goreng"),
    ("daging giling"),
    ("ayam giling"),
    ("bawang putih"),
    ("bawang merah"),
    ("cabai merah"),
    ("kari bubuk"),
    ("merica bubuk"),
    ("daun bawang"),
    ("telur ayam"),
    ("bawang bombay"),
    ("tumisan daging"),
    ("susu cair"),
    ("baking powder"),
    ("soda kue"),
    ("nanas"),
    ("cengkih"),
    ("kayu manis"),
    ("susu bubuk"),
    ("keju cheddar parut"),
    ("vanili bubuk"),
    ("kacang hijau kupas"),
    ("tepung ketan putih"),
    ("kentang kukus"),
    ("wijen"),
    ("minyak padat"),
    ("tepung kanji"),
    ("ragi instan");

-- Create recipe_ingredient Table

CREATE TABLE recipe_ingredient (  
  id INT AUTO_INCREMENT,  
  recipe_id INT NOT NULL,  
  ingredient_id INT NOT NULL,  
  amount varchar(50) NOT NULL,
  PRIMARY KEY (id),
  index(recipe_id),
  index(ingredient_id),
  FOREIGN KEY (recipe_id) REFERENCES recipe(id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredient(id)  
);  

-- Populate recipe_ingredient Table
INSERT INTO recipe_ingredient(recipe_id,ingredient_id,amount) VALUES
    ("1","1","450ml"),
    ("1","2","500gr"),
    ("1","3","1 sendok makan"),
    ("1","4","200gr"),
    ("1","5","15 lembar"),
    ("1","6","10 lembar"),
    ("1","7","1 butik"),
    ("1","8","1/2 sendok"),
    ("2","9","1500ml"),
    ("2","6","5 lembar"),
    ("2","10","20 lembar"),
    ("2","11","625gr"),
    ("2","12","3 sendok makan"),
    ("2","13","400gr"),
    ("2","8","2 sendok teh"),
    ("2","14","1/4 sendok teh"),
    ("2","15","50ml"),
    ("2","6","1 lembar"),
    ("2","16","1 tetes"),
    ("3","23","30 butir"),
    ("3","22","560gr"),
    ("3","19","300gr"),
    ("3","24","400gr"),
    ("3","17","210gr"),
    ("3","25","9 sendok makan"),
    ("3","26","2 sendok makan"),
    ("3","27","8 butir"),
    ("3","28","secukupnya"),
    ("4","38","2 butir"),
    ("4","13","2 sendok makan"),
    ("4","41","150ml"),
    ("4","17","150gr"),
    ("4","56","1/2 sendok teh"),
    ("4","42","2 sendok teh"),
    ("4","8","1/4 sendok teh"),
    ("4","19","1 sendok makan"),
    ("4","43","1 sendok teh"),
    ("4","17","200gr"),
    ("5","8","2 sendok teh"),
    ("5","1","140ml"),
    ("5","29","500ml"),
    ("5","30","500gr"),
    ("5","31","100gr"),
    ("5","32","3 siung"),
    ("5","33","6 butir"),
    ("5","34","2 buah"),
    ("5","35","2 sendok teh"),
    ("5","8","1 sendok teh"),
    ("5","13","1/2 sendok teh"),
    ("5","37","1 batang"),
    ("5","38","2 butir"),
    ("5","39","50gr"),
    ("5","40","50gr"),
    ("6","44","2 buah"),
    ("6","45","6 butir"),
    ("6","46","6 buah"),
    ("6","13","200gr"),
    ("6","8","1/2 sendok teh"),
    ("6","24","350gr"),
    ("6","22","50gr"),
    ("6","23","2 butir"),
    ("6","47","50gr"),
    ("6","18","50gr"),
    ("6","17","375gr"),
    ("6","48","90gr"),
    ("6","49","1/2 sendok teh"),
    ("7","50","75gr"),
    ("7","13","115gr"),
    ("7","8","3/4 sendok teh"),
    ("7","6","1 lembar"),
    ("7","9","200ml"),
    ("7","51","250gr"),
    ("7","52","50gr"),
    ("7","1","120ml"),
    ("7","53","75gr"),
    ("7","54","800ml"),
    ("8","17","250gr"),
    ("8","13","200gr"),
    ("8","56","1 sendok teh"),
    ("8","38","4 butir"),
    ("8","9","300ml"),
    ("8","19","3 sendok makan"),
    ("9","12","175gr"),
    ("9","55","25gr"),
    ("9","17","50gr"),
    ("9","13","2 sendok makan"),
    ("9","8","2 sendok teh"),
    ("9","9","525ml"),
    ("10","17","500gr"),
    ("10","18","60gr"),
    ("10","19","500gr"),
    ("10","20","250gr"),
    ("10","21","4 butir"),
    ("10","22","400gr");

-- Create food Table

CREATE TABLE food (
   id INT AUTO_INCREMENT,
   name varchar(50) NOT NULL,
   alt_name varchar(100) NOT NULL,
   image text,
   description text,
   origin varchar (50) NOT NULL,
   recipe_id INT NOT NULL,
   PRIMARY KEY (id),
   index (recipe_id),
   FOREIGN KEY (recipe_id) REFERENCES recipe(id)
);

-- Populate food Table

    INSERT INTO food (name, alt_name, image, description, origin, recipe_id) VALUES
    ("Klepon", "Onde-Onde", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Klepon.jpg", "Klepon merupakan jajanan tradisional Indonesia yang umumnya terbuat dari tepung ketan putih yang dibentuk seperti bola-bola kecil dengan isi gula merah dan ditaburi parutan kelapa", "Pulau Jawa", "1"),
    ("Kue Lapis Sagu", "Kue Pepe", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Lapis_sagu.jpg", "Kue pepe adalah kue tradisional Betawi dengan penampilan cantik berlapis-lapis aneka warna yang tembus pandang atau jernih. Biasanya terdiri dari warna putih, kehijauan, hijau tua, dan diakhiri merah tua, atau putih, kecoklatan, ditutup coklat tua pada lapisan teratas.", "Betawi", "2"),
    ("Lapis Legit", "[Spikuk, Spekkoek]", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Lapis_legit.jpg", "Lapis legit terdiri dari dua lapisan warna yang saling bertumpuk satu sama lain, kuning keemasan dan cokelat", "Belanda", "3"),
    ("Martabak Manis", "[Kue Bandung, Terang Bulan, Martabak Bangka]", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Martabak_manis.jpg", "Martabak manis merupakan suatu jenis kue dadar berupa adonan tepung terigu berasa manis yang dipanggang, diberi topping, dan dilipat", "Pulau Bangka", "4"),
    ("Martabak Asin", "[Muttabak, Matabbak, Metabbak, Mutabbaq]", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Martabak_telor.jpg", "Martabak telur merupakan panganan dengan rasa gurih. Sayur, daging, dan berbagai bumbu lainnya digabung menjadi satu dalam sebuah kulit adonan padat yang ditipiskan secukupnya, kemudian dilipat, kemudian digoreng hingga matang.", "India", "5"),
    ("Nastar", "-", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Nastar.jpg", "Kue Nastar umumnya berbentuk bulat dengan isian selain nanas.", "Belanda", "6"),
    ("Onde-Onde", "[Jian Dui, Kuih Bom]", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Onde.jpg", "Onde Onde merupakan makanan tradisional ini berbentuk bulat dengan taburan wijen di permukaannya. Di dalam bulatan terdapat isian kacang hijau yang rasanya manis.", "Tiongkok", "7"),
    ("Pukis", "-", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Pukis.jpg", "Kue pukis atau hanya disebut pukis adalah kue atau makanan ringan tradisional Indonesia yang terbuat dari adonan berbahan dasar tepung terigu dan dimasak dalam wajan cetakan khusus.", "Jawa Tengah", "8"), 
    ("Serabi", "[Surabi, Sorabi]", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Serabi.jpg", "surabi merupakan jajanan tradisional Kota Bandung yang sudah ada sejak dulu. Dengan berbahan dasar tepung beras, tepung terigu dan santan kelapa. Di masak menggunakan tungku sehingga menghasilkan rasa dan aroma yang khas", "Jawa Barat", "9"),
    ("Kue Putri Salju", "Vanillekipferl", "https://storage.googleapis.com/traditiona-food-images/Image%20of%20Food/Kue_putri_salju.jpg", "Kue putri salju adalah sejenis kue kering yang berbentuk bulan sabit dan di atasnya diselimuti dengan gula halus seperti salju.", "Austria", "10");
