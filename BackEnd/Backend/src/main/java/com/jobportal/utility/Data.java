package com.jobportal.utility;

import com.jobportal.entity.User;

public class Data {

    public static String getMessageBody(String otp, String name) {

        return """
                <!doctype html>
                <html lang="en">
                  <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <title>Verification Code</title>
                    <style>
                      body,table,td{margin:0;padding:0;border:0;font-family:Arial, sans-serif;}
                      a{text-decoration:none;color:inherit;}
                      .wrapper{background:#F4F6F8;padding:20px;}
                      .body{max-width:600px;margin:auto;background:#fff;border-radius:8px;overflow:hidden;}
                      .header{padding:20px;background:#0B66C3;color:#fff;text-align:center;font-size:20px;font-weight:bold;}
                      .content{padding:30px;}
                      .otp-box{background:#F3F6FB;padding:16px 22px;font-size:28px;letter-spacing:6px;font-weight:bold;border-radius:8px;text-align:center;margin:10px 0;}
                      .note{font-size:13px;color:#6B7280;}
                      .footer{text-align:center;padding:15px;background:#FAFAFB;font-size:13px;color:#888;}
                    </style>
                  </head>
                  <body>
                    <div class="wrapper">
                      <div class="body">
                        <div class="header">Job Portal</div>
                        <div class="content">
                          <p>Hello """+name+"""
                          </p>
                          <p>
                            Your verification code for <strong>Job Portal</strong> is below.
                            This OTP expires in <strong>10 minutes</strong>.
                          </p>

                          <div class="otp-box">
                """ + otp + """
                          </div>

                          <p class="note">If you did not request this, please ignore this email.</p>
                        </div>

                        <div class="footer">©""" + java.time.Year.now() + """ 
                      Job Portal. All rights reserved.</div>
                      </div>
                    </div>
                  </body>
                </html>
                """;
    }
}
