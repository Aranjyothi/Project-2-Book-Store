const React = require('react')
// const  = require('')
class Index extends React.Component{
    render(){
        const{fictions} = this.props
        return(
            <div>
                <h1>Fiction Book Page</h1>
                <ul id="fictions-index">
                    {fictions.map((fiction)=>{
                        return (
                            <li key ={fiction._id}>
                                This book()
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}
module.exports = Index;