const React = require('react')
const DefaultLayout  = require('../layouts/DefaultLayout')
class Index extends React.Component{
    render(){
        const{books} = this.props
        console.log(books)
        return(
            <DefaultLayout title="All Books" bookStore = "books">
            <div>
                <h1> Book Page</h1>
                <ul id="books-index">
                    {books.map((book)=>{
                        return (
                            <li key ={book._id}>
                                 The <a href={`/books/${book._id}`}>{book.name}</a> Author is {book.author}.
                            </li>
                        )
                    })}

                </ul>
                <nav>
                    <a href="/books/new">Create a new Book</a>
                </nav>
            </div>
            </DefaultLayout>
        )
    }
}
module.exports = Index;