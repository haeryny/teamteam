    /* eslint-disable */

// Journal Entry Form
// Here is getting all the variables and content from the journal entry form

const entryForm = document.querySelector("#entryForm");
const entryResultsSection = document.querySelector("#entryResultsSection");
const entryResultRow = document.querySelector(".entryResultRow");


const getEntryTitle = document.getElementsByClassName("entry-text-title");
const getEntryText = document.getElementsByClassName("entry-text-box");
const getEntryDate = document.getElementsByClassName("date");
const getEntryMood = document.getElementById("output");
const getEntry1 = document.getElementById("entry1");
const getEntry2 = document.getElementById("entry2");
const getEntry3 = document.getElementById("entry3");
const getEntryGratitudes = [getEntry1, getEntry2, getEntry3];


// This adds the journal entry to the list
function addEntryToDom(event) {
        event.preventDefault();

        const heading = document.createElement("h2");
        heading.className = "heading-results";
        entryResultRow.insertAdjacentElement("beforebegin", heading)

        // Adding Div
        const entryDiv = document.createElement("div");
        entryDiv.className = "single-entry-div";
        entryResultRow.appendChild(entryDiv);

        // Add entry title
        const entryHeading = document.createElement("h3");
        entryHeading.className = "single-entry-heading";
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        // Add entry date
        const entryDate = document.createElement("h4");
        entryDate.className = "single-entry-date";
        entryDate.textContent = getEntryDate[0].value;
        entryDiv.appendChild(entryDate);

        // Add mood rating
        const entryMood = document.createElement("h5");
        entryMood.className = "single-entry-date";
        entryMood.textContent = "Mood: " + getEntryMood.innerText;
        entryDiv.appendChild(entryMood);

        // Adding journal gratitudes
        const entryGratitudes = document.createElement("p");
        entryGratitudes.className = "single-entry-date";
        entryGratitudes.textContent = "Gratitudes: " + getEntryGratitudes[0].value + ", " + getEntryGratitudes[1].value + ", " + getEntryGratitudes[2].value;
        entryDiv.appendChild(entryGratitudes);

        // Adding journal body
        const entryParagraph = document.createElement("p");
        entryParagraph.className = "single-entry-text";
        entryParagraph.textContent = getEntryText[0].value;
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = "";
}

// When the submit button is clicked, the addEntryToDom function will be executed
entryForm.addEventListener("submit", addEntryToDom);

// Collapsible enter a new journal entry
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Gratitude collapsible
var coll = document.getElementsByClassName("grat-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Here's the mood slider
var slider = document.getElementById("mood");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value;
  output = slider.value;
  document.getElementById("output").innerHTML = output;
  // Change the emoji based on the value
  if (output == 1) {
    document.getElementById("output").innerHTML = output + " 😢";
  }
  else if (output == 2) {
    document.getElementById("output").innerHTML = output + " 😖";
  }
  else if (output == 3) {
    document.getElementById("output").innerHTML = output + " 😔";
  }
  else if (output == 4) {
    document.getElementById("output").innerHTML = output + " 🙁";
  }
  else if (output == 5) {
    document.getElementById("output").innerHTML = output + " 😶";
  }
  else if (output == 6) {
    document.getElementById("output").innerHTML = output + " 😖";
  }
  else if (output == 7) {
    document.getElementById("output").innerHTML = output + " 🙂";
  }
  else if (output == 8) {
    document.getElementById("output").innerHTML = output + " 😀";
  }
  else if (output == 9) {
    document.getElementById("output").innerHTML = output + " 😁";
  }
  else {
    document.getElementById("output").innerHTML = output + " 🤑";
  }
}

// API dogimage
function dogimage() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '217acfa59emsh9a56b5c7ec9c672p11520bjsnbe23d137f1c8',
      'X-RapidAPI-Host': 'placedog.p.rapidapi.com'
    }
  };
  
  fetch('https://placedog.p.rapidapi.com/300/200', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
