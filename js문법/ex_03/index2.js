function check(){
    const genderQuery = 'input[name="gender"]:checked';
    const gender = document.querySelector(genderQuery);
    if(gender==null){
        alert("성별을 선택해주세요.");
        return false;
    }

    const itemQuery = 'input[name="item"]:checked';
    const items = document.querySelectorAll(itemQuery);
    if(items.length==0){
        alert("신청항목을 선택해주세요.");
        return false;
    } else {
        alert(`${items.length}개 신청합니다.`);
    }
    return true;
}