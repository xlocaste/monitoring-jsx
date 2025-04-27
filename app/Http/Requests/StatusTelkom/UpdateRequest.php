<?php

namespace App\Http\Requests\StatusTelkom;

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
            'project_id' => ['required', 'exists:project,id'],
            'status_po_id' => ['required', 'exists:status_po,id'],
            'status_rekon_telkom_id' => ['required', 'exists:status_rekon_telkom,id'],
            'status_rekon_mitra_id' => ['required', 'exists:status_rekon_mitra,id'],
            'status_bast_telkom_id' => ['required', 'exists:status_bast_telkom,id'],
            'id_status_telkom' => ['required', 'string', 'max:255'],
            'bulan_order_telkom' => ['required', 'integer', 'min:1', 'max:12'],
            'target_bast' => ['required', 'string', 'max:255'],
            'target_bulan_bast' => ['required', 'integer', 'min:1', 'max:12'],
            'no_sp_telkom' => ['required', 'integer'],
            'material_telkom' => ['required', 'string', 'max:255'],
            'jasa_telkom' => ['required', 'string', 'max:255'],
            'nilai_sp_telkom' => ['required', 'integer'],
            'rekon_material_telkom' => ['required', 'string', 'max:255'],
            'rekon_jasa_telkom' => ['required', 'string', 'max:255'],
            'nilai_rekon_telkom' => ['required', 'integer'],
            'gap_selisih' => ['required', 'integer'],
            'no_bast_telkom' => ['required', 'integer'],
            'bulan_bast_telkom' => ['required', 'integer', 'min:1', 'max:12'],
        ];
    }
}
