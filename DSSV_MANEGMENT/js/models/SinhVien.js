function SinhVien(
  _maSV,
  _tenSV,
  _email,
  _matKhau,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.email = _email;
  this.matKhau = _matKhau;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;

  //method
  this.tinhDTB = function () {
    var dtb = 0;
    return (dtb = (this.diemToan + this.diemLy + this.diemHoa) / 3).toFixed(1);
  };
}
