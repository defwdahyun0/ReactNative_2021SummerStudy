
// 이메일 판별 함수 1 (indexOf)
function checkEmail(email){
	indexOfFirst = email.indexOf('@');
	if(indexOfFirst == -1) console.log('이메일이 아닙니다.')
	else console.log('이메일이 맞습니다.')
}

checkEmail('gunhee21@gmail.com') // 이메일이 맞습니다
checkEmail('gunhee21$gmail.com') // 이메일이 아닙니다.

// 이메일 판별 함수 2 (정규식)
function checkEmail(email){
	var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;//이메일 정규식
	
	if(!emailRule.test(email)){            
		console.log("이메일이 아닙니다.")
	} else {
		console.log("이메일이 맞습니다.")
	}
}

checkEmail('gunhee21@gmail.com') // 이메일이 맞습니다
checkEmail('gunhee21$gmail.com') // 이메일이 아닙니다.