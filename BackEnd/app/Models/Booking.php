<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'safariname',
        'guestName',
        'nationality',
        'contact',
        'email',
        'nop',
        'noc',
        'arrivalDate',
        'message',
    ];
}
