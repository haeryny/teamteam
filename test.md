<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

.row {
  display: flex;
}

.column {
  flex: 1;
  padding: 5px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 200px;
  margin: auto;
  text-align: center;
  font-family: arial;
  justify-content: center;
  align-items: center;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #006400;
  text-align: center;
  cursor: pointer;
  width: 80%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>
</head>
<body>
  <div class="row">
    <div class="column">
      <div class="card">
        <section class="container content-section">
          <div class="shop-items">
            <div class="shop-item">
              <span class="shop-item-title">Joe</span>
            </div>
            <img class="shop-item-image" src="https://do31x39459kz9.cloudfront.net/storage/image/cc7c5dd6a09649e3bf5c6bca96b21daa-1670625496-1670625511-jpg/1024-0-" alt="Joe" width="160" height="120">
            <div class="shop-item-details">
              <span class="shop-item-price">$200</span>
              <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
            </div>
          </div>
        </section>
      </div>
      <div id="buttonsContainer"></div>
    </div>
    <div class="column">
      <div class="card">
        <section class="container content-section">
          <div class="shop-items">
            <div class="shop-item">
              <span class="shop-item-title">Bean</span>
            </div>
            <img class="shop-item-image" src="https://do31x39459kz9.cloudfront.net/storage/image/672cb9b41e7548f68316d4a328c772d2-1673989499-1673989524-jpg/1024-0-" alt="Bean" width="160" height="120">
            <div class="shop-item-details">
              <span class="shop-item-price">$180</span>
              <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>

<script>
const urls = [
  "https://flask.nighthawkcodingsociety.com/api/jokes/0",
  "https://flask.nighthawkcodingsociety.com/api/jokes/1",
  "https://flask.nighthawkcodingsociety.com/api/jokes/2",
  "https://flask.nighthawkcodingsociety.com/api/jokes/3"
];

const buttonNames = [ "Learn More", "Learn More"];

const numberOfButtons = 3;

// Loop through the number of buttons and create a button for each one
for (let i = 1; i <= buttonNames.length; i++) {
  const button = document.createElement("button");
  button.innerText = buttonNames[i - 1];
  button.id = 'button-' + i;
  button.setAttribute('index', i);
  button.addEventListener("click", buttonClicked(i));
  buttonsContainer.appendChild(button);
}

function buttonClicked(index) {  
  return function() {
    window.location.href = urls[index];
  }
}
</script>
</html>