const importButton = document.getElementById('importButton');
importButton.addEventListener('click', convertToHtml);

const result = document.createElement('div');
document.body.appendChild(result);
result.id = 'htmlContent';

const textarea = document.getElementById('inputText');

textarea.addEventListener("keyup", convertToHtml);

function convertToHtml() {
    const text = textarea.value.replaceAll('{{', '<').replaceAll('}}', '>');
    result.innerHTML = text;
}
