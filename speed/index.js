document.addEventListener('DOMContentLoaded', () => {


    const backBtn = document.getElementById('backBtn');
  backBtn.addEventListener('click', () => {
    window.location.href = 'https://week1-code.vercel.app/';
  });
  
    const form = document.getElementById('form-elements');
      form.addEventListener ('submit', (event) => {
        event.preventDefault ();
        

        function speedDetector(){
            const speed = document.getElementById('speed-input').value
            const points = document.getElementById('result');

            if (speed <0 || speed > 360) {
                points.innerHTML = "Invalid Speed!";
                return;
            }else  if (speed <= 70 ){
                points.innerHTML = "OK"    
            }else {
                const demeritPoints = Math.floor((speed - 70) / 5);
                points.innerHTML = `Points: ${demeritPoints}`;
                if (demeritPoints > 12){
                    points.innerHTML = "Licence suspended!"
                }
            }
        }speedDetector()
    });
});