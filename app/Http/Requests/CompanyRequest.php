<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    public function rules()
    {
        return [
            'name' => 'required',
            'employees' => 'integer',
            'company_type' => 'integer',
            'creation_date' => 'date',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre de la empresa es requerido',
            'employees.integer' => 'La cantidad de empleados debe ser un entero',
            'company_type.integer'  => 'El tipo de empresa debe ser un entero',
            'creation_date.date'  => 'Formato invalido',
        ];
    }
}
