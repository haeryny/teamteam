---

layout: home
title: Tamagotchi
header:
  overlay_image: /assets/images/dog at vet.jpeg
  caption: "Photo credit: [**Joceln Chan**](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dailypaws.com%2Fliving-with-pets%2Fveterinarian%2Fhard-to-visit-vet&psig=AOvVaw1U-TPrcaZod_R26CVcKLQ0&ust=1675547153233000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCg5tmp-vwCFQAAAAAdAAAAABAI)" 

  actions:
    - label: "Studying Tips"
      url: "https://summer.harvard.edu/blog/top-10-study-tips-to-study-like-a-harvard-student/"

---

<head>
<style>
* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: Verdan a, sans-serif;}

.month {
  padding: 70px 25px;
  width: 100%;
  background: ;
  text-align: center;
}

.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}

.days {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size:12px;
  color: #777;
}

.days li .active {
  padding: 5px;
  background: #1abc9c;
  color: white !important
}

/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
  .weekdays li, .days li {width: 13.1%;}
}

@media screen and (max-width: 420px) {
  .weekdays li, .days li {width: 12.5%;}
  .days li .active {padding: 2px;}
}

@media screen and (max-width: 290px) {
  .weekdays li, .days li {width: 12.2%;}
}
</style>
</head>
<body>

<h1>January 2023</h1>

<ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
</ul>

<ul class="days">  
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li><span class="active">9</span></li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>30</li>
  <li>31</li>
</ul>

</body>


# Homework
> This is the homework you have for each class and what day it is due. 

<table>
    <tr>
        <th><label for="nameOfClass">Name of Class</label></th>
        <th><label for="date">Date</label></th>
        <th><label for="homeworkTitle">Homework Title</label></th>
    </tr>
    <tr>
        <td><input type="text" name="nameOfClass" id="name" required></td>
        <td><input type="date" name="date" id="date" placeholder="date" required></td>
        <td><input type="text" name="homeworkTitle" id="homeworkTitle" required></td>
        <td ><button onclick="create_User()">Create</button></td>
    </tr>
</table>

<table>
  <thead>
  <tr>
    <th></th>
    <th>Name of Class</th>
    <th>Date</th>
    <th>Homework Title</th>
  </tr>
  </thead>

  <tr>
    <th>1</th>
    <th>APCSP</th>
    <th>1/16/23</th>
    <th>Creating a table W/JSON data</th>
  </tr>
</table>

print ("Hi, I'm the diagnoser! Please answer the following 14 questions to receive a diagnosis for your illness.")

a = "bleeding"
b = "cough"
c = "constipation"
d = "red eyes"
e = "swollen"
f = "lethargic"
g = "abdominal cramps"
h = "nausea"
i = "vomiting"
j = "seizures"
k = "lumps/bumps"
l = "Drooling"
m = "fever"
n = "Abnormal heart rate"
o = "trouble sleeping"


symptoms = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o]

correctsymp = []
correct_symp_idx = 0
for index in range(len(symptoms)):
  curr_sym = symptoms[index]
  print("Do you have a " + curr_sym + ", yes or no? ")
  
  response = input()
  if response == "yes":
   correctsymp.insert(correct_symp_idx, curr_sym)
   correct_symp_idx += 1
   
#print(correctsymp)

covid_symp_counter = 0


for index in range(len(correctsymp)):
  if correctsymp[index] == a or correctsymp[index] == b or correctsymp[index] == c or correctsymp[index] == d or correctsymp[index] == e:
    covid_symp_counter = covid_symp_counter + 1
#print(covid_symp_counter)
    

flu_symp_counter = 0

for index in range(len(correctsymp)):
  if correctsymp[index] == f or correctsymp[index] == g or correctsymp[index] == h or correctsymp[index] == i:
    flu_symp_counter = flu_symp_counter + 1
#print(flu_symp_counter)


strep_symp_counter = 0

for index in range(len(correctsymp)):
  if correctsymp[index] == j or correctsymp[index] == k or correctsymp[index] == l:
    strep_symp_counter = strep_symp_counter + 1
#print(strep_symp_counter)

depression_symp_counter = 0

for index in range(len(correctsymp)):
  if correctsymp[index] == m or correctsymp[index] == n or correctsymp[index] == o:
    depression_symp_counter = depression_symp_counter + 1
#print(depression_symp_counter)

if len(correctsymp) == 0:
  print("you do not have any illnesses!")

  

diagnoser_list = [covid_symp_counter, flu_symp_counter, strep_symp_counter, depression_symp_counter]
diagnoser_max = 0

#print(diagnoser_list)

for index in range (len(diagnoser_list)):
  if (diagnoser_max < diagnoser_list[index]) :
    diagnoser_max = diagnoser_list[index]

#print(diagnoser_max)

if diagnoser_max == covid_symp_counter:
    print("You might have COVID-19")
    print("Quarantine in your home and do not see other people. ")

if diagnoser_max == flu_symp_counter:
    print("You might have the stomach flu")
    print("Take some Tylenol and drink hot water. If you do not completely heal in 1 week, seek help from a doctor.")

if diagnoser_max == strep_symp_counter:
    print("You might have strep throat")
    print("Drink lots of hot water and gargle salt water. If it does not heal in 3 days, consult a doctor.")

if diagnoser_max == depression_symp_counter:
    print("You might have depression")
    print("Go see a therapist for help.")