// หากต้องการเก็บพารามิเตอร์เฉพาะข้อ 1, 2, และ 5
const allowedQuestions = [1, 2, 5];

const answers = document.querySelectorAll('.answer');
answers.forEach(answer => {
    answer.addEventListener('click', () => {
        const param = new URLSearchParams(new URL(answer.href).search).get('a');
        const currentQuestionNumber = parseInt(answer.closest('.question').id.replace('question', ''));
        
        // ตรวจสอบว่าเป็นข้อที่ต้องการเก็บพารามิเตอร์หรือไม่
        if (allowedQuestions.includes(currentQuestionNumber)) {
            localStorage.setItem(`selectedAnswer${currentQuestionNumber}`, param);
        }

        // ถ้าเป็นข้อ 5 ให้ปริ้นผลลัพธ์และไปยังเพจถัดไป
        if (currentQuestionNumber === 5) {
            const message = checkAnswers();
            console.log(message); // ปริ้นผลลัพธ์
            window.location.href = 'nextpage.html'; // เปลี่ยนไปยังเพจถัดไป
        } else {
            // เปลี่ยนไปยังเพจถัดไป
            window.location.href = `page${currentQuestionNumber + 1}.html`;
        }
    });
});

function checkAnswers() {
    const answer1 = localStorage.getItem('selectedAnswer1');
    const answer2 = localStorage.getItem('selectedAnswer2');
    const answer5 = localStorage.getItem('selectedAnswer5');

    console.log('Answer 1:', answer1);
    console.log('Answer 2:', answer2);
    console.log('Answer 5:', answer5);

    let message;

    switch (answer1 + answer2 + answer5) {
        case 'abb':
        case 'abc':
        case 'bbb':
        case 'bbc':
        case 'cbb':
        case 'cbc':
        case 'dbb':
        case 'dbc':
            message = 'chocolate';
            break;
        case 'bca':
        case 'bcb':
        case 'bcc':
        case 'bcd':
        case 'dca':
        case 'dcb':
        case 'dcc':
        case 'dcd':
            message = 'apple pie';
            break;
        case 'aaa':
        case 'aad':
        case 'aba':
        case 'abd':
        case 'baa':
        case 'bad':
        case 'bba':
        case 'bbd':
        case 'caa':
        case 'cad':
        case 'cba':
        case 'cbd':
        case 'daa':
        case 'dad':
        case 'dba':
        case 'dbd':
        case 'aab':
        case 'aac':
        case 'bab':
        case 'bac':
        case 'cab':
        case 'cac':
        case 'dab':
        case 'dac':
            message = 'pineapple';
            break;
        case 'aca':
        case 'acb':
        case 'acc':
        case 'acd':
        case 'ada':
        case 'adb':
        case 'adc':
        case 'add':
        case 'cca':
        case 'ccb':
        case 'ccc':
        case 'ccd':
        case 'cda':
        case 'cdb':
        case 'cdc':
        case 'cdd':
        case 'bda':
        case 'bdb':
        case 'bdc':
        case 'bdd':
        case 'dda':
        case 'ddb':
        case 'ddc':
        case 'ddd':
            message = 'lychee';
            break;
        default:
            message = 'no answer';
    }

    return message;
}
