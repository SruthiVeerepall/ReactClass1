import ReusableForm from "./ReusableForm";

const ProductForm=()=>{
    const prodfeilds=[];
    return(
        <div>
            <div>Product Form</div>
            <ReusableForm  feilds={prodfeilds}/>
        </div>
    );
}

export default ProductForm;