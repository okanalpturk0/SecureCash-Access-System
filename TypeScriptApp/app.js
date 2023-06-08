var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
//-----------Extand classes------------------------
var SecureEmployee = /** @class */ (function (_super) {
    __extends(SecureEmployee, _super);
    function SecureEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SecureEmployee;
}(Employee));
var OperationsEmployee = /** @class */ (function (_super) {
    __extends(OperationsEmployee, _super);
    function OperationsEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OperationsEmployee;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Employee));
var TransactionEmployees = /** @class */ (function (_super) {
    __extends(TransactionEmployees, _super);
    function TransactionEmployees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TransactionEmployees;
}(Employee));
var Janitors = /** @class */ (function (_super) {
    __extends(Janitors, _super);
    function Janitors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Janitors;
}(Employee));
//-----------Implementation of Cards , Implementation of Zones ------------------------
var Cards = /** @class */ (function () {
    function Cards() {
    }
    Cards.card = new Cards();
    return Cards;
}());
var SecureCard = /** @class */ (function (_super) {
    __extends(SecureCard, _super);
    function SecureCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MaximumCapacity3 = 7;
        _this.MaximumCapacity2 = 5;
        _this.MaximumCapacity1 = 2;
        return _this;
    }
    return SecureCard;
}(Cards));
var ManagerCard = /** @class */ (function (_super) {
    __extends(ManagerCard, _super);
    function ManagerCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.door0_access = true;
        _this.door1_access = true;
        _this.door2_access = true;
        _this.door3_access = true;
        _this.door4_access = true;
        _this.door5_access = true;
        return _this;
    }
    return ManagerCard;
}(Cards));
var TransactionCard = /** @class */ (function (_super) {
    __extends(TransactionCard, _super);
    function TransactionCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.door0_access = true;
        _this.door1_access = true;
        return _this;
    }
    return TransactionCard;
}(Cards));
var OperationsCard = /** @class */ (function (_super) {
    __extends(OperationsCard, _super);
    function OperationsCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.door0_access = true;
        _this.door1_access = true;
        _this.door2_access = true;
        _this.door3_access = true;
        return _this;
    }
    return OperationsCard;
}(Cards));
var JanitorCard = /** @class */ (function (_super) {
    __extends(JanitorCard, _super);
    function JanitorCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.door0_access = true;
        _this.door1_access = true;
        _this.door2_access = true;
        _this.door3_access = true;
        _this.door4_access = true;
        _this.door5_access = true;
        return _this;
    }
    return JanitorCard;
}(Cards));
//-----------Implementation of Doors ------------------------
var SecureZone = /** @class */ (function () {
    function SecureZone() {
    }
    SecureZone.MaximumCapacity1 = 2;
    return SecureZone;
}());
var OperationsZone = /** @class */ (function () {
    function OperationsZone() {
    }
    OperationsZone.MaximumCapacity2 = 5;
    return OperationsZone;
}());
var TransactionZone = /** @class */ (function () {
    function TransactionZone() {
    }
    TransactionZone.MaximumCapacity3 = 7;
    return TransactionZone;
}());
var OutsideZone = /** @class */ (function () {
    function OutsideZone() {
    }
    return OutsideZone;
}());
var Door0 = /** @class */ (function () {
    function Door0() {
    }
    return Door0;
}());
var Door1 = /** @class */ (function () {
    function Door1() {
    }
    return Door1;
}());
var Door2 = /** @class */ (function () {
    function Door2() {
    }
    return Door2;
}());
var Door3 = /** @class */ (function () {
    function Door3() {
    }
    return Door3;
}());
var Door4 = /** @class */ (function () {
    function Door4() {
    }
    return Door4;
}());
var Door5 = /** @class */ (function () {
    function Door5() {
    }
    return Door5;
}());
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var permit;
//-----------The code adding a card to a zone------------------------
var cards_array = [];
var names = ["Ivan", "Seth", "Debra", "Gilbert", "Vera", "Lucy", "Janet", "Ramon", "Tracey", "Lewis"];
var numbers = [22, 123, 107, 186, 230, 412, 254, 665, 725, 1032];
for (var i = 0; i < 10; i++) {
    cards_array[i] = new Cards;
    cards_array[i].CardNumber = numbers[i];
    cards_array[i].name = names[i];
}
function login(idtext, name) {
    var status = false;
    var id = parseInt(idtext);
    try {
        for (var j = 0; cards_array.length; j++) {
            if (name == cards_array[j].name && id == cards_array[j].CardNumber) {
                switch (true) {
                    case ((id >= 1) && (id <= 100)):
                        employe = new ManagerCard;
                        employe.name = name;
                        employe.CardNumber = id;
                        break;
                    case ((id > 100) && (id <= 200)):
                        employe = new SecureCard;
                        employe.name = name;
                        employe.CardNumber = id;
                        break;
                    case ((id > 200) && (id <= 500)):
                        employe = new OperationsCard;
                        employe.name = name;
                        employe.CardNumber = id;
                        break;
                    case ((id > 500) && (id <= 999)):
                        employe = new TransactionCard;
                        employe.name = name;
                        employe.CardNumber = id;
                        break;
                    case ((id >= 1000)):
                        employe = new JanitorCard;
                        employe.name = name;
                        employe.CardNumber = id;
                        break;
                    default:
                        break;
                }
                Cards.card.CardNumber = employe.CardNumber;
                Cards.card.name = employe.name;
                alert("Succesful Login!");
                console.log("id :" + id + "\n" + "name : " + name);
                status = true;
                break;
            }
        }
    }
    catch (error) {
        if (!status) {
            alert("Access Denied!");
        }
    }
}
var PeopleInSecure = 0;
var PeopleInOperation = 0;
var PeopleInTransaction = 0;
//...............TRANSACTION ZONE..............................................................................
function Door_0and2() {
    if (PeopleInTransaction < TransactionZone.MaximumCapacity3 && Cards.card.CardNumber < 1000) {
        PeopleInTransaction += 1;
        console.log("Number of People in Transaction Zone :" + PeopleInTransaction);
        alert("Door 0/2 has opened!");
    }
    //----if its janitor;....
    else if (Cards.card.CardNumber >= 1000 && PeopleInTransaction != 0) {
        //---- Succesfull Access for Janitors.....
        PeopleInTransaction += 1;
        alert("Door 0/2 has opened for Janitor!");
        console.log("Number of People in Transaction Zone :" + PeopleInTransaction);
    }
    else {
        alert("Access Denied! The reason can be ;" + "\n" + "1. Maximum capacity reached!" + "\n" + "2. There isn't any person in Transaction Zone for Janitors." + "\n" + "3. The card does not have sufficient privileges to access the requirest zone!");
    }
}
//...............OPERATION ZONE..............................................................................
function Door_3and4() {
    if (Cards.card.CardNumber >= 100 && Cards.card.CardNumber <= 500 && PeopleInOperation < OperationsZone.MaximumCapacity2) {
        PeopleInOperation += 1;
        console.log("Number of People in Operation Zone :" + PeopleInOperation);
        alert("Door 3/4 has opened!");
    }
    //----if its janitor;....
    else if (Cards.card.CardNumber >= 1000 && PeopleInOperation != 0) {
        //---- Succesfull Access for Janitors.....
        PeopleInOperation += 1;
        alert("Door 3/4 has opened for Janitor!");
        console.log("Number of People in Operation Zone :" + PeopleInOperation);
    }
    else if (Cards.card.CardNumber < 100) {
        //---- Succesfull Access for Managers.....
        PeopleInOperation += 1;
        alert("Door 3/4 has opened!");
        console.log("Number of People in Operation Zone :" + PeopleInOperation);
    }
    else {
        alert("Access Denied! The reason can be ;" + "\n" + "1. Maximum capacity reached!" + "\n" + "2. There isn't any person in Operation Zone for Janitors." + "\n" + "3. The card does not have sufficient privileges to access the requirest zone!");
    }
}
//...............SECURE ZONE..............................................................................
function Door_5() {
    if (Cards.card.CardNumber >= 100 && Cards.card.CardNumber < 200 && PeopleInSecure < SecureZone.MaximumCapacity1) {
        PeopleInSecure += 1;
        console.log("Number of People in Secure Zone :" + PeopleInSecure);
        alert("Door 5 has opened!");
    }
    //----if its janitor;....
    else if (Cards.card.CardNumber >= 1000 && PeopleInSecure != 0) {
        //---- Succesfull Access for Janitors.....
        PeopleInSecure += 1;
        alert("Door 5 has opened for Janitor!");
    }
    else if (Cards.card.CardNumber < 100) {
        //---- Succesfull Access for Managers.....
        PeopleInSecure += 1;
        alert("Door 5 has opened!");
        console.log("Number of People in Secure Zone :" + PeopleInSecure);
    }
    else {
        alert("Access Denied! The reason can be ;" + "\n" + "1. Maximum capacity reached!" + "\n" + "2. There isn't any person in Secure Zone for Janitors." + "\n" + "3. The card does not have sufficient privileges to access the requirest zone!");
    }
}
var employe = new Cards;
///////////////////////////-------------TESTER CLASS--------------///////////////////////////
var TesterClass = /** @class */ (function () {
    function TesterClass() {
        this.NumberSimulator = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
    }
    return TesterClass;
}());
var obj = new TesterClass;
var RandomNumbers = [];
var RandomCardNumber;
for (var i = 0; i < 10; i++) {
    RandomCardNumber = obj.NumberSimulator(1, 1200);
    RandomNumbers[i] = RandomCardNumber;
}
function ShowEmployees() {
    for (var i = 0; i < RandomNumbers.length; i++) {
        if (RandomNumbers[i] < 100) {
            employe = new ManagerCard;
            employe.CardNumber = RandomNumbers[i];
            console.log("Random Employee is created!" + "\n" + "Card Number: " + RandomNumbers[i] + "  Type : Manager Card");
        }
        else if (RandomNumbers[i] < 201 && RandomNumbers[i] > 100) {
            employe = new SecureCard;
            employe.CardNumber = RandomNumbers[i];
            console.log("Random Employee is created!" + "\n" + "Card Number: " + RandomNumbers[i] + "  Type : Secure Card");
        }
        else if (RandomNumbers[i] < 500 && RandomNumbers[i] > 200) {
            employe = new OperationsCard;
            employe.CardNumber = RandomNumbers[i];
            console.log("Random Employee is created!" + "\n" + "Card Number: " + RandomNumbers[i] + "  Type : Operation Card");
        }
        else if (RandomNumbers[i] < 1000 && RandomNumbers[i] > 500) {
            employe = new TransactionCard;
            employe.CardNumber = RandomNumbers[i];
            console.log("Random Employee is created!" + "\n" + "Card Number: " + RandomNumbers[i] + "  Type : Transaction Card");
        }
        else {
            employe = new JanitorCard;
            employe.CardNumber = RandomNumbers[i];
            console.log("Random Employee is created!" + "\n" + "Card Number: " + RandomNumbers[i] + "  Type : Janitor Card");
        }
        Cards.card.CardNumber = employe.CardNumber;
    }
}
function Simulate() {
    var randEmployee = obj.NumberSimulator(0, 9);
    console.log(RandomNumbers[randEmployee]);
    Cards.card.CardNumber = RandomNumbers[randEmployee];
    var randCase = obj.NumberSimulator(0, 2);
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
