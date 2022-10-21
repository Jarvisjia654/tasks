import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // This is the State (Model)
    const [current_answer, set_current_answer] = useState<string>("1");
    const check = current_answer == expectedAnswer;
    // This is the Control
    function update_answer(event: React.ChangeEvent<HTMLSelectElement>) {
        set_current_answer(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="options">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={current_answer} onChange={update_answer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {check && "✔️"}
            {!check && "❌"}
        </div>
    );
}
