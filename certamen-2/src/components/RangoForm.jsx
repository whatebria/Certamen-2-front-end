import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';


function RangoForm() {
    const [rango, setRango] = useState("");
    return (
        <div>
            <Panel header="Ingresar Categoría de Guerrero">
                <div className="mb-5">
                    <FloatLabel>
                        <InputText id="nombreRango" value={rango} onChange={(e) => setRango(e.target.value)} />
                        <label htmlFor="nombreRango">Nombre Rango</label>
                    </FloatLabel>
                </div>
                <div className="mb-5">
                    <Button label="Registrar rango"/>

                </div>
            </Panel>
        </div>
    )
}

export default RangoForm
