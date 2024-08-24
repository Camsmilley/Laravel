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
        'guideId',
        'guestId',
        'status' // Add status to fillable
    ];

    public function guide()
    {
        return $this->belongsTo(Guide::class, 'guideId');
    }

    public function guest()
    {
        return $this->belongsTo(User::class, 'guestId');
    }
}