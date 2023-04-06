
// create a backend using javascript express without a database.
// We are to randomly return Frank Sinatra songs (at least 20).
// We are to add more pages of his birth, birth city, wife, and picture. 
// We are also to note that the action from the picture should redirect to his picture online with link already given.
// add the route for public and protected and then I added the route for my listening port


//creating a pool of at least 20 of Frank's songs using
const express = require('express');
const app = express();
var songs = [
    "New York, New York", "Ac-cent-tchu-ate the Positive", "Accidents Will Happen",
    "Adeste Fideles", "Ad-Lib Blues", "An Affair to Remember (Our Love Affair)",
    "After You've Gone", "Ain't She Sweet", "Ain't Cha Ever Comin' Back?", 
    "Air For English Horn", "Alice Blue Gown", "All Alone", "All By Myself",
    "All I Do Is Dream of You", "All My Tomorrows", "All of Me", "All of You",
    "All or Nothing at All", "All the Things You Are", "All the Way"
]

app.get('/', (request, response) => {
    response.send(songs[Math.floor(Math.random()*songs.length)]);
});


//add more pages of birth, birth city, wife, and picture. 
//The action from the picture should redirect to his picture online with link already given.

app.get('/birth_date', (req,res) => {
    res.status(200).send('December 12, 1915')
})

app.get('/birth_city', (req,res) => {
    res.status(200).send('Hoboken, New Jersey')
})
app.get('/wives', (req,res) => {
    res.status(200).send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx" )
})
app.get('/picture', (req,res) => {
    res.status(200).send('<img src="https://media.gettyimages.com/id/517724332/photo/frank-sinatra-performs-on-his-tv-special-frank-sinatra-a-man-and-his-music.jpg?s=612x612&w=0&k=20&c=3r2lP3Jg-E-AB48uD4gxOz6Aqh5V_6hzl-6KXxB0i-A=">')
})


// add the route for public and protected and then I added the route for my listening port

app.get("/protected", (req, res) => {
    if (!req.get("Authorization")) {
      res.status(401).set("WWW-Authenticate", "Basic")
      .send("Not authorized")
    } else {
      var credentials = Buffer.from(req.get("Authorization").split(" ")[1], "base64").toString().split(":")
      var username = credentials[0]
      var password = credentials[1]

      if (!(username === "admin" && password === "admin")) {
        res.status(401).set("WWW-Authenticate", "Basic")
        .send("Not authorized")
      }
    }
    res.status(200).send("Welcome, authenticated client")
  })

app.listen(8080, function() {
    console.log("my server is up and running")
})