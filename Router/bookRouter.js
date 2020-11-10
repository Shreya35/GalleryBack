const express = require('express');
const router = express.Router();
const bookApi = require('../Api/bookApi');

router.post('/createApi',(req,res)=>{
    console.log('data from client',req.body)
    bookApi.createApi(req.body,(err,result)=>{
        if(err) {
            console.log('err in create',err);
            res.send({error:err})
        }
        else {
            console.log('result in create',result);
            res.send({success:result})
        }
    })
});


router.get('/findApi',(req,res)=>{
    console.log("req.query",req.query)
    let data={page:req.query.page,limit:req.query.limit};
    bookApi.findApi(data,(err,result)=>{
        console.log('data in find api++++ router',data)
        if(err) {
            console.log('error in findApi router',err)
            res.send({error:err})
        }
        else {
            console.log('result in findApi router',result)
            res.send({success:result})
        }
    })
});

router.put('/updateApi',(req,res)=>{
    console.log('req in update router',req.body)
    bookApi.updateApi(req.body,(err,result)=>{
        if(err) {
            console.log('error update in router',err)
            res.send({error:err})
        }
        else {
            console.log('result update in router',result)
            res.send({success:result})
        }
    })
});

router.delete('/deleteApi',(req,res)=>{
    console.log('req.body in router', req.body)
    bookApi.deleteApi(req.body,(err,result)=>{
         if(err) {
             console.log('err in delete router',err)
             res.send({error:err})
         }
         else {
             console.log('success in delete router',result)
             res.send({success:result})
         }
     })
 });


module.exports = router;