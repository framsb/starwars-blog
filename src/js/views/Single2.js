import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { UniqueCard2 } from "../component/UniqueCard2.js";

export const Single2 = () => {
	const { store, actions } = useContext(Context);
	const  { id }  = useParams();

	useEffect(()=>{ 
		if(id){
			actions.getPlanetDetail(id)}
		},[id]);

	return ( 
	<>
	<UniqueCard2 key={id}
				item={store.PlanetDetail}/>
	</> )
};