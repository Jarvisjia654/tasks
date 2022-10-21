import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [input_number, set_input_number] = useState<string>("");
    const [attempt_number, set_attempt_number] = useState<number>(3);
    return (
        <div>
            <Form.Group controlId="GiveAttempts">
                <Form.Label>Enter attempting numbers:</Form.Label>
                <Form.Control
                    type="number"
                    value={input_number}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        set_input_number(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                The year before the movie was released was {attempt_number}.
            </div>
            <div>
                <Button
                    onClick={() => {
                        set_attempt_number(attempt_number - 1);
                    }}
                    disabled={attempt_number == 0}
                >
                    Use
                </Button>
                <Button
                    onClick={() => {
                        {
                            if (input_number != "") {
                                set_attempt_number(
                                    attempt_number + parseInt(input_number)
                                );
                            }
                        }
                    }}
                >
                    Gain
                </Button>
            </div>
        </div>
    );
}
