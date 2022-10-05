const Book = require('../models/books')
const booksList= require('../models/booksList')
 // I.N.D.U.C.E.S
//index
const findAllBooks = (req, res) =>{
    Book.find({},(err,foundBook)=>{
        if(err){
            res.status(400).json(err)
        }else{
            res.status(200).render('books/Index',{books:foundBook})
        }
    })
    }

//new
const showNewBook = (req,res) =>{
       res.render('books/New')
}

//DELETE 
const deleteBook = (req,res) =>{
    Book.findByIdAndDelete(req.params.id,(err,deleteBook) =>{
        if(err) {
            res.status(400).json(err)
        } else{
            res.status(200).redirect('/books')
        }
    })
}

//UPDATE
const updateBook = (req,res) =>{

    if (req.body.bookIsAvailable ==="on"){
        req.body.bookIsAvailable = true
    } else{
        req.body.bookIsAvailable = false
    }
    // console.log("req.body")
    // console.log(req.body)

    Book.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedBook) =>{
        // console.log(req.body)
        if(err) {
            res.status(400).json(err)
        } else{
            // console.log('ubdatedBook')
            // console.log(updatedBook)
            res.status(200).redirect(`/books/${req.params.id}`)
        }
    })
}


// Create
const createBook = (req, res)=>{
    if(req.body.bookIsAvailiable === "on"){
        req.body.bookIsAvailiable = true
    } else{
        req.body.bookIsAvailiable = false
    }
    // console.log(req.body)

Book.create(req.body, (err, bookCreated)=>{
if(err){
    res.status(400).json(err)
} else{
    // console.log(bookCreated)
    res.status(200).redirect('/books')
}
})
    // console.log(req.body)
    // //res.send(req.body)
}

// ROUTE      GET /fruits/:id/edit     (edit)
const showEditbook = (req, res) => {
    
    // res.render('fruits/Edit', {fruit: fruits[req.params.index]});
    Book.findById(req.params.id, (err, foundBook) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('books/Edit', {book: foundBook})
        }
    })
    // console.log(req.body)
}
const showbook = (req, res) => {
   
    Book.findById(req.params.id, (err, foundBook) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('books/Show', {book: foundBook});
        }
    })
}
// ROUTE       GET /fruits/seed      (seed)
const booksListStarterData = (req, res) => {
    // console.log(booksList)
    // console.log("hello")

    // Delete all remaining documents (if there are any)
    Book.deleteMany({}, (err, deletedBook) => {
        if (err) {
            res.status(400).json(err)
        } else {
            // console.log(booksList)
            Book.create(booksList, (err, createdBook) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/books')
                }
            })
        }
    });
}


//CLEAR

module.exports={
    findAllBooks,
    showNewBook,
    deleteBook,
    updateBook,
    createBook,
    booksListStarterData,
    showEditbook,
    showbook
}