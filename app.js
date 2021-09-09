const express = require("express");
const https = require("https");
require("dotenv").config();

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req, res) => {
    const firstName = req.body.fname;
    const lasttName = req.body.lname;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lasttName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://" + process.env.USX + ".api.mailchimp.com/3.0/lists/" + process.env.AUDIENCE_ID;

    const options = {
        method: "POST",
        auth: process.env.API_KEY
    }

    const request = https.request(url, options, (response) => {

        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})

app.post("/failure", (req, res) => {
    res.redirect("/");
})

app.post("/success", (req, res) => {
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
})