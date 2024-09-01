import { Component, createRef } from "react";


class FocusManager extends Component{
    constructor(props)
    {
        super(props);
        this.refName=createRef();
        this.refEmail=createRef();
        this.refPassword=createRef();
    }
    handleInput=(inputRef)=>{
        inputRef.current.focus();
    }

    render(){
        return(
            <div>
                <input
                    ref={this.refName}
                    type="text"
                    placeholder="Enter Name" />

                <button onClick={()=>this.handleInput(this.refName)}>Name Focus</button><br/>
                <input
                    ref={this.refEmail}
                    type="email"
                    placeholder="Enter Email" />
                <button onClick={()=>this.handleInput(this.refEmail)}>Email Focus</button><br/>
                <input
                    ref={this.refPassword}
                    type="password"
                    placeholder="Enter Password" />
                <button onClick={()=>this.handleInput(this.refPassword)}>Password Focus</button><br/>
            </div>
        );
    }
}

export default FocusManager;