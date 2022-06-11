import db from '../db/index.js'

function getAllUser(req, res) {
    const result = db.query('select id,username,nickname from ev_users')
    // res.send({
    //     status:0,
    // })
}
getAllUser()
