//case 1

// function a(b){
//     console.log("hii i am hof");

//     // function b(){
//     //     console.log("hii i am second function");
//     // }
// }

// function b(){
//     console.log("hii i am second function");
// }

// a(b);
// console.log(a(b));


// function a(){
//     console.log("hii i am hof");

//     function b(){
//         console.log("hii i am second function");
//     }

//     return b;
// }

// let ans = a();

// console.log(ans);

//callback function
function a(b){
    console.log("hii i am hof");
    b();
    

    
}

function b(){
    console.log("hii i am second function");
}
let ans = a(b);

console.log(ans);