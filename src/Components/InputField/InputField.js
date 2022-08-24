import React from "react";
import "./InputField.css";

class InputField extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.currentInput = "";
    }

    /** only in use, when it should fetch while typping searchinput */
    // updateInput = (event) => {
    //     this.currentInput = event.target.value
    //     this.props.getData(this.currentInput)

    // }

    onSubmit = (event) => {
        this.currentInput = event.target.previousSibling.value
        this.props.getData(this.currentInput)

    }

    render() {
        return (
            <div className="Input-field-container">
                <input
                    type="text"
                    placeholder="Search country"
                    className="input-InputField"
                    onKeyDown={(event) => {event.key === "Enter" && this.props.getData(event.target.value)}}
                />
                <button
                    id="input-submit-button"
                    onClick={this.onSubmit}
                >
                    Click me to search!
                </button>
            </div>
        )
    }

}

export default InputField;