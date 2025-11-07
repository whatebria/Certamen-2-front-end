import React, { useEffect, useRef, useState } from 'react'
import EntradasForm from '../components/EntradasForm'
import EntradasView from '../components/EntradasView'
import SansamarkToolBar from '../components/SansamarkToolBar'
import { createEntrada, getEntradas } from '../services/EntradasService'
import { Toast } from 'primereact/toast'

function EntradasContainer() {
    let toast = useRef(null)

    const [entradasData, setEntradaData] = useState([])
    const [filtroPelicula, setFiltroPelicula] = useState('');
    const peliculas = ['Wifi Ralph', 'Dragon Ball Super Broly', 'Cascanueces', 'El Grinch'];

    const handleCreate = (entrada) => {
        createEntrada(entrada);
        toast.current?.show({
            severity: 'success',
            summary: 'Entrada registrada',
            detail: 'Nueva entrada disponible',
        });
        const data = getEntradas();
        setEntradaData(data);
    }


    useEffect(() => {
        const data = getEntradas();
        setEntradaData(data)
    }, [])

    return (
        <>
            <Toast ref={toast}></Toast>
            <div className="row">
                <SansamarkToolBar />
            </div>

            <div className="row">

                <div className="col">
                    <EntradasForm onCreateEntrada={handleCreate}></EntradasForm>
                </div>

                <div className="col">
                    <EntradasView
                        entradasData={entradasData}
                        filtroPelicula={filtroPelicula}
                        setFiltroPelicula={setFiltroPelicula}
                        peliculas={peliculas}
                    />
                </div>

            </div>
        </>
    )
}

export default EntradasContainer
