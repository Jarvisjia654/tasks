import React, { useState } from "react";
import { Form } from "react-bootstrap";

function Edit_Pattern({
    student_name,
    set_student_name,
    student_status,
    set_student_status
}: {
    student_name: string;
    set_student_name: (name: string) => void;
    student_status: boolean;
    set_student_status: (check: boolean) => void;
}): JSX.Element {
    // const [Input, setInput] = useState<string>("student_name");
    function update_student_status(event: React.ChangeEvent<HTMLInputElement>) {
        set_student_status(event.target.checked);
    }
    function update_student_name(event: React.ChangeEvent<HTMLInputElement>) {
        set_student_name(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="Edit_Pattern">
                <Form.Label>Edit_Pattern:</Form.Label>
                <Form.Control
                    value={student_name}
                    onChange={update_student_name}
                />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="is he/she a student?"
                checked={student_status}
                onChange={update_student_status}
            />
        </div>
    );
}

export function EditMode(): JSX.Element {
    // This is the State (Model)
    const [student_name, set_student_name] = useState<string>("Your name ");
    const [student_status, set_student_status] = useState<boolean>(true);
    const [edit_mode, set_edit_mode] = useState<boolean>(false);

    function update_edit_mode(event: React.ChangeEvent<HTMLInputElement>) {
        set_edit_mode(event.target.checked);
    }

    // This is the View
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-check"
                label="edit"
                checked={edit_mode}
                onChange={update_edit_mode}
            />
            <div>
                {edit_mode && (
                    <Edit_Pattern
                        student_name={student_name}
                        set_student_name={set_student_name}
                        student_status={student_status}
                        set_student_status={set_student_status}
                    ></Edit_Pattern>
                )}
                {student_name} is {student_status ? " a" : " not a"} student
            </div>
        </div>
    );
}
