// function user(){

// }

// let User1 = new user();


// function user(){
//     this.userName = "rahul";
//     this.userMail = "rahul@123gmail.com"
// }

// let User1 = new user();

// console.log(User1);
// console.log(User1.userName);


// function user(naam, email){
//     this.userName = naam;
//     this.userMail = email;
// }

// let User1 = new user("rahul","rahul@123gmail.com");
// let User2 = new user("nikhil", "nikhil@12gmail.com");

// console.log(User1);
// console.log(User2.userMail);


// class syntax


class Person{
     user(naam, email){
        this.userName = naam;
        this.userMail = email;
    } 

    personalDetail(){
        console.log(`my name is ${this.userName} and my email is ${this.userMail}`)
    }
}

let person1 = new Person("rahul", "rahul@122gmail.com");
console.log(person1.personalDetail());