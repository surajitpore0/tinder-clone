import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
        },
        {
            name: "Elon Musk",
            url: "https://i.pinimg.com/originals/f0/cd/07/f0cd07e1adf68a9de42532adadfca638.jpg",
        },
        {
            name: "Elon Musk",
            url: "https://static.onecms.io/wp-content/uploads/sites/9/2017/06/cartoons-helping-kids-eat-fruit-or-veggies-fwx-2000.jpg",
        },
    ]);

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
                            style={{ backgroundImage: `url(${person.url})` }}
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
