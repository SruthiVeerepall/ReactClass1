import { Component } from "react";

class Child extends Component
{
    constructor()
    {
        super();
        this.state=({
            fname:" ",
            lname:" ",
        });
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({fname:e.target.value});
    }
    changeLname=(e)=>
    {
        console.log(e.target.value);
        this.setState({lname:e.target.value});
    }
    submitEvent=(e)=>
    {
        e.preventDefault();
        console.log('fname:' ,this.state.fname, 'lname:',this.state.lname);
        //console.log(e.target.value);
    }
render()
{
    return(
        <div>
            <h2>Welcome to the Class Component</h2><br/>
            <label>Enter Name:</label>
            <h2>Entered name: {this.state.fname}</h2>
            <input onChange={this.handleChange} name="fname" placeholder="fname"></input>
            <input onChange={this.changeLname} name="lname" placeholder="lname"></input>
            <button name="submit" onClick={this.submitEvent}>Submit</button>
        </div>
    );
}
}

export default Child;