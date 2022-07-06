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

    const styles = {
        containerUseState: {
            width: "200px",
            height: "110px",
            border: "2px solid white",
        },
        tittle: {
            color: "chartreuse",
        },
        buttons: {
            width: "120px",
            display: "flex",
            justifyContent: "space-around",
            margin: "0 auto",
            paddingTop: "10px",
            color: "black",
            // border: "2px solid white",
        },
    };

    return (
        <div style={styles.containerUseState}>
            <h4 style={styles.tittle}>{props.text}</h4>
            <h5>Valor atual: {count}</h5>
            <div style={styles.buttons}>
                <button onClick={handleClick_Reset}>Resetar </button>
                <button onClick={handleClick_Increment}>+ 1</button>
                <button onClick={handleClick_Decrement}>- 1</button>
            </div>
        </div>
    );
};
export default UseState;
