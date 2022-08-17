

const InputField = (props) => {



let currentInput = ""

const updateInput = (event) => {
    // console.log(event.target.value)
    currentInput = event.target.value
}

const onSubmit = (event) => {
    // console.log(event)
    props.getData(currentInput)
}


return (
    <div className="Input-field">
        <input 
        type="text" 
        placeholder="Type in text and search for country" 
        onChange={updateInput}
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