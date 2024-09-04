class Personel{
    
    constructor(ad,soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }

    kaydet(){
        console.log("Personel Kaydedildi");
    }
}

const nesne = new Personel("Esmanur", "OYANIK");
console.log(nesne.ad);
nesne.kaydet();