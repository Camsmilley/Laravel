<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::all();
        return response()->json($bookings);
    }

    public function show($id)
    {
        $booking = Booking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }
        return response()->json($booking);
    }

    public function store(Request $request)
    {
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

        $booking = Booking::create($validatedData);

        return response()->json($booking, 201);
    }

    public function update(Request $request, $id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

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

        $booking->update($validatedData);

        return response()->json($booking);
    }

    public function destroy($id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $booking->delete();

        return response()->json(['message' => 'Booking deleted successfully']);
    }
}
