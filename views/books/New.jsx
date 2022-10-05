const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

//class componemt
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a New book" bookStore="books">
            <div>
                <h1>New Book Page! </h1>

                <form action='/books' method='POST'>
                    <label id="book" htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' /><br></br><br />

                    <label id="book" htmlFor="author">Author:</label>
                    <input type="text" id='author' name='author' /><br></br><br />

                    <label id="book" htmlFor="link">Link:</label>
                    <input type="textarea" id='link' name='link' /><br></br><br />

                    <label id="book" htmlFor="summary">Summary:</label>
                    <input type="textarea" id='summary' name='summary' /><br></br><br />

                    <label id="book" htmlFor="price">Price:</label>
                    <input type="text" id='price' name='price' /><br></br><br />

                    <label id="book" htmlFor="type">Type:</label>
                        <select name="type" id="type">
                            <option value="fiction">Fiction books</option>
                            <option value="nonfictin">Non-Fiction books</option>
                        </select><br></br><br />

                    <label id="book" htmlFor="bookIsAvailiable">Is Book Available:</label>
                    <input type="checkbox" id='bookIsAvailiable' name='bookIsAvailiable'/><br></br><br />

                    <input id= "add" type="submit" value="AddBook" />
                </form>
            </div>
            </DefaultLayout>
        )
    }
}
module.exports = New;