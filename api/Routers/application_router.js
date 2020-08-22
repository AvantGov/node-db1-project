const express = require("express")
const accounts_access = require("../../data/dbConfig")


const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const accounts = await accounts_access.select('*').from("accounts")
        res.json(accounts)
    } catch(error) { 
        next(error) 
    }
})

router.post('/', async (req, res, next) => {
    try {
        const account = await accounts_access
            .insert({
                name: req.body.name,
                budget: req.body.budget
            })
            .into("accounts")
        res.status(201).json(account)
    } catch(error) { 
        next(error) 
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        await accounts_access("accounts")
            .update({
                name: req.body.name,
                budget: req.body.budget
            })
            .where("id", req.params.id)

            res.status(201).json({ message: "resource update successful!" })
    } catch(error) { 
        next(error) 
    }


})

router.delete("/:id", async (req,res, next) => {
    try {
        await accounts_access('accounts')
            .where("id", req.params.id)
            .del()

        res.status(204).end()
    } catch(error) { 
        next(error) 
    }

})


module.exports = router

