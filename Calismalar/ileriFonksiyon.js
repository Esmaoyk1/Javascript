function SelamFonksiyonu(){
    console.log("Selammm");
}

SelamFonksiyonu();



//Arrow Function
var SelamFonksiyonu2 = () => console.log("Merhaba");
SelamFonksiyonu2(); 


var Topla = (a,b) =>{return a+ b} 
var t = Topla(5,2);
console.log(t);