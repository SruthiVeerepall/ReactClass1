import ReusableForm from "./ReusableForm";

const FeedbackForm=()=>{
    const feedbackfeilds=[];
    return(
        <div>
            <div>Feedback Form</div>
            <ReusableForm  feilds={feedbackfeilds}/>
        </div>
    );
}

export default FeedbackForm;