const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {

    render() {
        

       const{ book } = this.props
       
        return (
            <DefaultLayout title="Edit A Book">
               
                    <h1>Edit Book Log</h1>
                    <form action={`/books/${book._id}?_method=PUT`} method="POST">
                        <label htmlFor="title">Name:</label>
                        <input type="text" id="title" name="name" defaultValue={book.name} />

                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" defaultValue={book.author} />

                        <label htmlFor="type">Type:</label>
                        <select name="type" id="type">
                            <option value="fiction">Fiction book</option>
                            <option value="nonfiction">Non-fiction book</option>
                        </select>

                        <label htmlFor="bookIsAvailable">Is book available::</label>
                        <input type="checkbox" id="bookIsAvailable" name = "bookIsAvailable" defaultChecked={book.bookIsAvailable} />

                        <input type="submit"/>

                    </form>
                
            </DefaultLayout>
        )
    }
}
module.exports = Edit;