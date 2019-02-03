import add from './script1';

console.log('You are into Add Function');
var ele1,ele2, resultBox;
document.getElementById('submit')
        .addEventListener('click', () => {
            resultBox = document.getElementById('result');
                ele1 = parseInt(document.getElementById('ele1').value);
                ele2 = parseInt(document.getElementById('ele2').value);
                resultBox.innerHTML = (isNaN(ele1) || isNaN(ele2)) ? 'Cannot Add' : 'Sum is :' + add(ele1, ele2);
            
        });
