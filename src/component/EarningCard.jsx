import React,{Component} from "react"



class EarningCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            title: this.props.title,
            icon: 'fas fa-calendar fa-2x text-gray-300',
            color: 'primary',
            cardClass: '',
            titleClass:''
        }
    }

    componentDidMount() {
        this.setState({cardClass: `card border-left-${this.props.color} shadow h-100 py-2`})
        this.setState({icon: `fas fa-${this.props.icon} fa-2x text-gray-300`})
        this.setState({titleClass: `text-xs font-weight-bold text-${this.props.color} text-uppercase mb-1`})
    }

    render(){
        return(
            <div class="col-xl-3 col-md-6 mb-4">
                <div class={this.state.cardClass}>
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class={this.state.titleClass}>
                                    Earnings (Monthly)</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                            </div>
                            <div class="col-auto">
                                <i class={this.state.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EarningCard;