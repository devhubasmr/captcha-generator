let captchaBox = document.querySelector('.captcha input');
let refreshBtn = document.querySelector('.refresh');
let captchaInputBox = document.querySelector('.captch_input input');
let answer = document.querySelector('.answer');
let submitButton = document.querySelector('.button');
var captch = document.getElementById('captch');

let captchaText = null;

const generateCaptcha = () =>{
    const randomString = Math.random().toString(36).substring(2, 9);
    const randomStringArray = randomString.split('');
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join('   ');
    captchaBox.value = captchaText;
    console.log(captchaText);
};

const refreshBtnClick = () =>{
    generateCaptcha();
    captchaBox.value = '';
    captchaKeyUpValidate();
};


const captchaKeyUpValidate = () =>{
    submitButton.classList.toggle('disabled', !captchaInputBox.value);
    if (!captchaInputBox.value) answer.classList.remove('active');

};

const submitBtnClick = () =>{
    captchaText = captchaText
    .slipt('')
    .filter((char) => char !== ' ')
    .join('');
    answer.classList.add('active');

    if (captchaInputBox.value === captchaText){
        answer.innerText = 'Entered captch is correct ✅';
        answer.style.color = "#0277bd";
        captch.value = "";

    }else{
        answer.innerText = 'Entered captch is not correct ❌';
        answer.style.color = "#ff2525";
        generateCaptcha();
        captch.value = '';

    }
};

refreshBtn.addEventListener('click', refreshBtnClick);
captchaInputBox.addEventListener('keyup', captchaKeyUpValidate);
submitButton.addEventListener('click', submitBtnClick);

generateCaptcha();