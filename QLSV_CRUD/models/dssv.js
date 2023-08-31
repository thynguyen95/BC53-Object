function DSSV() {
  this.students = []; // chứa các đối tượng sinh viên
  // new Map, new Set
  // Phương thức thêm sinh viên, hàm này chỉ có chức năng duy nhất là thêm sinh viên
  this._themSinhVien = function (sv) {
    this.students.push(sv);
  };

  // Phương thức tìm vị trí sinh viên
  this._timViTriSinhVien = function (maSV) {
    /**
     * Tìm vị trí
     *   index = -1
     *  - Duyệt mảng => lấy từng object sinh vien
     *               => {maSV: 1, tenSV: Nguyen Van A.,...}
     *               => so sánh cái maSV trong object bằng maSV truyền vào
     *               => gán lại ví trí index = i , break;
     *               => không tìm thấy sinhVien => index = -1
     */
    var index = -1;

    // this.students= [{maSV: 31, name:...} , {maSV: 41, name :...}]
    for (var i = 0; i < this.students.length; i++) {
      var sv = this.students[i]; // {maSV: 1, tenSV: Nguyen Van A.,...}
      if (sv.maSV === maSV) {
        index = i;
        break;
      }
    }

    return index;
  };

  this._layThongTinSinhVien = function (maSV) {
    var index = this._timViTriSinhVien(maSV);
    if (index !== -1) {
      // students[index] : {maSV:1, name: "",...}
      var sv = this.students[index];
      return sv;
    }
  };

  // Sửa
  this._capNhatSinhVien = function (sinhVien) {
    // sinhVien: {maSV:"" , name:""}
    // tìm vị trí dựo vào
    var index = this._timViTriSinhVien(sinhVien.maSV);
    console.log("index: ", index);
    // lặp qua cái this.students và thay đổi giá trị mới... Các bạn về làm
    // this.students[index] lấy ra giá trị phần tử tại vị trí index trong mảng students
    // sau đó gán giá trị mới cho nó là sinhVien
    if (index !== -1) {
      this.students[index] = sinhVien;
    }
  };

  // Xoá
  this._xoaSinhVien = function (maSV) {
    var index = this._timViTriSinhVien(maSV);
    if (index !== -1) {
      // Xoá phần tử của mảng: dùng splice dựa vào vị trí và số lượng
      this.students.splice(index, 1);
    }
  };
}

// var quanLySV = new DSSV()
// var quanLySVGioi = new DSSV()
// var quanLySVngheo = new DSSV()
