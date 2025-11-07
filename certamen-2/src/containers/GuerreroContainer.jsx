import React from 'react'
import GuerreroForm from '../components/GuerreroForm'
import GuerrerosView from '../components/GuerrerosView'

function GuerreroContainer() {
    return (
        <div className="row">
            <div className="col">
                <GuerreroForm></GuerreroForm>
            </div>
            <div className="col">
                <GuerrerosView/>
            </div>
        </div>
    )
}

export default GuerreroContainer
