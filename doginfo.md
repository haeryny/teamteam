<h1> Your New Dog's Info</h1>
<a href="https://haeryny.github.io/teamteam/availabledogs/" >Return</a>
<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>UID</th>
    <th>Breed</th>
    <th>Sex</th>
    <th>Date of Birth</th>
    <th>Age</th>
    <th>Price</th>
  </tr>
  </thead>
  <tbody id="newdog">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  const resultContainer = document.getElementById("newdog");
  // prepare URL's to allow easy switch from deployment and localhost
  //const url = "http://localhost:8332/api/users"
  const url = "https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/"
  const create_fetch = url + '/create';
  const read_fetch = url + "/";

  // Load users on page entry
  read_users();


  // Display User Table, data is fetched from Backend Database
  function read_users() {
    // prepare fetch options
    const read_options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
    };

    // fetch the data from API
    fetch(read_fetch, read_options)
      // response is a RESTful "promise" on any successful fetch
      .then(response => {
        // check for response errors
        if (response.status !== 200) {
            const errorMsg = 'Database read error: ' + response.status;
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
              console.log(data[row]);
              add_row(data[row]);
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
  }

  function create_user(name, uid, breed, sex, dob, price){
    const body = {
        name: name,
        uid: uid,
        breed: breed,
        sex: sex,
        dob: dob,
        price: price
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            'Authorization': 'Bearer my-token',
        },
    };

    // URL for Create API
    // Fetch API call to the database to create a new user
    fetch(create_fetch, requestOptions)
      .then(response => {
        if (response.status !== 200) {
          const errorMsg = 'Database create error: ' + response.status;
          console.log(errorMsg);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = errorMsg;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
          return;
        }
        // response contains valid result
        response.json().then(data => {
            console.log(data);
            add_row(data);
        })
    })
  }

  function add_row(data) {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    const uid = document.createElement("td");
    const breed = document.createElement("td");
    const sex = document.createElement("td");
    const dob = document.createElement("td");
    const age = document.createElement("td");
    const price = document.createElement("td");
    // obtain data that is specific to the API
    name.innerHTML = data.name;
    uid.innerHTML = data.uid;  
    breed.innerHTML = data.breed;
    sex.innerHTML = data.sex;
    dob.innerHTML = data.dob; 
    price.innerHTML = data.price; 
    age.innerHTML = data.age; 
    console.log(data)
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



</script>