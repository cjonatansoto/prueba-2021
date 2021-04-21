import React from 'react';
import {Link} from "react-router-dom";


const AppContainer = ({title, children}) => {
    return(
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppContainer;
