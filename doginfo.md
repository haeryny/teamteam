<p>YOUR NEW DOG'S INFO</p>

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

<script>
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");

  // prepare fetch options
  const url = "http://172.19.114.39:8086/api/users/";
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
            breed.innerHMTL = data[row].breed;
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