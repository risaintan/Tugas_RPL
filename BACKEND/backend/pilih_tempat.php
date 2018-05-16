<?php
	include 'db_connect.php';
	$postdata = file_get_contents("php://input");
	$var1 = "";
	
	if (isset($postdata)) {
		$request = json_decode($postdata);
		$var1 = $request->var1;
		
	$q = mysqli_query($connect,"SELECT nama_toko FROM info_penjual WHERE nama_tempat='$var1'");
	while($result=mysqli_fetch_assoc($q)){
		$result_set[]=$result;
	}
	$data=array(
		'message'=>'Get Data Health History Success',
		'data'=>$result_set,
		'status'=>'200'
	);

	echo json_encode($data);
	}
?>