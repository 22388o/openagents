<?php

namespace App\Livewire\Auth;

use App\Vendors\WireElements\Modal\ModalComponent;
use Jantinnerezo\LivewireAlert\LivewireAlert;

class Join extends ModalComponent
{
    use LivewireAlert;

    /**
     * Supported: 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'
     */
    public static function modalMaxWidth(): string
    {
        return 'lg';
    }

    public function render()
    {
        return view('livewire.auth.join');
    }
}
