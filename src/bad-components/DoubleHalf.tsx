import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler(): void {
        const new_value = 2 * dhValue;
        setDhValue(new_value);
    }

    function Halver(): void {
        const new_value = 0.5 * dhValue;
        setDhValue(new_value);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
                <div>
                    <Button onClick={() => Doubler()}>Double</Button>
                </div>
                <div>
                    <Button onClick={() => Halver()}>Halver</Button>
                </div>
            </div>
        </div>
    );
}
