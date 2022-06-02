import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const CardP = ({name, population, terrain,url}) => {
    const {store,actions} = useContext(Context);

    return (
        <div className="col col-md-3 my-3">
                <div className="card">
                    <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2021/04/star-wars-logo-900x506.jpg"></img>
               </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-text"> Population: {population} </div>
                    <div className="card-text"> Terrain: {terrain} </div>
                </div>
                    <Link to={'/detail/planets'+url.replace("https://swapi.dev/api/planets","")} className="btn btn-outline-primary">Learn more!</Link>
                    <button className="btn btn-outline-warning" onClick={() => {
                            actions.addFavorites(name);
                        } }>
						<i className="fas fa-heart" /></button>
                </div>
    )
}

CardP.propTyPes = {
    name: PropTypes.string,
    population: PropTypes.string,
    terrain: PropTypes.string,
}
