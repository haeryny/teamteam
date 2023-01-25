---
title: Furry Friend Finder
layout: single
tagline: "Find a fluffy buddy"
header:
  overlay_image: /assets/images/dog.jpeg
  caption: "Photo credit: [**Live Material **](https://www.livescience.com/facts-about-dogs)"
  actions:
    - label: "Donate"
      url: "https://www.nationalhumanesociety.org/donations-helping-animals?gclid=Cj0KCQiA_bieBhDSARIsADU4zLevTGhcYmgdFMD1zp4eVCv6sy3HWt4q7cQZ24-GJ_OaOdyE9ubzYSwaAqajEALw_wcB"
---

<script>
  p,
  label {
      font: 1rem 'Fira Sans', sans-serif;
  }

  input {
      margin: 0.4rem;
  }

</script>

<fieldset>
    <legend>Select a personality type:</legend>
    <div>
      <input type="radio" id="huey" name="drone" value="huey"
             checked>
      <label for="huey">Energetic</label>
    </div>
    <div>
      <input type="radio" id="dewey" name="drone" value="dewey">
      <label for="dewey">Lazy</label>
    </div>
    <div>
      <input type="radio" id="louie" name="drone" value="louie">
      <label for="louie">Aggressive</label>
    </div>
</fieldset>

