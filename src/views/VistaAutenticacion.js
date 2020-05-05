import React, { useState, useEffect }  from 'react'



export default function VistaAutenticacion()
{
	



	return(
		<div>
		<br/>
			<input type="text" 
				  name="email" 
				  placeholder="Email"

			/><br/>
			<input type="password" 
				  name="password" 
				  placeholder="Contraseña"

			/><br/><br/>

			<br/><br/>

			<p id="usuario"></p>
			
		</div>
	)
}