const express = require("express")
const accounts_access = require("../../data/dbConfig")


const router = express.Router()


// - find all customers with postal code 1010. Returns 3 records.
router.get()

// - find the phone number for the supplier with the id 11. Should be (010) 9984510.
router.get()


// - list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top.
router.get()

// - find all customers that live in London, Madrid, or Brazil. Returns 18 records.

// - add a customer record for _"The Shire"_, the contact name is _"Bilbo Baggins"_ the address is _"1 Hobbit-Hole"_ in _"Bag End"_, postal code _"111"_ and the country is _"Middle Earth"_.

// - update _Bilbo Baggins_ record so that the postal code changes to _"11122"_.



module.exports = router