let body = document.querySelector("body")

lang()
function lang(){
  let arrRu = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del']
  ];
  // ['ё', '!', '"', '№', ';', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],изменить при shift
  let arrEng = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del']
  ];
  //['`', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'], изменить при shift
  createKeyboard(arrRu)

  body.addEventListener('keyup', function(e){
    if(e.key == 'Shift'){
      body.innerHTML = ''
      createKeyboard(arrEng)
    }
  })
}

let buttons = document.querySelectorAll('.button');

for (const button of buttons) {
  button.addEventListener('click', function(e){
    console.log(this.textContent)
  })
}
  
function createKeyboard(arr){
  let container = document.createElement("div");
  let textarea = document.createElement('textarea');
  let keyboard = document.createElement("div");
  let infoBlock = document.createElement('div')
  let p = document.createElement('p')

  infoBlock.className = 'info-block';
  container.className = "container";
  textarea.className = "textarea";
  keyboard.className = "keyboard";

  p.textContent = 'Что бы сменить язык нажмите сочетание клавищ Shift + Alt'

  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < arr[i].length; j++) {
      let button = document.createElement("div");
      button.className = "button";

      button.textContent = arr[i][j]
      row.append(button)
    }
    keyboard.append(row)
  }

  infoBlock.append(p)
  container.append(textarea, keyboard, infoBlock)
  body.append(container)
}
