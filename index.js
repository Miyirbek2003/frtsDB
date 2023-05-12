import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'
const app = express()
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users'
})
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.json('Hellossss')
})
app.get('/users', (req, res) => {
    db.query('SELECT * FROM user', (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})
app.listen(8800, () => {
    console.log('connected');
})

