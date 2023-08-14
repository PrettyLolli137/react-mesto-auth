import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ButtonLike from "./ButtonLike";

function Card({ card, onCardClick, onDeleteCard }) {

const currentUser = useContext(CurrentUserContext);

function handleCardClick() {
    onCardClick(card);
}


return (
    <ul className="groups__group">
    <li className="groups__element">
        <img
        className="groups__image groups__image_popup_opened"
        src={card.link}
        alt={`Изображение ${card.name}`}
        onClick={handleCardClick}
        />
        {currentUser._id === card.owner._id && (
        <button
            className="groups__deletebtn"
            type="button"
            onClick={() => onDeleteCard(card._id) }
        />
        )}
        <div className="groups__mask">
        <h2 className="groups__text">{card.name}</h2>
        <div className="groups__like-container"></div>
        <ButtonLike likes={card.likes} myid={currentUser._id} cardid={card._id}/>
        </div>
    </li>
    </ul>
);
}

export default Card;

/*
<button className="groups__deletebtn" onClick={onDeleteCard}></button>

*/
