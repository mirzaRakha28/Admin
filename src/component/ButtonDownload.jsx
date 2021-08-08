import React,{Component} from "react"



class ButtonDownload extends Component{
    render(){
        
        return(
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        )
    }
}
export default ButtonDownload;