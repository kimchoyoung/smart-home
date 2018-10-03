let express = require('express');
let router = express.Router();

let data=[{time:1, plugName:'1', predicted:false},
    {time:2, plugName:'2', predicted:false},
    {time:3, plugName:'3', predicted:false},
    {time:4, plugName:'4', predicted:false},
    {time:5, plugName:'Plug1', predicted:true},
    {time:6, plugName:'6', predicted:false},
    {time:7, plugName:'6', predicted:false},
    {time:8, plugName:'8', predicted:false},
    {time:9, plugName:'Plug2', predicted:true},
    {time:10, plugName:'10', predicted:false},]

router.route('/soon').get((req,res)=>{
    sendJSON(res,true, data)
})

router.route('/cancel').get((req,res)=>{
        console.log( data[value].indexOf(req.query.value) );
        if(req.query.value.showStyle===true)
                req.query.value.showStyle=false;

        sendJSON(res,true,data);
})

function sendJSON(res, result, obj){
    res.json(obj)
}


module.exports=router;
