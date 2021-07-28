function oblicz(x , y){

//dodawanie
if((x + y) < 0)  {
    console.log('Wynik jest nieprawidłowy');
}
else{
console.log(`Wynik dodawania wynosi ${x+y}`);
}

//odejmowanie
if((x - y) < 0){
    console.log('Wynik jest nieprawidłowy');
}
else{
    console.log(`Wynik odejmowania wynosi ${x-y}`); 
}

//mnożenie
if((x * y) < 0){
    console.log('Wynik jest nieprawidłowy');
}
else{
   console.log(`Wynik mnożenia wynosi ${x*y}`);
}

}

oblicz(2,11);