import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import UserCard from "./UserCard";
import { Redirect } from "react-router";
import axios from "axios";
//import {list} from "../const/Const";      just for my training

function UsersList(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {!props.isLogin ? (
                <>
                    {alert("not login")}
                    <Redirect to="/" />
                </>
            ) : (
                <Container>
                    <Row>
                        {list.map((user, i) => (
                            <UserCard key={i} user={user} />
                        ))}
                    </Row>
                </Container>
            )}
        </>
    );
}

export default UsersList;
