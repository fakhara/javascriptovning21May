//Del 2. klasser
class Animal{
    constructor(sound){
        this.sound = sound;
    }
    saySomething(){
        console.log(this.sound);
    }
}
const myAnimal = new Animal("Woof woof!");
myAnimal.saySomething();