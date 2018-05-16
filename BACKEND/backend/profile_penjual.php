<?php
    include 'db_connect.php';
    $email = $_GET['email'];
	$q = mysqli_query($connect,"SELECT nama_toko,kontak,alamat_toko,status_toko,menu_toko FROM info_penjual WHERE email='$email'");
	while($result=mysqli_fetch_assoc($q)){
		$result_set[]=$result;
	}
	$data=array(
		'message'=>'Get Data Health History Success',
		'data'=>$result_set,
		'status'=>'200'
	);
	echo json_encode($data);
?>