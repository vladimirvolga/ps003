<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;


class RosreestrController extends Controller
{
    public function testRequest(Request $request) {

//        73:19:72101:44
//        $baseEgrnUrlString = 'http://rosreestr.ru/api/online/fir_objects/73:19:072101:44';
//        $baseEgrnUrlString = 'http://rosreestr.ru/api/online/fir_objects/';
        $baseEgrnUrlString = 'http://rosreestr.ru/api/online/fir_object/';



        

        $searchData = $request->get('searchData');


//            echo $searchData.PHP_EOL;

        $fullEgrnUrlString = $baseEgrnUrlString.$searchData;
//        $fullEgrnUrlString = $baseEgrnUrlString;



//        $fullEgrnUrlString = $searchData;

//        return $fullEgrnUrlString;
//            echo $fullEgrnUrlString.PHP_EOL;







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
            $request = $client->request('GET', $fullEgrnUrlString);
        }

        catch (GuzzleException $e) {
            echo "AGH!". $e->getMessage();
        }

        $responseStatusCode = $request->getStatusCode();

//            echo 'responseStatusCode   '.$responseStatusCode.PHP_EOL;

//        $responseBody = $request->getBody();

//            echo $responseBody.PHP_EOL;



        if ($responseStatusCode == 200) {

            $responseBody = $request->getBody();

//            echo $responseBody;

            $responseBodyObject = json_decode($responseBody, true);

            $cadastralNumber = $responseBodyObject['objectData']['objectCn'];
            $address = $responseBodyObject['objectData']['addressNote'];
            $objectName = $responseBodyObject['objectData']['objectName'];
            $areaValue = $responseBodyObject['parcelData']['areaValue'];
            $areaUnit = 'кв.м.';

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



