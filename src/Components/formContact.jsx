import React from "react";
import { useState } from "react";
import '../App.css';

//Import de react-router-dom
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

function Formulario() {
    const [pais, setPais] = useState('Argentina');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleChange = (event) => {
        setPais(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hola ${apellido}, ${nombre}. El email que ingresaste es ${email}, tu telefono es ${telefono} y tu pais ingresado es ${pais}. \n
        Tu asunto es el siguiente: ${asunto}
        Tu mensaje es: ${mensaje}.`);
    };

    return (

        <>
            <div className="container">
                <div className="col col-12">
                    <h1>Contactenos</h1>
                    <p>Por favor, ingrese sus datos a continuación para ponerse en contacto con nosotros ante cualquier inconveniente u motivo que le podamos ofrecer.</p>
                    <div className="main">
                        <div>
                            <form onSubmit={handleSubmit} className="form-control border border-primary">
                                <div className="row-g3">
                                    <div className="col-md-6">
                                        <div>
                                            <span htmlFor="inputPais" className="form-span">Seleccione su pais: </span>
                                            <select className="form-select" value={pais} onChange={handleChange}>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Perú">Perú</option>
                                                <option value="Chile">Chile</option>
                                                <option value="Chile">Brazil</option>
                                                <option value="Chile">Bolivia</option>
                                            </select>
                                        </div>
                                        <br />
                                        <div>
                                            <label htmlFor="inputNombre" className="form-label">Nombre: </label>
                                            <input required type="text" name="nombre" className="form-control" placeholder="Ejemplo: Gordon" value={nombre} onChange={(e) => setNombre(e.target.value)}>
                                            </input>
                                        </div>
                                        <br />
                                        <div>
                                            <label htmlFor="inputApellido" className="form-label">Apellido: </label>
                                            <input required type="text" name="apellido" className="form-control" placeholder="Ejemplo: Freeman" value={apellido} onChange={(e) => setApellido(e.target.value)}>
                                            </input>
                                        </div>
                                        <br />
                                        <div>
                                            <label htmlFor="inputEmail" className="form-label">Correo: </label>
                                            <input required type="email" name="correo" className="form-control" placeholder="Ejemplo: gordonfreeman_19_1998@blackmesa.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                        </div>
                                        <br />
                                        <div>
                                            <label htmlFor="inputTelefono" className="form-label">Teléfono: </label>
                                            <input required type="number" name="telefono" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                                        </div>
                                        <br />
                                        <div>
                                            <label htmlFor="inputAsunto" className="form-label">Asunto: </label>
                                            <input required type="text" name="asunto" className="form-control" value={asunto} onChange={(e) => setAsunto(e.target.value)}></input>
                                        </div>
                                        <br />
                                        <div>
                                        <label htmlFor="inputAsunto" className="form-label">Mensaje: </label>
                                            <input required type="text" name="mensaje" className="form-control" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></input>
                                        </div>
                                        <br />
                                        <input type="Submit" value="Cargar Datos" className="btn btn-success col-6 col-centered" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col col-10 margin: right">
                            <p>Contactanos por telefono al: (+54) - 351 - 1234567</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Formulario;