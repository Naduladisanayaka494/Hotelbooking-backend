const express= require("express");
const  router= express.Router();
const Booking= require('../models/booking');
const Room= require('../models/room');

router.post("/bookroom",async (req,res)=>{
    const{
        room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays
  
      }=req.body

      try {
        const newbooking = new Booking({
            room :room.name,
            roomid:room._id,
            userid,
            fromdate,
            todate,
            totalamount,
            totaldays,
            transactionId : '1234'
           
           

        })
        const booking = await newbooking.save()
        const roomtemp= await Room.findOne({_id :room._id})
        roomtemp.currentbookings.push({bookingid : booking._id,fromdate: fromdate,todate:todate,userid:userid,status:booking.status});
        await roomtemp.save()
        res.send("room booked succesfully");
        
      } catch (error) {
        return res.status(400).json({error});
        
      }

});
module.exports=router;