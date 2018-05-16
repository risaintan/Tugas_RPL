<?php
  include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $email = "";
    $password = "";
    $username = "";
    $telepon ="";
    $nama ="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        $password = $request->password;
        $username = $request->username;
        $telepon = $request->telepon;
        $nama = $request->nama;
        
        if($request){
            $query_register = mysqli_query($connect,"UPDATE user_pembeli SET password = '$password', username = '$username', telepon = '$telepon', nama = '$nama' WHERE email='$email'");
            if($query_register){
         
                 $data =array(
                     'message' => "Register Success!",
                     'status' => "200"
                 );
             }
             else {
                 $data =array(
                     'message' => "Register Failed!",
                     'status' => "404",
                     'errornih' => $query_register
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