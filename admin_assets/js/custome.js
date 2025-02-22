// Lấy URL hiện tại
const currentPath = window.location.pathname;

// Tìm tất cả các liên kết
const menuItems = document.querySelectorAll("#menu a");

menuItems.forEach((item) => {
  if (item.getAttribute("href") === currentPath) {
    // Thêm class 'active' vào liên kết hiện tại
    item.classList.add("active");
  } else {
    // Xóa class 'active' khỏi các liên kết không phù hợp
    item.classList.remove("active");
  }
});
// $(document).ready(function () {
  
//   CKEDITOR.replace("edit");
// });

// $(document).ready(function () {
//   $(".btn_add_color").click(function (e) {
//     e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
//     console.log("Kiểm tra UTF-8: Màu sắc, URL hình ảnh, Số lượng");

//     // Tạo đoạn HTML cần chèn
//     var colorHtml = `
//       <div id="mt-2">
//         <div class="boder-color">
//           <div class="row boder-color1">
//             <div class="col-4 space-top" id="chooseColor" name="1">
//               <h5 class="spacing_form">Màu sắc</h5>
//               <div class="input-group mb-3">
//                 <div class="input-group-prepend">
//                   <div class="input-group-text">
//                     <i class="fas fa-mobile-alt"></i>
//                   </div>
//                 </div>
//                 <select name="" class="form-control w">
//                   <option value="">Đen</option>
//                   <option value="">Trắng</option>
//                   <option class="active" value="">Đỏ</option>
//                   <option value="">Xanh</option>
//                   <option value="">Hồng</option>
//                   <option value="">Lam</option>
//                 </select>
//               </div>
//             </div>

//             <div class="col-4 space-top">
//               <h5 class="spacing_form">URL hình ảnh nền</h5>
//               <input class="mt-2" type="file" accept=".jpg,.png,.jpeg" />
//             </div>

//             <div class="col-4 space-top">
//               <h5 class="spacing_form">Số lượng</h5>
//               <div class="input-group mb-3">
//                 <div class="input-group-prepend">
//                   <div class="input-group-text"><i class="fas fa-tag"></i></div>
//                 </div>
//                 <input type="number" class="form-control" value="" placeholder="Nhập số lượng" />
//               </div>
//             </div>
//           </div>

//           <div class="row boder-color2">
//             <div class="col-4 space-top">
//               <h5 class="spacing_form">URL ảnh mô tả 1</h5>
//               <input class="mt-2" type="file" accept=".jpg,.png,.jpeg" />
//             </div>
//             <div class="col-4 space-top">
//               <h5 class="spacing_form">URL ảnh mô tả 2</h5>
//               <input class="mt-2" type="file" accept=".jpg,.png,.jpeg" />
//             </div>
//             <div class="col-4 space-top">
//               <h5 class="spacing_form">URL ảnh mô tả 3</h5>
//               <input class="mt-2" type="file" accept=".jpg,.png,.jpeg" />
//             </div>
//           </div>
//         </div>
//       </div>`;

//     // Chèn đoạn HTML vào trước thẻ <a> hoặc một vị trí cụ thể
//     $("#themMau").append($(colorHtml));
//   });
// });

$(document).ready(function () {
  $(".btn_add_color").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

    let colorBlock = `
      <div class="border_top">
        <div class="boder-color">
          <div class="row boder-color1">
            <div class="col-4 space-top chooseColor">
              <h5 class="spacing_form">Màu sắc</h5>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </div>
                <select class="form-control w">
                  <option value="">Đen</option>
                  <option value="">Trắng</option>
                  <option class="active" value="">Đỏ</option>
                  <option value="">Xanh</option>
                  <option value="">Hồng</option>
                  <option value="">Lam</option>
                </select>
              </div>
            </div>

            <div class="col-4 space-top">
              <h5 class="spacing_form">URL hình ảnh nền</h5>
              <input class="mt-2" type="file" accept=".jpg,.png,.jpeg" />
            </div>

            <div class="col-4 space-top">
              <h5 class="spacing_form d_flex">
                <span>Số lượng</span>
                <button type="button" class="delete-button" (click)="deleteView(i)">Xóa</button>
              </h5>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-tag"></i></div>
                </div>
                <input type="number" class="form-control" placeholder="Nhập số lượng" />
              </div>
            </div>
          </div>

          <div class="row boder-color2">
            <div class="col-4 space-top">
              <h5 class="spacing_form">URL ảnh mô tả 1</h5>
              <input class="mt-2" type="file" accept=".jpg,.png,.jpeg" />
            </div>
            <div class="col-4 space-top">
              <h5 class="spacing_form">URL ảnh mô tả 2</h5>
              <input class="mt-2" type="file" accept=".jpg,.png,.jpeg" />
            </div>
            <div class="col-4 space-top">
              <h5 class="spacing_form">URL ảnh mô tả 3</h5>
              <input class="mt-2" type="file" accept=".jpg,.png,.jpeg" />
            </div>
          </div>
        </div>
      </div>`;

    $("#themMauMoi").append(colorBlock); // Thêm vào div #themMau
  });
});
