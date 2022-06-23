// Simulating "Data Base"

let userName = "EddieReynosoR";
let password = "1234";

// Login


let user, pass;

//get user and password using prompt
user = prompt("Indicate your username: ");
pass = prompt("Give your password: ");

//compare the user and pass with userName and password
if(user == userName && pass == password){
    //welcome message
    document.write(`Welcome ${userName}`);
}else{
    //invalid alert
    alert("Username or password incorrects !!!");
}