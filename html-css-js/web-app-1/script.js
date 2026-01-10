function display() {
    // a=0;
    // b=6;
    // c=a+b;
    // alert("login sucessfull "+c);
    // alert(document.getElementById("getUser").value); //confrim,promt
    UserMessage.innerHTML=document.getElementById("getUser").value;
    PassMessage.innerHTML=document.getElementById("getPass").value;

    let email=document.getElementById("getEmail").value;

    if(email==="abisai@gmail.com"){
        welcomeMessage.innerHTML="<h1>welcome abisai</h1>";
    }
    else{
        welcomeMessage.innerHTML="enter correct email";
    }
}
    function showLoginForm(){
        let str=`
        <h1>Login Form</h1>
            <p><label id="welcomeMessage"></label></p>
        <!-- <p><label id="UserMessage"></label></p> -->
        <p><label id="UserMessage">user name</label></p>
        <p><input type="text" id="getUser"></p>

        <!-- <p><label id="PassMessage"></label></p> -->
        <p><label id="PassMessage">password</label></p>
        <p><input type="password" id="getPass"></p>

        <p><label>Email:</label></p>
        <p><input type="email"id="getEmail"></p>

        <p><button onclick="display()">login</button></p>
        <hr>
        <p><button onclick="showRegForm()">Create account</button></p>
        `
        root.innerHTML = str;
    }

function showRegForm(){
    let str=`
    <h1>Registration Form</h1>
    <p><label>user name</label></p>
    <p><input type="text" id="getUser"></p>

    <p><label>password</label></p>
    <p><input type="password"></p>

    <p><label>Email:</label></p>
    <p><input type="email"></p>

    <p><button onclick="showLoginForm()">submit</button></p>`
    root.innerHTML=str;
}
