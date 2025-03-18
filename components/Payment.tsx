'use client'
import React from "react";


const Payment = () => {
  const venmoLink = `https://account.venmo.com/pay?audience=friends&note=registryFund&recipients=Christina-Taylor&txn=pay`;

  const paypalLink = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${encodeURIComponent(
    "longevity.tina@gmail.com"
  )}&amount=20&currency_code=USD&item_name=registryFund`;

  const openZellePopup = () => {
    const popup = window.open('', 'Zelle QR', 'width=600,height=600');
    if (popup) {
      popup.document.write(`
        <html>
          <head><title>Zelle QR</title></head>
          <body>
          <p>1. Open your mobile phone banking app (ex. Chase)</p>
          <p>2. Go to "Send payment via Zelle"</p>
          <p>3. Select "Scan QR code"</p>
          <p>4. Add note "Registry Fund"</p>
          <img src="zelleQR.png" alt="Zelle QR Code" style="width:80%; height:auto;"/>
          </body>
        </html>
      `);
      popup.document.close();
    }
  };

  return (
    <div className="flex flex-row gap-1">
      <a href={venmoLink} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Pay via Venmo</button>
      </a>
      <a href={paypalLink} target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">
        Pay via PayPal
      </button>
    </a>
      <button onClick={openZellePopup} className="px-4 py-2 bg-green-500 text-white rounded-md">Pay via Zelle</button>
    </div>
  );
};

export default Payment;
