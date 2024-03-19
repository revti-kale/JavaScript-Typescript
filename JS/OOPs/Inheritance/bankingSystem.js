class account{
    constructor(accNum,accHolder,balance){
        this.accNum=accNum;
        this.accHolder=accHolder;
        this.balance=balance;
    }
    deposite(amoumt){
        this.balance += amoumt;
        console.log(`deposited amount is ${amoumt} and current balance is ${this.balance}`)
    }
    withdraw(amount){
        this.balance -= amount;
        console.log(`withdrawn amount is ${amount} and available balance is ${this.balance}`)
    }
} 
class savingAccount extends account{
constructor(accNum,interstRate,accHolder,balance){
    super(accNum,accHolder,balance)
    this.interstRate=interstRate;
}
withdraw(amount){
super.withdraw(amount)
}
}

let acc = new savingAccount(123,2,"revti",5000);
acc.deposite(5000);
acc.withdraw(2000);
