const endpoint = "https://my-flask-app.herokuapp.com/api/drugs";
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    // Update the container element with the fetched data
    const drugListElement = document.getElementById("drug-list");
    drugListElement.innerHTML = data;
  })
  .catch(error => {
    // Handle any errors that occur
    console.error(error);
  });
