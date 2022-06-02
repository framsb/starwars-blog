import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const CardC = ({name, gender,hair_color ,eye_color, url}) => {
    const {store,actions} = useContext(Context);

    return (
        <div className="col col-md-3 my-3">
                <div className="card">
                    <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2021/04/star-wars-logo-900x506.jpg"></img>
                </div>
                <div className="card-body mb-2">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-text"> Gender: {gender} </div>
                    <div className="card-text"> Hair color: {hair_color} </div>
                    <div className="card-text"> Eye color: {eye_color} </div>
                </div>
                <div className="mx-3 d-flex justify-content-between">
                    <Link to={'/detail/characters'+url.replace("https://swapi.dev/api/people","")} className="btn btn-outline-primary">{"Learn more!"}</Link>
                    <button className="btn btn-outline-warning" onClick={() => {
                            actions.addFavorites(name);
                        } }>
						<i className="fas fa-heart" /></button>
                    </div>
                </div>
    )
}

CardC.propTyPes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
}
