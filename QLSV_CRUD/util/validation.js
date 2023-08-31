function kiemTraRong(value, idErr, message) {
  if (value.trim() === "") {
    document.querySelector(idErr).innerHTML = message;
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    return true;
  }
}

function kiemTraEmail(value, idErr, message) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isEmail = re.test(value);
  if (isEmail) {
    document.querySelector(idErr).innerHTML = "";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    return false;
  }
}

// + kiểm tra tên sv chỉ được nhập chữ.
// + kiểm tra mật khẩu theo quy tắc mà bạn muốn
// + kiểm tra các input điểm chỉ được nhập số.
// + kiểm tra độ dài(mk chỉ từ 6~10 kí tự )
