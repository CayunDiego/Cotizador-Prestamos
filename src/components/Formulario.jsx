import React, { Fragment, useState } from 'react';
import { calcularCantidad } from '../helpers'


const Formulario = (props) => {
    const {cantidad, setCantidad, plazo, setPlazo, setTotal, setCargando} = props;

    //Definir State
    const [error, setError] = useState(false);

    //Cuando el usuario hace submit 
    const calcularPrestamo = e =>{
        e.preventDefault();
        //validar
        if( cantidad === 0 || plazo === ''){
            setError(true);
            return;
        } 
        //elimina el error previo
        setError(false);

        //Habilita el spinner
        setCargando(true);

        setTimeout(() => {
            //realizar la cotización
            const total = calcularCantidad(cantidad, plazo);
            
            //una vez calculado, guardar total
            setTotal(total);

            //Dehabilitar el spinner
            setCargando(false);
        },3000);
        
    }

    return ( 
        <Fragment>
            <form onSubmit={ calcularPrestamo }>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000" 
                            onChange = { e => setCantidad(parseInt(e.target.value)) }
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange = { e => setPlazo(parseInt(e.target.value)) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>
            { (error) ? <p className="error">Todos los campos son obligatorios</p> : null}
        </Fragment>
        
     );
}
 
export default Formulario;