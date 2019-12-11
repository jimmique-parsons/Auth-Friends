import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const addFriendStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

function AddFriend(props) {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChanges = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/friends", friend)
            .then(res => {
                console.log("AddFriend.js: axiosWithAuth: res ", res);
                setFriend({
                    name: "",
                    age: "",
                    email: ""
                });
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="login" style={addFriendStyles}>
            <h2>Add Friend</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name" hidden>
                    Name:
         </label>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={friend.name}
                    onChange={handleChanges}
                />
                <label htmlFor="age" hidden>
                    Age:
         </label>
                <input
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={friend.age}
                    onChange={handleChanges}
                />
                <label htmlFor="email" hidden>
                    Email:
         </label>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={friend.email}
                    onChange={handleChanges}
                />

                <button>Add Friend</button>
            </form>
        </div>
    );
}

export default AddFriend;