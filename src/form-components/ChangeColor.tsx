import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [response, setResponse] = useState<string>("red");

    return (
        <div>
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-good"
                label="red"
                value="red"
                checked={response === "red"}
                style={{ backgroundColor: "red" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="green"
                value="green"
                checked={response === "green"}
                style={{ backgroundColor: "green" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="yellow"
                value="yellow"
                checked={response === "yellow"}
                style={{ backgroundColor: "yellow" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="white"
                value="white"
                checked={response === "white"}
                style={{ backgroundColor: "white" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="orange"
                value="orange"
                checked={response === "orange"}
                style={{ backgroundColor: "orange" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="blue"
                value="blue"
                checked={response === "blue"}
                style={{ backgroundColor: "blue" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="black"
                value="black"
                checked={response === "black"}
                style={{ backgroundColor: "black" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="cyan"
                value="cyan"
                checked={response === "cyan"}
                style={{ backgroundColor: "cyan" }}
            />
            <hr></hr>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: response,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                {response}
            </div>
            <hr></hr>
        </div>
    );
}
