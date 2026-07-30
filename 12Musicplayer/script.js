const progress=document.getElementById('progress');

const song=document.getElementById('song');
const ctrlIcon=document.getElementById('ctrlIcon');




 function playPause()
{
    if(song.paused)
    {
        song.play();
         ctrlIcon.classList.remove('fa-play')
          ctrlIcon.classList.add('fa-pause')

    }
    else{
        song.pause()
         ctrlIcon.classList.remove('fa-pause')
          ctrlIcon.classList.add('fa-play')
    }

  
  
}


 song.onloadedmetadata=function()
 {

     progress.max=song.duration;
    progress.value=song.currentTime;
 }

 if(song.play())
 {
    setInterval(() => {

          progress.value=song.currentTime;
        
    }, 500);
 }

progress.onchange= function()
 {
    song.play();
     song.currentTime= progress.value
       ctrlIcon.classList.add('fa-pause')
          ctrlIcon.classList.remove('fa-play')

}



 