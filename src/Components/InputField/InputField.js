import "./InputField.css";

const InputField = (props) => {

// console.log('props',props.props.allResults)

let currentInput = ""

const updateInput = (event) => {
    currentInput = event.target.value
    // console.log(currentInput)
    // if(currentInput.length > 1 ) {
        props.getData(currentInput)
    // }

}

const onSubmit = (event) => {
    // console.log(event)
    currentInput = event.target.previousSibling.value
    // console.log(currentInput)
    props.getData(currentInput)

}


return (
    <div className="Input-field-container">
        <input 
        type="text" 
        placeholder="Search country" 
        onInput={updateInput}
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