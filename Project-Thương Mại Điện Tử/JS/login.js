const users = JSON.parse(localStorage.getItem("Users"))||[];
console.log(users);

function FormLogin(){
    let CheckEmailLogin = document.getElementById("email");
    let CheckPassWordLogin = document.getElementById("password");
    if(CheckEmailLogin.value == ""){
        Toastify({
                text: "Email không được để trống",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#cd1706",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
        return;
    }
    if(CheckPassWordLogin.value == ""){
       Toastify({
                text: "Mật khẩu không được để trống",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#cd1706",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
        return;
    }
    let CheckLegitEmail = users.find((value)=>value.email == CheckEmailLogin.value ) 
    if(!CheckLegitEmail){
       Toastify({
                text: "Email/Mật khẩu không đúng",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#cd1706",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
        return;
    }
    let CheckLegitPassword = users.find((value)=>value.password == CheckPassWordLogin.value)
    if(!CheckLegitPassword){
       Toastify({
                text: "Email/Mật khẩu không đúng",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#cd1706",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
        return;
    }
    Toastify({
                text: "Đăng nhập thành công",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#20cd06",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
    setTimeout(()=>{
            window.location.href = "../Pages/category.html"
        },2000)
}