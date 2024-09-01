import { Component } from "react";

class FormClass extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }
    }

    Increase=()=>
    {
        this.setState({count:this.state.count+1});
    }

    Decrease=()=>{
        this.setState({count:this.state.count-1});
    }

    Update=()=>{
        this.props.getCount(this.state.count);
    }

    render()
    {
        const {initialCount}=this.props;
        const {count}=this.state;
        return(
            <div>
                <h2> Inside the class: {count}</h2>
                <button name="increase" onClick={this.Increase} >Increase</button>
                <button name="decrease" onClick={this.Decrease} >Decrease</button>
                <button name="decrease" onClick={this.Update} >UpdateParent</button>
            </div>
        );
    }
}

export default FormClass;