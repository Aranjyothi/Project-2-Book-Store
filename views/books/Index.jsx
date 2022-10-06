const React = require('react')
const DefaultLayout  = require('../layouts/DefaultLayout')
class Index extends React.Component{
    render(){
        const{books} = this.props
        // console.log(books)
        return(
            <DefaultLayout title="All Books">
            <div>
                <h1>All Books</h1>
                <ul id="books-index">
                    {books.map((book)=>{
                        return (
                            <li key ={book._id}>
                                 The author of <a href={`/books/${book._id}`}>{book.name}</a> is {book.author} .
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