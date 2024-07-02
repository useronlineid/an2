document.getElementById('saveImage').addEventListener('click', function() {
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const CardNumber = document.getElementById('CardNumber').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const savings = document.getElementById('savings').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const Earnedmoney = document.getElementById('Earnedmoney').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/an2/blob/main/DC3.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 125px; left: 282px; color:#656565; font-size: 22px; font-weight: bold;">ที่ สกส. ${transactionDate} </p>
                <p style="position: absolute; top: 155px; left: 155px; color:#656565; font-size: 22px; font-weight: bold;">เรื่อง  การแก้ไขการปลดล็อคและยกเลิกการอายัดวงเงินในระบบ</p>

                <p style="position: absolute; top: 93px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">ที่ นม.000764</p>     
                
                <p style="position: absolute; top: 210px; left: 40px; color:#656565; font-size: 21px; font-weight: bold;">เรียน: ${accountNumber}</p>     
                <p style="position: absolute; top: 210px; left: 350px; color:#656565; font-size: 21px; font-weight: bold;">บัตรประชาชน: ${CardNumber}</p>     
                
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                เนื่องด้วยผู้กู้สินเชื่อได้ทำการลงทะเบียนหมายเลขบัญชีในการทำธุรกรรมที่ไม่ถูกต้องและทำการถอนเงินออกจากระบบทำให้ระบบไม่สามารถสั่งจ่ายวงเงิน จำนวนเงิน ${savings} บาท 
                เข้าบัญชีธนาคารผู้กู้สินเชื่อได้ เนื่องจากไม่พบหมายเลขบัญชีปลายทางทางคณะกรรมการสงสัยว่าอาจเป็นบุคคลที่สามหรือบุคคลแอบอ้างยื่นกู้ จึงทำการระงับวงเงินไว้ทั้งหมด 
                ดังนั้นทางผู้กู้สินเชื่อต้องทำการยืนยันตัวตน เพื่อปลดระงับวงเงิน และแก้ไขข้อมูลในระบบห้ถูกต้องเป็นจำนวนเงิน ${amount} บาท</p>     

                <p style="position: absolute; top: 385px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                หมายเหตุ: ผู้กู้สินเชื่อ ต้องทำการโอนยืนยันตัวตน เพื่อปลดระงับวงเงินและแก้ไขข้อมูลให้ถูกต้องในระบบหลังจากยื่นเรื่องเรียบร้อยแล้ว ระบบจะทำการปลดระงับวงเงินและแก้ไขข้อมูล 
                โดยใช้ระยะเวลาประมาณ 5 นาที หลังแก้ไขสามารถทำการถอนเงินออกจากระบบได้ทั้งหมด จำนวนเงิน ${Earnedmoney} บาทถ้วน หลังได้เงินแล้วชำระยอดกู้เท่าเดิม</p>     

                <p style="position: absolute; top: 490px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ( 1 ) ให้ผู้สินเชื่อสินเชื่อ เร่งยื่นเรื่องเข้าระบบ เพื่อตรวจสอบ ปลดระงับวงเงิน และแก้ไขข้อมูลก่อนระยะเวลา 1 ชั่วโมงหลังได้รับเอกสารการยืนยันตัวตน จากกรมบัญชีกลาง
                </p>     
                
                <p style="position: absolute; top: 545px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ( 2 ) หากผู้กู้สินเชื่อ ไม่ได้ยื่นเรื่องเข้าระบบ เพื่อทำการยืนยันตัวตนปลดล็อคระงับ และแก้ไขข้อมูล</p>     

                <p style="position: absolute; top: 570px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 ข้อ(2.1) ผู้กู้สินเชื่อ ไม่ได้รับวงเงิน แต่ต้องผ่อนชำระหนี้ตามปกติ </p>     

                <p style="position: absolute; top: 595px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 ข้อ(2.2) หากไม่ชำระหนี้ จะถือว่าเป็นบุคคลแอบอ้างบุคคลฉ้อโกงเงินบริษัท มีการผิดสัญญาการยืมกู้มีโทษทางกฎหมาย และจำเป็นต้องดำเนินคดีตามกฎหมายความมั่นคง</p>    
 
                <p style="position: absolute; top: 650px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ข้อ(2.3) ผู้กู้สินเชื่อ จะถูกดำเนินคดี จำคุก ไม่เกิน 10 ปี หรือไม่เกิน 5แสน บาท หรือทั้งจำทั้งปรับ</p>

                <p style="position: absolute; top: 677px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ข้อ(2.4) ผู้ค้ำประกัน จำเป็นต้องชำระหนี้แทนทั้งหมด หากไม่มีการชำระหนี้ จำเป็นต้องดำเนินคดีและยึดทรัพย์สินตามกฎหมาย</p>

                <p style="position: absolute; top: 732px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                จึงเรียนมาเพื่อโปรดแจ้งให้เจ้าหน้าที่ที่เกี่ยวข้องทราบและถือปฎิบัติ</p>


                <p style="position: absolute; top: 760px; left: 26.5%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">
                ขอแสดงความนับถือ
                </p>
                <p style="position: absolute; top: 805px; left: 26.5%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">
                .....................................
                </p>
                <p style="position: absolute; top: 837px; left: 26.5%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">
                (นางสาว เมทินี ศุภสวัสดิ์กุล)
                </p>
                <p style="position: absolute; top: 865px; left: 26.5%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">
                ผู้อำนวยการอาวุโส ฝ่ายนโนบายการกำกับสถาบันการเงิน
                </p>


                <p style="position: absolute; top: 760px; left: 72%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">
                ขอแสดงความนับถือ
                </p>
                <p style="position: absolute; top: 805px; left: 72%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">
                .....................................
                </p>
                <p style="position: absolute; top: 837px; left: 72%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">
                (นาง แพตริเซีย มงคลวนิช)
                </p>
                <p style="position: absolute; top: 865px; left: 72%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">
                อธิบดีกรมบัญชีกลาง
                </p>
                
              </div>

          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
