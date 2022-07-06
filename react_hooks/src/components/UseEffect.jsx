import { useState, useEffect } from "react";

const UseEffect = (props) => {
    const [resourceType, setResourceType] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${resourceType}`
            );
            const responseJSON = await response.json();
            setUsers(responseJSON);
        };
        fetchData();
    }, [resourceType]);

    const handleChangeType = (resourceType) => {
        setResourceType(resourceType);
    };

    const styles = {
        Color: "yellow",
        containerUseEffect: {
            width: "300px",
            height: "350px",
            border: "2px solid yellow",
        },
        tittle: {
            color: "yellow",
        },
        buttons: {
            width: "200px",
            display: "flex",
            justifyContent: "space-around",
            margin: "0 auto",
            paddingTop: "10px",
            color: "black",
            //border: "2px solid white",
        },
    };
    return (
        <div style={styles.containerUseEffect}>
            <div className="">
                <h4 style={styles.tittle}>{props.text}</h4>
                <h5>Clicou em: {resourceType}</h5>
                <div style={styles.buttons}>
                    <button onClick={() => handleChangeType("users")}>
                        Users
                    </button>
                    <button onClick={() => handleChangeType("posts")}>
                        Posts
                    </button>
                    <button onClick={() => handleChangeType("comments")}>
                        Comments
                    </button>
                    <button onClick={() => handleChangeType("todos")}>
                        Todos
                    </button>
                </div>
            </div>
            <div>
                <h5>Lista de {resourceType}</h5>
                {users.slice(0, 5).map((user) => (
                    <div key={user.id}>
                        <p>
                            <b>{user.name} </b> {user.email}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default UseEffect;
