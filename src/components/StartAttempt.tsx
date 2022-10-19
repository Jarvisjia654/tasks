import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt_number, set_attempt_number] = useState<number>(4);
    const [quiz_in_progress, set_quiz_in_progress] = useState<boolean>(false);
    return (
        <div>
            <div>
                Attempt Number: <span>{attempt_number}</span>
                <Button
                    onClick={() => set_attempt_number(1 + attempt_number)}
                    disabled={quiz_in_progress}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        set_quiz_in_progress(true);
                        set_attempt_number(attempt_number - 1);
                    }}
                    disabled={quiz_in_progress || attempt_number == 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => set_quiz_in_progress(false)}
                    disabled={!quiz_in_progress}
                >
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
