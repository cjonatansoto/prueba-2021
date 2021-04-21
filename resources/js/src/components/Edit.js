import AppContainer from "./AppContainer";
import React, {useState, useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom';
import moment from 'moment'
import api from '../api'


const Edit = () => {

    const companyParams = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [employees, setEmployees] = useState('');
    const [companyType, setCompanyType] = useState([
        { label: "Software", value: "1" },
        { label: "Retail", value: "2" }
    ]);
    const [creationDate, setCreationDate] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.updateCompany({
                name, employees, companyType, creationDate
            }, companyParams.id)
            history.push('/')
        }catch{
            alert('Error, al editar empresa!')
        }finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        api.getOneCompany(companyParams.id).then(res => {
            const result = res.data;
            const company = result.data;
            setName(company.attributes.nombre);
            setEmployees(company.attributes.numeroDeTrabajadores);
            setCompanyType(company.attributes.idEmpresa);
            setCreationDate(moment(company.attributes.fechaDeCreacion).format('YYYY-MM-DD'));

        })
    }, []);

    return(
        <AppContainer
            title="Editar empresa"
        >
            <form>
                <div className="form-group">
                    <label>Nombre Empresa</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Cantidad empleados</label>
                    <input
                        type="text"
                        className="form-control"
                        value={employees}
                        onChange={e=>setEmployees(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Tipo de empresa</label>
                    <select className="form-control">
                        {companyType.map(item => (
                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Fecha creación</label>
                    <input
                        type="date"
                        className="form-control"
                        value={creationDate}
                        onChange={e=>setCreationDate(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={onAddSubmit}
                    disabled={loading}
                >
                    {loading ? 'Actualizando...': 'Editar'}
                </button>
            </form>
        </AppContainer>
    );
};

export default Edit;
