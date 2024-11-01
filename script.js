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