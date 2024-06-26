import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
    // let inputRef = useRef();
    // let outputRef = useRef();

    let [inputVal, setInputVal] = useState("Initial Value");

    // function constantInput() {
    //     outputRef.current.innerText = `${outputRef.current.innerText.split(":").slice(0, -1).join(":")}: ${inputRef.current.value}`;
    // }

    // function constantInput2() {
    //     outputRef.current.innerText += `${inputRef.current.value}`.charAt(inputRef.current.value.length - 1);
    // }

    function constantInput3(event) {
        setInputVal(event.target.value);
    }

    return (
        <div className="search-bar">
            <h1>
                Search Bar
            </h1>

            <input onInput={constantInput3} value={inputVal} />
            <div className="test-output">
                Output: {inputVal}
            </div>
        </div>
    );
}

export default SearchBar;