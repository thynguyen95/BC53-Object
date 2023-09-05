var dssv = [];
const DSSV_LOCAL = "DSSV_LOCAL";
// khi user load trang => lấy dữ liệu từ localStorage

var jsonData = localStorage.getItem(DSSV_LOCAL);
if (jsonData != null) {
  // JSON.parse(jsonData) => array
  // convert array cũ ( lấy localStorage ) => không có key tinhDTB() => khi lưu xuống bị mất => khi lấy lên ko còn => convert thành array mới
  dssv = JSON.parse(jsonData).map(function (item) {
    // item : phần tử của array trong các lần lặp
    // return của map()
    return new SinhVien(
      item.maSV,
      item.tenSV,
      item.email,
      item.matKhau,
      item.diemToan,
      item.diemLy,
      item.diemHoa
    );
  });
  console.log("dssv", dssv);
  renderDSSV(dssv);
}

function themSV() {
  var sv = layThongTinTuForm();
  //   push(): thêm phần tử vào array

  // kiểm tra khi tất cả input hợp lệ thì mới thêm sv

  // kiểm tra mã
  var isValid =
    kiemTraRong(sv.maSV, "#spanMaSV", "Mã sinh viên không được để trống !") &&
    kiemTraTrung(sv.maSV, dssv, "#spanMaSV", "Mã sinh viên đã tồn tại") &&
    kiemTraDoDai(
      sv.maSV,
      "#spanMaSV",
      4,
      6,
      "Mã sinh viên phải từ 4~6 ký tự !"
    );

  // kiểm tra tên
  isValid &=
    kiemTraRong(
      sv.tenSV,
      "#spanTenSV",
      "Tên sinh viên không được để trống !"
    ) && kiemTraChuoi(sv.tenSV, "#spanTenSV", "Tên sinh viên phải là chữ !");

  // kiểm tra định dạng email
  isValid &=
    kiemTraRong(sv.email, "#spanEmailSV", "Email không được để trống !") &&
    kiemTraEmail(sv.email, "#spanEmailSV", "Email không đúng định dạng !");

  // kiểm tra mật khẩu
  isValid &=
    kiemTraRong(sv.email, "#spanMatKhau", "Mật khẩu không được để trống !") &&
    kiemTraEmail(
      sv.email,
      "#spanMatKhau",
      "Mật khẩu phải có 8 đến 20 ký tự, trong đó có ít nhất một chữ thường, một chữ hoa, một chữ số và một ký tự đặc biệt"
    );

  // kiểm tra các input điểm chỉ được nhập số. khi không nhập mặc định input nhận 0 do ép kiểu khi lấy giá trị từ form.
  isValid &=
    kiemTraSo(sv.diemToan, "#spanToan", "Điểm chỉ được nhập số !") &
    kiemTraSo(sv.diemLy, "#spanLy", "Điểm chỉ được nhập số !") &
    kiemTraSo(sv.diemHoa, "#spanHoa", "Điểm chỉ được nhập số !");

  if (isValid) {
    dssv.push(sv);
    // convert data
    let dataJson = JSON.stringify(dssv);
    // lưu vào localStorage
    localStorage.setItem(DSSV_LOCAL, dataJson);
    //   render dssv lên table
    renderDSSV(dssv);
    //   tbodySinhVien
    resetForm();
  }
}

function xoaSV(id) {
  // splice: cut ,slice: copy
  var viTri = -1;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      viTri = i;
    }
  }
  if (viTri != -1) {
    // nếu tìm thấy vị trí thì xoá
    //   splice ( vị trí, số lượng)
    dssv.splice(viTri, 1);
    renderDSSV(dssv);
  }
}

function suaSV(id) {
  var viTri = dssv.findIndex(function (item) {
    return item.maSV == id;
  });

  // show thông tin lên form
  var sv = dssv[viTri];
  document.getElementById("txtMaSV").value = sv.maSV;
  document.getElementById("txtTenSV").value = sv.tenSV;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.diemToan;
  document.getElementById("txtDiemLy").value = sv.diemLy;
  document.getElementById("txtDiemHoa").value = sv.diemHoa;
}

function capNhatSV() {
  //  layThongTinTuForm() => return object sv
  var sv = layThongTinTuForm();

  var viTri = dssv.findIndex(function (item) {
    return item.maSV == sv.maSV;
  });

  dssv[viTri] = sv;

  renderDSSV(dssv);
}

function resetForm() {
  document.getElementById("formQLSV").reset();
}

//tìm kiếm
document.querySelector("#btnSearch").onclick = function () {
  var textSearch = document.querySelector("#txtSearch").value?.toLowerCase();
  var result = [];

  if (textSearch.length > 0) {
    result = dssv.filter(function (sv) {
      return sv.tenSV.toLowerCase().includes(textSearch);
    });

    renderDSSV(result);
  } else {
    renderDSSV(dssv);
  }
};
