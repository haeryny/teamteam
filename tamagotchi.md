---

layout: home
title: Diagnosis 🩺
header:
  overlay_image: /assets/images/grass dog.jpeg
  caption: "[🐶](https://tractive.com/blog/en/safety/grass-awns-can-be-deadly-dangerous-for-your-dog-2)" 

---

<p style="font-family: Monaco;">Does your dog have concerning symptoms?</p>
<p style="font-family: Monaco;">Click the link below to get a diagnosis</p>

[Diagnosis](diagnosis.html)






<p style="font-family: Monaco;">Enter a breed below to get their health conditions</p>

<form>
  <label for="breed">Breed:</label>
  <input type="text" id="breed" name="breed"><br><br>
  <input type="button" value="Submit" onclick="getDogInfo()">
</form>

<div id="result"></div>

<script>
  function getDogInfo() {
    var breed = document.getElementById("breed").value;
    var url = "https://api.thedogapi.com/v1/breeds/search?q=" + breed;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var breedId = data[0].id;
        var breedName = data[0].name;
        var breedTemperament = data[0].temperament;
        var breedLifeSpan = data[0].life_span;

        var result = document.getElementById("result");
        result.innerHTML = "<p><b>" + breedName + "</b></p>" +
          "<p><b>Temperament:</b> " + breedTemperament + "</p>" +
          "<p><b>Life span:</b> " + breedLifeSpan + "</p>";
      })
      .catch(error => {
        var result = document.getElementById("result");
        result.innerHTML = "<p>Error: Breed not found</p>";
      });
  }
</script>

<p style="font-family: Monaco;">Click the link below to search our dogs' health conditions</p>

[Health Backround](class.html)


