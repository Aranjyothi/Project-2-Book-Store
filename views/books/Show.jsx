const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

//class component
class Show extends React.Component {
    render() {
        //const {name, author, bookIsAvailiable, _id} = this.props
        const { book } = this.props
        // console.log(book._id)
        return (
            <DefaultLayout title={`${book.name} details`} bookStore="books">
                

                <h1> Book Page</h1>
                <p>
                    <a id="link" href={book.link}>
                        <img id="image" src={book.link} alt=""  />
                    </a>
                </p>
                <p id="book">
                    Book Name: {book.name}<br></br><br /><br />
                    Author: {book.author}<br></br><br />

                    Type:  {book.type}<br></br><br />

                    Summary:  {book.summary}<br></br><br />

                    Price: {book.price}<br></br><br />
                    {book.bookIsAvailable ? "Book is available" : "Book  is currently not available"}<br></br><br />
                </p>
                <div>
                <button>
                        <a id="btn" href="/books"> Purchase </a>
                        
                    </button>
                </div>
                <div>
                    <button>
                    <a id='btn' href={`/books/${book._id}/edit`}>Edit</a>
                    {/* <a className='edit' href={`/books/${book._id}/edit`}>Edit</a> */}
                    </button>
                </div>
                <form action={`/books/${book._id}?_method=DELETE`} method="POST">
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