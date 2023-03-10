---
title: Image Coloring
layout: single
tagline: "change coloring!"
classes: wide
header:
  overlay_image: 
  caption: "Photo credit: [**Live Material **](https://www.livescience.com/facts-about-dogs)"
---
<html>
<canvas id="canvas" width="300" height="200"></canvas>

<script>
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "https://haeryny.github.io/teamteam/grayscale/images/dogJoe.PNG";
image.crossOrigin = "Anonymous";

image.onload = () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  removeGray();
};

const removeGray = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i+1] + data[i+2]) / 3;
    data[i] = avg;
    data[i+1] = avg;
    data[i+2] = avg;
  }
  ctx.putImageData(imageData, 0, 0);
};
</script>

<script>
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "https://haeryny.github.io/teamteam/grayscale/images/dogJoe.PNG";
image.crossOrigin = "Anonymous";

image.onload = () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  removeGray();
};

const removeGray = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i+1] + data[i+2]) / 3;
    data[i] = avg;
    data[i+1] = avg;
    data[i+2] = avg;
  }
  ctx.putImageData(imageData, 0, 0);
};
</script>