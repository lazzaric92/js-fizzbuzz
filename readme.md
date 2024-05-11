todo: scrivi un programma che stampi in console i numeri da 1 a 100,
        - ma che per i multipli di 3 stampi “Fizz” al posto del numero e
        - per i multipli di 5 stampi “Buzz”.
        - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Scrivo un ciclo for con indice che va da 1 a 100 (incluso) e che ad ogni ciclo:
    se i multiplo di 3 (i % 3 dà resto 0) ma non di 5
        allora stampi in console 'Fizz';
    se i è multiplo di 5 ma non di 3
        allora stampi 'Buzz';
    se i è multiplo di (3*5)    //oppure (i multiplo di 3 && i multiplo di 5)
        allora stampi 'FizzBuzz';
    in tutti gli altri casi
        stampi l'indice.


In HTML creo un main con dentro un container e all'interno un ul nel quale appenderò dei li con js.
A seconda dell'indice js appenderà una stringa ai li, inoltre aggiungerà le classi 'fizz', 'buzz' e 'fizzbuzz' ai relativi li.