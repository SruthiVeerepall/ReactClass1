import { useState } from "react";

const ReusableForm=(props)=>{

    const [values,setValues]=useState([]);
    const handleOnChange=(e)=>
    {
        console.log(e.target.value);
        setValues({[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit(values);
        console.log("Submited")
    }
    const GenerateFeilds=()=>
    {
        const {feilds}=props;
        return feilds.map((feilds, index) => (
            <div key={index}>
                <label>{feilds.label}</label>
                <input type={feilds.type} name={feilds.name} placeholder={feilds.placeholder} onChange={handleOnChange}></input>

            </div>
        ))
    }

    return(
        <form onSubmit={handleSubmit}>
            {GenerateFeilds()}
            <button name="submit">Submit</button>
        </form>
    );
}

export default ReusableForm;