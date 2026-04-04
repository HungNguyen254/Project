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
let Valid = -1;
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
RenderCategories(categories);
function SearchCategoryByName() {
    let keyword = document.getElementById("SearchBox").value.trim().toLowerCase();
    let found = categories.filter((value) => {
        return value.categoryName.toLowerCase().includes(keyword);
    });
    console.log(found);
    RenderCategories(found);
}
function FilterStatus() {
    let SelectBoxValue = document.getElementById("SelectBox").value.trim();
    if (SelectBoxValue == "Tất cả") {
        RenderCategories(categories)
    }
    if (SelectBoxValue == "Ngừng hoạt động") {
        let StopWork = categories.filter((value) => value.status === "InAcTive");
        RenderCategories(StopWork);
    }
    if (SelectBoxValue == "Đang hoạt động") {
        let StillWork = categories.filter((value) => value.status === "Active");
        RenderCategories(StillWork);
    }
}

function RenderCategories(categories) {
    let ListCategory = document.getElementById("ListCategories")
    ListCategory.innerHTML = categories
        .map((value, index) => {
            return `<div class="row">
                    <p class="idcategory">${value.categoryCode}</p>
                    <p class="namecategory">${value.categoryName}</p>
                    <p ${value.status == "ACTIVE" ? "class=StatusActive" : "class=StatusInActive"}><span ${value.status == "ACTIVE" ? "class=dotgreen" : "class=dotred"}></span> ${value.status == "ACTIVE" ? "Đang hoạt động" : "Ngừng hoạt động"}</p>
                    <p><button id="btndelete" onclick="DeleteCategories(${index})"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit" onclick="UpdateCategory(${index})"><img src="../Asset/Image/_Button base.png" alt=""></button>
                    </p>
                    <hr class="LineInList">
                </div>`
        }).join("")
}
RenderCategories(categories)
function AddCategories() {
    let NewNameCategory = document.getElementById("AddNameCategory");
    let NewIdCategory = document.getElementById("AddIdCategory");
    let NewStatusCategory = document.getElementById("radio");
    let radioActive = document.getElementById("radio1");
let radioInactive = document.getElementById("radio2");
let value = "";

if (radioActive.checked) {
    value = radioActive.value;
} else if (radioInactive.checked) {
    value = radioInactive.value;
}

console.log(value);
    let NewCategory = {
        id: categories.length !== 0 ? categories[categories.length - 1].id + 1 : 1,
        categoryCode: NewIdCategory.value,
        categoryName: NewNameCategory.value,
        status: value,
    }
    categories.push(NewCategory);
    localStorage.setItem("categories", JSON.stringify(categories));

    RenderCategories(categories)
    document.querySelector(".FormAddCategory").style.display = "none"
}
function DeleteCategories(index) {
    categories.splice(index, 1);
    localStorage.setItem("categories", JSON.stringify(categories));
    RenderCategories(categories);
}
function UpdateCategory(index) {
    document.querySelector(".FormUpdateCategory").style.display = "block";
    let UpdateNameCategory = document.getElementById("UpdateNameCategoryInput");
    let UpdateIdCategory = document.getElementById("UpdateIdCategoryInput");
    let UpdateStatusCategory = document.getElementById("radio");
    UpdateStatusCategory.value = categories[index].status
    UpdateNameCategory.value = categories[index].categoryName;
    UpdateIdCategory.value = categories[index].categoryCode;
    Valid = index;
}
function ConfirmUpdate() {
    let UpdateNameCategory = document.getElementById("UpdateNameCategoryInput");
    let UpdateIdCategory = document.getElementById("UpdateIdCategoryInput");
    let UpdateStatusCategory = document.getElementById("radio");
    if(UpdateStatusCategory.value == "Active"){
        categories[Valid] = "ACTIVE"
    }
    if(UpdateStatusCategory.value == "InActive"){
        categories[Valid] = "INACTIVE"

    }
    categories[Valid].categoryName = UpdateNameCategory.value;
    categories[Valid].categoryCode = UpdateIdCategory.value;
    localStorage.setItem("categories", JSON.stringify(categories));
    document.querySelector(".FormUpdateCategory").style.display = "none"
    RenderCategories();
    Valid = -1;
};