<?php 
    $url_path = realpath(dirname(__FILE__));
    if (strpos($url_path,'\mail')) {
      $replaceStr = '\mail';
    } else {
      $replaceStr = '/mail';
    }
    $path = str_replace($replaceStr, "", $url_path);
    require_once($path .'/sendgrid-php/sendgrid-php.php');
    $sendgrid = new SendGrid('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');
    $email    = new SendGrid\Email();    
 
    $mail = array(
        "name" => htmlspecialchars($_POST['cf_name']),
        "email" => htmlspecialchars($_POST['cf_email']),
        "message" => htmlspecialchars($_POST['cf_message'])
    );
    $sender_email = $mail['email'];
    $email->addTo("info@ztric.com")
          ->setFrom($sender_email)
          ->setSubject("Zen Office - New Invitaion Received!")
          ->setHtml('<body>
                        <div style="display: table;margin: 0 auto;background-color:#fff;border:1px solid #e4e4e4;width:550px;" align="center"> 
                          
                          <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" > 
                            <tr align="center" valign="top" bgcolor="#26a7e9">
                              <th style="background-color: #26a7e9;font-weight: normal;font-size: 22px;padding:15px 20px;color:#fff;font-family:arial;" width="50%" colspan="2">New Customer Invitation</th>
                            </tr>
                            <tr align="left" valign="top" style="background-color:#f7f7f7;">
                              <td style="padding-left:10px;"><p>Name</p></td>
                              <td><p>%name%</p></td>
                            </tr>
                            <tr align="left" valign="top" style="background-color:#f7f7f7;">
                                <td style="padding-left:10px;"><p>email</p></td>
                              <td><p>%email%</p></td>
                            </tr>
                            <tr align="left" valign="top" style="background-color:#f7f7f7;">
                              <td style="padding-left:10px;"><p>Subject</p></td>
                              <td><p>%subject%</p></td>
                            </tr>
                            <tr align="left" valign="top" style="background-color:#f7f7f7;">
                                <td style="padding-left:10px;"><p>Message</p></td>
                              <td><p>%msg%</p></td>
                            </tr>
                          </table>
                        </div>
                    </body>')
            ->addSubstitution("%name%", array($mail['name']))
            ->addSubstitution("%email%", array($mail['email']))
            ->addSubstitution("%subject%", array($mail['subject']))
            ->addSubstitution("%msg%", array($mail['message']));
    try {
        $response=$sendgrid->send($email);
        echo json_encode($response);
    } catch(\SendGrid\Exception $e) {
        echo $e->getCode();
        foreach($e->getErrors() as $er) {
            echo $er;
        }
    }
?>