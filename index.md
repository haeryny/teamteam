# My Schedule
### Add/edit your own!

<table class="editabletable" table id="myTable" border="1">
  <tr> <td>Classes</td> <td>Extracurriculars</td> <td>Self-care</td> <td>Done?</td> </tr>
  <tr> <td>Example: APCSP</td> <td>soccer practice</td> <td>mediate for 5 min</td> <td>Y</td> </tr>
  <tr> <td>Class Two</td> <td></td> <td></td> <td></td> </tr>
  <tr> <td>Class Three</td> <td></td> <td></td> <td></td> </tr>
  <tr> <td>Class Four</td> <td></td> <td></td> <td></td> </tr>
  <tr> <td>Class Five</td> <td></td> <td></td> <td></td> </tr>
</table>
<script src="index.js"></script>
<button onclick="addCell()">Add Cell</button>

<script>
  function addCell() {
    // Get the table element
    var table = document.getElementById("myTable");
    
    // Create a new cell element
    var cell = document.createElement("td");
    
    // Add the cell to the last row of the table
    table.lastChild.appendChild(cell);
  }
</script>
