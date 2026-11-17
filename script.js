
var yazi = 20;   


function listele(filtre) {
  var html = "";
  for (var i = 0; i < masallar.length; i++) {
    if (masallar[i][0].toLowerCase().indexOf(filtre.toLowerCase()) >= 0) {
      html += '<div class="kart" onclick="ac(' + i + ')">' +
              '<img src="photo/' + (i + 1) + '.jpg" alt="">' +
              '<h3>' + masallar[i][0] + '</h3></div>';
    }
  }
  document.getElementById("liste").innerHTML = html;
}

function ac(i) {
  var paragraflar = masallar[i][1].split("\n");
  var html = '<img src="photo/' + (i + 1) + '.jpg" alt=""><h2>' + masallar[i][0] + '</h2>';
  for (var j = 0; j < paragraflar.length; j++) {
    html += "<p>" + paragraflar[j] + "</p>";
  }
  document.getElementById("metin").innerHTML = html;
  document.getElementById("oku").style.display = "block";
  document.getElementById("oku").scrollTop = 0;
}

function kapat() {
  document.getElementById("oku").style.display = "none";
}

 function boyut(d) {
  yazi = yazi + d;
if(yazi <14)yazi=14;
if(yazi <32)yazi=32;
  document.getElementById("metin").style.fontSize = yazi + "px";
}


function gece() {
  document.body.classList.toggle("gece");}

document.getElementById("ara").oninput = function () {
  listele(this.value);
};


var masallar = [
["Üç Ayı Masalı", `Evvel zaman içinde küçük bir kız varmış. Bu kız bir gün evden uzaklaşıp ormanda yürüyüşe çıkmış.
Ormanda yürürken çiçekler toplamış, kelebekleri kovalamış ve sonunda yolu kaybetmiş.
Yorgun ve bitkin halde yürümeye devam ederken ormanın ortasında sevimli bir kulübe görmüş. Kız kapıyı çalıp içeri bakmış, ama evde kimse yokmuş. Meğer bu kulübe üç ayıya aitmiş: büyük baba ayı, orta boy anne ayı ve küçük bebek ayı. Ayılar o sırada kahvaltıları soğusun diye ormanda yürüyüşe çıkmışlar.
Aç ve meraklı olan küçük kız içeri girmiş. Masanın üzerinde üç kase çorba duruyormuş. Önce en büyük kaseden çorba içmiş: "Bu çorba çok sıcak!" demiş. Sonra orta boy kaseden içmiş: "Bu da çok soğuk!" demiş. En son küçük bebek ayının kasesinden içmiş: "Ah, bu tam kıvamında!" demiş ve hepsini bitirivermiş.
Karnını doyuran küçük kız yorulmuş ve dinlenmek istemiş. Oturma odasında üç sandalye görmüş: En büyük sandalyeye oturmuş: "Bu çok sert!" demiş. Orta boy sandalyeye oturmuş: "Bu da çok yüksek!" demiş. Küçük bebek ayının sandalyesine oturmuş: "Bu tam bana göre!" demiş, ama o kadar hızlı oturmuş ki sandalye kırılıp yere düşmüş.
Küçük kız artık uykusu geldiği için yatak odasına çıkmış. Orada da üç yatak varmış: En büyük yatak ona çok büyük gelmiş. Orta boy yatak da rahat gelmemiş. Küçük bebek ayının yatağı ise o kadar rahatmış ki kız hemen kıvrılıp derin bir uykuya dalmış.
Bir süre sonra üç ayı eve geri dönmüş. Masaya ve eşyalarına bakan ayılar şaşkına dönmüşler: — Kaseme kim baktı? — Sandalyemi kim kırdı? — Ve yatağımda kim uyuyor?! — diye bağırmış bebek ayı tiz sesiyle.
O sırada küçük kız uyanmış. Karşısında üç büyük ayıyı görünce korkudan ne yapacağını bilememiş. Hızla yataktan fırlamış, açık pencereden dışarı atlamış ve arkasına bile bakmadan ormandan koşa koşa kaçıp evine, ailesinin yanına dönmüş. Bir daha da izinsiz ormana ve yabancı evlere gitmemiş.`],
["Koşçey Ölümsüz Masalı", `Evvel zaman içinde, kalbur saman içinde, uzak bir krallıkta yakışıklı ve cesur bir prens yaşarmış. Bu prensin güzel nişanlısı, kötü kalpli ve karanlıkların efendisi olan Koşçey Ölümsüz (Koşçey Bessmertnıy) tarafından kaçırılmış.
Koşçey’e neden "Ölümsüz" deniyormuş biliyor musunuz? Çünkü onun canı bedeninde değilmiş; canı çok uzaklarda, gizli bir yerde saklıymış. Canını bulmak imkansıza yakınmış: Uzak bir adada büyük bir meşe ağacı varmış, ağacın köklerinde bir sandık, sandığın içinde bir tavşan, tavşanın içinde bir ördek, ördeğin içinde bir yumurta, yumurtanın içinde ise Koşçey’in hayatını saklayan küçük bir iğne varmış!
Cesur prens, nişanlısını kurtarmak için yola koyulmuş. Günlerce, gecelerce yürümüş, dağları aşmış, ormanları geçmiş. Yol boyunca karşılaştığı kurt, ayı ve koca bir kartal gibi vahşi hayvanlara zarar vermemiş, aksine onları doyurmuş ve onlara yardım etmiş. Hayvanlar da prensin bu iyiliğini unutmamışlar.
Sonunda prens, Koşçey’in şatosuna varmış ve onunla yüzleşmiş. Koşçey kahkaha atarak bağırmış: — Beni asla yenemezsin, prens! Benim ölümüm senden çok uzakta!
Tam o sırada, prensin yolda yardım ettiği orman hayvanları yardıma koşmuş. Kurt adaya koşup meşe ağacını kazmış, sandığı çıkarmış. Tavşan hemen oradan kaçan ördeği yakalamış. Ördeğin karnından çıkan yumurtayı da gökyüzünden süzülerek gelen kartal yakalayıp denizin dibinden yukarıya, prensin ellerine bırakmış.
Prens hemen yumurtayı kırıp içindeki iğneyi bulmuş. Prens, iğnenin ucunu tam kıracağı sırada Koşçey acıyla bağırmış ve yere yığılmış. Çünkü iğne kırıldığında, kötü kalpli Koşçey Ölümsüz de yok olup gitmiş! Şatonun büyüleri bozulmuş, zindanların kapıları açılmış. Prens, güzel nişanlısına kavuşmuş ve birlikte mutlu yaşamışlar.`],
["Baba Yaga Masalı", `Evvel zaman içinde, kalbur saman içinde, derin ve karanlık bir ormanda korkunç bir cadı yaşarmış. Bu cadının adı Baba Yaga'ymış. Baba Yaga normal bir evde oturmazmış; evi tavuk ayakları üzerinde duran garip bir kulübeymiş. Kulübe ne zaman istese etrafında döner, ormana arkasını, gelen misafire ise önünü dönermiş.
Baba Yaga sıradan bir süpürgeye de binmezmiş; o, uçan büyük bir tahta havanla gezer, elindeki tokmakla yön verir, arkasından da süpürgeyle izini sildirerek ormanın üzerinde uçarmış. Çocukları hiç sevmez, onları yakalayıp dev fırınında pişirirmiş diye anlatılırmış masallarda.
Bir gün köyden küçük bir kız, kaybolan sevimli köpeğini aramak için bu karanlık ormana girmiş. Yürüye yürüye sonunda Baba Yaga’nın tavuk ayaklı kulübesine varıp ulaşmış. Kız kapıyı çalıp seslenmiş: — Kulübe, kulübe! Lütfen kapını bana aç, çok yoruldum!
Kulübe gıcırdayarak dönmüş ve kapısını açmış. İçeri giren küçük kız karşısında korkunç cadı Baba Yaga’yı bulmuş. Baba Yaga büyük burnu ve cadı sırıtışıyla hemen bağırmış: — Ff, fıh! Rus kokusu aldım! Burada kim var?! Seni yiyeceğim!
Zeki ve cesur kız hiç korkmamış, aksine tatlı bir dille cevap vermiş: — Ah, büyükanne Baba Yaga, önce bana bir bardak su ver, yemeğini yedir de sonra ne yapacaksan yap!
Baba Yaga, uzun zamandır kendisine böyle kibar davranılmadığı için şaşırmış. Kızın karnını doyurmuş, ona kaleyi koruması için ipuçları vermiş ve tehlikelerden kaçması için sihirli bir tarakla bir havlu armağan etmiş.
Kız teşekkür edip hızla ormandan kaçmaya başlamış. Baba Yaga arkasından onu yakalamak için havanda uçarak gelmiş, ama kız arkasına attığı sihirli taraktan devasa bir orman çıkmış, havludan ise coşkulu bir nehir akmış. Baba Yaga bunları geçememiş ve geri dönmek zorunda kalmış. Küçük kız ise köpeğini bulup sağ salim evine, ailesinin yanına dönmüş.`],
["Şalgam Masalı", `Bir gün büyükbaba bir şalgam ekmiş. Şalgam büyümüş, büyümüş ve devasa bir boyuta ulaşmış. Büyükbaba şalgamı topraktan çekmek için tarlaya gitmiş. Çekmiş, çekmiş ama şalgamı yerinden oynatamamış.
Büyükbaba büyükanneyi yardıma çağırmış. Büyükbaba şalgamdan tutmuş, büyükanne büyükbabadan tutmuş. Çekmişler, çekmişler ama yine de şalgamı çıkaramamışlar.
Büyükanne torunu yardıma çağırmış. Büyükbaba şalgamdan tutmuş, büyükanne büyükbabadan tutmuş, torun büyükanneden tutmuş. Çekmişler, çekmişler ama şalgam yerinden kıpırdamamış.
Torun köpeği (Karabaş'ı) yardıma çağırmış. Büyükbaba şalgamdan, büyükanne büyükbabadan, torun büyükanneden, köpek de torundan tutmuş. Çekmişler, çekmişler ama yine de olmamış, şalgam çıkmamış.
Köpek kediyi yardıma çağırmış. Büyükbaba şalgamdan, büyükanne büyükbabadan, torun büyükanneden, köpek torundan, kedi de köpekten tutmuş. Çekmişler, çekmişler ama şalgam hâlâ yerindeymiş.
Sonunda kedi fareyi yardıma çağırmış. Büyükbaba şalgamdan, büyükanne büyükbabadan, torun büyükanneden, köpek torundan, kedi köpekten, fare de kediden tutmuş. Hep birlikte var güçleriyle çekmişler... ve nihayet dev şalgam yerinden çıkıvermiş!`],
["Kolobok (Yuvarlak Ekmek) Masalı", `Bir varmış, bir yokmuş. Evvel zaman içinde, kalbur saman içinde, yaşlı bir dede ile yaşlı bir nene yaşarmış. Bir gün dede neneye demiş ki: — Nene, bana canımın çektiği şu yuvarlak ekmekten pişiriver!
Nene ambarı süpürmüş, köşeyi bucağı kazımış, iki avuç un bulmuş. Unu ekşi krema ile yoğurmuş, yuvarlak bir ekmek yapmış, fırına verip pişirmiş. Pişince de soğuması için pencere kenarına koymuş.
Bizim Kolobok bir süre pencerede durmuş, sonra sıkılmış ve pencereden dışarı, oradaki banka, oradan da toprağa yuvarlanmış. Yuvarlana yuvarlana yola koyulmuş ve uzaklaşmış.
Ormanda yuvarlanırken karşısına Tavşan çıkmış: — Kolobok, Kolobok, seni yiyeceğim! Kolobok ise neşeyle şarkısını söylemeye başlamış:
"Ben fırından çıkarıldım,
Ekşi krema ile yoğuruldum,
Pencerede soğutuldum,
Dededen de kaçtım, neneden de kaçtım,
Senden mi kaçamayacağım!"
Ve hızla oradan yuvarlanıp uzaklaşmış. Yolda karşısına Kurt çıkmış, ona da aynı şarkıyı söyleyip kaçmış. Sonra Ayı çıkmış, ondan da yuvarlanarak uzaklaşmış.
Son olarak ormanın derinliklerinde kurnaz Tilki ile karşılaşmış. Tilki tatlı dille seslenmiş: — Merhaba, Kolobok! Ne kadar da güzel ve akıllısın! Kolobok övülmekten hoşlanarak durmuş ve şarkısını tilkiye de söylemeye başlamış.
Tilki duyamıyormuş gibi yapmış: — Ne güzel bir şarkı ama kulaklarım iyi duymuyor. Lütfen burnumun ucuna çık da şarkını bir de oradan söyle! Kolobok aptalca tilkinin burnunun ucuna zıplamış ve şarkısını tekrar söylemeye başlar başlamaz, kurnaz tilki onu hop diye yutup yemiş!`],
["Böwenjik Masalı", `Biri varmış, biri yokmuş; bir Böwenjik, bir Dalajyk, bir de Böwrejik varmış. Bu üçü dost olup birlikte gezmeye çıkmışlar. Yürürken önlerine sulu bir ark çıkmış. Bunlar bu arkın üzerinden zıplama oyunu oynamışlar ve zıplarken fazlasıyla yemek yemişler. İlk önce Böwenjik zıplamış, "pök" diye aşağı düşmüş. Ardından Dalajyk zıplamış. Onun ayağı suya değmiş. Böwrejik ise zıplamış ama "şulp" diye suyun içine düşmüş. Böwenjik bunların ikisini de lak-luk diye yutuvermiş.
Giderken Böwenjik'in önüne bir karga çıkmış. Böwenjik ona: – Kargacık, kargacık, seni yiyeyim mi? – demiş. Karga: – Beni yemek istersen, gagamla karnını yarırım! – demiş. O zaman Böwenjik tekerlemesini söyleyerek onu da lak-luk yutuvermiş:
"Tak-tak" ettim,
Dalak yedim.
"Pök-pök" ettim,
Böwrek yedim.
Seni yemez miyim be!
Giderken önüne eşekli yaşlı bir adam çıkmış. Dedecik tehdit etse de Böwenjik kargayı yediğini de tekerlemesine ekleyip onu da yutuvermiş. Ardından gösterişli deveyi, aşık oynayan 10 oğlanı, su taşıyan 40 kızı ve en sonunda bir kervanı tek tek yutmuş.
En son giderken yaşlı bir nenenin çadırının yanından geçmiş ve ona da: – Hey, yaşlı nene, ben seni yiyeceğim – demiş. Yaşlı nene akıllılık edip: – Vay, vay oğlum, yiyecek olsan da yersin, ama sen yorgun olmuşsun; biraz yatıp dinlen, ben sana bir yağlı çörek pişireyim! – demiş. Böwenjik buna inanıp yatmış ve uykuya dalmış. Yaşlı nene ise bıçağını ateşte kızdırıp keskinleştirdikten sonra Böwenjik'in karnını yarmış. Böwenjik "tark" diye yarılınca, yuttuklarının hepsi nene teşekkür ederek çıkıp gitmişler.`],
["Akpamyk (Türkmen Masalı)", `Biri varmış, biri yokmuş. Eskiden bir adamın yedi oğlu varmış. Hiç kız kardeşleri yokmuş. Anneleri hamile kalınca kardeşler ava gitmeden önce kapıya bebek asılmasını tembihlemişler. Ancak kötü kalpli bir kadın fesatlık edip bebek yerine ok ile yay asmış. Kardeşler de kız kardeşimiz olmadı sanıp Gök Dağ'ın mağarasına çekilmişler.
Yıllar sonra doğan kız büyüyüp Akpamyk olmuş. Kardeşlerinin varlığını öğrenince kökeyi (hamur topu) yuvarlayarak dağa, kardeşlerini bulmaya gitmiş. Mağarada gizlice yemek pişirip elbiseleri yıkamış. Sonunda en küçük kardeş parmağını kesip tuz basarak uyanık kalmış ve Akpamyk ile tanışmışlar.
Bir gün ateş söününce Akpamyk ak saçlı devden ateş istemiş. Dev eteğine kor koyarak evlerini takip etmiş ve her gün gelip kızın kanını emmiş. Kardeşleri devi öldürse de devin kellesi çoğalarak geri gelmiş ve yedi kardeşi öldürmüş. Akpamyk, efsanevi deve Akmaya'nın sütünü zorlukla elde edip kardeşlerini diriltmiş.
Kardeşlerin kıskanç eşleri Akpamyk'ın boğazına kurşun döküp onu dilsiz bırakmışlar. Deve üstünde kejebeyle çöle salınan kızı padişahın oğlu bulup evlenmiş. Yıllar sonra oğlu annesinin kulağına vurunca kurşunlar dökülmüş, Akpamyk tekrar konuşmaya başlamış. Aşık oynayan oğlunun tekerlemesi sayesinde ağabeyleri kardeşlerini bulmuş, kötü yengeler cezalandırılmış ve hepsi mutlu yaşamışlar.`],
["Ýartygulak (Yarım Kulak - Türkmen Masalı)", `Biri varmış, biri yokmuş. Eski zamanlarda dünyaya gelen ve boyu yarım kulak kadar olan zeki bir çocuk varmış. Adına Ýartygulak (Yarım Kulak) demişler.
Ýartygulak önce devenin kulağına girip hırsızları korkutmuş, sonra otun altına saklanıp deveye kendini yutturmuş. Deveyi kesen babasının attığı bağırsağın içindeyken bir kurt onu yemiş. Ýartygulak kurdun karnından çobanlara bağırarak kurdun hiç koyun yemesine izin vermemiş. Çaresiz kalan kurt tilkiye danışmış; tilkinin tavsiyesiyle bağa girdiğinde Ýartygulak yine bağ sahibine seslenip kurdun sonunu hazırlamış.
Ardından üzüm sepetine girip adamı "cin gördüm" diye korkutmuş. Eve gelen misafirlerin ve karı kocanın sakallarını birbirine bağlayarak büyük bir kargaşa çıkarmış. Cini kovmak isteyen mollanın sarığına ve boğazına girip mollayı da korkutmuş.
Zengin adamın nikahında gelinin önündeki kızları sopayla dürtüp kaçırmış, tüynükten (çadır tepesinden) bağırarak nikahı bozdurmuş. Porhan ve mollalar toplandığında gece herkesin sakal ve bıyıklarını traş edip birbirine ve gelin ile zenginin yüzüne yapıştırmış. Herkesi rezil ettikten sonra zenginden cinleri kovma karşılığı 15 koyun sözü almış. Tüm oyunları ortaya çıkarıp ailesine koyun sürüsü kazandıran Ýartygulak hileye yol vermeden muradına ermiş.`]
];

listele("");

