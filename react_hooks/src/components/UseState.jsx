import { useState } from "react";

const UseState = (props) => {
    const [count, setCount] = useState(0);

    const handleClick_Reset = () => {
        setCount(0);
    };

    const handleClick_Increment = () => {
        setCount((prevState) => prevState + 1);
    };

    const handleClick_Decrement = () => {
        setCount((prevState) => prevState - 1);
    };

    return (
        <div
            style={{
                width: "200px",
                height: "110px",
                border: "2px solid white",
            }}
        >
            <h2 style={{ color: "green" }}>{props.text}</h2>
            <h3>Valor atual: {count}</h3>
            <div
                style={{
                    width: "120px",
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "0 auto",
                    paddingTop: "10px",
                    // border: "2px solid white",
                }}
            >
                <button onClick={handleClick_Reset}>Resetar </button>
                <button onClick={handleClick_Increment}>+ 1</button>
                <button onClick={handleClick_Decrement}>- 1</button>
            </div>
        </div>
    );
};
export default UseState;
