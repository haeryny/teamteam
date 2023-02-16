---

layout: single
title: Dogs for Adoption
tagline: "These homeless dogs need you!"
header:
  overlay_image: /assets/images/availabledogs.jpg
  caption: "Photo credit: [**Fine Art America**](https://fineartamerica.com/featured/various-dogs-horizontal-web-banner-susan-schmitz.html)"

---

<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>UID</th>
    <th>Breed</th>
    <th>Sex</th>
    <th>DOB</th>
    <th>Age</th>
    <th>Price</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<form action="https://haeryny.github.io/teamteam/tamagotchi/">
  <button type="submit">Return Home</button>

<script>
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");

  // prepare fetch options
  const url = "https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/";
  const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  // fetch the API
  fetch(url, options)
      // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors
      if (response.status !== 200) {
          const errorMsg = 'Database response error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
      }
      // valid response will have json data
      response.json().then(data => {
          console.log(data);
          for (let row in data) {
            // tr and td element id's to build out for each row
            const tr = document.createElement("tr");
            const name = document.createElement("td");
            const uid = document.createElement("td");
            const breed = document.createElement("td");
            const sex = document.createElement("td");
            const dob = document.createElement("td");
            const age = document.createElement("td");
            const price = document.createElement("td");
          
            // obtain data that is specific to the API
            name.innerHTML = data[row].name; 
            uid.innerHTML = data[row].uid; 
            breed.innerHTML = data[row].breed;
            sex.innerHTML = data[row].sex;
            dob.innerHTML = data[row].dob;
            age.innerHTML = data[row].age; 
            price.innerHTML = data[row].price;

            // add HTML to container
            tr.appendChild(name);
            tr.appendChild(uid);
            tr.appendChild(breed);
            tr.appendChild(sex);
            tr.appendChild(dob);
            tr.appendChild(age);
            tr.appendChild(price);

            resultContainer.appendChild(tr);
          }
      })
  })
  // catch fetch errors (ie ACCESS to server blocked)
  .catch(err => {
    console.error(err);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = err;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  });
</script>


<script>
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
</script>




