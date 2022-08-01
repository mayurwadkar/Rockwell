var express = require("express");
var app = express();

app.get("/", (req, resp) => {
  resp.send(
    "<h1 style='color:purple'}>Welcome to ROCKWELL AUTOMATION INC.</h1>" +
      "<h3>One of the Top Automation Industry in world</h3>" +
      "<hr>" +
      "<h4><u>WHAT WE DO</u></h4>" +
      "<dl><dt>Allen‑Bradley Hardware :</dt>" +
      "<dd>Get the inside scoop on the latest hardware and software releases from Rockwell Automation. This on-demand webinar covers the newest Rockwell Automation and Allen‑Bradley® products and FactoryTalk® software, our latest acquisitions and much more.</dd>" +
      "<br><dt>FactoryTalk Software :</dt>" +
      "<dd>Industrial software designed to help you reach your manufacturing operations goals</dd>" +
      "<br><dt>LifecycleIQ Services :</dt>" +
      "<dd>Continuously Improve Performance and Production Across Your Lifecycle</dd></dl>"
  );
});

app.get("/aboutus", (req, resp) => {
  resp.send(
    "<h2 style='color:purple'}>AboutUs</h1>" +
      "<hr>" +
      "Our mission is to improve the quality of life by making the world more productive and sustainable." +
      "We are committed to enabling the next generation of smart manufacturing. With the right strategy, talented people, and our substantial financial strength, we are dedicated to deliver value to our customers." +
      " When you invest in Rockwell Automation technology and solutions, you invest in the future of manufacturing." +
      "<hr>"
  );
});

app.listen("9000");
console.log("listening at port 9000...");
