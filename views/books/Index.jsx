const React = require('react')
const DefaultLayout  = require('../layouts/DefaultLayout')
class Index extends React.Component{
    render(){
        const{books} = this.props
        // console.log(books)
        return(
            <DefaultLayout title="All Books">
            <div>
            {/* <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div> */}
                <h1>All Books</h1>
                <li id="books-index">
                    {books.map((book)=>{
                        return (
                            <li key ={book._id}>
                                <a id="link" href={book.link}>
                        <img id="image" src={book.link} alt=""  />
                    </a><br /><br />
                                 The author of <a href={`/books/${book._id}`}>{book.name}</a> is {book.author} .
                            </li>
                        )
                    })}

                </li>
                <nav>
                    <a href="/books/new">Create a new Book</a>
                </nav>
            </div>
            </DefaultLayout>
        )
    }
}
module.exports = Index;