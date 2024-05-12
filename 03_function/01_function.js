function saymyname(){
    console.log("S");
    console.log("R");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");

}
saymyname();

function addTwoNum(num1,num2){
    console.log(num1+num2);
}
addTwoNum(9);


function say() {
   return 2+4;
}

const hlo = say();
console.log(hlo);

function loginUserName(username){
    if(username===undefined){
       return console.log("Please enter a username");
        
    }
    
    return `${username} just loggedin`
    
}
console.log(loginUserName("Sridhar"));
//console.log(loginUserName());