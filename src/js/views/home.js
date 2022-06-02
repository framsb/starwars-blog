import React, { useContext} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { CardC } from "../component/CardC.js";
import { CardP } from "../component/CardP.js";
import "../../styles/home.css";

export const Home = () => {
const {store,actions} = useContext(Context)
	
return (
	<div className="container">
		<div className="text-danger display-5">
			Characters
		</div>
		<div className="overflow-auto">
		<div className="row d-flex flex-nowrap">
			{store.characters.map((item,ind) =>{
			return <CardC key={ind} 
							name={item.name}
							gender={item.gender}
							hair_color={item.hair_color}
							eye_color={item.eye_color}
							url= {item.url}/> })}
		</div>
		</div>
		<div className="text-danger display-5 mt-5">
			Planets
		</div>
		<div className="overflow-auto">
		<div className="row d-flex flex-nowrap">
			{store.planets.map((item,ind) =>{
			return <CardP key={ind} 
							name={item.name}
							population={item.population}
							terrain={item.terrain}
							url= {item.url}/> })}
		</div>
		</div>

	</div>)
};
