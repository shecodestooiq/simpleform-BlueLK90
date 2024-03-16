
const InputField = ({ label, type, value, onChange, required }) => {

    return (
        <div className="userInfo">
            <label htmlFor="userInfo">{ label }</label><br/>
            <input type={ type } name="userInfo" id="userInfo" placeholder={ value } required={ required } 
                onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
}
 
export default InputField;