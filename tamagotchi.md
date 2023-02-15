---

layout: home
title: Diagnosis
header:
  overlay_image: /assets/images/grass dog.jpeg
  caption: "Photo credit: [**Joceln Chan**](https://tractive.com/blog/en/safety/grass-awns-can-be-deadly-dangerous-for-your-dog-2)" 

  actions:
    - label: "Studying Tips"
      url: "https://summer.harvard.edu/blog/top-10-study-tips-to-study-like-a-harvard-student/"

---

<script>
// Link the HTML element to the output
const output = document.getElementById("output");

// Display the title
output.innerHTML += "<h1>Diagnoser</h1>";

// Display the introduction text
output.innerHTML += "<p>Hi, I'm the diagnoser! Please answer the following 14 questions to receive a diagnosis for your illness.</p>";

// Define the symptoms
const a = "fever";
const b = "cough";
const c = "shortness of breath";
const d = "fatigue";
const e = "loss of taste/smell/apetite";
const f = "diarreha";
const g = "abdominal cramps";
const h = "nausea";
const i = "vomiting";
const j = "pain when swallowing";
const k = "tonsils pain";
const l = "sore throat";
const m = "angry outbursts";
const n = "no motivation, apathy";
const o = "trouble sleeping";

const symptoms = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];
const correctsymp = [];
let correct_symp_idx = 0;

// Ask questions and record the answers
for (let index = 0; index < symptoms.length; index++) {
  const curr_sym = symptoms[index];
  output.innerHTML += `<p>Do you have a ${curr_sym}, yes or no?</p>`;
  const response = prompt();
  
  if (response === "yes") {
    correctsymp.splice(correct_symp_idx, 0, curr_sym);
    correct_symp_idx += 1;
  }
}

// Count the number of symptoms for each illness
const covid_symp_counter = correctsymp.filter(sym => [a, b, c, d, e].includes(sym)).length;
const flu_symp_counter = correctsymp.filter(sym => [f, g, h, i].includes(sym)).length;
const strep_symp_counter = correctsymp.filter(sym => [j, k, l].includes(sym)).length;
const depression_symp_counter = correctsymp.filter(sym => [m, n, o].includes(sym)).length;

// Display the diagnosis
if (correctsymp.length === 0) {
  output.innerHTML += "<p>You do not have any illnesses!</p>";
}

let diagnoser_max = 0;
if (diagnoser_max < covid_symp_counter) {
  diagn


</script>