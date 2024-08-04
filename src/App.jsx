import React, { useState } from "react";
import "./index.scss";

import Icon from "./icon.svg";

function App() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            {count}
            <Icon />
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default App;
