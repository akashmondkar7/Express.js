import express from 'express'

const app = express();

app.get("/", (req, res) => {

    const users = ['anil', 'sam', 'peter', 'sidhu'];

    let data = '<ul>';

    for (let i = 0; i < users.length; i++) {

        data += `
          <li>
             <a href="/user/${users[i]}">
                ${users[i]}
             </a>
          </li>
        `;
    }

    data += '</ul>';

    res.send(data);
});


app.get("/user/:name", (req, res) => {

    const userName = req.params.name;

resp.send(`This is ${req.params.name} profile page`)
});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});