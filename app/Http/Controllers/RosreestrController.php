<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use library\RosreestrJsonParse;


class RosreestrController extends Controller
{
    public function testRequest(Request $request) {

//        73:19:072101:44
//        $baseEgrnUrlString = 'http://rosreestr.ru/api/online/fir_objects/';

        $searchData = $request->get('searchData');
        $baseEgrnUrlString = 'http://rosreestr.ru/api/online/fir_object/';
        $fullEgrnUrlString = $baseEgrnUrlString.$searchData;

        $client = new Client();

//        $client = new Client(
//            ['headers' =>
////                ['Referer' => 'http://gis-lab.info/forum'],
////                ['Referer' => 'https://egrp365.ru'],
//                ['Upgrade-Insecure-Requests' => '1'],
//                ['User-Agent' => 'Mozilla/5.0 (Windows NT 6.3; WOW64)
//                AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100
//                YaBrowser/19.9.0.1343 Yowser/2.5 Safari/537.36']
//            ]);

        try {
            $res = $client->request('GET', $fullEgrnUrlString);
        }

        catch (GuzzleException $e) {
            echo "AGH!". $e->getMessage();
        }

        $responseStatusCode = $res->getStatusCode();

            //TODO
//            echo $responseStatusCode.PHP_EOL;

        if ($responseStatusCode == 200) {

            $responseBody = $res->getBody();

                //TODO
//                echo $responseBody.PHP_EOL;

            $responseBodyObject = json_decode($responseBody, true);

            $rosreestrJsonParse = new RosreestrJsonParse;

            $cadastralNumber = $rosreestrJsonParse -> getCadastralNumber($responseBodyObject);

            //todo
//                echo $cadastralNumber.PHP_EOL;

            $address = $rosreestrJsonParse -> getAdress($responseBodyObject);
            $objectName = $rosreestrJsonParse -> getObjectName($responseBodyObject);
            $areaValue = $rosreestrJsonParse -> getAriaValue($responseBodyObject);
            $areaUnit = $rosreestrJsonParse -> getAriaUnit($responseBodyObject);

            $informationItems = [];
            $object = [];
            $objects = [];

            $informationItems['CADASTRALNUMBER'] = $cadastralNumber;
            $informationItems['ADDRESS'] = $address;
            $informationItems['OBJECTNAME'] = $objectName;
            $informationItems['AREAVALUE'] = $areaValue;
            $informationItems['AREAUNIT'] = $areaUnit;

            $object['OBJECT'] = $informationItems;

            $objects['OBJECTS'] = $object;

            $objectsJson = json_encode($objects,
                JSON_UNESCAPED_UNICODE);

            return $objectsJson;

        } else {

            echo 'чет не так пошло...'.PHP_EOL;
            echo 'статускод:   '.$responseStatusCode.PHP_EOL;

        }



    }

}



