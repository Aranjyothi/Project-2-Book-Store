# Book Store  #
site is live at 
## About the Book Srote:
In my book store, a client can see a list of books and the availability of the books. Here, the client can edit and create a new book using a new page and editing pages. In case, If the client wants to know about the book. They can also see a summary of the book.

## Technologies used in BookStore:
Technologies that I used in, CSS, MongoDB, React, Mangoose,ExpressJS

## Instalsation are
For the **Store Project** some packages that may nedd to be install:
* dotenv
* express
* react
* mongoose
* method-override
* react-dom
* Need to create a MongoDB Atlas account to store Schema data

## Routes:
Routes available as Store
| Method| Path           | Description          |
|:------|:---------------|:--------------------:|
|GET    |/books          | index of books       |
|GET    |/books/New      | create new books     |
|GET    |/books/Show     | Display selected book|
|DELETE |/books/:id      | Delete selected book |
|PUT    |/books/:id      | Edit selected book   |
|POST   |/books/Show     | Display edited book  |
|GET    |/books/booksList| Show list of books   |



## Challenges are:
During the Project, I faced some technical challenges.
My main challenges are debugging and finding the correct path. 
## code:
`updateBook = (req,res) =>{

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
}`

## Future Implimentations
* Need to create an add-to-cart page if the customer like the books.
* Adding for only kids' books using different routes
* Adding a payment page.



