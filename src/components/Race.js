import React from "react";

const Race = ({name, date}) => {

    return (
        <div className="race-details">
            <h3>{date}</h3>
            <h2>{name}</h2>
        </div>
    )
}

export default Race;
