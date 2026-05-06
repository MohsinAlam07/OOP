// access >>modify
class BankAccount{
     readonly userId:number;
    public userName:string;
   protected userBalance:number;
    constructor(userId:number,userName:string,userBalance:number){
        this.userBalance=userBalance;
        this.userId=userId;
         this.userName=userName;
    }
// balance k set kortece
    // addBalance(balance:number){
    //     this.userBalance=this.userBalance+balance;
    // }
    // setter user below
set addBalance(amount:number){
    (this.userBalance=this.userBalance+amount);
}

    // getBalance(){
    //     return this.userBalance;

    // }

    // getter use for get balance
    get getBalance(){
       return  this.userBalance;
    }


}



const NapaAccount=new BankAccount(143,'Napa',100000);

// NapaAccount.addBalance(100000);
// console.log(NapaAccount);
//   console.log(NapaAccount.getBalance());
NapaAccount.addBalance=1000000000;
console.log(NapaAccount);