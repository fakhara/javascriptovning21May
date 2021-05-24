//fre 21 maj javascript
//Del 1 Funktioner
//tar in två argument och adderar dem. Returnera resultatet. 

function add(a,b){
    const resultAdd = a+b;
    console.log(resultAdd);
    return resultAdd;
}
add(9,3);

// tar in två argument och subtraherar dem. Returnera resultatet.
function subtract(a,b){
    const resultSub = a-b;
    console.log(resultSub);
    return resultSub;
}
subtract(8,6);

//tar in två argument och multiplicerar dem. Returnera reultatet. 
function multiply(a,b){
    const resultMul = a*b;
    console.log(resultMul);
    return resultMul;
}
multiply(4,5);

// Skriv en funktion som heter “A” som tar in ett argument som vi kallar “B”.
//kalla på “B” inuti A funktionen.
//Definiera sedan B funktionen under A funktionen.
//printa ut i consolen i B funktionen “Hello world”.
function A(B){
    B();
}
function B(){
    console.log("Hello world!");
}
A(B);