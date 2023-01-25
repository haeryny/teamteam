---

layout: home
title: Tamagotchi
header:
  overlay_image: /assets/images/homework.gif
  caption: "Photo credit: [**Jocelyn Chan**](https://tenor.com/view/aesthetic-homework-anime-writing-gif-17124856)"
  actions:
    - label: "Studying Tips"
      url: "https://summer.harvard.edu/blog/top-10-study-tips-to-study-like-a-harvard-student/"

---

<head>
<style>
* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}

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

## Name of Class
<input type="text" name="entry-title" id="entry-title" class="entry-text-title" placeholder="Name of Class"/>

## Date due
<input type="text" name="entry-title" id="entry-title" class="date" placeholder="Date"/>

## Homework
<input type="text" name="entry-title" id="entry-title" class="entry-text-title" placeholder="Homework Title"/>

<button class="btn-main entry-submit-btn" type="submit">Submit</button>

<section class="section sectionEntryResults" id="entryResultsSection">
      <h2>Homework Assignments</h2>
      <div class="container">
        <div class="container-row entryResultRow"></div>
      </div>
</section>
Name of Class: AP CSP

Date: 1/9

Homework: College Board CPT Grading


Name of Class: AP Chemistry

Date: 1/9

Homework Title: Questions 1-8