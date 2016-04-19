<?php
require_once 'vendor/autoload.php';

use Slim\App as Slim;

include 'classes/Flickr.php';

$app = new Slim();

$app->get('/tag/{tag}/{amount}', function ($request, $response, $args) {
    $photos = [];

    $data = (new Flickr("6c1564496e23b68f014172294d8e76b0", "ff4f3debac978754"))->search($args['tag']);

    for($i = 0; $i < $args['amount']; $i++) {
        $photo = $data['photos']['photo'][$i];

        $photos[] = "https://farm" . $photo['farm'] . ".staticflickr.com/" . $photo['server'] . "/" . $photo['id'] . "_" . $photo['secret'] . ".jpg";
    }

    return $response->write(json_encode($photos));
});

$app->run();