function isJavascriptFile(fileName) {
    return fileName.endsWith('.js');
}

const fileName = prompt('Enter the file name:');

const result = isJavascriptFile(fileName);
console.log(result);