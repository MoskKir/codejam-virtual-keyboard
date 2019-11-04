import './scss/style.scss';

const keysArrayEn = [
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
const keysArrayRu = [
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
        'й',
        'ц',
        'у',
        'к',
        'е',
        'н',
        'г',
        'ш',
        'щ',
        'з',
        'х',
        'ъ',
        '\\'
    ],
    [
        'CapsLK',
        'ф',
        'ы',
        'в',
        'а',
        'п',
        'р',
        'о',
        'л',
        'д',
        'ж',
        "э",
        'Enter'
    ],
    [
        'Shift',
        'я',
        'ч',
        'с',
        'м',
        'и',
        'т',
        'ь',
        'б',
        'ю',
        '.',
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
    
    textArea.classList.add('text-area', 'container__text-area');
    container.appendChild(textArea);

    keyboard.classList.add('keyboard', 'En');

let renderVirtualKeybord = (keysArray) => {
    

    while (keyboard.firstChild) {
        keyboard.removeChild(keyboard.firstChild);
    }


    textArea.focus();
    
    container.appendChild(keyboard);
    
    for(let t = 0; t < keysArray.length; t++) {
    
        let row = document.createElement('div');
    
        row.classList.add('row', `row${t}`);
        
        keyboard.append(row);
    
        for (let i = 0; i<keysArray[t].length; i++){
            const key = document.createElement('div');
    
            key.classList.add('key', `Key_${keysArray[t][i]}`);
            row.appendChild(key);
            key.textContent = keysArray[t][i];
            
        }
    
    }
}
renderVirtualKeybord(keysArrayEn);

document.body.addEventListener('keydown', (event) => {
    
    console.log(event.key);
    console.log(event.code);
    setTimeout(() => textArea.focus(), 100);
    let key = document.querySelector(`.Key_${event.key}`);
   
    console.log(key);

    key.classList.add('keyActive');
    setTimeout(() => key.classList.remove('keyActive'), 100);
});

keyboard.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    textArea.value += event.target.textContent;

    let key = document.querySelector(`.Key_${event.target.textContent}`);
    key.classList.add('keyActive');
    setTimeout(() => key.classList.remove('keyActive'), 100);
    // textArea.focus();
    
});

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

}

runOnKeys(
    () => {
        console.log('runOnKeys')
        if (keyboard.classList.contains('En')) {

            console.log('var1')
            renderVirtualKeybord(keysArrayRu);
            keyboard.classList.remove('En');
            keyboard.classList.add('Ru');

        }else if (keyboard.classList.contains('Ru')) {

            console.log('var2')
            renderVirtualKeybord(keysArrayEn); 
            keyboard.classList.remove('Ru');
            keyboard.classList.add('En');

        }
    },
    'ShiftLeft',
    'AltLeft'
);