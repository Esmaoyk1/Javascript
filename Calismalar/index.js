var kullanicilar=[
    {email:"esma@gmail.com",sifre:"12345"},
    {email:"ada@gmail.com", sifre:"67890"}
]


var tivitler=[
    {email:"esma@gmail.com",tivit: "Bugun hava çok guzel"},
    {email:"esma@gmail.com",tivit: "Bugun hava çok guzel 2"},
    {email:"ada@gmail.com",tivit: "Okula gideceğim!"},
    {email:"ada@gmail.com",tivit: "Okula gideceğim! 2"}

]


var email = prompt("email?")
var sifre  = prompt("sifre")

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)||
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
        console.log(tivitler);
    }else{
        console.log("Kullanıcı adı veya şifresi hatalı")
    }

}


giris()