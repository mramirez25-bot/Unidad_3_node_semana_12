
const express = require('express');
const router = express.Router();

//GET users  localhost:3000/users
router.get('/', 
    (req, res) => {
        res.json(
            {users: ['Mauro' , 'Ramirez']}
        );
    }
);
//GET users whit id localhost:3000/users:id
router.get('/:id', 
    (req, res) => {
        res.json(
            {id: req.params.id}
        );
    }
);
module.exports = router;