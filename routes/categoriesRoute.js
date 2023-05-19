const express=require("express");
const { getAllcategories } = require("../controller/categories.controller");

const router=express.Router();


router.route("/categories").get(getAllcategories);

module.exports=router