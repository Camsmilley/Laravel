<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'safariname' => 'required|string',
                'guestName' => 'required|string',
                'nationality' => 'required|string',
                'contact' => 'required|string',
                'email' => 'required|email',
                'nop' => 'required|integer',
                'noc' => 'required|integer',
                'arrivalDate' => 'required|date',
                'message' => 'nullable|string',
            ]);

            // Ensure nop and noc are integers
            $validatedData['nop'] = (int) $validatedData['nop'];
            $validatedData['noc'] = (int) $validatedData['noc'];

            $booking = Booking::create($validatedData);

            return response()->json($booking, 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}