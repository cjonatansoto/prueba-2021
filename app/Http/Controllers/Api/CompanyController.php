<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Models\Company;
use http\Client\Response;
use Illuminate\Http\Request;

class CompanyController extends Controller
{

    //GET -- listar mpresas
    public function index()
    {
        return CompanyResource::collection(Company::all());
    }

    public function show(Company $company)
    {
        return new CompanyResource($company);
    }

    //POST -- Crear empresa
    public function store(CompanyRequest $request)
    {
        $company = new Company( $request->all() );
        $company->save();
        return new CompanyResource($company);
    }

    //PUT -- Editar empresa
    public function update(CompanyRequest $request, Company $company)
    {
        $company->update($request->all());
        return new CompanyResource($company);
    }

    //DELETE -- Eliminar empresa
    public function delete(Company $company)
    {
        $company->delete();
        return response()->json(null, 204);
    }
}
