import React from "react";
import { Container, Title, Button } from "./index.styled";

const ButtonComponent = (props) => {
    const onClick = () => {
        props.onClick && props.onClick()
    }

    return (
        <Container>
            <Button
                onClick={onClick}
            >
                <Title>
                    {props.title}
                </Title>
            </Button>
        </Container>
    )
}

export default ButtonComponent;