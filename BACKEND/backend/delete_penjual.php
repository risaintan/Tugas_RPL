<?php
    include 'db_connect.php';
    $postdata = file_get_contents("php://input");
    $email = "";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $email = $request->email;
        if($request){
            $query = mysqli_query($connect, "DELETE FROM user_penjual WHERE email = '$email' ");
            if($query){
                $data =array(
                    'message' => "Delete succesfully",
                    'status' => "200"
                );
            }
            else{
                $data =array(
                    'message' => "Failed!",
                    'status' => "404"
                );
                    
            }
        }
        else {
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            ); 
        }          
        
    }
    
    echo json_encode($data);
?>