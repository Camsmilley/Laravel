<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::with('guide')->get();
        return response()->json($bookings);
    }

    public function show($id)
    {
        $booking = Booking::with('guide')->find($id);
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
            'guideId' => 'required|exists:guides,id', // Validate guideId
            'guestId' => 'nullable|exists:users,id' // Validate guestId
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
            'guideId' => 'required|exists:guides,id',
            'guestId' => 'nullable|exists:users,id',
            'status' => 'required|in:pending,confirmed,cancelled' // Add this line
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

    public function dailyBookings()
    {
        $today = Carbon::today();
        $dailyBookings = Booking::with('guide')->whereDate('created_at', $today)->get();

        return response()->json($dailyBookings);
    }

    // BookingController.php
    // public function totalBookings()
    // {
    //     $total = Booking::count();
    //     return response()->json(['total' => $total]);
    // }

    public function totalBookings()
    {
        $total = Booking::count();
        $completed = Booking::where('status', 'confirmed')->count();
        $cancelled = Booking::where('status', 'cancelled')->count();
        return response()->json([
            'total' => $total,
            'completed' => $completed,
            'cancelled' => $cancelled
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $validatedData = $request->validate([
            'status' => 'required|in:pending,confirmed,cancelled',
        ]);

        $booking->update($validatedData);

        return response()->json($booking);
    }

    // New method to fetch bookings by guestId
    public function userBookings($guestId)
    {
        $bookings = Booking::where('guestId', $guestId)->with('guide')->get();
        return response()->json($bookings);
    }
}
