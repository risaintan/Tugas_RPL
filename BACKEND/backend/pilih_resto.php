<?php
	include 'db_connect.php';
	$postdata = file_get_contents("php://input");
    $var1 = "";
    $var2 = "";
	
	if (isset($postdata)) {
		$request = json_decode($postdata);
        $var1 = $request->var1;
        $var2 = $request->var2;
		
	$q = mysqli_query($connect,"SELECT nama_toko,kontak,alamat_toko,status_toko,menu_toko FROM info_penjual WHERE nama_toko='$var1' && nama_tempat='$var2'");
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