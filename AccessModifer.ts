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

    addBalance(balance:number){
        this.userBalance=this.userBalance+balance;
    }

}

class StudentBankAccount extends BankAccount{

}

const NapaAccount=new BankAccount(143,'Napa',100000);

NapaAccount.addBalance(100000);
console.log(NapaAccount);