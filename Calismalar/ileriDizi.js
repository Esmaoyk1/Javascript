//Map

const dizi = [1,2,3,4,5];
const mapDizi = dizi.map(sayi=>sayi*3)


mapDizi.forEach(number => console.log(number));

//Filter
const filtreliDizi = dizi.filter(sayi=> sayi>2);
console.log(filtreliDizi);



//reduce
const toplam = dizi.reduce((acc, sayi) => {
    return acc + sayi;
}, 0); 

console.log(toplam); 

