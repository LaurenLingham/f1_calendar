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
            <p><b>Round {race.round}</b></p>
            <h2>{race.date}</h2>
            <h3>{race.raceName}</h3>
            <p>{race.Circuit.circuitName}</p>
            <button onClick={handleBackButtonClicked}>Back to Race Calendar</button>
        </div>
    )
}

export default RaceDetails;
