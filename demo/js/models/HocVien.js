// khai báo 1 lớp đối tượng(prototype), kiểu dữ liệu object
// lớp đối tượng:
// + các key luôn có this;
// + gán giá trị bằng giấu =;
// + các cặp key: value phân cách nhau bằng dấu chấm phẩy ;
function HocVien() {
  this.maHV = "";
  this.tenHV = "";
  this.loaiHV = "";
  this.diemToan = 0;
  this.diemHoa = 0;

  this.tinhDTB = function (diemToan, diemVan) {
    var dtb = 0;
    dtb = (diemToan + diemVan) / 2;
    return dtb;
  };
  this.xepLoai = function () {
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
  };
}
