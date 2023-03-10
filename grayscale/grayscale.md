---
title: Grayscale Image
layout: single
tagline: "change to gray if sold out!"
classes: wide
header:
  overlay_image: 
  caption: "Photo credit: [**Live Material **](https://www.livescience.com/facts-about-dogs)"
---

<html>
<head>
    <meta charset="UTF-8">
    <title>Grayscale Image</title>
    <style>
        canvas {
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <input type="file" id="image-input">
    <canvas id="image-canvas"></canvas>

    <script>
        const imageInput = document.getElementById('image-input');
        const imageCanvas = document.getElementById('image-canvas');
        const context = imageCanvas.getContext('2d');

        imageInput.addEventListener('change', handleImage);

        function handleImage(e) {
            const reader = new FileReader();
            reader.onload = function(event) {
              const img = new Image();
              img.onload = function() {
                // Scale the image down to a maximum size of 500 x 500 pixels
                const maxWidth = 300;
                const maxHeight = 250;
                let width = img.width;
                let height = img.height;
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
          
                // Draw the original image onto the canvas
                imageCanvas.width = width;
                imageCanvas.height = height;
                context.drawImage(img, 0, 0, width, height);
          
                // Get the image data from the canvas
                const imageData = context.getImageData(0, 0, width, height);
                const data = imageData.data;
          
                // Loop through each pixel and convert it to grayscale
                for (let i = 0; i < data.length; i += 4) {
                  const r = data[i];
                  const g = data[i + 1];
                  const b = data[i + 2];
                  const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
                  data[i] = data[i + 1] = data[i + 2] = gray;
                }
          
                // Put the modified image data back onto the canvas
                context.putImageData(imageData, 0, 0);
              };
              img.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
          }
    </script>
</body>
</html>