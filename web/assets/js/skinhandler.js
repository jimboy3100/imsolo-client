function skinHandler() {
    let youtubeSkins = 'hello';
    let skinList = 'hello';
    let splitSkins = undefined;
    let inputValue = document.getElementById('skin').value;
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
    if (xml.readyState == 4 && xml.status == 200) {
    youtubeSkins = xml.responseText;
    }
    }
    xml.open('GET','https://imsolo.pro/web/youtuberskinList.txt',true);
    xml.send();
    const request2 = new XMLHttpRequest();
    request2.onreadystatechange = () => {
    if (request2.readyState == 4 && request2.status == 200) {
    skinList = request2.responseText;
    }
    }
    request2.open('GET','https://imsolo.pro/web/skinList.txt',true);
    request2.send();
    function validateSkin() {
    skins = skinList.concat(youtubeSkins);
    splitSkins = skins.split(',');
    if (splitSkins.includes('tbbce') == false) {
    splitSkins.push('tbbce');
    }
    inputValue = document.getElementById('skin').value;
    if(splitSkins.includes(inputValue)){
    document.getElementById('skin').style.color = '#78FF39'
    }
    else {
    document.getElementById('skin').style.color = '#555';
    }
    }
    if (skinList !== undefined) {
    setInterval(validateSkin,1);
    } 
}
