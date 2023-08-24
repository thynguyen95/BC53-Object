function themSV() {
  var maSV = document.querySelector("#txtMaSV").value;
  var tenSV = document.querySelector("#txtTenSV").value;
  var email = document.querySelector("#txtEmail").value;
  var matKhau = document.querySelector("#txtPass").value;
  var ngaySinh = document.querySelector("#txtNgaySinh").value;
  var khoaHoc = document.querySelector("#khSV").value;
  var diemToan = document.querySelector("#txtDiemToan").value;
  var diemLy = document.querySelector("#txtDiemLy").value;
  var diemHoa = document.querySelector("#txtDiemHoa").value;

  var sv = new SinhVien(
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
  console.log("sv: ", sv);
}
