<?php

namespace App\Http\Controllers;

use App\Models\Administrator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index() {
        if(session('user')){
            return back();
        }
        return Inertia::render('Login');
    }

    public function home() {        
        return Inertia::render('Home');
    }

    public function loginAdmin(Request $request) {
        $user = Administrator::where('id_admin', $request->idAdmin)->where('password', $request->password)->first();
        if(!$user){
            return back()->with('error', 'Kode admin atau Password salah');
        }

        $user->role = 'admin';
        session(['user'=>$user]);

        return redirect('/home');
    }
}
