class Customer{
    id;
    name;
    account;
    constructor(id,name,account)
    {
    this.id=id;
    this.name=name;
    this.account=account;
    }
toString()
{
    let text=this.id+" "+this.name+" "+this.account;
    return text;
}
}
class Account{
    balance;
    constructor(balance)
    {
        this.balance=balance;
    }
    toString()
    {
        let text=this.balance;
        return text;
    }
}
class PrimeAccount extends Account{
    supercoins;
    constructor(balance,supercoins)
    {
        super(balance);
        this.supercoins=supercoins;
    }
    toString()
    {
        let text=this.balance+" "+this.supercoins;
        return text;
    }
}
let account1=new Account(1000);
let account2=new Account(5000);
let primeaccount1=new PrimeAccount(1000,100);
let primeaccount2=new PrimeAccount(5000,500);
let customer1=new Customer(1,"Sahitya",account1);
let customer2=new Customer(2,"Saisri",account2);
let customer3=new Customer(3,"Sahi",primeaccount1);
let customer4=new Customer(4,"Sweety",primeaccount2);
let customers=[customer1,customer2,customer3,customer4];
for(let i=0;i<customers.length;i++)
{
    console.log(customers[i].toString());
}


