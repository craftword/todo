const express = require('express')
const apiRouter = express.Router();

apiRouter
    .get('/', (req,res) => {
        res.json(
            [
            {
                index: 1,
                value: "Raed a book, titled Alice in wonderland ",
                
            },
            {
                index: 2,
                value: "Visit my parent in family house",
                
            },
            {
                index: 3,
                value: "Finished my Todo project",
                
            },
            {
                index: 4,
                value: "Assign the building project to ",
                
            },
        ]
        )
    })
    
module.exports = apiRouter;