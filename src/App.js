import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navegacion from './components/Navegacion/Navegacion'

import VistaInicio from './views/VistaInicio'
import VistaAutenticacion from './views/VistaAutenticacion'
import VistaFormacion from './views/VistaFormacion'
import VistaContacto from './views/VistaContacto'



function App() {
     return (
          <div className="App">
               <BrowserRouter>
                    <Navegacion/>
                    <Switch>
                         <Route path="/react-prueba-03/inicio" component={ VistaInicio } />
                         <Route path="/react-prueba-03/autenticacion" component={ VistaAutenticacion } />
                         <Route path="/react-prueba-03/formacion" component={ VistaFormacion } />
                         <Route path="/react-prueba-03/contacto" component={ VistaContacto } />
                         <Redirect from="/react-prueba-03" to="/react-prueba-03/inicio" />      
                    </Switch>
               </BrowserRouter>
          </div>
     );
}

export default App;
