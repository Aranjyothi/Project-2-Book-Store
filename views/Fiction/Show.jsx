const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

//class component
class Show extends React.Component {
    render(){
     const {name, author, bookIsAvailiable, _id} = this.props.fiction
        return(
            <DefaultLayout title={`${author} details`} bookStore="fictions">
          
                <h1> Show Book Page</h1>
                <p>
                    The  {name} Author is {author}
                   </p>
                   <p>
                   {bookIsAvailiable ? "Book  is currently not availiable":"Book is availiable"}
                   </p>
                   <button>
                    <a href = {`/fictions/${_id}/edit`}>Edit</a>
                   </button>
                   <form action={`/fictions/${_id}?_method=DELETE`}method="POST"> 
                   <input type="submit" value="Delete" />
                   </form>
                   <nav>
                    <a href="/logs">Back</a>
                   </nav>
           
            </DefaultLayout>
        )
    }
}
module.exports = Show;