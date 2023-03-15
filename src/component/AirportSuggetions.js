import React from 'react'
// here we take parameters which are passed to the airport suggessions where it is called
const AirportSuggetions = ({ airports = [], selectAirport }) => {
    if (airports.length === 0) {
        // if airport.length =0 than returns null
        return null;
    }
    return (
        <div>
            <ul>
                {/* When we iterate over the map object it returns the key, value pair in the same order as inserted. */}
                {airports.map((airport) => (
                    // here key must be unique so in our case id is a unique one so we do key=airport id
                    <li key={airport.id} className="suggestion-list" style={{
                        padding: '10px',
                        borderBottom: '1px solid',
                        // when we hover over this li our mouse arrow become pointer
                        cursor: "pointer"
                    }}
                    // onlick takes an arrow function inside of which we call another function with a parameters as we fetch it from airport.name
                        onClick={() => selectAirport(airport.name)}
                    >
                        {/* it display all the name of a airport from the airport array */}
                        {airport.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AirportSuggetions;