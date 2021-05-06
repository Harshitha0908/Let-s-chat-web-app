function adduser(){
    user_name =document.getElementById("username").value;
    password = document.getElementById("password").value;
    if(user_name==""){
        window.alert("Enter the user name");
    }
    else if(password==""){
        window.alert("Enter the password");
    }
    else{

     localStorage.setItem("user_name", user_name);
    localStorage.setItem("password", password);
    window.location = "chat_room.html";
    }
}