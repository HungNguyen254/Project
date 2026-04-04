const users= [
    {
id: 1,
first_name: "Nguyễn Văn",
last_name: "Nam",
gender: 0,
date_of_birth: "20/02/2023",
address: "Thanh Xuân, Hà Nội",
avatar: "https://example.com/avatar.jpg",
email: "nvnam@gmail.com",
password: "123456",
phone_number: "0988787671",
created_at: "2021-01-01T00:00:00Z"
}
];
let valid;
function FormRegister(){
    let FirstNameUser = document.getElementById("firstnameuser");
    let LastNameUser = document.getElementById("lastnameuser");
    let EmailUser = document.getElementById("emailuser");
    let UserPassword = document.getElementById("password");
    let CheckUserPassword = document.getElementById("checkpassword");
    let CheckBoxSignUp = document.getElementById("checkboxsign")
    let SignUp = document.getElementById("SignUpSucces");
    if(FirstNameUser.value == ""){
        document.querySelector(".error-firstname").style.display = "block";
        document.querySelector(".error-firstname").innerHTML = "Họ và tên đệm không được <br> để trống";
        return;
    }
    document.querySelector(".error-firstname").style.display = "none";
    if(LastNameUser.value == ""){
        document.querySelector(".error-lastname").style.display = "block"
        document.querySelector(".error-lastname").innerHTML = "tên không được để <br> trống"
        return;
    }
    document.querySelector(".error-lastname").style.display = "none";

    if(EmailUser.value == ""){
        document.querySelector(".error-email").style.display = "block"
        document.querySelector(".error-email").innerHTML = "Email không được để trống"
        return;
    }
    document.querySelector(".error-email").style.display = "none";

    if(UserPassword.value == ""){
        document.querySelector(".error-password").style.display = "block"
        document.querySelector(".error-password").innerHTML = "Mật khẩu không được để trống"
        return;
    }
    document.querySelector(".error-password").style.display = "none";

    if(UserPassword.value.length < 8){
        document.querySelector(".error-password").style.display = "block"
        document.querySelector(".error-password").innerHTML = "Mật khẩu phải tối thiểu 8 ký tự"
        return;
    }
    document.querySelector(".error-password").style.display = "none";

    if(CheckUserPassword.value == ""){
        document.querySelector(".error-checkpassword").style.display = "block"
        document.querySelector(".error-checkpassword").innerHTML = "Mật khẩu xác nhận lại không được để trống"
        return;
    }
    document.querySelector(".error-checkpassword").style.display = "none";

    if(CheckUserPassword.value !== UserPassword.value){
        document.querySelector(".error-checkpassword").style.display = "block"
        document.querySelector(".error-checkpassword").innerHTML = "Mật khẩu không trùng khớp!"
        return;
    }
    if(!CheckBoxSignUp.checked){
         document.querySelector(".error-checkpassword").style.display = "block"
        document.querySelector(".error-checkpassword").innerHTML = "Bạn chưa đồng ý với điều khoản và chính sách của web"
        return;
    }
    document.querySelector(".error-checkpassword").style.display = "none";

        let newuser = {
            id: users.length !==0 ?users[users.length-1].id +1:1,
            first_name: FirstNameUser.value,
            last_name:LastNameUser.value,
            email:EmailUser.value,
            password:UserPassword.value,
            created_at:new Date(),            
        };
        document.querySelector(".SignUpSucces").style.display = "flex";
        users.push(newuser);
        localStorage.setItem("Users",JSON.stringify(users));
        FirstNameUser.value = "";
        LastNameUser.value = "";
        EmailUser.value = "";
        UserPassword.value = "";
        CheckUserPassword.value = "";
        setTimeout(()=>{
            window.location.href = "./login.html";
        },2000)
}
console.log(new Date());
