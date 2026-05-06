//type guard
//in typeof
type Alphaeumeric=number|string;


const add=(n1:Alphaeumeric,n2:Alphaeumeric)=>{
    if(typeof n1==='number' && typeof n2==='number'){
 return n1+n2;
    }
    else{
       return n1.toString()+n2.toString();
    }
}
const result=add(9,'4');
console.log(result);

// in guard
type NormalUser={
    name:string;
};
type AdminUser={
    name:string;
    role:'Admin'
}

const getUserInfo=(user:NormalUser|AdminUser)=>{
    if('role'in user)
    console.log(`This ${user.name} and his role is ${user.role}`);
else{
    console.log(`This ${user.name} and his`);

}
}

getUserInfo({name:'normal'})