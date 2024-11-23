let calculator = document.createElement('div')
calculator.className = 'calculator'

let row1 = document.createElement('div')
row1.className = 'row1'
let ekran = document.createElement('h1')
ekran.id = 'ekran'
ekran.innerText = 'Calculate It'
let ekrandiv = document.createElement('div')
ekrandiv.className = 'ekrandiv'
ekrandiv.setAttribute('onclick', 'sil()')

let row2 = document.createElement('div')
row2.className = 'row2'
let button7 = document.createElement('button')
button7.setAttribute('onclick', "yaz('7')")
let button8 = document.createElement('button')
button8.setAttribute('onclick', "yaz('8')")
let button9 = document.createElement('button')
button9.setAttribute('onclick', "yaz('9')")
let buttonslash = document.createElement('button')
buttonslash.setAttribute('onclick', "yaz('/')")

let row3 = document.createElement('div')
row3.className = 'row3'
let button4 = document.createElement('button')
button4.setAttribute('onclick', "yaz('4')")
let button5 = document.createElement('button')
button5.setAttribute('onclick', "yaz('5')")
let button6 = document.createElement('button')
button6.setAttribute('onclick', "yaz('6')")
let buttonstar = document.createElement('button')
buttonstar.setAttribute('onclick', "yaz('*')")

let row4 = document.createElement('div')
row4.className = 'row4'
let button1 = document.createElement('button')
button1.setAttribute('onclick', "yaz('1')")
let button2 = document.createElement('button')
button2.setAttribute('onclick', "yaz('2')")
let button3 = document.createElement('button')
button3.setAttribute('onclick', "yaz('3')")
let buttonminus = document.createElement('button')
buttonminus.setAttribute('onclick', "yaz('-')")

let row5 = document.createElement('div')
row5.className = 'row5'
let button0 = document.createElement('button')
button0.setAttribute('onclick', "yaz('0')")
let buttondot = document.createElement('button')
buttondot.setAttribute('onclick', "yaz('.')")
let buttonequal = document.createElement('button')
buttonequal.setAttribute('onclick', "topla()")
let buttonplus = document.createElement('button')
buttonplus.setAttribute('onclick', "yaz('+')")
let zero = document.createElement('h1')
zero.innerText = '0'
let one = document.createElement('h1')
one.innerText = '1'
let two = document.createElement('h1')
two.innerText = '2'
let three = document.createElement('h1')
three.innerText = '3'

let four = document.createElement('h1')
four.innerText = '4'
let five = document.createElement('h1')
five.innerText = '5'
let six = document.createElement('h1')
six.innerText = '6'
let seven = document.createElement('h1')
seven.innerText = '7'

let eight = document.createElement('h1')
eight.innerText = '8'
let nine = document.createElement('h1')
nine.innerText = '9'
let plusplus = document.createElement('h1')
plusplus.innerText = '+'
let minusminus = document.createElement('h1')
minusminus.innerText = '-'

let starstar = document.createElement('h1')
starstar.innerText = 'x'
let slashslash = document.createElement('h1')
slashslash.innerText = '/'
let equalequal = document.createElement('h1')
equalequal.innerText = '='
let dotdot = document.createElement('h1')
dotdot.innerText = '.'

button0.appendChild(zero)
button1.appendChild(one)
button2.appendChild(two)
button3.appendChild(three)
button4.appendChild(four)
button5.appendChild(five)
button6.appendChild(six)
button7.appendChild(seven)
button8.appendChild(eight)
button9.appendChild(nine)
buttondot.appendChild(dotdot)
buttonslash.appendChild(slashslash)
buttonstar.appendChild(starstar)
buttonplus.appendChild(plusplus)
buttonminus.appendChild(minusminus)
buttonequal.appendChild(equalequal)




ekrandiv.appendChild(ekran)
row1.appendChild(ekrandiv)
row2.appendChild(button7)
row2.appendChild(button8)
row2.appendChild(button9)
row2.appendChild(buttonslash)
row3.appendChild(button4)
row3.appendChild(button5)
row3.appendChild(button6)
row3.appendChild(buttonstar)
row4.appendChild(button1)
row4.appendChild(button2)
row4.appendChild(button3)
row4.appendChild(buttonminus)
row5.appendChild(button0)
row5.appendChild(buttondot)
row5.appendChild(buttonequal)
row5.appendChild(buttonplus)
calculator.appendChild(row1)
calculator.appendChild(row2)
calculator.appendChild(row3)
calculator.appendChild(row4)
calculator.appendChild(row5)
document.body.appendChild(calculator)

var islem = '';
function yaz(x) {
    if ((document.getElementById('ekran').innerHTML == 'Calculate It' || 'HATALI İŞLEM')) {
        if (x == '/' || '*' || '-' || '+' || '=') {
            document.getElementById('ekran').innerHTML = document.getElementById('ekran').innerHTML;
            
        }
        else{
        islem += x;
        islem = document.getElementById('ekran').innerHTML;
        
        }
    }
    islem += x;
    document.getElementById('ekran').innerHTML = islem;
    return;
    
}
function topla() {
    if (islem == '') {
        document.getElementById('ekran').innerHTML = 'HATALI İŞLEM';
        return;
    }
    try {   
        const sonuc = eval(islem); 
        document.getElementById('ekran').innerHTML = sonuc;
        islem = sonuc;
        return;
        
    } catch (error) {
        document.getElementById('ekran').innerHTML = 'HATALI İŞLEM';
        islem = '';
        return;
    }
    }
function sil() {
    if (document.getElementById('ekran').innerHTML.length == 1) {
        document.getElementById('ekran').innerHTML = 'Calculate It';
        islem = '';
        return;
    }
    else if (document.getElementById('ekran').innerHTML == 'Calculate It'){
        return;
    }
    else if (document.getElementById('ekran').innerHTML == 'HATALI İŞLEM'){
        return;
    }
    document.getElementById('ekran').innerHTML = document.getElementById('ekran').innerHTML.slice(0, -1);
    islem = document.getElementById('ekran').innerHTML;
}