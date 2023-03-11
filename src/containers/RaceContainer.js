import React, { useEffect, useState } from "react";
import RaceDetails from "../components/RaceDetails";
import RaceList from "../components/RaceList";

const RaceContainer = () => {

    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState(null);

    async function getRaces(url = "http://ergast.com/api/f1/2023.json") {
        const res = await fetch(url);
        const data = await res.json();
        setRaces(data.MRData.RaceTable.Races);
    }

    useEffect(() => {
        getRaces();
    }, []);

    const handleSelectedRace = (race) => {
        setSelectedRace(race);
    }

    let raceList = null; 
    
    if (!selectedRace) {
        raceList = <RaceList races={races} onRaceSelected={handleSelectedRace}/>
    }

    return (
        <div>
            <RaceDetails race={selectedRace} onRaceSelected={handleSelectedRace}/>
            {raceList}
        </div>
    )
}

export default RaceContainer;
