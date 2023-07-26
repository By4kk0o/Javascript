  function generateQRCode() {
    var inputText = document.getElementById('inputText').value;
    var qrcodeDiv = document.getElementById('qrcode');

    // Supprimer le contenu précédent du div
    qrcodeDiv.innerHTML = '';

    // Créer un nouveau code QR
    var qrcode = new QRCode(qrcodeDiv, {
      text: inputText,
      width: 256,
      height: 256,
    });
  }