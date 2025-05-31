<?php

namespace App\Http\Requests\Data\PIC;

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
            'pic_admin'=>['required'],
            'pic_project'=>['required'],
            'waspang_ta'=>['required'],
            'no_kontrak'=>['required'],
        ];
    }
}
