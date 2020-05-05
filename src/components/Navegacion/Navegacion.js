import React from 'react'
import { NavLink } from "react-router-dom";
import './Navegacion.css'


const Navegacion = () =>
{
	return(
		<nav className="Navegacion">
			<ul>
				<li>
					<NavLink 
						to="/react-prueba-03/inicio" 
						activeClassName="link-activo">
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-03/formacion" 
						activeClassName="link-activo">
						Formacion
					</NavLink>
				</li>
				<li>
					<NavLink 
						to="/react-prueba-03/autenticacion" 
						activeClassName="link-activo">
						Login/Registro
					</NavLink>
				</li>			
				<li>
					<NavLink 
						to="/react-prueba-03/private" 
						activeClassName="link-activo">
						Alumnos
					</NavLink>
				</li>	
				<li>
					<NavLink 
						to="/react-prueba-03/contacto" 
						activeClassName="link-activo">
						Contacto
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navegacion