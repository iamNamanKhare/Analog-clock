      const sh = document.querySelector(".sec-hand");
      const mh = document.querySelector(".min-hand");
      const hh = document.querySelector(".hour-hand");
      function setDate() {
        const date = new Date();
        
        const sec = date.getSeconds();
        const secDegree = ((sec / 60 ) * 360) + 90;
        sh.style.transform = `rotate(${secDegree}deg)`;
        
        const min = date.getMinutes()
        const minDegree = ((min / 60) * 360) + 90;
        mh.style.transform=`rotate(${minDegree}deg)`;
        
        const hr = date.getHours();
        const hrDegree = ((hr/12)*360)+90;
        hh.style.transform = `rotate(${hrDegree}deg)`;
        
        console.log(secDegree,minDegree,hrDegree);
      }
      
      setInterval(setDate, 1000);
      
