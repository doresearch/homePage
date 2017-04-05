<?php
	echo "我是include";
	echo $file."<br>\n";
	$a = array("wang Bo" => "1","mang" => "2");
	foreach($a as $x=>$x_value)
	{
		echo $x." is ".$x_value."<br>\n";
	};
	
	asort($a);
	
	foreach($a as $x=>$x_value)
	{
		echo $x." is ".$x_value."<br>\n";
	};
	
	ksort($a);
	
	foreach($a as $x=>$x_value)
	{
		echo $x." is ".$x_value."<br>\n";
	};
?>