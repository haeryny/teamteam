const form = document.getElementById('diagnosis-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page from reloading on form submit

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
    const response = document.querySelector(`input[name="${curr_sym}"]:checked`).value;
    
    if (response === "yes") {
      correctsymp.splice(correct_symp_idx, 0, curr_sym);
      correct_symp_idx += 1;
    }
  }

  const covid_symp_counter = correctsymp.filter(sym => [a, b, c, d, e].includes(sym)).length;
  const flu_symp_counter = correctsymp.filter(sym => [f, g, h, i].includes(sym)).length;
  const strep_symp_counter = correctsymp.filter(sym => [j, k, l].includes(sym)).length;
  const depression_symp_counter = correctsymp.filter(sym => [m, n, o].includes(sym)).length;

  if (correctsymp.length === 0) {
    const resultEl = document.getElementById('diagnosis-result');
    resultEl.innerHTML = "You do not have any illnesses!";
  }

  const diagnoser_list = [covid_symp_counter, flu_symp_counter, strep_symp_counter, depression_symp_counter];
  let diagnoser_max = 0;

  for (let index = 0; index < diagnoser_list.length; index++) {
    if (diagnoser_max < diagnoser_list[index]) {
      diagnoser_max = diagnoser_list[index];
    }
  }

  const resultEl = document.getElementById('diagnosis-result');
  if (diagnoser_max === covid_symp_counter) {
    resultEl.innerHTML = "You might have COVID-19. Quarantine in your home and do not see other people.";
  }

  if (diagnoser_max === flu_symp_counter) {
    resultEl.innerHTML = "You might have the stomach flu. Take some Tylenol and drink hot water. If you do not completely heal in 1 week, seek help from a doctor.";
  }

  if (diagnoser_max === strep_symp_counter) {
    resultEl.innerHTML = "You might have strep throat. Drink lots of hot water and gargle salt water. If it does not heal in 3 days, consult a doctor.";
  }

  if (diagnoser_max === depression_symp_counter) {
    resultEl.innerHTML = "You might have depression.";

  }            





  