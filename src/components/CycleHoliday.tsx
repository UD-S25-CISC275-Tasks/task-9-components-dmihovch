import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holByDate: string[] = ["💟", "🇺🇸", "🎃", "🦃", "🎄"];
    const holByName: string[] = ["🎄", "🎃", "🇺🇸", "🦃", "💟"];
    const [hol, setHol] = useState<string>("🎄");

    function nextHolDate(): void {
        if (holByDate.indexOf(hol) === 4) {
            setHol(holByDate[0]);
        } else {
            setHol(holByDate[holByDate.indexOf(hol) + 1]);
        }
    }
    function nextHolAlph(): void {
        if (holByName.indexOf(hol) === 4) {
            setHol(holByName[0]);
        } else {
            setHol(holByName[holByName.indexOf(hol) + 1]);
        }
    }

    return (
        <div>
            <Button onClick={nextHolAlph}>Next by Alphabet</Button>
            <Button onClick={nextHolDate}>Next by Year</Button>
            <p>Holiday: {hol}</p>
        </div>
    );
}
