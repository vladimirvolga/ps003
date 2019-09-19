<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
        public function testfunc(Request $request) {

            $testData = $request->get('testData');
//            echo 'Тестовый текст с сервера.'.PHP_EOL;


            echo $testData.PHP_EOL;
//            echo $request;
//            return response() -> json([
//                'success' => true,
//                'message' => 'test message for response'  ]);

            $c = $this->tf(5,6);
            echo $c.PHP_EOL;

            $dd = $this->tf(1,12);
            echo $dd;

        }

        public function tf($a, $b) {

            $dd = 'dd';
            $cc = 'cc';

//            $c = $a + $b;

//            return $c;
            return $dd;


        }
}
