import React, { useState } from "react";

// Componentes
import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";

const App = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [finalValue, setFinalValue] = useState(null);

    const sumValues = () => {
        const sum = parseInt(value1) + parseInt(value2);
        setFinalValue(sum);
    }

    return(
        <>
            <h1>Somando dois valores!</h1>
            <InputComponent
                title="Valor 1"
                value={value1}
                onChange={(value) => setValue1(value)}
            />
            <InputComponent
                title="Valor 2"
                value={value2}
                onChange={(value) => setValue2(value)}
            />
            <ButtonComponent
                title="Somar"
                onClick={sumValues}
            />
            <h3>O resultado da soma de {value1} + {value2} é {finalValue}!!</h3>
        </>
    )
};

export default App;