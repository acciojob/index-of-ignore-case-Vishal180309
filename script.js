document.getElementById('find-button').addEventListener('click', function() {
    let inputString = document.getElementById('input-string').value;
    let inputSubstring = document.getElementById('input-substring').value;
    let result = indexOfIgnoreCase(inputString, inputSubstring);

    if (result === -1) {
        document.getElementById('result').innerHTML = 'Substring not found';
    } else {
        document.getElementById('result').innerHTML = 'Index of substring: ' + result;
    }
});

function indexOfIgnoreCase(str, subStr) {
    return str.toLowerCase().indexOf(subStr.toLowerCase());
}