<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class SignInController extends Controller
{
    public function showLoginForm() {
        return Inertia::render('SignIn/SignIn');
    }

    public function signin(Request $request) {
        $credentials = $request->only('email', 'password');

        $validator = Validator::make($credentials, [
            'email' => ['required', 'string', 'email', 'min:8', 'max:50'],
            'password' => ['required', 'string', 'min:8', 'max:50'],
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        if (Auth::attempt($credentials, $request->remember)) {
            $request->session()->regenerate();
            return redirect()->intended('/');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->withInput();
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
