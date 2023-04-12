---
layout: single
title: Admin
tagline: "Admin Account"
header:
  overlay_image: /assets/images/admindogs.jpg
  caption: "Photo credit: [**Adobe Stock**](https://stock.adobe.com/search/images?k=dog+banner)"

---
<h1>Admin: Adding Dogs</h1>
<div>
  <form class="dogData">
    <table style="border:none;">
      <tr id="q">
        <th>Name:</th>
        <th>UID</th>
        <th>Image</th>
        <th>Link</th>
        <th>Breed</th>
        <th>Sex</th>
        <th>Date of Birth</th>
        <th>Price</th>
      </tr>
      <tr id="input">
        <th><input type="text" id="name" required></th>
        <th><input type="number" id="uid" required/></th>
        <th><input type="url" id="image" required/></th>
        <th><input type="url" id="link" required/></th>
        <th><input type="text" id="breed" required/></th>
        <th><input type="text" id="sex" required/></th>
        <th><input type="text" id="dob" required/></th>
        <th><input type="text" id="price" required/></th>
      </tr>
      <tr>
        <td></td>
        <td>
          <button class="add" type="button" onclick="addData()">
            ADD
          </button>
        </td>
      </tr>
    </table>
  </form>
</div>
<br>


<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>Dog ID</th>
    <th>Image Link to Dog</th>
    <th>Link</th>
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
  // http://172.28.18.139:8332/api/users
  const url = "http://172.23.226.97:8332/api/users"
  // const url = "https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users"
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

function create_user(name, uid, image, link, breed, sex, dob, price) {
  // Check if uid already exists
  const uid_query = '?uid=' + encodeURIComponent(uid);
  fetch(read_fetch + uid_query)
    .then(response => {
      if (response.status === 200) {
        // uid already exists, return error message
        const errorMsg = 'Dog with UID ' + uid + ' already exists in the database';
        alert(errorMsg);
        return;
      } else if (response.status === 404) {
        // uid does not exist, create new dog
        const body = {
            name: name,
            uid: uid,
            image: image,
            link: link, 
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
      } else {
        // some other error occurred, handle it here
        const errorMsg = 'Error checking for existing dog uid: ' + response.status;
        console.log(errorMsg);
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = errorMsg;
        tr.appendChild(td);
        resultContainer.appendChild(tr);
        return;
      }
    })
    .catch(error => {
        const errorMsg = 'Error checking for existing dog uid: ' + error;
        console.log(errorMsg);
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = errorMsg;
        tr.appendChild(td);
        resultContainer.appendChild(tr);
        return;
    });
}

  function add_row(data) {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    const image = document.createElement("td");
    const link = document.createElement("td");
    const uid = document.createElement("td");
    const breed = document.createElement("td");
    const sex = document.createElement("td");
    const dob = document.createElement("td");
    const age = document.createElement("td");
    const price = document.createElement("td");
    // obtain data that is specific to the API
    name.innerHTML = data.name;
    image.innerHTML = data.image;
    link.innerHTML = data.link;
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
    tr.appendChild(image);
    tr.appendChild(link);
    tr.appendChild(breed);
    tr.appendChild(sex);
    tr.appendChild(dob);
    tr.appendChild(age);
    tr.appendChild(price);

    resultContainer.appendChild(tr);
  }

function addData(){
  console.log(document.getElementById("name"));
  console.log(document.getElementById("uid"));
  console.log(document.getElementById("image"));
  console.log(document.getElementById("link"));
  console.log(document.getElementById("breed"));
  console.log(document.getElementById("sex"));
  console.log(document.getElementById("dob"));
//   console.log(document.getElementById("age"));
  console.log(document.getElementById("price"));

  if (document.getElementById("name").value && document.getElementById("uid").value && document.getElementById("image").value && document.getElementById("link").value && document.getElementById("breed").value && document.getElementById("sex").value && document.getElementById("dob").value) {
    myData = {
      "name": document.getElementById("name").value, 
      "uid": document.getElementById("uid").value, 
      "image": document.getElementById("image").value, 
      "link": document.getElementById("link").value, 
      "breed": document.getElementById("breed").value,
      "sex": document.getElementById("sex").value,
      "dob": document.getElementById("dob").value, 
      "price": document.getElementById("price").value
    };
    add_row(myData);
    //alert("before post");
    create_user(myData.name, myData.uid, myData.image, myData.link, myData.breed, myData.sex, myData.dob, myData.price, myData.age);
    //alert("after post");
    } else {
  alert("Please fill in all fields.");
}
}
</script>