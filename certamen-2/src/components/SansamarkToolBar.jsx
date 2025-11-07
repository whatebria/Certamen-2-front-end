import React from 'react'
import { Toolbar } from 'primereact/toolbar';

function SansamarkToolBar() {
    const endContent = (
        <React.Fragment>
            <span className="font-bold text-bluegray-50">Sansamark</span>
        </React.Fragment>
    );

    return (

        <div className="card">
            <Toolbar end={endContent} />
        </div>
    )
}

export default SansamarkToolBar
