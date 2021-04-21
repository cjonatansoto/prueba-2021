import AppContainer from "./AppContainer";
import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import api from '../api'


const Add = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [employees, setEmployees] = useState('');
    const [companyType, setCompanyType] = useState('');

    const handleAddrTypeChange = (e) => {
        console.clear();
        console.log((companyType[e.target.value]));
        setCompanyType(companyType[e.target.value])
    }

    const onAddSubmit = async () =>{
        setLoading(true);
        try {
            console.log( companyType);
            /*
            await api.addCompany({
                name, employees, companyType
            })
            history.push('/')*/
        }catch{

            alert('Error, al crear empresa!')
        }finally {
            setLoading(false);
        }
    }

    return(
        <AppContainer
            title="Crear empresa"
        >
            <form>
                <div className="form-group">
                    <label>Nombre Empresa</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Cantidad empleados</label>
                    <input
                        type="number"
                        className="form-control"
                        value={employees}
                        onChange={e=>setEmployees(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Tipo de empresa</label>
                    <select value={companyType}
                            onChange={e => handleAddrTypeChange(e.target.value)}
                    >
                        <option value="1">Software</option>
                        <option value="2">Retail</option>
                    </select>
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={onAddSubmit}
                    disabled={loading}
                >
                    {loading ? 'Cargando...': 'Crear'}
                </button>
            </form>
        </AppContainer>
    );
};

export default Add;
