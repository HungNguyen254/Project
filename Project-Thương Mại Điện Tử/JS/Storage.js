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
const products = JSON.parse(localStorage.getItem("Products")) || [];
const Category = JSON.parse(localStorage.getItem("categories")) || [];
let Valid = -1;
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
function UpFormUpdateProducts() {
    document.querySelector(".UpdateProduct").style.display = "block"
}
function CloseFormUpdateProducts() {
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
    setTimeout(() => {
        window.location.href = "./login.html";
    }, 2000)
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
function RenderStorageList(products) {
    let StorageList = document.getElementById("ListCategories");
    StorageList.innerHTML = products
        .map((value, index) => {
            return `<div class="row">
                        <p class="idcategory">${value.productcode}</p>
                        <p class="namecategory">${value.productname}</p>
                        <p>${value.price}đ</p>
                        <p>${value.stock}</p>
                        <p>${value.discount}</p>
                         <p ${value.status == "ACTIVE" ? "class=StatusActive" : "class=StatusInActive"}><span ${value.status == "ACTIVE" ? "class=dotgreen" : "class=dotred"}></span> ${value.status == "ACTIVE" ? "Đang hoạt động" : "Ngừng hoạt động"}</p>
                        <p><button id="btndelete" onclick="DeleteProduct(${index})"><img src="../Asset/Image/Button.png" alt=""></button>
                            <button id="btnedit" onclick = "UpdateProduct(${index})"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                        `
        }).join("");
}
function RenderOptionValue() {
    let SelectValue = document.getElementById("selectcategory");
    SelectValue.innerHTML = Category
        .map((value) => {
            return `<option value="${value.categoryName}">${value.categoryName}</option>`
        }).join("");
}
RenderOptionValue();
RenderStorageList(products)
function AddProduct() {
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
    let value = "";
    if (NameProduct.value == "") {
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
    if (IdProduct.value == "") {
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
    if (PriceProduct.value < 0) {
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
    if (QuantityProduct.value < 0) {
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
    products.find((value) => {
        if (value.productname == NameProduct.value) {
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
    products.find((value) => {
        if (value.productcode == IdProduct.value) {
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
    if (CheckRadioActive.checked) {
        value = "ACTIVE"
    } else if (CheckRadioInActive.checked) {
        value = "INACTIVE"
    }
     if (!radioActive.checked && !radioInactive.checked) {
            Toastify({
                text: "Vui lòng chọn trạng thái sản phẩm",
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
    let NewProduct = {
        id: products.length !== 0 ? products[products.length - 1].id + 1 : 1,
        productcode: IdProduct.value,
        productname: NameProduct.value,
        stock: QuantityProduct.value,
        price: PriceProduct.value,
        discount: DiscountProduct.value,
        image: ImageProduct.value,
        description: DescProduct.value,
        status: value,
        categoryName: ValueSelect.value,
        created_at: Date.now()
    };
    products.push(NewProduct);
    RenderOptionValue();
    localStorage.setItem("Products", JSON.stringify(products));
    CloseformAddProducts();
    RenderStorageList(products)
    NameProduct.value = "";
    IdProduct.value = "";
    QuantityProduct.value = "";
    PriceProduct.value = "";
    DiscountProduct.value = "";
    ImageProduct.value = "";
    DescProduct.value = "";
};
function SearchProductByName() {
    let SearchProduct = document.getElementById("SearchBox").value.trim().toLowerCase();
    let found = products.filter((value) => {
        return value.productname.toLowerCase().includes(SearchProduct);
    })
    RenderStorageList(found);
}
function RenderOptionValueInFilter() {
    let SelectCheckValue = document.getElementById("SelectBoxId");
    SelectCheckValue.innerHTML = Category
        .map((value) => {
            return `<option value="${value.categoryName}">${value.categoryName}</option>`
        }).join("")
};
RenderOptionValueInFilter();
function FilterProductById() {
    let ValueSelect = document.getElementById("selectcategory");
    let Filter = products.filter((value) => {
        return value.categoryName === ValueSelect.value;
    })
    console.log(Filter);
    RenderStorageList(Filter)
}
function FilterStatusProducts() {
    let ChangeValueFilter = document.getElementById("SelectBoxStatus");
    if (ChangeValueFilter.value == "INACTIVE") {
        let StopWork = products.filter((value) => value.status === "INACTIVE")
        RenderStorageList(StopWork)
    }
    if (ChangeValueFilter.value == "ACTIVE") {
        let StillWork = products.filter((value) => value.status == "ACTIVE")
        RenderStorageList(StillWork)
    }
    if (ChangeValueFilter.value == "SortByName") {
        let SortbyName = products.sort((a, b) => a.productname.localeCompare(b.productname));
        RenderStorageList(SortbyName)
    }
    if (ChangeValueFilter.value == "SortByPrice") {
        let SortbyPrice = products.sort((a, b) => a.price - b.price);
        RenderStorageList(SortbyPrice)
    }
    if (ChangeValueFilter.value == "SortByDate") {
        let SortbyDate = products.sort((a, b) => a.created_at - b.created_at)
        RenderStorageList(SortbyDate)
    }
}
function RenderOptionValue() {
    let SelectValue = document.getElementById("selectcategory2");
    SelectValue.innerHTML = Category
        .map((value) => {
            return `<option value="${value.categoryName}">${value.categoryName}</option>`
        }).join("");
}
function UpdateProduct(index) {
    UpFormUpdateProducts();
    let NameProductUpdate = document.getElementById("NameProductUpdateInput");
    let IdProductUpdate = document.getElementById("IdProductUpdateInput");
    let QuantityProductUpdate = document.getElementById("QuantityUpdateProduct");
    let PriceProductUpdate = document.getElementById("PriceProductUpdate");
    let DiscountProductUpdate = document.getElementById("DiscountProductUpdate");
    let ImageProductUpdate = document.getElementById("ImageProductUpdate");
    let DescUpdateProduct = document.getElementById("DescUpdateProduct");
    let CheckRadioActive = document.getElementById("Radio3");
    let CheckRadioInActive = document.getElementById("Radio4");
    let ValueSelect = document.getElementById("selectcategory2");
    let value = "";
    if (CheckRadioActive.checked) {
        value = "ACTIVE"
    } else if (CheckRadioInActive.checked) {
        value = "INACTIVE"
    }
    NameProductUpdate.value = products[index].productname;
    IdProductUpdate.value = products[index].productcode;
    QuantityProductUpdate.value = products[index].stock;
    PriceProductUpdate.value = products[index].price;
    DiscountProductUpdate.value = products[index].discount;
    ImageProductUpdate.value = products[index].image;
    DescUpdateProduct.value = products[index].description;
    ValueSelect.value = products[index].categoryName;
    Valid = index;
}
function ConfirmUpdate() {
    let ValidUpdate = true;
    let NameProductUpdate = document.getElementById("NameProductUpdateInput");
    let IdProductUpdate = document.getElementById("IdProductUpdateInput");
    let QuantityProductUpdate = document.getElementById("QuantityUpdateProduct");
    let PriceProductUpdate = document.getElementById("PriceProductUpdate");
    let DiscountProductUpdate = document.getElementById("DiscountProductUpdate");
    let ImageProductUpdate = document.getElementById("ImageProductUpdate");
    let DescUpdateProduct = document.getElementById("DescUpdateProduct");
    let CheckRadioActive = document.getElementById("Radio3");
    let CheckRadioInActive = document.getElementById("Radio4");
    let ValueSelect = document.getElementById("selectcategory2");
    let value = "";
    if (NameProductUpdate.value == "") {
        document.querySelector(".error-nameUpdate").style.display = "block";
        document.querySelector(".error-nameUpdate").innerHTML = "Tên sản phẩm không được để rỗng";
        ValidUpdate = false;
        return;
    }
    if (IdProductUpdate.value == "") {
        document.querySelector(".error-idUpdate").style.display = "block";
        document.querySelector(".error-idUpdate").innerHTML = "Mã sản phẩm không được để rỗng";
        ValidUpdate = false;
        return;
    }
    products.find((value) => {
        if (value.productname == NameProductUpdate.value && value.id !== products[Valid].id) {
            document.querySelector(".error-nameUpdate").style.display = "block";
            document.querySelector(".error-nameUpdate").innerHTML = "Tên sản phẩm đã được sử dụng";
            ValidUpdate = false;
            return;
        }
    })
    products.find((value) => {
        if (value.productcode == IdProductUpdate.value && value.id !== products[Valid].id) {
            document.querySelector(".error-idUpdate").style.display = "block";
            document.querySelector(".error-idUpdate").innerHTML = "Mã sản phẩm đã được sử dụng";
            ValidUpdate = false;
            return;
        }
    })
    if (PriceProductUpdate.value < 0) {
        document.querySelector(".error-priceUpdate").style.display = "block";
        document.querySelector(".error-priceUpdate").innerHTML = "Giá sản phẩm phải lớn hơn 0";
        ValidUpdate = false;
        return;
    }
    if (QuantityProductUpdate.value < 0) {
        document.querySelector(".error-quantityUpdate").style.display = "block";
        document.querySelector(".error-quantityUpdate").innerHTML = "Số lượng tồn kho phải lớn hơn 0";
        ValidUpdate = false;
        return;
    }
    if (CheckRadioActive.checked) {
        value = "ACTIVE"
    } else if (CheckRadioInActive.checked) {
        value = "INACTIVE"
    }
     if (!radioActive.checked && !radioInactive.checked) {
            Toastify({
                text: "Vui lòng chọn trạng thái sản phẩm",
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
    products[Valid].productname = NameProductUpdate.value;
    products[Valid].productcode = IdProductUpdate.value;
    products[Valid].stock = QuantityProductUpdate.value;
    products[Valid].price = PriceProductUpdate.value;
    products[Valid].description = DescUpdateProduct.value;
    products[Valid].discount = DiscountProductUpdate.value;
    products[Valid].image = ImageProductUpdate.value;
    products[Valid].categoryName = ValueSelect.value
    localStorage.setItem("Products", JSON.stringify(products));
    RenderStorageList();
}