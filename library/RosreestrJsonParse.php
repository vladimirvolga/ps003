<?php
/**
 * Created by PhpStorm.
 * User: Vaio-pc
 * Date: 26.09.2019
 * Time: 10:45
 */

namespace library;
//use library\ClassifierHandler;



class RosreestrJsonParse
{

//            $cadastralNumber = $responseBodyObject['objectData']['objectCn'];
//            $address = $responseBodyObject['objectData']['objectAddress']['mergedAddress'];
//            $objectName = $responseBodyObject['objectData']['objectName'];
//            $areaValue = $responseBodyObject['parcelData']['areaValue'];
//            $areaUnit = 'кв.м.';


    public function getCadastralNumber ($responseBodyObject) {

        $cadastralNumber = $responseBodyObject['objectData']['objectCn'];
        return $cadastralNumber;

    }


    public function getAdress ($responseBodyObject) {

        $address = $responseBodyObject['objectData']['objectAddress']['mergedAddress'];
        return $address;

    }


    public function getObjectName ($responseBodyObject) {

        $objectName = $responseBodyObject['objectData']['objectName'];

        if ($objectName == '01') {
            return 'Земельный участок';
        }

        else {
            return $objectName;
        }

    }


    public function getAriaValue ($responseBodyObject) {

        $areaValue = $responseBodyObject['parcelData']['areaValue'];
        return $areaValue;

    }


    public function getAriaUnit ($responseBodyObject) {

        $areaUnit = $responseBodyObject['parcelData']['areaUnit'];

        $classifierHandler = new ClassifierHandler;

        $ariaValueParsed = $classifierHandler -> getAriaUnitValue($areaUnit);
        return $ariaValueParsed;

    }



}