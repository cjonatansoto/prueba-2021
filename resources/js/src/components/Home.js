import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import AppContainer  from './AppContainer';
import api from "./../api";
import moment from 'moment'


const Home = () => {

    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        api.getAllCompanies().then(res => {
            const result = res.data;
            setCompanies(result.data);
        })
    }, []);

    const renderCompanies =()=>{
        if(!companies){
            return(
                <tr colSpan="6">
                    <td>Cargando...</td>
                </tr>
            )
        }
        if(companies.lenght === 0){
            return(
                <tr colSpan="6">
                    <td>Sin empresas!</td>
                </tr>
            )
        }
        return companies.map((company)=>(
            <tr>
                <td>{company.id}</td>
                <td>{company.attributes.nombre}</td>
                <td>{company.attributes.numeroDeTrabajadores}</td>
                <td>{company.attributes.tipoEmpresa}</td>
                <td>{moment(company.attributes.fechaDeCreacion).format("DD-MM-YYYY")}</td>
                <td>
                   <Link to={`/edit/${company.id}`} className="btn btn-warning btn-sm">Editar</Link>
                </td>
            </tr>
        ));
    }

    return(
        <AppContainer
         title="Listado de empresas"
        >
                        <Link to="/add" className="btn btn-primary">Crear empresa</Link>
                        <div className="table table-responsive">
                            <table className="table">
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Empresa</th>
                                    <th scope="col">Numero de empleados</th>
                                    <th scope="col">Tipo de empresa</th>
                                    <th scope="col">Fecha de creación</th>
                                    <th scope="col">Herramientas</th>
                                </tr>
                                </thead>
                                <tbody>
                                {renderCompanies()}
                                </tbody>
                            </table>
                        </div>
        </AppContainer>
    );
};

export default Home;
