const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

//class componemt
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a New book" bookStore="fictions">
            <div>
                <h1>New Book Page! </h1>

                <form action='/fictions' method='POST'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' />

                    <label htmlFor="author">Author:</label>
                    <input type="text" id='author' name='author' />

                    <label htmlFor="type">Type:</label>
                        <select name="books" id="books">
                            <option value="fiction">Fiction</option>
                            <option value="nonfictin">Non-fiction</option>
                        </select>

                    <label htmlFor="bookIsAvailiable">Is Book Available:</label>
                    <input type="checkbox" id='bookIsAvailiable' name='bookIsAvailiable'/>

                    <input type="submit" value="AddBook" />
                </form>
            </div>
            </DefaultLayout>
        )
    }
}
module.exports = New;