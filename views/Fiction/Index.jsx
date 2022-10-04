const React = require('react')
const DefaultLayout  = require('../layouts/DefaultLayout')
class Index extends React.Component{
    render(){
        const{fictions} = this.props
        return(
            <DefaultLayout title="Fiction Books" bookStore = "fictions">
            <div>
                <h1>Fiction Book Page</h1>
                <ul id="fictions-index">
                    {fictions.map((fiction)=>{
                        return (
                            <li key ={fiction._id}>
                                The<a href={`/fictions/${fiction._id}`}>{fiction.name}</a> Author is {fiction.author}.
                            </li>
                        )
                    })}

                </ul>
                <nav>
                    <a href="/fictions/new">Create a new Book</a>
                </nav>
            </div>
            </DefaultLayout>
        )
    }
}
module.exports = Index;