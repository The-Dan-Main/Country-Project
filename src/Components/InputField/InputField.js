import "./InputField.css";

const InputField = (props) => {



let currentInput = ""

const updateInput = (event) => {
    currentInput = event.target.value
    console.log(currentInput.length)
    if(currentInput.length > 1 ) {
        props.getData(currentInput)
    }

}

const onSubmit = (event) => {
    props.getData(currentInput)
}


return (
    <div className="Input-field-container">
        <input 
        type="text" 
        placeholder="Search country" 
        onChange={updateInput}
        className="input-InputField"
         />
        <button
         id="input-submit-button"
         onClick={onSubmit}
            >Click me to search!
        </button>
    </div>
)

}

export default InputField;