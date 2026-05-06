class Parent{
    name:string;
    age:number;
    address:string;
    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    getSleep(numberOfHours:number){
        console.log(`${this.name} is sleeping ${numberOfHours} long`);
    }

}
class Student extends Parent{
    
}

const student1=new Student('Napa',23,'khulna');
student1.getSleep(5);

// Another class
class Teacher extends Parent{
  
    designation:string;
    constructor(name:string,age:number,addres:string,designation:string){
       
       
        super(name,age,addres);
         this.designation=designation;
    }
  
     takeClass(NumberofHours:number){
        console.log(`${this.name} Sir,${NumberofHours} class ney`);

     }
}

const Teacher1=new Teacher('Napa',23,'khulna','Bangladeshi');
// student1.getSleep(5);
 Teacher1.takeClass(6);

 Teacher1.getSleep(5);