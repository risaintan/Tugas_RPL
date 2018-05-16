<?php
  include 'db_connect.php';
  //ini register  
  $postdata = file_get_contents("php://input");
    $email = "";
    $password ="";
    $nama_owner ="";
    $nama_toko = "";
    $kontak ="";
    $alamat_toko ="";
    $status_toko ="";
    $menu_toko ="";
    $nama_tempat="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        $password = $request->password;
        $nama_owner = $request->nama_owner;
        $nama_toko = $request->nama_toko;
        $kontak = $request->kontak;
        $alamat_toko = $request->alamat_toko;
        $status_toko = $request->status_toko;
        $menu_toko = $request->menu_toko;
        $nama_tempat = $request->nama_tempat;
        
        
        if($request){
            $query_register = mysqli_query($connect, "INSERT INTO info_penjual(email,password,nama_owner,nama_toko,kontak,alamat_toko,status_toko,menu_toko,nama_tempat) VALUE ('$email','$password','$nama_owner','$nama_toko','$kontak','$alamat_toko','$status_toko','$menu_toko','$nama_tempat') ");
            if($query_register){
                $data =array(
                    'message' => "Success!",
                    'status' => "200"
                );
            }
            else{
                $data =array(
                    'message' => "gagal bos!",
                    'status' => "401"
                );
            }
        }

        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }
        echo json_encode($data);
    }
?>