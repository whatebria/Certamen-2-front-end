import React from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';

function TropasToolBar() {

    const startContent = (
        <React.Fragment>
            <Avatar image="/images/avatar/wing.png" size="xlarge" shape="circle" />
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <h3>Uno para dominarlos a todos</h3>
        </React.Fragment>
    );
    
    return (
        <div>
            <Toolbar start={startContent} end={endContent} />
        </div>
    )
}

export default TropasToolBar
