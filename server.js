//npm modules
const express = require("express");
const bodyParser = require("body-parser");

// create the server
const app = express();

// Body-parser Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Importing a helperFunction
const { countingLetters } = require("./helpers");

// created the homepage route at '/'
app.get("/", (req, res) => {
  res.send("you just hit the home page ");
});

// Creating a post route on analyze

app.post("/analyze", (req, res) => {
  let valueExtraction = req.body;

  let changeToArray = Object.keys(req.body).map((i) => valueExtraction[i]);

  let changeToString = changeToArray.join();

  let withSpacesLength = changeToString.length;

  let withoutSpacesString = changeToString.replace(/ /g, "");

  let withoutSpacesLength = withoutSpacesString.length;

  let finalWordCount = changeToString
    .trim()
    .split(/\s+/)
    .filter((v) => v != "").length;

  // Changed the string to lowercase because no instructions were there if it was case-sensitive

  let helperResponse = countingLetters(withoutSpacesString.toLowerCase());

  // Final response
  let response = {
    textLength: {
      withSpaces: withSpacesLength,
      withoutSpaces: withoutSpacesLength,
    },
    wordCount: finalWordCount,
    characterCount: helperResponse,
  };
  res.send(response);
});

// Define a port to run a server on or a deploy env port
const PORT = process.env.PORT || 5000;

// tell the server what port to listen on
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
