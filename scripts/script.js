function createHeadgraph() {
    let head = document.createElement('h1');
    head.textContent = '你点击了这个按钮！';
    document.body.appendChild(head);
}
  
const buttons = document.querySelectorAll('button');
  
for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createHeadgraph);
}