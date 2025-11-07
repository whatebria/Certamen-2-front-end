import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Dropdown } from 'primereact/dropdown';



function EntradasView({ entradasData, filtroPelicula, setFiltroPelicula, peliculas }) {

    const valorTemplate = (rowData) => {
        const cantidad = Number(rowData.cantEntradas) || 0;
        return cantidad * 5000;
    };

    const filtradas = filtroPelicula
        ? entradasData.filter(e => e.pelicula === filtroPelicula)
        : entradasData;

    return (
        <div className='mt-3'>
            <Panel header="Entradas Compradas">
                <div className="mb-3">
                    <Dropdown
                        value={filtroPelicula}
                        onChange={(e) => setFiltroPelicula(e.value)}
                        options={peliculas}
                        placeholder="Filtrar por película"
                        className="w-full md:w-14rem"
                    />
                </div>
                <DataTable value={filtradas} emptyMessage="Sin entradas">
                    <Column header="Dia" field='dia' />
                    <Column header="Pelicula" field='pelicula' />
                    <Column header="Cant de entradas" field='cantEntradas' />
                    <Column header="Valor a Pagar" body={valorTemplate} />
                </DataTable>
            </Panel>
        </div>
    )
}

export default EntradasView
