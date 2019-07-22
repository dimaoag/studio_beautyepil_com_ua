<?php



$token = '876989873:AAGIE_OsLvokZEzH93bNylQx4eH9b52GXmw';
$chat_id = '799050023';
$serverName = $_SERVER['SERVER_NAME'];
$first_name = '';
$phone = '';


if ($_POST['first_name']){
    $first_name = htmlspecialchars($_POST['first_name']);
}

if ($_POST['phone']){
    $phone = str_replace(' ' , '' ,htmlspecialchars($_POST['phone']));
}


$text = "Новый заказ с сайта {$serverName} Имя - {$first_name} Телефон - {$phone}";

$url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$text";

file_get_contents($url );

header('Location: index.html');