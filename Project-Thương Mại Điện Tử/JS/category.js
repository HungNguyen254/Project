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
let ValidDelete = -1;
function UpformAddcategory() {
    document.querySelector(".FormAddCategory").style.display = "block"
}
function CloseConfirmDelete(){
    document.querySelector(".overlay").style.display = "none";
}
function OpenFormConfirmDelete(index){
    document.querySelector(".overlay").style.display = "block";
    ValidDelete = index;
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
function SortName() {
}
RenderCategories(categories);
function SearchCategoryByName() {
    let keyword = document.getElementById("SearchBox").value.trim().toLowerCase();
    let found = categories.filter((value) => {
        return value.categoryName.toLowerCase().includes(keyword);
    });
    RenderCategories(found);
}
function FilterStatus() {
    let SelectBoxValue = document.getElementById("SelectBox").value.trim();
    if (SelectBoxValue == "Tất cả") {
        RenderCategories(categories)
    }
    if (SelectBoxValue === "INACTIVE") {
        let StopWork = categories.filter((value) => value.status == "INACTIVE");
        console.log(StopWork);
        RenderCategories(StopWork);
    }
    if (SelectBoxValue === "ACTIVE") {
        let StillWork = categories.filter((value) => value.status == "ACTIVE");
        RenderCategories(StillWork);
    }
}

function RenderCategories(categories) {
    let ListCategory = document.getElementById("ListCategories")
    let sorted = categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
    ListCategory.innerHTML = sorted
        .map((value, index) => {
            return `<div class="row">
                    <p class="idcategory">${value.categoryCode}</p>
                    <p class="namecategory">${value.categoryName}</p>
                    <p ${value.status == "ACTIVE" ? "class=StatusActive" : "class=StatusInActive"}><span ${value.status == "ACTIVE" ? "class=dotgreen" : "class=dotred"}></span> ${value.status == "ACTIVE" ? "Đang hoạt động" : "Ngừng hoạt động"}</p>
                    <p><button id="btndelete" onclick="OpenFormConfirmDelete(${index})"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit" onclick="UpdateCategory(${index})"><img src="../Asset/Image/_Button base.png" alt=""></button>
                    </p>
                    <hr class="LineInList">
                </div>`
        }).join("")
}
RenderCategories(categories)
function AddCategories() {
    let LegitAdd = true;
    let NewNameCategory = document.getElementById("AddNameCategory");
    let NewIdCategory = document.getElementById("AddIdCategory");
    let radioActive = document.getElementById("radio1");
    let radioInactive = document.getElementById("radio2");
    if (NewNameCategory.value == "") {
        Toastify({
            text: "Tên danh mục không được để trống",
            duration: 3000,
            gravity: "top", // top / bottom
            position: "right", // left / center / right
            backgroundColor: "#a72828",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
        LegitAdd = false;
        return;
    }
    if (NewIdCategory.value == "") {
        Toastify({
            text: "Mã danh mục không được để trống",
            duration: 3000,
            gravity: "top", // top / bottom
            position: "right", // left / center / right
            backgroundColor: "#a72828",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
        LegitAdd = false;
        return;
    }
    categories.find((value)=>{
        if(value.categoryName == NewNameCategory.value){
            Toastify({
            text: "Tên danh mục không được trùng",
            duration: 3000,
            gravity: "top", // top / bottom
            position: "right", // left / center / right
            backgroundColor: "#a72828",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
        LegitAdd = false;
        return;
        }
    })
    categories.find((value)=>{
        if(value.categoryCode == NewIdCategory.value){
            Toastify({
            text: "Mã danh mục không được trùng",
            duration: 3000,
            gravity: "top", // top / bottom
            position: "right", // left / center / right
            backgroundColor: "#a72828",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
        LegitAdd = false;
        return;
        }
    })
    if (LegitAdd == true) {
        let value = "";
        if (radioActive.checked) {
            value = "ACTIVE";
        } else if (radioInactive.checked) {
            value = "INACTIVE";
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
        Toastify({
            text: "Thêm sản phẩm thành công!",
            duration: 3000,
            gravity: "top", // top / bottom
            position: "right", // left / center / right
            backgroundColor: "#28a745",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
        RenderCategories(categories)
    document.querySelector(".FormAddCategory").style.display = "none"
    }

    
}
function UpdateCategory(index) {
    document.querySelector(".FormUpdateCategory").style.display = "block";
    let UpdateNameCategory = document.getElementById("UpdateNameCategoryInput");
    let UpdateIdCategory = document.getElementById("UpdateIdCategoryInput");
    UpdateNameCategory.value = categories[index].categoryName;
    UpdateIdCategory.value = categories[index].categoryCode;
    Valid = index;
};
function ConfirmUpdate() {
    let LegitUpdate = true;
    let UpdateNameCategory = document.getElementById("UpdateNameCategoryInput");
    let UpdateIdCategory = document.getElementById("UpdateIdCategoryInput");
    let radioActiveUpdate = document.getElementById("radio3");
    let radioInactiveUpdate = document.getElementById("radio4");
    if (UpdateNameCategory.value == "") {
        Toastify({
            text: "Tên danh mục không được để trống",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#a72828",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
        LegitUpdate = false;
        return;
    }
    if (UpdateIdCategory.value == "") {
        Toastify({
            text: "Mã danh mục không được để trống",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#a72828",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
        LegitUpdate = false;
        return;
    }
    categories.find((value) => {
        if (UpdateNameCategory.value == value.categoryName) {
            Toastify({
                text: "Tên danh mục không được phép trùng",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#a72828",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
            LegitUpdate = false;
            return;
        }
    })
    categories.find((value) => {
        if (UpdateIdCategory.value == value.categoryCode) {
            Toastify({
                text: "Tên danh mục không được phép trùng",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#a72828",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
            LegitUpdate = false;
            return;
        }
    })
    if (LegitUpdate == true) {
        let value = "";
        if (radioActiveUpdate.checked) {
            value = "ACTIVE";
        } else if (radioInactiveUpdate.checked) {
            value = "INACTIVE";
        }
        categories[Valid].status = value;
        categories[Valid].categoryName = UpdateNameCategory.value;
        categories[Valid].categoryCode = UpdateIdCategory.value;
        localStorage.setItem("categories", JSON.stringify(categories));
        document.querySelector(".FormUpdateCategory").style.display = "none"
        Toastify({
            text: "Cập nhật thành công!",
            duration: 3000,
            gravity: "top", // top / bottom
            position: "right", // left / center / right
            backgroundColor: "#28a745",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
        RenderCategories(categories);
        Valid = -1;
    }

};
function ConfirmDelete(){
    categories.splice(ValidDelete, 1);
    localStorage.setItem("categories", JSON.stringify(categories));
    RenderCategories(categories);
    ValidDelete = -1;
    CloseConfirmDelete();
}
