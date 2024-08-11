<?php

namespace App\Http\Controllers;

use App\Models\Safari;
use Illuminate\Http\Request;

class SafariController extends Controller
{
    public function index()
    {
        try {
            $safaris = Safari::all()->map(function($safari) {
                $safari->image = asset('images/' . $safari->image);
                return $safari;
            });
            
            return response()->json($safaris);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            $safari = Safari::findOrFail($id);
            $safari->image = asset('images/' . $safari->image);
            return response()->json($safari);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 404);
        }
    }
}