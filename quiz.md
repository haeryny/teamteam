
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
                <small class="choice-test">Choice 1</small>
            </div>
            <div class="choice-container">
                <small class="choice-prefix">B</small>
                <small class="choice-test">Choice 2</small>
            </div>
            <div class="choice-container">
                <small class="choice-prefix">C</small>
                <small class="choice-test">Choice 3</small>
            </div>
            <div class="choice-container">
                <small class="choice-prefix">D</small>
                <small class="choice-test">Choice 4</small>
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
  padding: 6rem;
  width: 100%;
}

</style>