const keys = [
  { keyCode: 'Backquote', class: "Backquote", keyEn: "`", keyRu: "ё" },
  { keyCode: 'Digit1', class: "Digit1", keyEn: 1, keyRu: 1 },
  { keyCode: 'Digit2', class: "Digit2", keyEn: 2, keyRu: 2 },
  { keyCode: 'Digit3', class: "Digit3", keyEn: 3, keyRu: 3 },
  { keyCode: 'Digit4', class: "Digit4", keyEn: 4, keyRu: 4 },
  { keyCode: 'Digit5', class: "Digit5", keyEn: 5, keyRu: 5 },
  { keyCode: 'Digit6', class: "Digit6", keyEn: 6, keyRu: 6 },
  { keyCode: 'Digit7', class: "Digit7", keyEn: 7, keyRu: 7 },
  { keyCode: 'Digit8', class: "Digit8", keyEn: 8, keyRu: 8 },
  { keyCode: 'Digit9', class: "Digit9", keyEn: 9, keyRu: 9 },
  { keyCode: 'Digit0', class: "Digit0", keyEn: 0, keyRu: 0 },
  { keyCode: 'Minus', class: "Minus", keyEn: "-", keyRu: "=" },
  { keyCode: 'Equal', class: "Equal", keyEn: "+", keyRu: "=" },
  { keyCode: 'Backspace', class: "Backspace key-large", keyEn: "Backspace", keyRu: "Backspace" },

  { keyCode: 'Tab', class: "Tab key-large", keyEn: "Tab", keyRu: "Tab" },
  { keyCode: 'KeyQ', class: "KeyQ", keyEn: "q", keyRu: "й" },
  { keyCode: 'KeyW', class: "KeyW", keyEn: "w", keyRu: "ц" },
  { keyCode: 'KeyE', class: "KeyE", keyEn: "e", keyRu: "у" },
  { keyCode: 'KeyR', class: "KeyR", keyEn: "r", keyRu: "к" },
  { keyCode: 'KeyT', class: "KeyT", keyEn: "t", keyRu: "е" },
  { keyCode: 'KeyY', class: "KeyY", keyEn: "y", keyRu: "н" },
  { keyCode: 'KeyU', class: "KeyU", keyEn: "u", keyRu: "г" },
  { keyCode: 'KeyI', class: "KeyI", keyEn: "i", keyRu: "ш" },
  { keyCode: 'KeyO', class: "KeyO", keyEn: "o", keyRu: "щ" },
  { keyCode: 'KeyP', class: "KeyP", keyEn: "p", keyRu: "з" },
  { keyCode: 'BracketLeft', class: "BracketLeft", keyEn: "[", keyRu: "х" },
  { keyCode: 'BracketRight', class: "BracketRight", keyEn: "]", keyRu: "ъ" },
  { keyCode: 'Backslash', class: "Backslash", keyEn: "\\", keyRu: "\\" },
  { keyCode: 'Delete', class: "Delete", keyEn: "Del", keyRu: "Del" },

  { keyCode: 'CapsLock', class: "CapsLock", keyEn: "CapsLock", keyRu: "CapsLock" },
  { keyCode: 'KeyA', class: "KeyA", keyEn: "a", keyRu: "ф" },
  { keyCode: 'KeyS', class: "KeyS", keyEn: "s", keyRu: "ы" },
  { keyCode: 'KeyD', class: "KeyD", keyEn: "d", keyRu: "в" },
  { keyCode: 'KeyF', class: "KeyF", keyEn: "f", keyRu: "а" },
  { keyCode: 'KeyG', class: "KeyG", keyEn: "g", keyRu: "п" },
  { keyCode: 'KeyH', class: "KeyH", keyEn: "h", keyRu: "р" },
  { keyCode: 'KeyJ', class: "KeyJ", keyEn: "j", keyRu: "о" },
  { keyCode: 'KeyK', class: "KeyK", keyEn: "k", keyRu: "л" },
  { keyCode: 'KeyL', class: "KeyL", keyEn: "l", keyRu: "д" },
  { keyCode: 'Semicolon', class: "Semicolon", keyEn: ";", keyRu: "ж" },
  { keyCode: 'Quote', class: "Quote", keyEn: "'", keyRu: "э" },
  { keyCode: 'Enter', class: "Enter key-large", keyEn: "Enter", keyRu: "Enter" },

  { keyCode: 'ShiftLeft', class: "ShiftLeft key-large-2", keyEn: "Shift", keyRu: "Shift" },
  { keyCode: 'KeyZ', class: "KeyZ", keyEn: "z", keyRu: "я" },
  { keyCode: 'KeyX', class: "KeyX", keyEn: "x", keyRu: "ч" },
  { keyCode: 'KeyC', class: "KeyC", keyEn: "c", keyRu: "с" },
  { keyCode: 'KeyV', class: "KeyV", keyEn: "v", keyRu: "м" },
  { keyCode: 'KeyB', class: "KeyB", keyEn: "b", keyRu: "и" },
  { keyCode: 'KeyN', class: "KeyN", keyEn: "n", keyRu: "т" },
  { keyCode: 'KeyM', class: "KeyM", keyEn: "m", keyRu: "ь" },
  { keyCode: 'Comma', class: "Comma", keyEn: ",", keyRu: "б" },
  { keyCode: 'Period', class: "Period", keyEn: ".", keyRu: "ю" },
  { keyCode: 'Slash', class: "Slash", keyEn: "/", keyRu: "." },
  { keyCode: 'ArrowUp', class: "ArrowUp", keyEn: "&uarr;", keyRu: "&uarr;" },
  { keyCode: 'ShiftRight', class: "ShiftRight key-large", keyEn: "Shift", keyRu: "Shift" },

  { keyCode: 'ControlLeft', class: "ControlLeft key-large", keyEn: "Ctrl", keyRu: "Ctrl" },
  { keyCode: 'MetaLeft', class: "MetaLeft", keyEn: "Win", keyRu: "Win" },
  { keyCode: 'AltLeft', class: "AltLeft", keyEn: "Alt", keyRu: "Alt" },
  { keyCode: 'Space', class: "Space key-space", keyEn: "&nbsp;", keyRu: "&nbsp;" },
  { keyCode: 'AltRight', class: "AltRight", keyEn: "Alt", keyRu: "Alt" },
  { keyCode: 'ArrowLeft', class: "ArrowLeft", keyEn: "&larr;", keyRu: "&larr;" },
  { keyCode: 'ArrowDown', class: "ArrowDown", keyEn: "&darr;", keyRu: "&darr;" },
  { keyCode: 'ArrowRight', class: "ArrowRight", keyEn: "&rarr;", keyRu: "&rarr;" },
  { keyCode: 'ControlRight', class: "ControlRight", keyEn: "Ctrl", keyRu: "Ctrl" },
];

const body = document.body;
let language  = "en";
//let textareaArray = [];
let textArea; 
let btnKey;

window.addEventListener("load", () => {  

  body.innerHTML = "";

  body.innerHTML = `
    <div class="layout">
        <div class="wrapper">
            <h1>Виртуальная клавиатура</h1>
            <textarea class="textarea" id="textarea" rows="5" cols="50" disabled="true"></textarea>
            <div class="keyboard" id="keyboard"></div>
            <div class="description">
                Клавиатура создана в операционной системе Windows<br/>
                Для переключения языка комбинация: левыe ctrl + alt
            </div>
        </div>    
    </div>
    `;



  onLoadBodyDom();
});

function onLoadBodyDom() {

console.log('language = ', language);

  const keyboard = document.getElementById("keyboard");

  keyboard.innerHTML = "";

  if (language == 'en') {
    keys.forEach((element) => {
        keyboard.innerHTML += `
          <div class="key ${element.class}">${element.keyEn}</div>
          `;
      });
  }
  if (language == 'ru') {
    keys.forEach((element) => {
        keyboard.innerHTML += `
          <div class="key ${element.class}">${element.keyRu}</div>
          `;
      });
  }



  textArea = document.querySelector("#textarea");
  btnKey = document.querySelectorAll(".key");

  //console.log("btnKey = ", btnKey);

  btnClickMouse(); //для клика мышкой
   
}

btnClickKeyboard(); //для клика по клавиатуре 

if (language == "en") {
    console.log("язык английский");
  } else {
    console.log("язык русский");
  }





function changeLanguage() {
  
  const controlLeft = document.querySelector(".ControlLeft");
  const altLeft = document.querySelector(".AltLeft");

  if (controlLeft.classList.contains('active-keyboard') && altLeft.classList.contains('active-keyboard')) {

      if (language == 'en') {
        console.log('меняем на русский');
        language = 'ru';
        onLoadBodyDom();
      } 
      else { 
        console.log('меняем на английский');
        language = 'en' 
        onLoadBodyDom();
      }
    }

  }



//действия при кликах по клавиатуре
function btnClickKeyboard() { 
  
      document.addEventListener('keydown', downKey );
      document.addEventListener('keyup', upKey );

      function downKey(e) {

        let codeKey = e.code;
        //console.log('codeKey = ', codeKey);
  
        let indexCodeKey = keys.findIndex(el => el.keyCode === codeKey);        
        //console.log('indexCodeKey = ', indexCodeKey);
      
        let keyValue;

        if (language == 'en') {
          keyValue = keys[indexCodeKey].keyEn;
        } else {
          keyValue = keys[indexCodeKey].keyRu;
        }

        //let keyValue = keys[indexCodeKey].keyEn;
        console.log('keyValue = ', keyValue);



        let res = keyValue;
  
        if (keyValue == "Backspace") {
          res = "";
          textArea.innerHTML = textArea.textContent.slice(0, -1);
        } else {
          console.log('добавка в текстареа res = ', res);
          textArea.innerHTML += res;
        }

        
        //let keyValueClass = "'." + codeKey + "'";

        //let keyValueClass = ".`${codeKey}`";

        //console.log("keyValueClass = ", keyValueClass);

        let keyOnScreen = document.querySelector(`.${codeKey}`);

        keyOnScreen.classList.add('active-keyboard');

        changeLanguage(); //изменение языка


       
      }


      function upKey(e) {

        let codeKey = e.code;

        let keyOnScreen = document.querySelector(`.${codeKey}`);

        keyOnScreen.classList.remove('active-keyboard'); 
      }

      



}




//действия при кликах мышкой по экрану
function btnClickMouse() {

  btnKey = document.querySelectorAll(".key");

  btnKey.forEach((btn) => {

    btn.addEventListener('mousedown', downMouse );
    btn.addEventListener('mouseup', upMouse );

    function downMouse(e) {

      let target = e.target.textContent;

      let res = target;

      if (target == "Backspace") {
        res = "";
        textArea.innerHTML = textArea.textContent.slice(0, -1);
      }
      textArea.innerHTML += res;

      let targetKey = e.target;

      targetKey.classList.add('active');
      
    }

    function upMouse(e) {

      let targetKey = e.target;

      targetKey.classList.remove('active');

    }




  });

  

}

