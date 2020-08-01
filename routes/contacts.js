const express = require("express");
const router = express.Router();

//@route    Get api/contacts
//@desc     get all contacts for a sprcific user
//@access   private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@route    POST api/contacts
//@desc     add new contact
//@access   private

router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route    PUT api/contacts/:id
//@desc     update a contact
//@access   Private

router.put("/:id", (req, res) => {
  res.send("update a contact");
});

//@route    DELETE api/contacts/:id
//@desc     DELETE a contact
//@access   Private

router.delete("/:id", (req, res) => {
  res.send("delete a contact");
});

module.exports = router;
