<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' =>  $this->resource->getRouteKey(),
            'attributes' => [
                'nombre' => $this->resource->name,
                'numeroDeTrabajadores' => $this->resource->employees,
                'fechaDeCreacion' => Carbon::parse($this->resource->creation_date)->format('Y-m-d'),
                'idEmpresa' => $this->resource->company_type,
                'tipoEmpresa' => (string) $this->resource->company_type == 1  ? 'Software' : 'Retail'
            ],
            'links' => [
                'self' => route('api.company.show' , $this->resource->getRouteKey())
            ]
        ];
    }
}
