
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog Matcher Quiz</title>
</head>

<body>
    <div class="container">
        <div id="game" class="justify-center flex-column">
          <div id="hud">
            <div id="hud-item">
              <p class="hud-prefix">
              </p>
              <h1 class="hud-main-text" id="questionCounter">
              1/3
              </h1>
            </div>
          </div>
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

  #hud {
    display: flex;
    justify-content: space-between;
  }

  .hud-prefix {
    text-align: center;
    font-size: 2rem;
  }

  .hud-main-text {
    text-align: center;
    margin: 10px 0px 10px;
  }

  #hud-item {
    display: flex;
    text-align: center;
  }

  #game {
    padding: .5rem 2.25rem;
  }

  #question {
    font-size: 2rem;
    margin: 30px 0px 18px;
  }

  h1,
  h2,
  h3,
  h4 {
  }

  h1 {
    font-size: 1.5rem;
    color: #56a5eb;
  }

  h1 > span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  h2 {
    font-size: 4.2rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2.8rem;
    font-weight: 500;
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
  const MAX_QUESTIONS = 10;
  const questionCounterText = document.getElementById('questionCounter');
  let currentQuestion = {};
  let acceptingAnswers = false;
  let score = 0;
  let questionCounter = 0;
  let availableQuestions = [];
  let questionTotal = 0

  let questions = [
    // Update MAX_QUESTIONS when adding more
      {
          question: "Pick one that you're most likely to do on a night out?",
          choice1: "Sit in bed",
          choice2: "Play video games",
      },
      {
          question: "What would your friends describe you as?",
          choice1: "Quiet",
          choice2: "Loyal",
          choice3: "Fun",
          choice4: "Energetic",
      },
      {
          question: "What is your favorite color from these options?",
          choice1: "Black",
          choice2: "Blue",
          choice3: "Green",
          choice4: "Pink",
      },
      {
          question: "Favorite beverage?",
          choice1: "Water",
          choice2: "Tea/coffee",
          choice3: "Juice",
          choice4: "Combination of multiple drinks",
      },
      {
          question: "I am very social",
          choice1: "Completely disagree",
          choice2: "Somewhat disagree",
          choice3: "Somewhat agree",
          choice4: "Completely agree",
      },
      {
          question: "How much free time do you spend pursuing hobbies/interests?",
          choice1: "A lot",
          choice2: "A little bit",
          choice3: "Whenever I can",
          choice4: "I'm too busy",
      },
      {
          question: "I can make a plan and stay calm under pressure",
          choice1: "Thinking under pressure is easy",
          choice2: "I can take care of myself at the very least",
          choice3: "I can think but not make a good plan",
          choice4: "I stress out",
      },
      {
          question: "You are very sentimental",
          choice1: "Completely agree",
          choice2: "Somewhat agree",
          choice3: "Somewhat disagree",
          choice4: "Completely disagree",
      },
      {
          question: "I am organized",
          choice1: "Completely agree",
          choice2: "Somewhat agree",
          choice3: "Somewhat disagree",
          choice4: "Completely disagree",
      },
      {
          question: "How do you feel during presentations?",
          choice1: "Nervous breakdown",
          choice2: "A little shy",
          choice3: "Stumbles a little bit but ends good",
          choice4: "Confident",
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
    questionCounterText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`;
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
          let userAnswer = selectedChoice.dataset['number'];
          console.log(selectedAnswer);
          if (userAnswer == 1)  {
            questionTotal = questionTotal + 1
            console.log(questionTotal)
          }
          if (userAnswer == 2)  {
            questionTotal = questionTotal + 2
            console.log(questionTotal)
          }
          if (userAnswer == 3)  {
            questionTotal = questionTotal + 3
            console.log(questionTotal)
          }
          if (userAnswer == 4)  {
            questionTotal = questionTotal + 4
            console.log(questionTotal)
          }
          getNewQuestion(); 
    });
  });
   
  startGame();
  console.log(choices)

  fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/')
    .then((response) => response.json())
    .then((data) => console.log(data));

  
</script>