import React from "react";

import ChildComponent from './ChildComponent';

const ParentComponent = () => 
{
    return (
        <div>

            <h2>Je suis le composant parent</h2>

            <ChildComponent message = "Message du parent" />    

        </div>
    );
};

export default ParentComponent;