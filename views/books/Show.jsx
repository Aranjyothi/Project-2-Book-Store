const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

//class component
class Show extends React.Component {
    render(){
     //const {name, author, bookIsAvailiable, _id} = this.props
     const {book} = this.props 
        // console.log(book._id)
     return(
            <DefaultLayout title={`${book.name} details`} bookStore="books">
          
                <h1> Show Book Page</h1>
                <p>
                        <a id ="link" href={book.link}><img src={book.link} alt="book link" /></a>
                   </p>
                <p>
                    Book Name:  {book.name}
                </p>
                <p>
                    Author: {book.author}
                </p>
                <p>
                    Price: {book.price}
                </p>
                   
                   <p>
                   {book.bookIsAvailiable ? "Book  is currently not availiable":"Book is availiable"}
                   </p>
                   <button>
                    <a id="edit" href = {`/books/${book._id}/edit`}>Edit</a>
                   </button>
                   <form action={`/books/${book._id}?_method=DELETE`}method="POST"> 
                   <input type="submit" value="Delete" />
                   </form>
                   <nav>
                    <a href="/books">Back</a>
                   </nav>
           
            </DefaultLayout>
        )
    }
}
module.exports = Show;