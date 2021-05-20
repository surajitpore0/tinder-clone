import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }
        fetchData();
    }, []);
    console.log(people);

    const onSwipe = (direction, nameToDelete) => {
        console.log("You swiped: " + nameToDelete);
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + " left the screen");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        onSwipe={(dir) => onSwipe(dir, person.name)}
                        onCardLeftScreen={() => onCardLeftScreen(person.name)}
                        preventSwipe={["right", "left"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
