const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {

    render() {
        

       let{ fiction } = this.props
       
        return (
            <DefaultLayout title="Edit A Book">
               
                    <h1>Edit Book Log</h1>
                    <form action={`/fictions/${fiction._id}?_method=PUT`} method="POST">
                        <label htmlFor="title">Name:</label>
                        <input type="text" id="title" name="title" defaultValue={fiction.name} />

                        <label htmlFor="author">Author:</label>
                        <input type="text" id="author" name="author" defaultValue={fiction.author} />

                        <label htmlFor="type">Type:</label>
                        <select name="books" id="books">
                            <option value="fiction">Fiction</option>
                            <option value="nonfictin">Non-fiction</option>
                        </select>

                        <label htmlFor="bookIsAvailble">Is book available::</label>
                        <input type="checkbox" id="bookIsAvailble" name = "bookIsAvailble" defaultChecked={fiction.bookIsAvailble} />

                        <input type="submit"/>

                    </form>
                
            </DefaultLayout>
        )
    }
}
module.exports = Edit;