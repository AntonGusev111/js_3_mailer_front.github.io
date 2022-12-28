// TODO: write code here
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

function insertAfter(elementInstertAfter, parentElement) {
	return parentElement.parentNode.insertBefore(elementInstertAfter, parentElement.nextSibling);
}

function draw(value){
  document.querySelector('.incoming').style = ''
  let area = document.querySelector('.incoming');
  for (let item of value.messages){
    console.log(item)
    let message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = `<div class="from">${item.from}</div>
    <div class="subject">${item.subject.length < 15 ? item.subject : `${item.subject.slice(0,13)}...` }</div>
    <div class="date">${new Date(item.received).getHours()}:${new Date(item.received).getMinutes()} ${new Date(item.received).getDate()}.${new Date(item.received).getMonth()}.${new Date(item.received).getFullYear()}</div>`
    insertAfter(message, area)
  };

};



const obs$ = ajax.getJSON('http://localhost:7070/api/check-email').pipe(
    map(userResponse => draw(userResponse)),
    catchError(error => {
      document.querySelector('.incoming').style = 'animation: blink 1000ms alternate infinite;'
    })
  );


  //obs$.subscribe();

setInterval(()=>{obs$.subscribe()}, 5000)