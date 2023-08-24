// Thông tin của 1 học viên
// var hoTen = "Nam";
// var age = 8;
// var sdt = "0880778";
// var diemToan = 8;
// var diemLy = 4;
// var diemHoa = 5;
// function tinhDtb(d1, d2, d3) {
//   var dtb = (d1 + d2 + d3) / 3;
//   return dtb;
// }

//-----------------Lập trình huớng đối tượng(OOP)---------//
// tính chất của đối tượng:
// + tường minh về mặt ngữ nghĩa.(đưa biến và hàm về đúng vị trí của nó).
// + tính đóng gói: thuộc tính của đối tượng này thì phải thông qua đối tượng mới truy xuất tới được.

var hocVien = {
  // thuộc tính - property
  // key: value;
  maHV: 1,
  hoTen: "Nam",
  sdt: "09080765698",
  diemToan: 5,
  diemLy: 4,
  diemHoa: 6,

  //phương thức: function nằm bên trong object
  tinhDTB: function () {
    // void: hàm không có giá trị trả về
    // this đại diện cho object đang chứa function
    var dtb = (this.diemToan + this.diemLy + this.diemHoa) / 3;
    return dtb;
  },
  xepLoai: function () {},
};

console.log("hocVien: ", hocVien);
// truy xuất đến biến(thuộc tính) trong đối tượng: object.key hoặc object["key"]
console.log(hocVien.hoTen);
console.log(hocVien["hoTen"]);

// truy xuất tới hàm trong đối tượng(phương thức):  object.key() hoặc object["key"]();
console.log("dtb hv1", hocVien.tinhDTB());

var giangVien = {
  maGV: 2,
  hoTen: "ABC",

  // thêm phương thức hiển thị thông tin
  hienThiThongTin: function () {
    console.log(this.maGV + "-" + this.hoTen);
  },
};

console.log("giảng viên", giangVien.hoTen);
console.log();
giangVien.hienThiThongTin();

// khi this không nằm trong object thì this đại diện cho window
console.log(this.innerHeight, this.innerWidth);
