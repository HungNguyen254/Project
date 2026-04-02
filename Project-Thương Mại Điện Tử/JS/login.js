const users = JSON.parse(localStorage.getItem("Users"))||[];
console.log(users);

function FormLogin(){
    let CheckEmailLogin = document.getElementById("email");
    let CheckPassWordLogin = document.getElementById("password");
    if(CheckEmailLogin.value == ""){
        document.querySelector(".error-emaillogin").style.display = "block";
        document.querySelector(".error-emaillogin").innerHTML = "Email Không được để trống";
        return;
    }
    if(CheckPassWordLogin.value == ""){
        document.querySelector(".error-passwordlogin").style.display = "block";
        document.querySelector(".error-passwordlogin").innerHTML = "Mật khẩu Không được để trống";
        return;
    }
    let CheckLegitEmail = users.find((value)=>value.email == CheckEmailLogin.value ) 
    if(!CheckLegitEmail){
        document.querySelector(".error-passwordlogin").style.display = "block";
        document.querySelector(".error-passwordlogin").innerHTML = "Email hoăc mật khẩu Không đúng1";
        return;
    }
    let CheckLegitPassword = users.find((value)=>value.password == CheckPassWordLogin.value)
    if(!CheckLegitPassword){
        document.querySelector(".error-passwordlogin").style.display = "block";
        document.querySelector(".error-passwordlogin").innerHTML = "Email hoặc mật khẩu không đúng2";
        return;
    }
    window.location.href = "../Pages/category.html"
}