import React from "react";
import Race from "./Race";

const RaceList = ({races, onRaceSelected}) => {
    const raceNodes = races.map((race) => {
        let name = race.raceName;
        let date = new Date(race.date);
        let formattedDate = date.toLocaleDateString(
            "en-GB", 
            {
                day: "numeric", 
                month: "long", 
                year: "numeric", 
                weekday: "long"
            });

        return (
            <li key={name} onClick={() => {onRaceSelected(race)}}>
                <Race name={name} date={formattedDate}/>
            </li>
        )
    });

    return (
       <div className="race-list">
            <h1>2023 Formula 1 Calendar</h1>
            <ul>
                {raceNodes}
            </ul>
        </div>
    )
}

export default RaceList;