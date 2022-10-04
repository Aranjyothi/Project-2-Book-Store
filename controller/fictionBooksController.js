const Fiction = require('../models/fiction')
const books= require('../models/books')
 // I.N.D.U.C.E.S
//index
const findAllBooks = (req, res) =>{
    Fiction.find({},(err,foundBook)=>{
        if(err){
            res.status(400).json(err)
        }else{
            res.status(200).render('fiction/Index',{fictions:foundBook})
        }
    })
    }

//new
const showNewBook = (req,res) =>{
    res.render('fiction/New')
}

//DELETE 
const deleteBook = (req,res) =>{
    Fiction.findByIdAndDelete(req.params.id,(err,deleteBook) =>{
        if(err) {
            res.status(400).json(err)
        } else{
            res.status(200).redirect('/fictions')
        }
    })
}

//UPDATE
const updateBook = (req,res) =>{

    if (req.body.bookIsAvailiable ==="on"){
        req.body.bookIsAvailiable = true
    } else{
        req.body.bookIsAvailiable = false
    }
    console.log(req.body)

    Fiction.findByIdAndUpdate(req.params.id,req.body,(err,updatedBook) =>{
        if(err) {
            res.status(400).json(err)
        } else{
            res.status(200).redirect(`/fictions/${updatedBookid._id}`)
        }
    })
}

//CREATE

//EDIT
//SEED
//CLEAR

module.exports={
    findAllBooks,
    showNewBook,
    deleteBook,
    updateBook
}