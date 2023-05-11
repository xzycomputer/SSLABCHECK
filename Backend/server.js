const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();

app.use(cors())
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});

app.use(express.json({limit:'10mb'}))

let db = new sqlite3.Database('users.db',(err) => {
    if(err){
        console.error(err.message);
    }
    console.log("Connected to the access database");
})



app.post('/validatePassword',(req,res) => {
    const {username,password} = req.body
    db.all(`select * from users where username = '${username}' and password = '${password}'`, (err,rows) =>{
        if(err){
            throw err;
        }
        if(rows.length > 0){
            res.send({validation:true , role : rows[0].role})
        }
        else{
            res.send({validation:false})
        }
    })
})

app.get('/getchemi', (req, res) => {
    db.all(`SELECT * FROM chemishelf`, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (rows.length > 0) {
                const result = rows.map(row => ({
                    name: row.name,
                    quantity: row.quantity
                }));
                res.status(200).json(result);
            } else {
                res.status(404).send('No data found');
            }
        }
    });
});

app.get('/gettool', (req, res) => {
    db.all(`SELECT * FROM toolshelf`, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            if (rows.length > 0) {
                const result = rows.map(row => ({
                    name: row.name,
                    quantity: row.quantity
                }));
                res.status(200).json(result);
            } else {
                res.status(404).send('No data found');
            }
        }
    });
});



app.post('/addchemi', (req, res) => {
    const { name, quantity } = req.body;
    db.run(`INSERT INTO chemishelf (name, quantity) VALUES (?, ?)`, [name, quantity], (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      } else {
        res.status(200).send('Success');
      }
    });
  });




app.post('/addtool', (req, res) => {
    const { name, quantity } = req.body;
    db.run(`INSERT INTO toolshelf (name, quantity) VALUES (?, ?)`, [name, quantity], (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      } else {
        res.status(200).send('Success');
      }
    });
  });


app.listen(3001,()=> console.log('Listening on port 3001'))