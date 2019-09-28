<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use library\ClassifierHandler;
use library\RosreestrJsonParse;

class TestController extends Controller
{
        public function testfunc(Request $request) {

            $responseBody = '{"objectId":"73:24:31402:152","type":"parcel","regionKey":173,"source":1,"firActualDate":"2016-12-08","objectData":{"id":"73:24:31402:152","regionKey":173,"srcObject":1,"objectType":"002009000000","objectName":"01","removed":0,"dateLoad":"2016-09-08","addressNote":"Ульяновская область, г. Ульяновск, р-н Засвияжский, ул. Александровская,  75","objectCn":"73:24:031402:152","objectCon":null,"objectInv":null,"objectUn":"73:24:031402:152","rsCode":"73.0.2.1","actualDate":"2016-09-08","brkStatus":0,"brkDate":null,"formRights":null,"objectAddress":{"id":"73:24:31402:152","regionKey":173,"okato":"73401000000","kladr":"73000001000087500","region":"73","district":null,"districtType":"неопр","place":"Ульяновск","placeType":"г","locality":null,"localityType":"неопр","street":"Александровская","streetType":"ул","house":"75","building":null,"structure":null,"apartment":null,"addressNotes":"Ульяновская область, г. Ульяновск, р-н Засвияжский, ул. Александровская,  75","mergedAddress":"г Ульяновск, ул Александровская, д. 75"}},"parcelData":{"id":"73:24:31402:152","regionKey":173,"parcelCn":"73:24:031402:152","parcelStatus":"01","dateCreate":"2007-07-31","dateRemove":null,"categoryType":"003002000000","areaValue":617.0,"areaType":"009","areaUnit":"055","areaTypeValue":null,"areaUnitValue":null,"categoryTypeValue":"Земли населенных пунктов","rightsReg":false,"cadCost":452446.1,"cadUnit":"383","dateCost":"2014-10-31","oksFlag":0,"oksType":null,"oksFloors":null,"oksUFloors":null,"oksElementsConstruct":null,"oksYearUsed":null,"oksInventoryCost":0.0,"oksInn":null,"oksExecutor":null,"oksYearBuilt":null,"oksCostDate":null,"rcType":"ci","rcDate":"2016-08-30","guidUl":null,"guidFl":"70e1cec6-4654-40a3-8b00-5c10b45f8ce1","ciSurname":"Гончарова","ciFirst":"Людмила","ciPatronymic":"Ивановна","ciNCertificate":"73-10-26","ciPhone":"+79061457279","ciEmail":"kadastr.ul@gmail.com","ciAddress":"г.Ульяновск, б-р Львовский, д.21, кв.30","coName":null,"coInn":null,"utilCode":"142001010000","utilByDoc":"индивидуальные жилые дома","cadastralBlockId":"73:24:31402","parcelStatusStr":"Ранее учтенный","oksElementsConstructStr":null,"utilCodeDesc":"Для индивидуальной жилой застройки"},"realtyData":null,"premisesData":null,"rightEncumbranceObjects":null,"oldNumbers":[{"tempId":0,"objectId":"73:24:31402:152","regionKey":173,"numberType":"03","numberValue":"73:24:031402:131","normalizedNumberValue":"73:24:31402:131","rsCode":null,"packageId":null,"actualDate":null,"numberTypeStr":"Кадастровый номер"}]}';

            $responseBodyObject = json_decode($responseBody, true);
            $rosreestrJsonParse = new RosreestrJsonParse;

            $cadastralNumber = $rosreestrJsonParse -> getCadastralNumber($responseBodyObject);
            echo 'cadastralNumber   '.$cadastralNumber.PHP_EOL;

            $address = $rosreestrJsonParse -> getAdress($responseBodyObject);
            echo 'address   '.$address.PHP_EOL;

            $objectName = $rosreestrJsonParse -> getObjectName($responseBodyObject);
            echo 'objectName   '.$objectName.PHP_EOL;

            $areaValue = $rosreestrJsonParse -> getAriaValue($responseBodyObject);
            echo 'areaValue   '.$areaValue.PHP_EOL;

            $areaUnit = $rosreestrJsonParse -> getAriaUnit($responseBodyObject);
            echo 'areaUnit   '.$areaUnit.PHP_EOL;





//            $testData = $request->get('testData');
////            echo 'Тестовый текст с сервера.'.PHP_EOL;
//            echo $testData.PHP_EOL;
//
//            $tc = new ClassifierHandler;
//
////            $stringForestPrint= 'тестовая предача строки для печати';
////            $tc -> testPrint2($stringForestPrint);
//
//            $objectTypeKey = '002001001000';
//            $objectTypeValue = $tc -> getObjectTypeValue($objectTypeKey);
//            echo $objectTypeValue.PHP_EOL;
//
//            $ariaUnitKey = '055';
//            $ariaUnitValue = $tc -> getAriaUnitValue($ariaUnitKey);
//            echo $ariaUnitValue.PHP_EOL;
//
//            $rosreestrJsonParse = new RosreestrJsonParse();
//
//            $objectName = 'квартира';
//            $objectNameParsed = $rosreestrJsonParse -> getObjectName($objectName);
//            echo 'objectName   '.$objectNameParsed;




////            echo $request;
////            return response() -> json([
////                'success' => true,
////                'message' => 'test message for response'  ]);
//
//            $c = $this->tf(5,6);
//            echo $c.PHP_EOL;
//
//            $dd = $this->tf(1,12);
//            echo $dd;

        }

        public function tf($a, $b) {

            $dd = 'dd';
            $cc = 'cc';

//            $c = $a + $b;

//            return $c;
            return $dd;


        }
}
