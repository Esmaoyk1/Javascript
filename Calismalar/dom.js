//document.getElementById("bio").innerHTML = "Esmanur OYANIK : 15.03.2003"


var intro1 = document.getElementById("intro1");
var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML ; 



// Tüm <ul> etiketlerini seç
var tumListeler = document.getElementsByTagName("ul");

// İlk <ul> etiketini seç
var sehirler = tumListeler[0];

// Bu <ul> içindeki tüm <li> etiketlerini seç
var tumElemanlar = sehirler.getElementsByTagName("li");

// Tüm <li> etiketlerini döngü ile gez
for (let i = 0; i < tumElemanlar.length; i++) {
    alert(tumElemanlar[i].innerHTML);
}



var classElemanlari = document.getElementsByClassName("intro1");
alert(classElemanlari[0].innerHTML);


var queryElemanlari = document.querySelectorAll("p.intro1");
alert(queryElemanlari.length);
8
var isim = document.getElementsByName("MusteriAdi");
alert(isim[0].value);


var ada = document.getElementById("ada").addEventListener("click", RengiDegisitir);
function RengiDegisitir(){
    document.getElementById("div1").style.backgroundColor = "pink";
}




var baslik = document.createElement("h2");
var node = document.createTextNode("hello world");
baslik.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2);

alert("P2 siliniyor");
div1.removeChild(p2);



// yerine koyma

var p1 = document.getElementById("p1");
div1.replaceChild(baslik,p1);