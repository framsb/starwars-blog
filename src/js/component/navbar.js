import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store,actions} = useContext(Context);

	return (
		
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" width="70px" height="50px"></img></span>
			</Link>
			<div class="btn-group">
				<div className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites <span className="px-1 bg-secondary fw-bold rounded">{store.Favorites.length}</span>
				</div>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.Favorites.length === 0 ? (<li className="text-center"><a className="dropdown-item">(empty)</a></li>) : store.Favorites.map((item, ind) => {
						return (
								<li className="d-flex justify-content-between px-3" key={ind}><a className="dropdown-item">{item}</a><a className="col"
								onClick={() => actions.deleteFav(ind)}>
								<i className="far fa-trash-alt" /></a></li>
								)
							})}
				</ul>
  
</div>
		</div>		
		</nav>
	);
};
