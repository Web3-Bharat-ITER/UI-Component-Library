var inc = 1000;


function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  document.querySelector('.hrs').style.transform = `rotate(${hour}deg)`
  document.querySelector('.mins').style.transform = `rotate(${minute}deg)`
  document.querySelector('.secs').style.transform = `rotate(${second}deg)`
}

clock();


setInterval(clock, inc);
