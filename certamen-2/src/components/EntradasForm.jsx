import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { SelectButton } from 'primereact/selectbutton';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';
import { Panel } from 'primereact/panel';
import { Toast } from "primereact/toast"
import React, { useRef, useState } from "react"
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';




function EntradasForm({ onCreateEntrada = () => { } }) {

    const [dia, setDia] = useState("");
    const [tipoPago, setTipoPago] = useState("");
    const [cantEntradas, setCantEntradas] = useState(1)
    const [ciudad, setCiudad] = useState("")
    const [selectPelicula, setSlectPelicula] = useState("")
    const [errors, setErrors] = useState([]);
    const toast = useRef(null);
    const msgs = useRef(null);

    const handleClick = () => {
        const errs = [];
        if (!dia) errs.push({ severity: 'error', detail: 'Debe seleccionar un día' });
        if (!tipoPago) errs.push({ severity: 'error', detail: 'Debe seleccionar tipo de pago' });
        if (!ciudad.trim()) errs.push({ severity: 'error', detail: 'Ciudad es obligatoria' });
        if (!selectPelicula) errs.push({ severity: 'error', detail: 'Debe seleccionar una película' });
        if ((Number(cantEntradas) || 0) < 1) errs.push({ severity: 'error', detail: 'Cantidad no puede ser 0' });

        if (errs.length) {
            setErrors(errs);
            msgs.current?.clear();
            msgs.current?.show(errs);
            return;
        }
        const entradaObj = { dia, tipoPago, cantEntradas, ciudad, pelicula: selectPelicula };
        onCreateEntrada(entradaObj);
        toast.current?.show({ severity: 'success', summary: 'Éxito', detail: 'Entrada registrada' });
    };


    const footerTemplate = () => {
        return <div className="p-2">
            <Button rounded severity="primary" label="Comprar" onClick={handleClick}></Button>
        </div>
    }

    const dias = [
        "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"
    ]
    const tiposPago = [
        "Efectivo", "Tarjeta"
    ]
    const peliculas = [
        'Wifi Ralph',
        'Dragon Ball Super Broly',
        'Cascanueces',
        'El Grinch',
    ]

    return (
        <div className='mt-3'>
            <Panel header="Comprar entradas" footer={footerTemplate()}>
                <Toast ref={toast} />
                <Messages ref={msgs} />
                <div className="mb-3">
                    <FloatLabel>

                        <label htmlFor="dia" className="font-bold block mb-2">Selecciona dia</label>
                        <Dropdown inputId='dia' value={dia} onChange={(e) => setDia(e.value)} options={dias}
                            placeholder="Selecciona un dia" className="w-full md:w-14rem" />
                    </FloatLabel>

                </div>

                <div className="mb-5">
                    <FloatLabel>

                        <label htmlFor="tipoPago" className="font-bold block mb-2">Tipo de pago</label>
                        <SelectButton value={tipoPago} onChange={(e) => setTipoPago(e.value)} options={tiposPago} />
                    </FloatLabel>

                </div>
                <div className="mb-4">
                    <FloatLabel>
                        <label htmlFor="cantEntradas" className="font-bold block mb-2">Cantidad de entradas</label>
                        <InputNumber inputId="cantEntradas" value={cantEntradas} onValueChange={(e) => setCantEntradas(e.value)} mode="decimal" showButtons min={1} />
                    </FloatLabel>
                </div>

                <div className="mb-3">
                    <FloatLabel>
                        <InputText id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} required />
                        <label htmlFor="ciudad">Ciudad</label>
                    </FloatLabel>
                </div>

                <div className="mb-1">
                    <label htmlFor="pelicula">Seleccione pelicula</label>
                    <ListBox id='pelicula' value={selectPelicula} onChange={(e) => setSlectPelicula(e.value)} options={peliculas} className="w-full md:w-14rem" />
                </div>
            </Panel>
        </div >
    )
}

export default EntradasForm
