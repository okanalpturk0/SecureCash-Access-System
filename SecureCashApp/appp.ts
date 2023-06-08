class Employee
{
    name: string;
}
//-----------Extand classes------------------------
class SecureEmployee extends Employee
{
    name: string;
}

class OperationsEmployee extends Employee
{
    name: string;
}

class Manager extends  Employee
{
    name: string;
}

class TransactionEmployees extends  Employee
{
    name: string;
}

class Janitors extends  Employee
{
    name: string;
}

//-----------Implementation of Cards , Implementation of Zones ------------------------
class Cards{
   
    CardNumber : number;
    name: string;
    static card = new Cards();
}

class SecureCard extends Cards implements SecureEmployee,SecureZone,OperationsZone,TransactionZone,OutsideZone
{
    door0_access: boolean;
    door1_access: boolean;
    door2_access: boolean;
    door3_access: boolean;
    door4_access: boolean;
    door5_access: boolean;
    
    MaximumCapacity3: number = 7 ;
    MaximumCapacity2: number = 5 ;
    MaximumCapacity1: number = 2 ;
}


class ManagerCard extends Cards implements Manager,SecureZone,OperationsZone,TransactionZone,OutsideZone
{
    door0_access: boolean = true;
    door1_access: boolean = true;
    door2_access: boolean = true;
    door3_access: boolean = true;
    door4_access: boolean = true;
    door5_access: boolean = true;
}

class TransactionCard extends Cards implements TransactionEmployees,TransactionZone,OutsideZone
{
    door0_access: boolean = true;
    door1_access: boolean = true;
}

class OperationsCard extends Cards implements OperationsEmployee,OperationsZone,TransactionZone,OutsideZone
{
    door0_access: boolean = true;
    door1_access: boolean = true;
    door2_access: boolean = true;
    door3_access: boolean = true;
}

class JanitorCard extends Cards implements Janitors,SecureZone,OperationsZone,TransactionZone,OutsideZone
{
    door0_access: boolean = true;
    door1_access: boolean = true;
    door2_access: boolean = true;
    door3_access: boolean = true;
    door4_access: boolean = true;
    door5_access: boolean = true;    
}

//-----------Implementation of Doors ------------------------
class SecureZone implements Door0,Door1,Door2,Door3,Door4,Door5
{
    door0_access: boolean;
    door1_access: boolean;
    door2_access: boolean;
    door3_access: boolean;
    door4_access: boolean;
    door5_access: boolean;
    static MaximumCapacity1 : number = 2 ;
}

class OperationsZone implements Door0,Door1,Door2,Door3
{ 
    door0_access: boolean;
    door1_access: boolean;
    door2_access: boolean;
    door3_access: boolean;
    static MaximumCapacity2 : number = 5 ;   
}

class TransactionZone implements Door0,Door1
{
    door0_access: boolean;
    door1_access: boolean;
    static MaximumCapacity3 : number =7;   
}

class  OutsideZone
{   }

class Door0 {door0_access : boolean; }
class Door1 {door1_access : boolean; }
class Door2 {door2_access : boolean; }
class Door3 {door3_access : boolean; }
class Door4 {door4_access : boolean; }
class Door5 {door5_access : boolean; }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let permit : boolean;
//-----------The code adding a card to a zone------------------------
const cards_array: Cards[] = [];

const names: string[] = ["Ivan","Seth","Debra","Gilbert","Vera","Lucy","Janet","Ramon", "Tracey", "Lewis"];
let numbers: number[] = [22,123,107,186,230,412,254,665,725,1032];
for(let i=0 ; i<10 ; i++)
{
    cards_array[i] = new Cards;
    cards_array[i].CardNumber=numbers[i];
    cards_array[i].name = names[i];
}

function login(idtext :string, name : string)
{   
    let status: boolean=false;
    let id :number =parseInt(idtext);
    try {
        for(let j=0; cards_array.length ; j++)
        {
          if(name==cards_array[j].name && id == cards_array[j].CardNumber)
          {
              switch (true) 
              {
                  case ((id >= 1) && (id <= 100)):
                      employe = new ManagerCard;
                      employe.name=name;
                      employe.CardNumber=id;
                      break;
                  case ((id > 100) && (id <= 200)):
                      employe = new SecureCard;
                      employe.name=name;
                      employe.CardNumber=id;
                      break;
                  case ((id >200) && (id <= 500)):
                      employe = new OperationsCard;
                      employe.name=name;
                      employe.CardNumber=id;
                      break;
                  case ((id >500) && (id <= 999)):
                      employe = new TransactionCard;
                      employe.name=name;
                      employe.CardNumber=id;
                      break;           
                  case ((id >=1000)):
                      employe = new JanitorCard;
                      employe.name=name;
                      employe.CardNumber=id;
                      break;   
                  default:
                      break;
              } 
              Cards.card.CardNumber=employe.CardNumber;
              Cards.card.name=employe.name;
              alert("Succesful Login!");
              console.log("id :"+id +"\n"+"name : "+name);
              status=true;   
              break;
          } 
        }
    } catch (error) {
        if(!status)
        {
            alert("Access Denied!");
        }    
    } 
}

let PeopleInSecure: number = 0;
let PeopleInOperation: number = 0;
let PeopleInTransaction: number = 0;

//...............TRANSACTION ZONE..............................................................................
function Door_0and2() {
  if(PeopleInTransaction<TransactionZone.MaximumCapacity3 && Cards.card.CardNumber<1000 )
    {
        PeopleInTransaction+=1;
        console.log("Number of People in Transaction Zone :"+PeopleInTransaction);
        alert("Door 0/2 has opened!");
    }
    //----if its janitor;....
     else if(Cards.card.CardNumber>=1000 && PeopleInTransaction!=0)
    {  
        //---- Succesfull Access for Janitors.....
        PeopleInTransaction+=1;
        alert("Door 0/2 has opened for Janitor!");
        console.log("Number of People in Transaction Zone :"+PeopleInTransaction);
    }
    else
    {
        alert("Access Denied! The reason can be ;"+"\n"+"1. Maximum capacity reached!"+"\n"+"2. There isn't any person in Transaction Zone for Janitors."+"\n"+"3. The card does not have sufficient privileges to access the requirest zone!");
    }
}

//...............OPERATION ZONE..............................................................................
function Door_3and4() {
    if(Cards.card.CardNumber>=100 && Cards.card.CardNumber<=500 && PeopleInOperation < OperationsZone.MaximumCapacity2 )
    { 
        PeopleInOperation+=1;
        console.log("Number of People in Operation Zone :"+PeopleInOperation);
         alert("Door 3/4 has opened!");
    } 
    //----if its janitor;....
    else if(Cards.card.CardNumber>=1000 && PeopleInOperation!=0 )
    {   
        //---- Succesfull Access for Janitors.....
        PeopleInOperation+=1;
        alert("Door 3/4 has opened for Janitor!");
        console.log("Number of People in Operation Zone :"+PeopleInOperation);
        
    }
    else if(Cards.card.CardNumber<100)
    {   
        //---- Succesfull Access for Managers.....
        PeopleInOperation+=1;
        alert("Door 3/4 has opened!");
        console.log("Number of People in Operation Zone :"+PeopleInOperation);
    }
    else
    {
        alert("Access Denied! The reason can be ;"+"\n"+"1. Maximum capacity reached!"+"\n"+"2. There isn't any person in Operation Zone for Janitors."+"\n"+"3. The card does not have sufficient privileges to access the requirest zone!");
    }
  }

  //...............SECURE ZONE..............................................................................
  function Door_5() {
    if(Cards.card.CardNumber>=100 && Cards.card.CardNumber<200 && PeopleInSecure<SecureZone.MaximumCapacity1 )
    {
        PeopleInSecure+=1;
        console.log("Number of People in Secure Zone :"+PeopleInSecure);
        alert("Door 5 has opened!");
    }
    //----if its janitor;....
    else if(Cards.card.CardNumber>=1000 && PeopleInSecure!=0)
    {
        //---- Succesfull Access for Janitors.....
        PeopleInSecure+=1;
        alert("Door 5 has opened for Janitor!");

    }
    else if(Cards.card.CardNumber<100)
    {   
        //---- Succesfull Access for Managers.....
        PeopleInSecure+=1;
        alert("Door 5 has opened!");
        console.log("Number of People in Secure Zone :"+PeopleInSecure);
    }
    else
    {
        alert("Access Denied! The reason can be ;"+"\n"+"1. Maximum capacity reached!"+"\n"+"2. There isn't any person in Secure Zone for Janitors."+"\n"+"3. The card does not have sufficient privileges to access the requirest zone!");
    }   
  }
let  employe : Cards = new Cards; 
///////////////////////////-------------TESTER CLASS--------------///////////////////////////
class TesterClass
{
     NumberSimulator = (min: number , max: number): number => {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }    
}
const obj = new TesterClass;
let RandomNumbers: number[] = [];
let RandomCardNumber;
for(let i = 0 ; i<10 ; i++)
{
    RandomCardNumber = obj.NumberSimulator(1,1200);
    RandomNumbers[i] = RandomCardNumber;
}

function ShowEmployees(){
for(let i = 0 ; i<RandomNumbers.length ; i++)
{
    if(RandomNumbers[i]<100)
    {
        employe = new ManagerCard;
        employe.CardNumber=RandomNumbers[i];
        console.log("Random Employee is created!"+"\n"+"Card Number: "+RandomNumbers[i] + "  Type : Manager Card")
    }
    else if(RandomNumbers[i]<201 && RandomNumbers[i]>100)
    {
        employe = new SecureCard;
        employe.CardNumber=RandomNumbers[i];
        console.log("Random Employee is created!"+"\n"+"Card Number: "+RandomNumbers[i] + "  Type : Secure Card")

    }
    else if(RandomNumbers[i]<500 && RandomNumbers[i]>200)
    {
        employe = new OperationsCard;
        employe.CardNumber=RandomNumbers[i];
        console.log("Random Employee is created!"+"\n"+"Card Number: "+RandomNumbers[i] + "  Type : Operation Card")

    }
    else if(RandomNumbers[i]<1000 && RandomNumbers[i]>500)
    {
        employe = new TransactionCard;
        employe.CardNumber=RandomNumbers[i];
        console.log("Random Employee is created!"+"\n"+"Card Number: "+RandomNumbers[i] + "  Type : Transaction Card")

    }
    else
    {
        employe = new JanitorCard;
        employe.CardNumber=RandomNumbers[i];
        console.log("Random Employee is created!"+"\n"+"Card Number: "+RandomNumbers[i] + "  Type : Janitor Card")

    }
    Cards.card.CardNumber=employe.CardNumber;
}   
}
function Simulate(){ 
    let randEmployee: number = obj.NumberSimulator(0,9);
    console.log(RandomNumbers[randEmployee]);
    Cards.card.CardNumber=RandomNumbers[randEmployee];

    let randCase: number = obj.NumberSimulator(0,2);
    switch (randCase) {
        case 0:            
            alert("Attempted to login to Transaction Zone!");
            Door_0and2();
            break;
        case 1:          
            alert("Attempted to login to Operation Zone!");
            Door_3and4();
            break;
        case 2:
            alert("Attempted to login to Secure Zone!");
            Door_5();
            break;
        default:
            break;
    }
}
