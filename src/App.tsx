import React from "react";
import "./App.css";
import working_icon from "../src/assets/images/working.jpg";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Yanhao
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div className="App-body">
                <h1>Web App</h1>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "100px",
                                    height: "100px"
                                }}
                            ></div>
                            <ul>
                                <li>First thing</li>
                                <li>Another thing</li>
                                <li>A third item</li>
                            </ul>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "100px",
                                    height: "100px"
                                }}
                            ></div>
                            <img src={working_icon} alt="Working on it" />
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
