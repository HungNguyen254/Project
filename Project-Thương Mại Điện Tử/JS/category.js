<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DashBoard</title>
    <link rel="stylesheet" href="../Styles/category.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="category">
        <div class="boardleft">
            <h2><i class="fa-solid fa-fire"></i>Ecommerce</h2>
            <p class="statistic"><i class="fa-solid fa-house"></i>Thống kê</p>
            <p class="Categories"><i class="fa-solid fa-layer-group"></i>Danh mục</p>
            <p class="Product"><i class="fa-regular fa-folder"></i>Sản phẩm</p>
        </div>
        <div class="boardright">
            <div class="headboardright">
                <i class="fa-solid fa-bell"></i>
                <img src="../Asset/Image/1356856.png" alt="">
            </div>
            <hr class="line">
            <div class="underhead">
                <h2>Danh mục</h2>
                <button type="button" class="btnadd">Thêm mới danh mục</button>
            </div>
            <div class="searchfilter">
                <select name="" id="" class="selectbox">
                    <option value="Tất cả">Tất cả</option>
                    <option value="Ngừng hoạt động">Ngừng hoạt động</option>
                    <option value="Đang hoạt động">Đang hoạt động</option>

                </select>
                <input type="search" class="searchbox" placeholder="Tìm kiếm danh mục theo tên">
            </div>
             <div class="DashBoard">
                    <div class="th">
                        <p>Mã danh mục</p>
                        <p>Tên danh mục</p>
                        <p>Trạng thái</p>
                        <p>Chức năng</p>
                    </div>
                    <div class="ListCategories">
                        <p class="idcategory">DM001</p>
                        <p class="namecategory">Quần áo</p>
                        <p class="StatusActive"><i class="fa-solid fa-circle"></i> Đang hoạt động</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                    <hr class="LineInList">
                    <div class="ListCategories">
                        <p class="idcategory">DM002</p>
                        <p class="namecategory">Kính mắt</p>
                        <p class="StatusInActive"><i class="fa-solid fa-circle"></i> Ngừng hoạt động</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                    <hr class="LineInList">
                    <div class="ListCategories">
                        <p class="idcategory">DM003</p>
                        <p class="namecategory">Giầy dép</p>
                        <p class="StatusActive"><i class="fa-solid fa-circle"></i> Đang hoạt động</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                    <hr class="LineInList">
                    <div class="ListCategories">
                        <p class="idcategory">DM004</p>
                        <p class="namecategory">Thời trang nam</p>
                        <p class="StatusInActive"><i class="fa-solid fa-circle"></i> Ngừng hoạt động</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                    <hr class="LineInList">
                    <div class="ListCategories">
                        <p class="idcategory">DM005</p>
                        <p class="namecategory">Thời trang nữ</p>
                        <p class="StatusInActive"><i class="fa-solid fa-circle"></i> Ngừng hoạt động</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                    <hr class="LineInList">
                    <div class="ListCategories">
                        <p class="idcategory">DM006</p>
                        <p class="namecategory">Hoa quả</p>
                        <p class="StatusInActive"><i class="fa-solid fa-circle"></i> Ngừng hoạt động</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                    <hr class="LineInList">
                     <div class="ListCategories">
                        <p class="idcategory">DM007</p>
                        <p class="namecategory">Rau</p>
                        <p class="StatusActive"><i class="fa-solid fa-circle"></i> Đang hoạt động</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                     <hr class="LineInList">
                    <div class="ListCategories">
                        <p class="idcategory">DM008</p>
                        <p class="namecategory">Điện thoại</p>
                        <p class="StatusInActive"><i class="fa-solid fa-circle"></i> Ngừng hoạt động</p>
                        <p><button id="btndelete"><img src="../Asset/Image/Button.png" alt=""></button>
                        <button id="btnedit"><img src="../Asset/Image/_Button base.png" alt=""></button></p>
                    </div>
                </div>
                <div class="pageBut">
                <p class="pagebutton"><i class="fa-solid fa-arrow-left"></i></p>
                <p class="pagebutton">1</p>
                <p class="pagebutton">2</p>
                <p class="pagebutton">3</p>
                <p class="pagebutton">4</p>
                <p class="pagebutton">5</p>
                <p class="pagebutton">...</p>
                <p class="pagebutton">12</p>
                <p class="pagebutton"><i class="fa-solid fa-arrow-right"></i></p>
                </div>
        </div>
    </div>
    <script src="../JS/category.js"></script>
</body>

</html>
