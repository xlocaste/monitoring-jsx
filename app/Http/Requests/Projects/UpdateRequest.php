<?php

namespace App\Http\Requests\Projects;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'pic_id' => ['required'], 
            'mitra_id' => ['required'], 
            'tematik_id' => ['required'], 
            'sto_id' => ['required'], 
            'id_sap' => ['required'], 
            'tahun' => ['required'], 
            'bulan' => ['required'], 
            'lokasi_wo_lop' => ['required'], 
            'no_kontrak' => ['required'], 
            'uraian_pekerjaan' => ['required'], 
        ];
    }
}
