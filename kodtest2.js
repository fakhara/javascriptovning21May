//Del 4 Typiska kodtestsövningar. sortera en array.
const numbers = [5,10,2,18,19,22,30,1];
console.log(numbers.sort(function(a,b){
    return b-a;
}));