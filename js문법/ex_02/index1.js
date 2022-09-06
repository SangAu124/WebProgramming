function check(){
  const userid = document.getElementById('userid');
  const birthday = document.getElementById('birthday');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');

  if(userid.value.length==0){
    alert("아이디를 입력하세요.");
    return false;
  }
  if(isNaN(birthday.value) || birthday.value.length != 6){
    alert("올바른 생년월일을 입력하세요.");
    return false;
  }
  if(password.value.length < 4) {
    alert("비밀번호는 4글자이상 입력하세요.");
    return false;
  }
  if(password2.value != password.value){
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }
  return true;
}