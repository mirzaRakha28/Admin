import React,{Component} from "react"



class Title extends Component{
    render(){
        
        return(
            <h1 class="h3 mb-4 text-gray-800">{this.props.title}</h1>
        )
    }
}
export default Title;