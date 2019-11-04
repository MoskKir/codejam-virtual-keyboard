import './scss/style.scss';

const keysArray = [
    [
        '`',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '=',
        'Backspace'
    ],
    [
        'Tab',
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        '[',
        ']',
        '\\'
    ],
    [
        'CapsLK',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        "'",
        'Enter'
    ],
    [
        'Shift',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        ',',
        '.',
        '/',
        'Shift',
        '▲',
        '4'
    ],
    [
        'Ctrl',
        'Win',
        'Alt',
        '',
        'Alt',
        'Ctrl',
        '◄',
        '▼',
        '►'
    ]
];


let container = document.createElement('div'),
    keyboard = document.createElement('div'),
    textArea = document.createElement('textarea');

container.classList.add('container');

document.body.appendChild(container);

textArea.classList.add(
'text-area',
'container__text-area'
);

container.appendChild(textArea);
textArea.focus();

keyboard.classList.add('keyboard');
container.appendChild(keyboard);

for(let t = 0; t<keysArray.length; t++){

    let row = document.createElement('div');

    row.classList.add('row', `row${t}`);
    
    keyboard.append(row);

    for (let i = 0; i<keysArray[t].length; i++){
        const key = document.createElement('div');

        key.classList.add('key', `key_${keysArray[t][i]}`);
        row.appendChild(key);
        key.textContent = keysArray[t][i];
        
    }

}

document.body.addEventListener('keydown', (event) => {
    console.log(event.key);
    let key = document.querySelector(`.key_${event.key}`);
    console.log(key);
    key.classList.add('keyActive');
    setTimeout(() => key.classList.remove('keyActive'), 100);
})