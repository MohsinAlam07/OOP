// oop:instance of  type gurard narrowing 

class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    getSleep(n:number){
        console.log(`sleeping from yearterday ${n}`)
    }
    
}

class Student1 extends Person{
    constructor(name:string){
        super(name);
    }

    doStudy(n:number){
        console.log(`${this.name} studying at night ${n}`);
    }

}

class Teacher11 extends Person{
    constructor(name:string){
        super(name);
    }
    TakeClass(NOfH:number){
        console.log(`{this.name} take class ${NOfH}`);
    }

}
// function guard
const isStudent=(user:Person)=>{
    return user instanceof Student1; //true
}
const isTeacher=(user:Person)=>{
    return user instanceof Teacher11;
}

const getUserInfo1=(user:Person)=>{
    if(isStudent(user)){
        user.doStudy(28);

    }
    else if(isTeacher(user)){
        user.TakeClass(90);
    }
    else{

    }

}
const student11=new Student1('Napa');
const teacher=new Teacher11('Mohsin');
getUserInfo1(student11); 