import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { UniqueCard1 } from "../component/UniqueCard1.js";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const  { id }  = useParams();

	useEffect(()=>{ 
		if(id){
			actions.getCharacterDetail(id)}
		},[id]);

	return ( 
	<>
	<UniqueCard1 key={id}
				item={store.CharacterDetail}/>
	</> )
};
