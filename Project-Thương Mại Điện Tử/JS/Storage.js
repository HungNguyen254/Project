// const products=[
// {
// id: 1,
// productcode: "SP001",
// productname: "Táo",
// category_id: 1,
// stock: 100,
// price: 20000,
// discount: 0,
// image: "https://example.com/image.jpg",
// status: "ACTIVE",
// description: "Táo nhập khẩu từ Mỹ",
// created_at: "2021-01-01T00:00:00Z",
// },
// {
// id: 2,
// productcode: "SP002",
// productname: "Cà chua",
// categoryid: 2,
// stock: 100,
// price: 20000,
// discount: 0,
// image: "https://example.com/image.jpg",
// status: "ACTIVE",
// description: "Cà chua nhập khẩu từ Hà Lan",
// created_at: "2021-01-01T00:00:00Z"
// }
// ];
// localStorage.setItem("Products",JSON.stringify(products));
const products = JSON.parse(localStorage.getItem("Products"))||[];
const Category = JSON.parse(localStorage.getItem("categories"))||[];
function UpformAddProduct() {
    document.querySelector(".AddProduct").style.display = "block"
}
function CloseConfirmDelete() {
    document.querySelector(".overlay").style.display = "none";
}
function OpenFormConfirmDelete(index) {
    document.querySelector(".overlay").style.display = "block";
    ValidDelete = index;
}
function CloseformAddProducts() {
    document.querySelector(".AddProduct").style.display = "none"

}
function UpFormUpdateCategory() {
    document.querySelector(".UpdateProduct").style.display = "block"
}
function CloseFormUpdateCategory() {
    document.querySelector(".UpdateProduct").style.display = "none"
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
    setTimeout(()=>{
            window.location.href = "./login.html";
        },2000)
     Toastify({
            text: "Đăng xuất thành công",
            duration: 3000,
            gravity: "top", 
            position: "right",
            backgroundColor: "#28a748",
            style: {
                borderRadius: "12px"
            }
        }).showToast();
}
function RenderStorageList(products){
    let StorageList = document.getElementById("ListCategories");
    StorageList.innerHTML = products
    .map((value)=>{
        return `<div class="row">
                        <p class="idcategory">${value.productcode}</p>
                        <p class="namecategory">${value.productname}</p>
                        <p>${value.price}đ</p>
                        <p>${value.stock}</p>
                        <p>${value.discount}</p>
                         <p ${value.status == "ACTIVE" ? "class=StatusActive" : "class=StatusInActive"}><span ${value.status == "ACTIVE" ? "class=dotgreen" : "class=dotred"}></span> ${value.status == "ACTIVE" ? "Đang hoạt động" : "Ngừng hoạt động"}</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                            <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                        `
    }).join("");
}
function RenderOptionValue(){
    let SelectValue = document.getElementById("selectcategory");
    SelectValue.innerHTML = Category
    .map((value)=>{
        return `<option value="${value.categoryName}">${value.categoryName}</option>`
    }).join("");
}
RenderOptionValue();
RenderStorageList(products)
function AddProduct(){
    let NameProduct = document.getElementById("NameProductInput");
    let IdProduct = document.getElementById("IdProductInput");
    let QuantityProduct = document.getElementById("QuantityProductInput");
    let PriceProduct = document.getElementById("PriceProductInput");
    let DiscountProduct = document.getElementById("DiscountProductInput");
    let ImageProduct = document.getElementById("ImageProductInput");
    let DescProduct = document.getElementById("DescInputProduct");
    let CheckRadioActive = document.getElementById("Radio1");
    let CheckRadioInActive = document.getElementById("Radio2");
    let ValueSelect = document.getElementById("selectcategory");
    let value="";
    if(NameProduct.value == ""){
        Toastify({
                text: "Tên sản phẩm không được để trống",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#a72828",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
            return;
    }
    if(IdProduct.value == ""){
        Toastify({
                text: "Mã sản phẩm không được để trống",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#a72828",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
            return;
    }
    if(PriceProduct.value <0){
        Toastify({
                text: "Giá sản phẩm phải lớn hơn 0",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#a72828",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
            return;
    }
    if(QuantityProduct.value < 0){
          Toastify({
                text: "Số lượng phải lớn hơn 0",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#a72828",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
            return;
    }
    products.find((value)=>{
        if(value.productname == NameProduct.value){
            Toastify({
                text: "Tên sản phẩm đã được sử dụng",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#a72828",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
            return;
        }
    })
    products.find((value)=>{
        if(value.productcode == IdProduct.value){
            Toastify({
                text: "Mã sản phẩm đã được sử dụng",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#a72828",
                style: {
                    borderRadius: "12px"
                }
            }).showToast();
            return;
        }
    });
    if(CheckRadioActive.checked){
        value = "ACTIVE"
    }else if(CheckRadioInActive.checked){
        value = "INACTIVE"
    }
    let NewProduct = {
        id: products.length !== 0 ?products[products.length-1].id+1:1,
        productcode:IdProduct.value,
        productname: NameProduct.value,
        stock:QuantityProduct.value,
        price:PriceProduct.value,
        discount:DiscountProduct.value,
        image:ImageProduct.value,
        description:DescProduct.value,
        status:value,
        categoryName:ValueSelect.value,
        created_at:Date.now()
    };
    products.push(NewProduct);
    RenderOptionValue();
    localStorage.setItem("Products",JSON.stringify(products));
    CloseformAddProducts();
    NameProduct.value="";
    IdProduct.value ="";
    QuantityProduct.value = "";
    PriceProduct.value = "";
    DiscountProduct.value= "";
    ImageProduct.value = "";
    DescProduct.value = "";
};
function SearchProductByName(){
    let SearchProduct = document.getElementById("SearchBox").value.trim().toLowerCase();
    let found = products.filter((value)=>{
        return value.productname.toLowerCase().includes(SearchProduct);
    })
    RenderStorageList(found);
}
function RenderOptionValueInFilter(){
    let SelectCheckValue = document.getElementById("SelectBoxId");
    SelectCheckValue.innerHTML = Category
    .map((value)=>{
         return `<option value="${value.categoryName}">${value.categoryName}</option>`          
    }).join("")
};
RenderOptionValueInFilter();
function FilterProductById(){
    let ValueSelect = document.getElementById("selectcategory");
    let Filter = products.filter((value)=>{
        return value.categoryName == ValueSelect.value;
    })
    RenderStorageList(Filter)
}