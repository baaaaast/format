// Generates the QR Code from the page's URL
var qrcode = new QRCode('qrcode', { 
        text: window.location.href,
        width: 180,
        height: 180,
        colorDark : '#000000',
        colorLight : '#ffffff',
        correctLevel : QRCode.CorrectLevel.H
    });