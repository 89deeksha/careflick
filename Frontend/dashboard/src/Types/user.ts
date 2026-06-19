export interface User{
id:number,
name:String,
email:String,
phone:String,
address?:{
    street:String,
    city:String
},
company?:{
    name:String
}
}