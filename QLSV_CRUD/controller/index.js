var dssv = new DSSV();

// lấy dữ liệu từ localStorage lúc user load trang
var dataJson = localStorage.getItem("DSSV");
console.log("dataJson: ", dataJson);
if (dataJson !== null) {
  // dssv.students = JSON.parse(dataJson);
  // console.log("dssv.students: ", dssv.students);

  // cách 1
  // for (var i = 0; i < dssv.students.length; i++) {
  //   // cách viết 1 :
  //   // var sv = dssv.students[i];
  //   // sv = new SinhVien(
  //   //   sv.maSV,
  //   //   sv.tenSV,
  //   //   sv.email,
  //   //   sv.matKhau,
  //   //   sv.ngaySinh,
  //   //   sv.khoaHoc,
  //   //   sv.diemToan,
  //   //   sv.diemLy,
  //   //   sv.diemHoa
  //   // );
  //   // dssv.students[i] = sv;

  // cách viết 2
  //   dssv.students[i] = new SinhVien(
  //     dssv.students[i].maSV,
  //     dssv.students[i].tenSV,
  //     dssv.students[i].email,
  //     dssv.students[i].matKhau,
  //     dssv.students[i].ngaySinh,
  //     dssv.students[i].khoaHoc,
  //     dssv.students[i].diemToan,
  //     dssv.students[i].diemLy,
  //     dssv.students[i].diemHoa
  //   );
  // }

  // cách 2
  dssv.students = JSON.parse(dataJson).map(function (item) {
    // item tương ứng với từng phần tử trong array
    return new SinhVien(
      item.maSV,
      item.tenSV,
      item.email,
      item.matKhau,
      item.ngaySinh,
      item.khoaHoc,
      item.diemToan,
      item.diemLy,
      item.diemHoa
    );
  });

  renderTable(dssv.students);
}

function getElm(selector) {
  return document.querySelector(selector);
}

function renderTable(listArr) {
  //listArr: là tham số có kiểu dữ liệu là 1 mảng
  // render table
  var htmlString = "";
  for (var i = 0; i < listArr.length; i++) {
    var sinhVien = listArr[i];
    htmlString += `<tr>
      <td>${sinhVien.maSV}</td>
      <td>${sinhVien.tenSV}</td>
      <td>${sinhVien.email}</td>
      <td>${sinhVien.ngaySinh}</td>
      <td>${sinhVien.khoaHoc}</td>
      <td>${sinhVien.tinhDTB()}</td>
      <td>
        <button class="btn btn-warning" onclick="suaSV('${
          sinhVien.maSV
        }')">Edit</button>
        <button class="btn btn-danger" onclick="xoaSV('${
          sinhVien.maSV
        }')">Delete</button>
      </td>
    </tr>`;
  }

  getElm("#tbodySinhVien").innerHTML = htmlString;
}

function resetForm() {
  getElm("#txtMaSV").value = "";
  getElm("#txtMaSV").disabled = false;
  getElm("#txtTenSV").value = "";
  getElm("#txtEmail").value = "";
  getElm("#txtPass").value = "";
  getElm("#txtNgaySinh").value = "";
  getElm("#txtDiemToan").value = "";
  getElm("#txtDiemLy").value = "";
  getElm("#txtDiemHoa").value = "";
  getElm("#khSV").value = "";
}

function layThongTinTuForm() {
  // lấy thông tin từ form
  var maSV = getElm("#txtMaSV").value;
  var tenSV = getElm("#txtTenSV").value;
  var email = getElm("#txtEmail").value;
  var matKhau = getElm("#txtPass").value;
  var ngaySinh = getElm("#txtNgaySinh").value;
  var khoaHoc = getElm("#khSV").value;
  var diemToan = Number(getElm("#txtDiemToan").value);
  var diemLy = +getElm("#txtDiemLy").value;
  var diemHoa = +getElm("#txtDiemHoa").value;

  // var sv = new SinhVien(
  //   maSV,
  //   tenSV,
  //   email,
  //   matKhau,
  //   ngaySinh,
  //   khoaHoc,
  //   diemToan,
  //   diemLy,
  //   diemHoa
  // );

  // return sv;

  return new SinhVien(
    maSV,
    tenSV,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  );
}

function themSV() {
  var sv = layThongTinTuForm();

  // kiểm tra khi tất cả input hợp lệ thì mới thêm sv

  // kiểm tra mã
  var valid = kiemTraRong(
    sv.maSV,
    "#spanMaSV",
    "Mã sinh viên không được để trống !"
  );

  // kiểm tra tên
  valid &= kiemTraRong(
    sv.tenSV,
    "#spanTenSV",
    "Tên sinh viên không được để trống !"
  );

  // kiểm tra định dạng email
  valid &=
    kiemTraRong(sv.email, "#spanEmailSV", "Email  không được để trống !") &&
    kiemTraEmail(sv.email, "#spanEmailSV", "Email không đúng định dạng !");

  console.log("valid", valid);
  if (valid) {
    dssv._themSinhVien(sv);
    console.log("dssv", dssv.students);

    // localStorage: nơi lưu trữ (chỉ chấp nhận json) - json là 1 kiểu dữ liệu
    // JSON.stringify: convert array to json
    var data = JSON.stringify(dssv.students);
    console.log("data: ", data);

    // lưu data xuống localStorage
    localStorage.setItem("DSSV", data);

    resetForm();
    renderTable(dssv.students);
  }
}

function xoaSV(maSV) {
  dssv._xoaSinhVien(maSV);
  renderTable(dssv.students);
}

function suaSV(maSV) {
  var sv = dssv._layThongTinSinhVien(maSV); //{maSV, name:"",.. }
  if (sv) {
    getElm("#txtMaSV").value = sv.maSV;
    getElm("#txtMaSV").disabled = true;
    getElm("#txtTenSV").value = sv.tenSV;
    getElm("#txtEmail").value = sv.email;
    getElm("#txtPass").value = sv.matKhau;
    getElm("#txtNgaySinh").value = sv.ngaySinh;
    getElm("#txtDiemToan").value = sv.diemHoa;
    getElm("#txtDiemLy").value = sv.diemLy;
    getElm("#txtDiemHoa").value = sv.diemHoa;
    getElm("#khSV").value = sv.khoaHoc;
  }
}

function capNhatSinhVien() {
  var sv = layThongTinTuForm();

  dssv._capNhatSinhVien(sv);
  resetForm();
  renderTable(dssv.students);

  console.log("Sinh Vien Sau Khi Cap Nhat", sv);
}

// truthy & falsy
// var test = false;
// // nếu biến test nó đúng thì sẽ chạy vào if
// if (test) {
//   console.log("true");
// }

// var toan = 8;
// var ly = 7;
// var hoa = NaN;
// var dtb = (toan + ly + hoa) / 3;
// console.log("dtb: ", dtb);

// if (dtb) {
//   console.log("dtb", dtb);
// }
// console.log("ok");

//callback function: 1 hàm được truyền vào hàm khác gọi là callback

function sayHello(name) {
  console.log("hello", name);
}

function introduce(value, callback) {
  console.log("value", value);
  // thay vì gọi 1 hàm khác vào trực tiếp thì sẽ truyền thông qua tham số
  // sayHello(value);
  callback(value);
}

introduce("alice", function (name) {
  console.log("bai bai", name);
});

// toán tử toán học
// a = a + b;
// a += b;

// toán tử logic
// true & true  = true(1);
// true & true & 1 = true(1);
// valid &= true => valid = valid & false => false;
