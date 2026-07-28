
let api_url=""; 
  
let imgBox=document.getElementById("imgBox");
let QrImage=document.getElementById("qrImage");
let QrText=document.getElementById("qrText");
   

 function Qrgenertor() {
    if(QrText.value.length>0)
    {
    QrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QrText.value;
   imgBox.classList.add('show-img'); 

    }

    else{

        QrText.classList.add('error')
        setTimeout(()=>{
            QrText.classList.remove('error')
        },1000)
    }
     
    
}



