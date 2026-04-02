// const categories=[
// {
// id: 1,
// categoryCode: "DM001",
// categoryName: "Hoa quả",
// image: "https: //example.com/image.jpg",
// status: "ACTIVE",
// created_at: "2021-01-01T00:00:00Z"
// },
// {
// id: 2,
// categoryCode: "DM002",
// categoryName: "Rau củ",
// image: "https://example.com/image.jpg",
// status: "INACTIVE",
// created_at: "2021-01-01T00:00:00Z"
// },
// ];
// localStorage.setItem("categories",JSON.stringify(categories))
const categories = JSON.parse(localStorage.getItem("categories")) || [];
function RenderCategories() {
    let ListCategory = document.getElementById("ListCategories")
    ListCategory.innerHTML = categories
        .map((value) => {
            return `<div class="row">
                    <p class="idcategory">${value.categoryCode}</p>
                    <p class="namecategory">${value.categoryName}</p>
                    <p class="StatusActive"><span class="dotgreen"></span> Đang hoạt động</p>
                    <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit" onclick="UpFormUpdateCategory()"><img src="../Asset/Image/_Button base.png" alt=""></button>
                    </p>
                    <hr class="LineInList">
                </div>`
        }).join("")
}
function UpformAddcategory() {
    document.querySelector(".FormAddCategory").style.display = "block"
}
function CloseformAddcategory() {
    document.querySelector(".FormAddCategory").style.display = "none"

}
function UpFormUpdateCategory() {
    document.querySelector(".FormUpdateCategory").style.display = "block"
}
function CloseFormUpdateCategory() {
    document.querySelector(".FormUpdateCategory").style.display = "none"
}
function ShowLogOutBtn() {
    let showbtn = document.querySelector(".LogOutButton");
    if (showbtn.style.display === "none" || showbtn.style.display === "") {
        document.querySelector(".LogOutButton").style.display = "block"
    } else {
        document.querySelector(".LogOutButton").style.display = "none"
    }

}
function LogOut() {
    window.location.href = "./login.html"
}
RenderCategories();
