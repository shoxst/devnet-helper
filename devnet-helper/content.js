let html = document.body.innerHTML;
html = html.replace(/(devnet[\s　]?(id)?|id)[\s　]*:[\s　]*(\d{6})/gi,
    '$1: <span class="devnet-id" style="text-decoration: underline; cursor: copy">$3</span>');
document.body.innerHTML = html;

const elms = document.getElementsByClassName('devnet-id');
Array.from(elms).forEach(elm => {
    elm.addEventListener('click', e => {
        copyToClipboard(e.target.innerHTML);
    });
});

// https://qiita.com/simiraaaa/items/2e7478d72f365aa48356
function copyToClipboard(value){
    const tmp = document.createElement("div");
    const pre = document.createElement('pre');
  
    // 親要素のCSSで user-select: none だとコピーできないので書き換える
    pre.style.webkitUserSelect = 'auto';
    pre.style.userSelect = 'auto';
    tmp.appendChild(pre).textContent = value;
  
    // 要素を画面外へ
    const s = tmp.style;
    s.position = 'fixed';
    s.right = '200%';

    document.body.appendChild(tmp);
    document.getSelection().selectAllChildren(tmp);
    document.execCommand("copy");
    document.body.removeChild(tmp);
}
  
// httpでは使用できない
// function copyToClipboard(value) {
//     if (navigator.clipboard) {
//         navigator.clipboard.writeText(value);
//     }
// }
