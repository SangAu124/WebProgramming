
function check() {
    const elementCompany = document.getElementById('company');
    const elementCEO = document.getElementById('CEO');
    const elementBusinessNum = document.getElementById('businessNum');
    const elementCEONum = document.getElementById('CEONum');
    const elementCustomerId = document.getElementById('customerId');
    const elementPassword = document.getElementById('password');
    const elementPasswordCheck = document.getElementById('passwordCheck');
    const elementWay = document.getElementById('way');
    const selected = document.querySelector('input[name="agree"]:checked');
    
    // 상호 검증
    if(elementCompany.value.length==0) {
        alert('상호를 입력 해주세요');
        return false;
    } else if(elementCompany.value.length>30) {
        alert('상호가 30자가 넘지 않도록 해주세요');
        return false;
    }
    // 대표자 검증
    if(elementCEO.value.length==0) {
        alert('대표자를 입력 해주세요');
        return false;
    } else if(elementCEO.value.length>10) {
        alert('대표자가 10자가 넘지 않도록 해주세요');
        return false;
    }
    // 사업자 등록 번호 검증
    if(elementBusinessNum.value.length==0) {
        alert('사업자 등록 번호를 입력 해주세요');
        return false;
    } else if(elementBusinessNum.value.length>10) {
        alert('사업자 등록 번호가 10자가 넘지 않도록 해주세요');
        return false;
    }
    // 대표 전화 검증
    if(elementCEONum.value.length==0) {
        alert('대표 전화를 입력 해주세요');
        return false;
    } else if(elementCEONum.value.length>20) {
        alert('대표 전화가 20자가 넘지 않도록 해주세요');
        return false;
    }
    // 거래처 Id 검증
    if(elementCustomerId.value.length==0) {
        alert('거래처 Id를 입력 해주세요');
        return false;
    } else if(elementCompany.value.length>30) {
        alert('거래처 Id가 30자가 넘지 않도록 해주세요');
        return false;
    }
    // 비밀번호 검증
    if(!elementPassword.value == elementPasswordCheck.value) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return false;
    } else if(elementPassword.value.length>15 || elementPassword.value.length<8) {
        alert('비밀번호는 8 ~ 15자 사이로 입력해주세요');
        return false;
    }
    // 처리방법
    

    // 동의 확인
    if(selected.value == "agree") {
        if(elementWay.value == "dir"){
            alert('즉시등록합니다.');
        } else if (elementWay.value == "rea") {
            alert('임시등록합니다.');
        }
        return true;
    } else if(selected.value == "disagree") {
        alert('정보제공에 동의해주세요.');
        return false;
    } else {
        alert('알 수 없는 이유로 등록에 실패했습니다.');
        return false;
    }
}