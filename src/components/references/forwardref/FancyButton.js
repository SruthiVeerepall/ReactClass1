import { forwardRef } from "react";

const FancyButton =(props, ref)=>{
    return(
        <div>
            <button>{props.children}</button>
            <input ref={ref} type="text" placeholder="Name" />
        </div>
    );
}

export default forwardRef(FancyButton);