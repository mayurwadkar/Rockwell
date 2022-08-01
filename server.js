var express = require("express");
var app = express();

app.get("/", (req, resp) => {
  resp.send(
    "<h1 style='color:purple'}>Welcome to ROCKWELL AUTOMATION INC.</h1>" +
      "<h4>One of the Top Automation Industry in world</h4>" +
      "<hr>"
  );
});

app.get("/aboutus", (req, resp) => {
  resp.send(
    "<h2 style='color:purple'}>AboutUs</h1>" +
      "Our mission is to improve the quality of life by making the world more productive and sustainable." +
      "We are committed to enabling the next generation of smart manufacturing. With the right strategy, talented people, and our substantial financial strength, we are dedicated to deliver value to our customers." +
      " When you invest in Rockwell Automation technology and solutions, you invest in the future of manufacturing."
  );
});

app.listen("9000");
console.log("listening at port 9000...");
