<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="dogsadopt.js"></script>
    <style>
      * {
        box-sizing: border-box;
      } 
      .row {
        display: flex;
      }
      .column {
        flex: 1;
        padding: 5px;
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 200px;
        margin: auto;
        text-align: center;
        font-family: arial;
        justify-content: center;
        align-items: center;
      }
      .price {
        color: grey;
        font-size: 22px;
      }
      .card button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #006400;
        text-align: center;
        cursor: pointer;
        width: 80%;
        font-size: 18px;
      }
      .card button:hover {
        opacity: 0.7;
      }
    </style>
  </head>
  <body>
    <div id="dog"></div>
  </body>
</html>