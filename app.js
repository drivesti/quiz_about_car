const quiz = [
  {
    question: '「カクカクシカジカ」というフレーズの自動車のCMを放映していたメーカーはどれ？',
    answers: [
      'ダイハツ',
      'スバル',
      '三菱',
      'トヨタ'
    ],
    correct: 'ダイハツ'
  },{
    question: '次のうち、駆動方式がFRであるのはどれ？',
    answers: [
      'HCR32 \n スカイライン',
      'AE111 \n カローラレビン',
      'BNR32 \n スカイライン',
      'HNR32 \n スカイライン'
    ],
    correct: 'HCR32 \n スカイライン'
  },{
    question: '次のうち、型式のアルファベットでレヴォーグ、WRXを表すのはどれ？',
    answers: [
      'B',
      'V',
      'G',
      'S'
    ],
    correct: 'V'
  },{
    question: '次のうち、ホンダのハイブリッドシステムはどれ？',
    answers: [
      'SPORT HYBRID i-MMD',
      'Active Hybrid',
      'e-SKYACTIV G',
      'EARTH DREAMS TECHNOLOGY'
    ],
    correct: 'SPORT HYBRID i-MMD'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



//クイズの問題文

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length; 
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  quizIndex++;
  if(quizIndex < quizLength) {
    setupQuiz();

  }else{
    //問題数がなければ
    window.alert('終了! あなたの正解数は' + score + '/' + quizLength + 'です！');
    document.location.reload();
  }
};

//ボタンクリックしたら正誤判定

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};
