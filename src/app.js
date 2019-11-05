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
        '▲',
        'Shift'
    ],
    [
        'Ctrl',
        'Win',
        'Alt',
        '',
        'Alt',
        '◄',
        '▼',
        '►',
        'Ctrl'
    ]
];
const keysArrayEnShift = [
    [
        '~',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '+',
        'Backspace'
    ],
    [
        'Tab',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '{',
        '}',
        '|'
    ],
    [
        'CapsLK',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        '"',
        'Enter'
    ],
    [
        'Shift',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        '<',
        '>',
        '?',        
        '▲',
        'Shift'
    ],
    [
        'Ctrl',
        'Win',
        'Alt',
        '',
        'Alt',    
        '◄',
        '▼',
        '►',
        'Ctrl'
    ]
];
const keysArrayEnCapsLK = [
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
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '{',
        '}',
        '|'
    ],
    [
        'CapsLK',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        '"',
        'Enter'
    ],
    [
        'Shift',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        '<',
        '>',
        '?',        
        '▲',
        'Shift'
    ],
    [
        'Ctrl',
        'Win',
        'Alt',
        '',
        'Alt',    
        '◄',
        '▼',
        '►',
        'Ctrl'
    ]
];

const keysArrayRu = [
    [
        'ё',
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
        '▲',
        'Shift'
    ],
    [
        'Ctrl',
        'Win',
        'Alt',
        '',
        'Alt',        
        '◄',
        '▼',
        '►',
        'Ctrl'
    ]
];
const keysArrayRuShift = [
    [
        'Ё',
        '!',
        '"',
        '№',
        ';',
        '%',
        ':',
        '?',
        '*',
        '(',
        ')',
        '_',
        '+',
        'Backspace'
    ],
    [
        'Tab',
        'Й',
        'Ц',
        'У',
        'К',
        'Е',
        'Н',
        'Г',
        'Ш',
        'Щ',
        'З',
        'Х',
        'Ъ',
        '/'
    ],
    [
        'CapsLK',
        'Ф',
        'Ы',
        'В',
        'А',
        'П',
        'Р',
        'О',
        'Л',
        'Д',
        'Ж',
        "Э",
        'Enter'
    ],
    [
        'Shift',
        'Я',
        'Ч',
        'С',
        'М',
        'И',
        'Т',
        'Ь',
        'Б',
        'Ю',
        ',',        
        '▲',
        'Shift'
    ],
    [
        'Ctrl',
        'Win',
        'Alt',
        '',
        'Alt',        
        '◄',
        '▼',
        '►',
        'Ctrl'
    ]
];
const keysArrayRuCapsLK = [
    [
        'Ё',
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
        'Й',
        'Ц',
        'У',
        'К',
        'Е',
        'Н',
        'Г',
        'Ш',
        'Щ',
        'З',
        'Х',
        'Ъ',
        '/'
    ],
    [
        'CapsLK',
        'Ф',
        'Ы',
        'В',
        'А',
        'П',
        'Р',
        'О',
        'Л',
        'Д',
        'Ж',
        "Э",
        'Enter'
    ],
    [
        'Shift',
        'Я',
        'Ч',
        'С',
        'М',
        'И',
        'Т',
        'Ь',
        'Б',
        'Ю',
        ',',        
        '▲',
        'Shift'
    ],
    [
        'Ctrl',
        'Win',
        'Alt',
        '',
        'Alt',        
        '◄',
        '▼',
        '►',
        'Ctrl'
    ]
];

let container = document.createElement('div'),
    keyboard = document.createElement('div'),
    textArea = document.createElement('textarea');

textArea.rows = 20;
textArea.cols = 30;
container.classList.add('container');
    
document.body.appendChild(container);

    
textArea.classList.add('text-area');
container.appendChild(textArea);
    
keyboard.classList.add('keyboard', 'En');


let capsLockSwitcher = 'off';
let shiftSwitcher = 'off';
let languageSwicher = 'en';


    
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
        
        for (let i = 0; i < keysArray[t].length; i++){
            let key = document.createElement('div');
            
            key.classList.add('key', `Key_${keysArray[t][i]}`);
            row.appendChild(key);

           

            key.textContent = keysArray[t][i];

            key.addEventListener('click', (event) => {

                let keyTextContent = event.target.textContent;
                
                event.target.classList.add('keyActive');
                setTimeout(() => event.target.classList.remove('keyActive'), 100);

                if (keyTextContent === '') {
                    return textArea.value += ' ';
                } else if (keyTextContent === 'Tab') {
                    return textArea.value += '    ';

                } else if (keyTextContent === 'Enter') {
                    return textArea.value += '\n';

                } else if (keyTextContent === 'Ctrl') {
                    return textArea.value += '';
                } else if (keyTextContent === 'Alt') {
                    return textArea.value += '';
                } else if (keyTextContent === 'CapsLK') {
                    if (capsLockSwitcher === 'off') {
                        capsLockSwitcher = 'on';
                        if (languageSwicher === 'en') {
                            return renderVirtualKeybord(keysArrayEnCapsLK);
                        } else {
                            return renderVirtualKeybord(keysArrayRuCapsLK);
                        }                        
                    } else {
                        capsLockSwitcher = 'off';
                        if (languageSwicher === 'en') {
                            return renderVirtualKeybord(keysArrayEn);
                        } else {
                            return renderVirtualKeybord(keysArrayRu);
                        }
                    }
                } else if (keyTextContent === 'Shift') { 

                    if (shiftSwitcher === 'off') {
                        shiftSwitcher = 'on';
                        if (languageSwicher === 'en') {
                            return renderVirtualKeybord(keysArrayEnShift);
                        } else {
                            return renderVirtualKeybord(keysArrayRuShift);
                        }
                    } else {
                        shiftSwitcher = 'off';
                        if (languageSwicher === 'en') {
                            return renderVirtualKeybord(keysArrayEn);
                        } else {
                            return renderVirtualKeybord(keysArrayRu);
                        }
                    }


                } else if (keyTextContent === 'Win') {
                    return textArea.value += '';
                } else if (keyTextContent === 'Backspace') {
                    return textArea.value = textArea.value.slice(0, textArea.value.length - 1);
                }

                

                textArea.value += event.target.textContent;
            })
            
        }
    }  
}


let loadLanguage = () => {
    // keyCode: 83 key: s или ы

    document.body.addEventListener('keydown', (event) => {
        // console.log(event)
        // console.log(event.KeyboardEvent)
        
        // console.log(event.code)
        // console.log(event.key)
        let chekLanguage = `Key${event.key.toUpperCase()}`;
        
        
        if (event.code === chekLanguage ) {
            renderVirtualKeybord(keysArrayEn);
        } else {
            renderVirtualKeybord(keysArrayRu);
        }
    })
    
};
window.onload = loadLanguage();



document.body.addEventListener('keydown', (event) => {
    // console.log(event)
    // console.log(event.key);
    // console.log(event.code);
    // console.log(event.shiftKey)

    let key = document.querySelector(`.Key_${event.key}`);

    if (event.key === 'Shift') {
        key.classList.add('keyActive');
    } else {
        setTimeout(() => textArea.focus(), 100);
    
        key.classList.add('keyActive');
        setTimeout(() => key.classList.remove('keyActive'), 100);
    }

});

// Этот работает нормально
let runOnKeys = (func, ...codes) => {
    let pressed = new Set();

    document.addEventListener('keydown', event => {
      pressed.add(event.code);

      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', event => {
      pressed.delete(event.code);
    });

}

runOnKeys(
    () => {
        
        if (keyboard.classList.contains('En')) {
            renderVirtualKeybord(keysArrayRu);
            keyboard.classList.remove('En');
            keyboard.classList.add('Ru');

        } else if (keyboard.classList.contains('Ru')) {
            renderVirtualKeybord(keysArrayEn); 
            keyboard.classList.remove('Ru');
            keyboard.classList.add('En');

        }
    },
    'ShiftLeft',
    'AltLeft'
);

let choiseLanguage = () => {

    let ruLanguage = document.createElement('div'),
        enLanguage = document.createElement('div'),
        text = document.createElement('div');
    
    
    
    text.innerHTML = `Please put on any button on you keybord or choise with display`;
    
    ruLanguage.innerHTML = `Русский`;
    enLanguage.innerHTML = `Engles`;
        
    container.appendChild(text);
    text.appendChild(ruLanguage);
    text.appendChild(enLanguage);
    
    ruLanguage.addEventListener('click', () => {
        languageSwicher = 'ru'; 
        renderVirtualKeybord(keysArrayRu);
    });
        
    enLanguage.addEventListener('click', () => {
        languageSwicher = 'en'; 
        renderVirtualKeybord(keysArrayEn);
    });
}

choiseLanguage();