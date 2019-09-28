<?php
/**
 * Created by PhpStorm.
 * User: Vaio-pc
 * Date: 24.09.2019
 * Time: 9:02
 */

namespace library;

class ClassifierHandler
{

    public function testPrint() {
        echo 'тестовый принт из пользовательского класса';
    }


    public function testPrint2($stringForTEstPrint) {
        echo $stringForTEstPrint;
    }


    public function getAriaUnitValue ($ariaUnitKey) {

        $ariaUnitArr = [];

        $ariaUnitArr['050'] = 'мм2';
        $ariaUnitArr['051'] = 'см2';
        $ariaUnitArr['053'] = 'дм2';
        $ariaUnitArr['055'] = 'м2';
        $ariaUnitArr['058'] = 'тыс.м2';
        $ariaUnitArr['059'] = 'га';
        $ariaUnitArr['061'] = 'км2';
        $ariaUnitArr['071'] = 'дюйм2';
        $ariaUnitArr['073'] = 'фут2';
        $ariaUnitArr['075'] = 'ярд2';
        $ariaUnitArr['109'] = 'Ар (100 м2)';

        $ariaUnitValue = $ariaUnitArr[$ariaUnitKey];
        return $ariaUnitValue;

    }


    public function getObjectTypeValue ($objectTypeKey) {

        $objectTypeArr = [];

        $objectTypeArr['002001001000'] = 'Земельный участок';
        $objectTypeArr['002001002000'] = 'Здание';
        $objectTypeArr['002001003000'] = 'Помещение';
        $objectTypeArr['002001004000'] = 'Сооружение';
        $objectTypeArr['002001005000'] = 'Объект незавершённого строительства';
        $objectTypeArr['002001008000'] = 'Единый недвижимый комплекс';
        $objectTypeArr['002001009000'] = 'Машино-место';
        $objectTypeArr['002001010000'] = 'Иной объект недвижимости';

        $objectTypeValue = $objectTypeArr[$objectTypeKey];
        return $objectTypeValue;

    }



}