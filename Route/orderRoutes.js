const express = require("express");
const Order = require("../Controllers/orderContorller.js")
const OrderGet = require("../Controllers/orderContorller.js")
   const router=express.Router()

   router.post('/order',Order)
  router.get('/orderget',OrderGet)
   module.exports=router

   