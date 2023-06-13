import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #0036AD;
`;

export const Input = styled.input`
    display: flex;
    flex-flow: nowrap row;
    width: 200px;
    height: 34px;
    border: 1px solid #0036AD;
    background-color: ${props => props.disabled ? "#F4F7FA" : "#FFFFFF"};
    cursor: ${props => props.disabled ? "not-allowed" : "default"};
    border-radius: 4px;
    margin-bottom: 2px;
`;