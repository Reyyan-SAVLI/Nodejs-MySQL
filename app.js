const mysql = require('mysql');
const connection = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'password',
   database:'users'
})
const createDbSql = 'CREATE DATABASE IF NOT EXISTS users'
const createTblSql = 'CREATE TABLE IF NOT EXISTS personels (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50),surname VARCHAR(50))'
const value =[
    ['Reyyan','Şavlı']
]
const createInsertSql = 'INSERT INTO personels (name,surname) VALUES ?'
const selectSql = 'SELECT * FROM personels'
const id=2;
const whereSql = 'SELECT * FROM personels WHERE id=?'
const deleteSql = 'DELETE FROM personels WHERE id=?'
const updateSql = 'UPDATE personels SET name="Ali" WHERE id=?'

connection.connect((err)=>{
    if (err) {
        console.log('Hata var',err);
    }
   connection.query(createDbSql,(err,result)=>{
        if (err) {
            console.log('Hata var.',err)
        }else{
            //create
            connection.query(createTblSql,(err,result)=>{
                if (err) {
                    console.log('Hata var.',err)
                }else{
                  /*  //read
                    connection.query(selectSql,(err,result,fields)=>{
                        if (err) {
                            console.log('Hata var.',err)
                        }else{
                            console.log('Result',result)
                            console.log('Fields',fields)
                        }
                    })
                    */
                   /* //update
                    connection.query(updateSql,[id],(err,result)=>{
                        if (err) {
                            console.log('Hata var.',err)
                        }else{
                            console.log('Result',result)
                        }
                    })
                    */
                    //where
                    /*connection.query(whereSql,[id],(err,result)=>{
                        if (err) {
                            console.log('Hata var.',err)
                        }else{
                            console.log('Result',result)
                        }
                    })*/
                    
                   /* //insert
                    connection.query(createInsertSql,[value],(err,result)=>{
                        if (err) {
                            console.log('Hata var.',err)
                        }else{
                            console.log('Result',result)
                        } 
                    })
                    */
                    //console.log('Result',result)
                    
                    //delete
                   /* connection.query(deleteSql,[id],(err,result)=>{
                        if (err) {
                            console.log('Hata var.',err)
                        }else{
                            console.log('Result',result)
                        }
                    })
                    */
                }
            })
           // console.log('Result',result)
           }
    })
    
    console.log('Connect');    
})
