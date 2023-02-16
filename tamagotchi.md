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

<div id="Classes for Dog Training" class="tabcontent">
    <h3>Dog Training</h3>
    <p>Knowing how to train your dog is very important! That is why this shows the available classes for learning how to train your dog.</p>
    <input type="button" value="Generate Table" onclick="GenerateTable()" />
    <hr />
    <div id="dvTable"></div>
    <script>
    function GenerateTable() {
//Build an array containing Customer records.
        var customers = new Array();
        customers.push(["Date", "Time", "Location", "Class Name"]);
        customers.push(["2/23/23", "10:00", "4s Ranch", "Small Dogs"]);
        customers.push(["2/24/23", "12:00", "San Diego", "Medium Dogs"]);
        customers.push(["2/25/23", "8:00", "Poway", "Big Dogs"]);
        customers.push(["2/26/23", "11:00", "Los Angeles", "Large Dogs"]);
//Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
//Get the count of columns.
        var columnCount = customers[0].length;
//Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }
 //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }
 var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }
  </script>

</div>
