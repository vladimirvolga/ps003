<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{

    public function search(Request $request)
    {



            /**         ---   ПЕРЕМЕННЫЕ ДЛЯ ЗАПРОСА К БД    ---         */


        $searchQuery = $request->get('searchQuery');
        $rowsToShow = $request->get('rowsToShow');
        $firstRow = $request->get('firstRow');

//        $rowsToShow = 1;
//        $firstRow = 0;

//        $fios = 'ивахненко'.'%';
        $fios = $searchQuery.'%';



            /**         ---   ПЕРЕМЕННЫЕ ДЛЯ ФОРМИРОВ РЕЗУЛЬТАТА ЗАПРОСА    ---         */


        $fullResponseArray  = [];



        /**         ---   ПОЛУЧЕНИЕ КОЛИЧЕСТВА СТРОК РЕЗУЛЬТАТА    ---         */


        if ($firstRow == 0){

            $totalResult = DB::select
            ('SELECT * FROM main WHERE FIO LIKE  :fios', ['fios' => $fios]);

            $totalRowsCount = count($totalResult);

            $totalRowsCountLine ['TOTALROWSCOUNT'] = $totalRowsCount;

            $totalRowsCountArray ['TOTALROWSCOUNTINFO'] = $totalRowsCountLine;

            array_push($fullResponseArray, $totalRowsCountArray);


//                var_dump($totalRowsCount);
            
        }



        /**         ---   ПОЛУЧЕНИЕ ДАННЫХ ИЗ БД   ---         */


        $result = DB::select
            ('SELECT * FROM main WHERE FIO LIKE  :fios LIMIT :firstRow, :rowsToShow',
            ['fios' => $fios, 'firstRow' => $firstRow, 'rowsToShow' => $rowsToShow]);

//                var_dump($firstRow);
//                var_dump($rowsToShow);



        /**         ---   ОБРАБОТКА ДАННЫХ ИЗ БД   ---         */


        $dataRow = [];
        $dataRows = [];


        foreach ($result as $value) {

            $fio = $value ['FIO'];

            $birthday = date("d.m.Y", strtotime($value['BIRTHDAY']));

                $adr_raion  = $value ['ADR_RAION'];
                $adr_town   = $value ['ADR_TOWN'];
                $adr_street = $value ['ADR_STREET'];
                $adr_house  = $value ['ADR_HOUSE'];
                $adr_corpus = $value ['ADR_CORPUS'];
                $adr_flat   = $value ['ADR_FLAT'];
                $adr_room   = $value ['ADR_ROOM'];
                $address ='';

//            echo $value ['FIO'].PHP_EOL;

            if ($adr_raion !='') {
                $adr_raion = 'р-н '.$adr_raion;
                $address = $adr_raion;
            }

            if ($adr_town != '') {
                $address = $address.', '.$adr_town;
            }

            if ($adr_street != '') {
                $adr_street= 'ул. '.$adr_street;
                $address = $address.', '.$adr_street;
            }

            if ($adr_house != '') {
                $adr_house = 'д. '.$adr_house;
                $address = $address.', '.$adr_house;
            }

            if ($adr_corpus != '') {
                $adr_corpus = 'корп. '.$adr_corpus;
                $address = $address.', '.$adr_corpus;
            }

            if ($adr_flat != '') {
                $adr_flat = 'кв. '.$adr_flat;
                $address= $address.', '.$adr_flat;
            }

            if ($adr_room != '') {
                $adr_room = 'комн. '.$adr_room;
                $address= $address.', '.$adr_room;
            }

            $dataRow ['FIO']      = $fio;
            $dataRow ['BIRTHDAY'] = $birthday;
            $dataRow ['ADDRESS']  = $address;

            array_push($dataRows, $dataRow);

        };

        $dataRowsArray['DATAROWS'] = $dataRows;

        array_push($fullResponseArray, $dataRowsArray);


        $fullResponseJson=json_encode($fullResponseArray, JSON_UNESCAPED_UNICODE);
        return $fullResponseJson;

//        $fullResponseJson=json_encode($fullResponseArray, JSON_FORCE_OBJECT | JSON_UNESCAPED_UNICODE);

//                var_dump($fullResponseJson);


    }
}
