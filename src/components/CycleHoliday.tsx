import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday =
    | "Dragon Boat Festival🎏"
    | "Halloween🎃"
    | "Diiwali earlier🪔"
    | "Chinese New Year🏮"
    | "Christmas🎅";
const year_order = new Map<Holiday, Holiday>([
    ["Chinese New Year🏮", "Dragon Boat Festival🎏"],
    ["Dragon Boat Festival🎏", "Diiwali earlier🪔"],
    ["Diiwali earlier🪔", "Halloween🎃"],
    ["Halloween🎃", "Christmas🎅"],
    ["Christmas🎅", "Chinese New Year🏮"]
]);
const alphbet_order = new Map<Holiday, Holiday>([
    ["Chinese New Year🏮", "Christmas🎅"],
    ["Christmas🎅", "Diiwali earlier🪔"],
    ["Diiwali earlier🪔", "Dragon Boat Festival🎏"],
    ["Dragon Boat Festival🎏", "Halloween🎃"],
    ["Halloween🎃", "Chinese New Year🏮"]
]);

export function CycleHoliday(): JSX.Element {
    const [curr_Holiday, setHoliday] = useState<Holiday>("Chinese New Year🏮");
    function nextYearH(): void {
        const nextHoliday = year_order.get(curr_Holiday);
        if (nextHoliday != undefined) {
            setHoliday(nextHoliday);
        }
    }
    function nextAlphabetH(): void {
        const nextHoliday = alphbet_order.get(curr_Holiday);
        if (nextHoliday != undefined) {
            setHoliday(nextHoliday);
        }
    }
    return (
        <div>
            <p>Holiday: {curr_Holiday}</p>
            <div>
                <Button onClick={nextYearH}>Advance by Year</Button>
            </div>
            <div>
                <Button onClick={nextAlphabetH}>Advance by Alphabet</Button>
            </div>
        </div>
    );
}
