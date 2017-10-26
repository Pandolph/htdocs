<?php

    $basePath = dirname(__FILE__) . '/';
    $source = $basePath . 'assets/lsr11.jpg';
    $water = $basePath . 'assets/ewm.jpg';
    $savepath = 'images/' . date('Ym');
    $savename = 'aaa1' . '.jpg';
    $savefile = $savepath . '/' . $savename;
    $source = imagecreatefromjpeg($source);
    $water = imagecreatefromjpeg($water);
    imagecopymerge($source, $water, 40, 590, 0, 0, 110, 110, 100);
    imagejpeg($source, $basePath . $savefile);
    imagedestroy($source);
    imagedestroy($water);
    echo $savefile;

?>