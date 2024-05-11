const ulEl = document.querySelector('ul');

for(let i = 1; i <= 100; i++){
    const liEl = document.createElement('li');
    if(i % 3 == 0 && i % 5 !== 0){
        console.log('Fizz');
        liEl.classList.add('fizz');
    } else if (i % 3 !== 0 && i % 5 == 0){
        console.log('Buzz');
        liEl.classList.add('buzz');
    } else if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
        liEl.classList.add('fizzbuzz');
    } else {
        console.log(i);
        liEl.append(i);
    }

    if(i % 2 == 0){
        liEl.classList.add('even');
    } else {
        liEl.classList.add('odd');
    }

    ulEl.appendChild(liEl);
}
