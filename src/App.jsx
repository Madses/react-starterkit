import React, { useState } from "react";
import "./index.scss";

function App() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            {count}
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default App;
