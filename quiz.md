
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog Matcher Quiz</title>
</head>

<body>
    <div class="container">
        <div id="game" class="justify-center flex-column">
            <h2 id="question">What personality do you want your dog to have?</h2>
            <div class="choice-container">
                <small class="choice-prefix">A</small>
                <small class="choice-text" data-number="1">Choice 1</small>
            </div>
            <div class="choice-container">
                <small class="choice-prefix">B</small>
                <small class="choice-text" data-number="2">Choice 2</small>
            </div>
            <div class="choice-container">
                <small class="choice-prefix">C</small>
                <small class="choice-text" data-number="3">Choice 3</small>
            </div>
            <div class="choice-container">
                <small class="choice-prefix">D</small>
                <small class="choice-text" data-number="4">Choice 4</small>
            </div>
        </div>
    </div>
</body>



<style>

  .choice-container {
    display: flex;
    margin-bottom: 0.5rem;
    width: 100%;
    font-size: 1.8rem;
    border: 0.1rem solid rgb(86, 165, 235, 0.25);
    background-color: white;
  }

  .choice-container:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }

  .choice-prefix {
    padding: 1.5rem 2.5rem;
    background-color: #56a5eb;
    color: white;
  }

  .choice-text {
    padding: 1.5rem;
    width: 100%;
  }

</style>

<script>

  const question = document.getElementById('question');
  const choices = Array.from(document.getElementsByClassName('choice-text'));
  const progressText = document.getElementById('progressText');
  const scoreText = document.getElementById('score');
  const progressBarFull = document.getElementById('progressBarFull');
  const loader = document.getElementById('loader');
  const game = document.getElementById('game');
  const MAX_QUESTIONS = 3;
  let currentQuestion = {};
  let acceptingAnswers = false;
  let score = 0;
  let questionCounter = 0;
  let availableQuestions = [];

  let questions = [
      {
          question: "What size dog do you want?",
          choice1: "Small",
          choice2: "Medium",
          choice3: "Big",
          choice4: "No preference",
      },
      {
          question: "What personality do you want your dog to have?",
          choice1: "Playful",
          choice2: "Lazy",
          choice3: "Energetic",
          choice4: "Loyal",
      }
  ];

  startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions)
    getNewQuestion();
  }; 

  getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerHTML = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
  };

  choices.forEach((choice) => {
      choice.addEventListener('click', (e) => {
          if (!acceptingAnswers) return;

          acceptingAnswers = false;
          const selectedChoice = e.target;
          const selectedAnswer = selectedChoice.dataset['number'];
          console.log(selectedAnswer);
          getNewQuestion(); 
      });
  });

  startGame();
  console.log(choices)

  
</script>