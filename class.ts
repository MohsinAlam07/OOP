// oop- class -object
// class Animal{
//     name:string;
//     species:string;
//     sound:string;
//     constructor(name:string,species:string,sound:string ){
//          this.name=name;
//          this.species=species;
//           this.sound=sound;

//     }
//     makeSound(){
//         console.log(`${ this.name} making sound ${this.sound}`);
//     }

// }
// parameter properties
class Animal{
    // public name:string;
    // public species:string;
    // public sound:string;
    constructor(public name:string,public species:string,public sound:string ){
        //  this.name=name;
        //  this.species=species;
        //   this.sound=sound;

    }
    makeSound(){
        console.log(`${ this.name} making sound ${this.sound}`);
    }

}
const dog=new Animal('Dogesh','dog','ghew ghew');
const cat=new Animal('Pussy','parsian','meow meow');
console.log(dog.name);
// console.log(cat.makeSound());
cat.makeSound();
