import ReusableForm from "./ReusableForm";

const UserForm=()=>{
const userFeilds=[
    {label:'name', type:"type", name:"name", placeholder:"Enter your name"},
    {
        label:'email', type:"email", name:"email", placeholder:"Enter email"
    }
]

const handleSubmit=(data)=>
{
    console.log("user data:" ,data);
}

    return(
        <div>
            <div>User Form</div>
            <ReusableForm feilds={userFeilds} onSubmit={handleSubmit}/>
        </div>
    );
}

export default UserForm;