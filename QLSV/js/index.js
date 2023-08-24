// tạo 1 object
var sinhVien = {
  maSinhVien: "",
  tenSinhVien: "",
  loaiSinhVien: "",
  diemToan: 0,
  diemVan: 0,

  //method
  //   tinhDTB: function () {
  //     var dtb = 0;
  //     dtb = (this.diemToan + this.diemVan) / 2;
  //     return dtb;
  //   },
  tinhDTB: function (diemToan, diemVan) {
    var dtb = 0;
    dtb = (diemToan + diemVan) / 2;
    return dtb;
  },
  xepLoai: function () {
    // xác định input: dtb
    var loaiSV = "";
    var dtb = this.tinhDTB();

    if (dtb > 8) {
      this.loaiSinhVien = "giỏi";
    } else if (dtb > 5) {
      loaiSV = "khá";
    } else {
      loaiSV = "trung bình";
    }
    // xác định output: loại;
    return loaiSV;
  },
};

console.log(sinhVien);

function hienThiThongTin() {
  // xác định input: là thông tin người dùng nhập vào form
  sinhVien.maSinhVien = document.querySelector("#txtMaSV").value;
  sinhVien.tenSinhVien = document.querySelector("#txtTenSV").value;
  sinhVien.loaiSinhVien = document.querySelector("#loaiSV").value;
  sinhVien.diemToan = +document.querySelector("#txtDiemToan").value;
  sinhVien.diemVan = +document.querySelector("#txtDiemVan").value;

  console.log("sinhVien", sinhVien);
  console.log("dtb", sinhVien.tinhDTB());

  //   gán giá trị từ form lên giao diện
  document.querySelector("#spanMaSV").innerHTML = sinhVien.maSinhVien;
  document.querySelector("#spanTenSV").innerHTML = sinhVien.tenSinhVien;
  document.querySelector("#spanLoaiSV").innerHTML = sinhVien.loaiSinhVien;

  //   document.querySelector("#spanDTB").innerHTML = sinhVien.tinhDTB();
  document.querySelector("#spanDTB").innerHTML = sinhVien.tinhDTB(
    sinhVien.diemToan,
    sinhVien.diemVan
  );
  document.querySelector("#spanXepLoai").innerHTML = sinhVien.xepLoai();
}
