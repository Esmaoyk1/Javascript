var kullanicilar=[
    {email:"esma@gmail.com",sifre:"12345"},
    {email:"ada@gmail.com", sifre:"67890"},
    {email:"nur@gmail.com", sifre:"321"}
]


var tivitler=[
    {email:"esma@gmail.com",tivit: "Bugun hava çok guzel"},
    {email:"esma@gmail.com",tivit: "Bugun hava çok guzel 2"},
    {email:"ada@gmail.com",tivit: "Okula gideceğim!"},
    {email:"ada@gmail.com",tivit: "Okula gideceğim! 2"}

]


var email = prompt("email?")
var sifre  = prompt("sifre")


function kullaniciVarMi(email,sifre){
    for(i=0; i<kullanicilar.length; i++){
        if(kullanicilar[i].email == email && kullanicilar[i],sifre == sifre){
            return true;
        }
        return false;
    }
}


function giris(){
    if(kullaniciVarMi(email , sifre)){
        console.log(tivitler);
    }else{
        console.log("Kullanıcı adı veya şifresi hatalı")
    }

}


giris()

