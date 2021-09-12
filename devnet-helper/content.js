let html = document.body.innerHTML;
html = html.replace(/(DevNetId: )(\d{6})/g,
    '$1<span class="devnet-id" style="text-decoration: underline; cursor: copy">$2</span>');
document.body.innerHTML = html;

const elms = document.getElementsByClassName('devnet-id');
Array.from(elms).forEach(elm => {
    elm.addEventListener('click', e => {
        copyToClipboard(e.target.innerHTML);
    });
});

function copyToClipboard(value) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(value);
    }
}
