import React from "react";

const RaceDetails = ({race, onRaceSelected}) => {

    if (!race) {
        return null;
    }

    const handleBackButtonClicked = () => {
        onRaceSelected(null);
    }

    return (
        <div className="race-details">
            <h1>Race Details</h1>
            <h2>{race.raceName}</h2>
            <p><b>Round:</b> {race.round}</p>
            <p><b>Circuit:</b> {race.Circuit.circuitName}</p>
            <button onClick={handleBackButtonClicked}>Back</button>
        </div>
    )
}

export default RaceDetails;
