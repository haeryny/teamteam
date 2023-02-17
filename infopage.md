---
title: How to Take Care of Your Dog
layout: single
tagline: "Treat your bud"
classes: wide
header:
  overlay_image: /assets/images/doctor.jpeg
  caption: "Photo credit: [**Live Material **](https://www.livescience.com/facts-about-dogs)"
  actions:
    - label: "Donate"
      url: "https://www.nationalhumanesociety.org/donations-helping-animals?gclid=Cj0KCQiA_bieBhDSARIsADU4zLevTGhcYmgdFMD1zp4eVCv6sy3HWt4q7cQZ24-GJ_OaOdyE9ubzYSwaAqajEALw_wcB"
---
<html>
<body>

<div class="tab">
    <button class="tablinks" onclick="openCity(event, 'Classes for Dog Training')">Classes for Dog Training</button>
    <button class="tablinks" onclick="openCity(event, 'Excercise')">Exercise</button>
    <button class="tablinks" onclick="openCity(event, 'Dieting')">Dieting</button>
    <button class="tablinks" onclick="openCity(event, 'Conditions')">Conditions</button>
    <button class="tablinks" onclick="openCity(event, 'Journal')">Journal</button>
</div>

<div id="Classes for Dog Training" class="tabcontent">
    <h3>Dog Training</h3>
    <p>Knowing how to train your dog is very important! That is why this shows the available classes for learning how to train your dog.</p>
    <input type="button" value="Generate Table" onclick="GenerateTable()" />
    <hr />
    <div id="dvTable"></div>
    <script>
    function GenerateTable() {
//Build an array containing Customer records.
        var customers = new Array();
        customers.push(["Date", "Time", "Location", "Class Name"]);
        customers.push(["2/23/23", "10:00", "4s Ranch", "Small Dogs"]);
        customers.push(["2/24/23", "12:00", "San Diego", "Medium Dogs"]);
        customers.push(["2/25/23", "8:00", "Poway", "Big Dogs"]);
        customers.push(["2/26/23", "11:00", "Los Angeles", "Large Dogs"]);
//Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
//Get the count of columns.
        var columnCount = customers[0].length;
//Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }
 //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }
 var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }
  </script>

</div>

<div id="Excercise" class="tabcontent">
    <h3>Excercise</h3>
    <p>Excercise for your dog is very important!</p>
    <hr>
    <p>Each and every dog needs their own unique excercise routine. Mostly bigger dogs need more walks and runs while smaller dogs are allowed to rest more.</p>
    <p>Bigger Dogs</p>
    <ul>
      <li>Five to six walks a day: after breakfast, lunch, dinner</li>
      <li>Three runs a day (playing fetch is also very good)</li>
      <li>If accessible, going swimming</li>
    </ul>
    <p>Smaller Dogs</p>
    <ul>
      <li>Two to four walks a day: after breakfast, lunch, dinner</li>
      <li>One run a day (playing fetch is also very good)</li>
      <li>If accessible, going swimming</li>
    </ul>
</div>

<div id="Dieting" class="tabcontent">
    <h3>Dieting</h3>
    <p>Your dog's diet is also very crucial.</p>
    <hr>
    <p>Each and every dog has different things it can eat. </p>
    <p>Absolutely Cannot Eat</p>
    <ul>
      <li>Chocolate</li>
      <li>Fruit</li>
    </ul>
    <p>Reccomended to Eat</p>
    <ul>
      <li>Kibble</li>
      <li>Meat</li>
      <li>Eggs</li>
    </ul>
</div>

<div id="Conditions" class="tabcontent">
    <h3>Conditions</h3>
    <p>Make sure to remember your dog's conditions and to give medicine by following instructions from the vet. </p>
</div>

<div id="Journal" class="tabcontent">
    <body> 
    <header>
      <!-- Pressing Submit will change the title of the journal to [insert name]'s Journal to make it more personal -->
      <h1 class="title" id="journal-name">My Dog's Journal</h1>
    </header>

  <!-- Create New Journal Entry Section -->
  <section class="section journal-section">
      <div class="container">
        <div class="container-row container-row-journal">
          <div class="container-item container-item-journal">
                
  <form id="entryForm" action="">

  <!-- Journal Entry Name -->
  <label for="entry-title" class="journal-label"></label>
                    <p class="description">Name Idea: Funny Event that happened today</p>
                    <input type="text" name="entry-title" id="entry-title" class="entry-text-title" placeholder="Name of entry "/>
                    
  <!-- Date -->
  <label for="entry-title" class="journal-label">Date</label>
                    <input type="text" name="entry-title" id="entry-title" class="date" placeholder="Date "/>

  <br><br>
                    
  <!-- Here's the main section of the journal, where the user writes about their dog's day for the journal -->
  <label for="entry" class="journal-label">Journal about your dog's day here...</label>
                    <textarea name="daily-entry" id="entry" class="entry-text-box" placeholder="What happened to your dog today?"></textarea>

  <!-- Here the user can enter three meals that their dog ate -->
  <label for="entry" class="journal-label">What did it eat today</label>
                    <p class="description">By putting down what they ate, you can track their diet. </p>
                    <textarea id="entry1" class="gratitude-text-box" placeholder="Breakfast"></textarea>
                    <textarea id="entry2" class="gratitude-text-box" placeholder="Lunch"></textarea>
                    <textarea id="entry3" class="gratitude-text-box" placeholder="Dinner"></textarea>

  <br><br>

  <!-- This is an API that generates a random dog fact -->
  <label for="entry" class="journal-label">Here are some dog facts!</label>
                     <button onclick="myFunction()">Click me</button>
    <p id="demo"></p>
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Dogs can smell thousands of times better than humans. Their noses have millions more scent receptors.";
      }
    </script>

  <br><br><br>

  <br><br>
  <div>
  <!-- Submit button -->
  <button class="btn-main entry-submit-btn" type="submit">Submit</button>

  <!-- Here are all the journal entries that the user submitted -->
  <section class="section sectionEntryResults" id="entryResultsSection">
      <h2>Journal Entries</h2>
      <div class="container">
        <div class="container-row entryResultRow"></div>
      </div>
    </section>

  <script>
          /* eslint-disable */

      // Journal Entry Form
      // Here is getting all the variables and content from the journal entry form

      const entryForm = document.querySelector("#entryForm");
      const entryResultsSection = document.querySelector("#entryResultsSection");
      const entryResultRow = document.querySelector(".entryResultRow");

      const getEntryTitle = document.getElementsByClassName("entry-text-title");
      const getEntryText = document.getElementsByClassName("entry-text-box");
      const getEntryDate = document.getElementsByClassName("date");
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

        // Adding journal gratitudes
        const entryGratitudes = document.createElement("p");
        entryGratitudes.className = "single-entry-date";
        entryGratitudes.textContent = "Meals: " + getEntryGratitudes[0].value + ", " + getEntryGratitudes[1].value + ", " + getEntryGratitudes[2].value;
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

      // Dog Fact Generator
      function dogGen() {
          const options = {
	    method: 'GET',
	    headers: {
    		'X-RapidAPI-Key': '217acfa59emsh9a56b5c7ec9c672p11520bjsnbe23d137f1c8',
	    	'X-RapidAPI-Host': 'dogs6.p.rapidapi.com'
	    }
    };

    fetch('https://dogs6.p.rapidapi.com/facts', options)
	    .then(dogresponse => dogresponse.json())
	    .then(dogresponse => console.log(dogresponse))
	    .catch(err => console.error(err));
      }
  </script>

</div>



<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>




