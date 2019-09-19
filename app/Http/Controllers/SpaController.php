<?php
/**
 * Created by PhpStorm.
 * User: Vaio-pc
 * Date: 27.10.2018
 * Time: 20:51
 */

namespace App\Http\Controllers;

//use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index()
    {
        return view('spa');
    }
}