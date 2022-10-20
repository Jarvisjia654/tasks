import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    current_index: number;
    setCi: (new_color_index: number) => void;
}

function ChangeColor({ current_index, setCi }: ChangeColorProps): JSX.Element {
    const new_color_index = (1 + current_index) % COLORS.length;
    // const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return <Button onClick={() => setCi(new_color_index)}>Next Color</Button>;
}

function ColorPreview({
    current_index
}: {
    current_index: number;
}): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[current_index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [current_index, setCi] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[current_index]}</span>
            <div>
                <ChangeColor
                    current_index={current_index}
                    setCi={setCi}
                ></ChangeColor>
                <ColorPreview current_index={current_index}></ColorPreview>
            </div>
        </div>
    );
}
