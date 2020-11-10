// const bookSchema = require('../Schema/BookSchema');
const userSchema = require('../Schema/UserSchema')
module.exports = {
    createApi:function(data,callback){
        console.log('data in api+++++',data)
        userSchema.create(data,(err,result)=>{
            if(err) {
                console.log('error in api', err)
                callback(err,null);
            }
            else{
                console.log('result in api',result)
                callback(null,result)
            }
        })

    },
   
    findApi:function(data,callback){
        userSchema.find({},(err,result)=>{
            console.log('data in find api',data)
            if(err) {
                console.log('error in find api',err)
                callback(err,null);
            }
            else{
                console.log('result in find', result)
                callback(null,result)
            }
        }).skip(parseInt(data.page*data.limit)).limit(parseInt(data.limit))

    },
    updateApi:function(data,callback){
        console.log('data in update api',data)
        bookSchema.updateOne({_id:data.id},{$set:{published:data.value}},{new:true},(err,result)=>{
            if(err) {
                console.log('error in update api',err)
                callback(err,null);
            }
            else{
                console.log('result in update api',result)
                callback(null,result)
            }
        })
    },
    deleteApi:function(data,callback){
        console.log('data in delete api',data)
        userSchema.remove({_id:data.id},(err,result)=>{
            if(err) {
                console.log('err in delete api',err)
                callback(err,null);
            }
            else{
                console.log('result in delete api',result)
                callback(null,result)
            }
        })
    }

}