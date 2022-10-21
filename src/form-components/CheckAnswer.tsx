import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [Input, setInput] = useState<string>("");
    const check = Input == expectedAnswer;
    return (
        <div>
            <Form.Group controlId="CheckAnswer">
                <Form.Label>Check Answer:</Form.Label>
                <Form.Control
                    value={Input}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setInput(event.target.value)
                    }
                />
            </Form.Group>
            {check && "✔️"}
            {!check && "❌"}
        </div>
    );
}
