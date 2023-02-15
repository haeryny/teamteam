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
console.log("Hi, I'm the diagnoser! Please answer the following 14 questions to receive a diagnosis for your illness.");

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

for (let index = 0; index < symptoms.length; index++) {
  const curr_sym = symptoms[index];
  console.log("Do you have a " + curr_sym + ", yes or no? ");

  const response = prompt();
  if (response === "yes") {
    correctsymp.splice(correct_symp_idx, 0, curr_sym);
    correct_symp_idx += 1;
  }
}

let covid_symp_counter = 0;

for (let index = 0; index < correctsymp.length; index++) {
  const curr_sym = correctsymp[index];
  if (curr_sym === a || curr_sym === b || curr_sym === c || curr_sym === d || curr_sym === e) {
    covid_symp_counter += 1;
  }
}

let flu_symp_counter = 0;

for (let index = 0; index < correctsymp.length; index++) {
  const curr_sym = correctsymp[index];
  if (curr_sym === f || curr_sym === g || curr_sym === h || curr_sym === i) {
    flu_symp_counter += 1;
  }
}

let strep_symp_counter = 0;

for (let index = 0; index < correctsymp.length; index++) {
  const curr_sym = correctsymp[index];
  if (curr_sym === j || curr_sym === k || curr_sym === l) {
    strep_symp_counter += 1;
  }
}

let depression_symp_counter = 0;

for (let index = 0; index < correctsymp.length; index++) {
  const curr_sym = correctsymp[index];
  if (curr_sym === m || curr_sym === n || curr_sym === o) {
    depression_symp_counter += 1;
  }
}

if (correctsymp.length === 0) {
  console.log("you do not have any illnesses!");
}

const diagnoser_list = [covid_symp_counter, flu_symp_counter, strep_symp_counter, depression_symp_counter];
let diagnoser_max = 0;

for (let index = 0; index < diagnoser_list.length; index++) {
  const curr_diagnoser = diagnoser_list[index];
  if (diagnoser_max < curr_diagnoser) {
    diagnoser_max = curr_diagnoser;
  }
}

if (diagnoser_max === covid_symp_counter) {
  console.log("

  </script>

