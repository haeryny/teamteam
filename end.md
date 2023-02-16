
<script>
    const resultContainer = document.getElementById("result");
    console.log(localStorage);
    console.log(localStorage.getItem("finalScore"));
    let matchScore = localStorage.getItem("finalScore")
    if(matchScore % 2 == 0) {
        matchScore = +(matchScore) + 0.5
    }
    else {
        matchScore = +(matchScore) - 0.5
    }

    console.log(matchScore)

    if (matchScore == 10.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/18')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 12.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/10')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 14.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/20')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 16.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/17')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 18.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/15')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 20.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/19')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 22.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/9')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 24.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/16')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 26.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/8')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 28.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/4')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 30.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/6')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 32.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/14')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 34.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/1')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 36.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/3')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 38.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/13')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    if (matchScore == 40.5) {
        fetch('https://fluffyfriendfinder.nighthawkcodingsociety.com/api/users/2')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }


    localStorage.clear();
</script>

