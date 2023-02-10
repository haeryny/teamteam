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

<div class="tab">
    <button class="tablinks" onclick="openCity(event, 'Instructions')">General</button>
    <button class="tablinks" onclick="openCity(event, 'Back/Biceps')">Exercise</button>
    <button class="tablinks" onclick="openCity(event, 'Chest/Triceps')">Dieting</button>
    <button class="tablinks" onclick="openCity(event, 'Shoulders/Abs')">Conditions</button>
</div>



<html>
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
  <label for="entry-title" class="journal-label">New Journal Entry</label>
                    <p class="description">Name Idea: Funny Event that happened today</p>
                    <input type="text" name="entry-title" id="entry-title" class="entry-text-title" placeholder="Name of entry "/>
                    
  <!-- Date -->
  <label for="entry-title" class="journal-label">Date</label>
                    <input type="text" name="entry-title" id="entry-title" class="date" placeholder="Date "/>

  <!-- Mood, this is where the user enters in their mood through a slider and the emojis change -->
  <label for="entry-title" class="journal-label">Dog's Mood Rating</label>
                    <p class="description">Rate your dog's mood on a scale from 1-10 :)</p>
                    <div class="slidecontainer">
                      <p id="output" class="output">5</p>
                      <input type="range" min="1" max="10" value="5" class="slider" id="mood">
                    </div>

  <!-- These are line breaks to make the interface more aesthetically pleasing -->
  <br><br>
                    
  <!-- Here's the main section of the journal, where the user writes about their day for the journal -->
  <label for="entry" class="journal-label">Journal about your dog's day here...</label>
                    <textarea name="daily-entry" id="entry" class="entry-text-box" placeholder="What happened to your dog today?"></textarea>

  <!-- Here the user can enter three gratitudes about their day to improve their social emotional health -->
  <label for="entry" class="journal-label">What did it eat today</label>
                    <p class="description">By putting down what they ate, you can track their diet. </p>
                    <textarea id="entry1" class="gratitude-text-box" placeholder="Breakfast"></textarea>
                    <textarea id="entry2" class="gratitude-text-box" placeholder="Lunch"></textarea>
                    <textarea id="entry3" class="gratitude-text-box" placeholder="Dinner"></textarea>

  <br><br>

  <br><br><br>

  <!-- Submit button -->
  <button class="btn-main entry-submit-btn" type="submit">Submit</button>
                </form>


  </div>


  </div>
      </div>
    </section>

  <!-- Here are all the journal entries that the user submitted -->
  <section class="section sectionEntryResults" id="entryResultsSection">
      <h2>Journal Entries</h2>
      <div class="container">
        <div class="container-row entryResultRow"></div>
      </div>
    </section>

  <script src="code.js"></script>
  </body>

