function renderDSSV(dssv) {
  console.log("dssv: ", dssv);
  var contentHTML = "";
  for (var i = 0; i < dssv.length; i++) {
    var sinhVien = dssv[i];
    var contentTr = `
    <tr>
      <td>${sinhVien.maSV}</td>
      <td>${sinhVien.tenSV}</td>
      <td>${sinhVien.email}</td>
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

    contentHTML += contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function layThongTinTuForm() {
  // lấy thông tin từ form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = +document.getElementById("txtDiemToan").value;
  var ly = +document.getElementById("txtDiemLy").value;
  var hoa = +document.getElementById("txtDiemHoa").value;

  return new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);
}
