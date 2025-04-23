<?php

namespace App\Http\Requests\StatusMitra;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'project_id' => ['required'],
            'id_status_mitra' => ['required'],
            'bulan_order' => ['required'],
            'no_sp_mitra' => ['required'],
            'no_po_mitra' => ['required'],
            'id_pr' => ['required'],
            'id_gr' => ['required'],
            'toc_mitra' => ['required'],
            'material_mitra' => ['required'],
            'jasa_mitra' => ['required'],
            'nilai_sp_mitra' => ['required'],
            'rekon_material_mitra' => ['required'],
            'rekon_jasa_mitra' => ['required'],
            'nilai_rekon_mitra' => ['required'],
            'status_pekerjaan_id' => ['required'],
            'status_rekon_mitra_id' => ['required'],
            'status_tagihan_mitra_id' => ['required'],
            'ket_status_tagihan_mitra_id' => ['required'],
        ];
    }
}
