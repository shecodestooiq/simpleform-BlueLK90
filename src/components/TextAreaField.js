
const TextAreaField = ({ label, value, onChange, required }) => {

    return (
        <div className="userMessage">
            <label htmlFor="userMessage">{ label }</label><br />
            <textarea name="userMessage" id="userMessage" placeholder={ value } cols="30" rows="10" 
                required={ required } onChange={ (e) => onChange(e.target.value) }/>
        </div>
    );
}
 

export default TextAreaField;