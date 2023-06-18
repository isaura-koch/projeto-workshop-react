import React, { useState } from "react";

// Componentes
import InputComponent from "./components/InputComponent";

const App = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const sumValues = () => {
        const sum = parseInt(value1) + parseInt(value2);
        return sum;
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
            <InputComponent
                title="Total"
                value={sumValues(value1, value2)}
                disabled={true}
            />
        </>
    )
};

export default App;