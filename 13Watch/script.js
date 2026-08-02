let [seconds,minutes,hours]=[0,0,0];
        const displaytime =document.getElementById('display-time')

     //   let buttons=document.querySelector('.buttons');

        let Timer=null;

        function stopwatch()
        {
            seconds++;

        if(seconds ===60)
        {
            seconds=0;
            minutes++;
         if(minutes === 60)
        {
            minutes=0;
            hours++;
        }

       
    }

          let h= hours < 10 ? "0" +hours: hours;
        let m= minutes < 10 ? "0"+ minutes: minutes;
        let s= seconds < 10 ? "0"+ seconds: seconds;
    displaytime.innerHTML=h+":"+m+":"+s;
        

}
        function watchstart()
        {
            if(Timer!=null)
        {
            clearInterval(Timer)
        }

           Timer= setInterval(stopwatch, 1000);
          
           
        }
        // console.log(watchstart());

        function reset()
        {
           clearInterval(Timer)
           Timer=null;
           seconds=0;
           minutes=0;
           hours=0;
           displaytime.innerHTML="00:00:00"

        }

        function watchstop()
        {
            clearInterval(Timer);
        }