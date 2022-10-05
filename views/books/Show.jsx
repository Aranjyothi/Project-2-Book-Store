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

                <h1> Show Book Page</h1>
                <p>
                    <a id="link" href={book.link}>
                        <img id="image" src={book.link} alt="" height='20' width='20' />
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
                <div className='edit'>
                    <button>
                        <a href={`/books/${book._id}/edit`}>Edit</a>
                    </button>
                    <div className='space'>
                    <button>
                        <a href={`/books/${book._id}/purchage`}>Purchage</a>
                    </button>
                    </div>
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