import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const UniqueCard1 = ({item}) => {
	const {store,actions} = useContext(Context);

	return ( 
	<div className="container">
		<div className="d-flex justify-content-between">
				<img src="https://www.giantfreakinrobot.com/wp-content/uploads/2021/04/star-wars-logo-900x506.jpg" width="500px" height="400px"></img>
					<div className="px-3 mt-4 text-center">
						<h1>{item.name}</h1>
					<p>Cras non felis arcu. Donec auctor turpis mi. Nulla faucibus dictum 
						nisl sit amet ultricies. Morbi ac finibus dolor, nec pharetra ligula. 
						Nullam sit amet rutrum lorem, ac dictum dui. Vivamus id ante sed lacus 
						porttitor hendrerit vel maximus enim. Integer at vestibulum risus. Etiam 
						lobortis elementum sem. Aliquam erat volutpat. Nullam erat nulla, egestas 
						facilisis ipsum non, feugiat euismod urna. Nulla ante sapien, fringilla 
						vitae laoreet at, laoreet interdum nibh.</p>
					</div>
		</div>
			<hr className="text-danger"/>
			<table className="text-danger text-center" width="100%">
  			<thead>
				<tr>
   					<th>Name</th>
   					<th>Birth year</th>
    				<th>Gender</th>
   	 				<th>Height</th>
    				<th>Skin Color</th>
					<th>Eye Color</th>
  				</tr>
			</thead>
			<tbody>
  				<tr>
    				<td>{item.name}</td>
					<td>{item.birth_year}</td>
					<td>{item.gender}</td>
					<td>{item.height}</td>
					<td>{item.skin_color}</td>
					<td>{item.eye_color}</td>
  				</tr>
			</tbody>
			</table>
		</div> )
};

