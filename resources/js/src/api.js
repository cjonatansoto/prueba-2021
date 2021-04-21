const axios = window.axios;

const BASE_API_URL = "http://127.0.0.1:8000/api/companies";

export default {
    getAllCompanies: () => (axios.get(`${BASE_API_URL}`)),
    getOneCompany: (id) => (axios.get(`${BASE_API_URL}/${id}`)),
    addCompany: (company) => (axios.post(`${BASE_API_URL}`, company)),
    updateCompany: (company, id) => (axios.put(`${BASE_API_URL}/${id}`, company)),
    deleteCompany: (id) => (axios.delete(`${BASE_API_URL}/${id}`)),
}

