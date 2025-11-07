import React from 'react'
import TropasToolBar from '../components/TropasToolBar'
import RangoForm from '../components/RangoForm'
import RangoViews from '../components/RangoViews'

function TropasContainer() {
    return (
        <div>
            <div className="mb-5">
                <TropasToolBar></TropasToolBar>

            </div>
            <div className="mb-5 row">
                <div className="col">
                    <RangoForm></RangoForm>
                </div>
                <div className="col">
                    <RangoViews></RangoViews>
                </div>
                
            </div>
        </div>
    )
}

export default TropasContainer
