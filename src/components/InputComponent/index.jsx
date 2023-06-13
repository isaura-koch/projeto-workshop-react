import React from "react";

import { Container, Title, Input } from "./index.styled";

const InputComponent = (props) => {
    const onChange = (event) => {
        props.onChange && props.onChange(event.target.value)
    }
    return (
        <Container>
            <Title>{props.title}</Title>
            <Input
                value={props.value}
                disabled={props.disabled}
                onChange={onChange}
            />
        </Container>
    )
}

export default InputComponent;