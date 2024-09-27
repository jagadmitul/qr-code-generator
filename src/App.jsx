import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';

const App = () => {
  const [qrValue, setQrValue] = useState('');
  const [isDynamic, setIsDynamic] = useState(false);
  const qrRef = useRef(null);

  const handleDownload = () => {
    if (qrRef.current === null) {
      return;
    }

    const filename = isDynamic ? qrValue || 'dynamic-qr' : 'Rebrandic';

    qrRef.current.style.border = 'none';

    toPng(qrRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = dataUrl;
        link.click();

        qrRef.current.style.border = '';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckboxChange = () => {
    setIsDynamic(!isDynamic);
    setQrValue('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">QR Code Generator</h1>

        <div className="flex items-center justify-center mb-4">
          <label className="mr-3 text-lg font-semibold text-gray-800">Create your custom QR code:</label>
          <input
            type="checkbox"
            className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            checked={isDynamic}
            onChange={handleCheckboxChange}
          />
        </div>

        {isDynamic && (
          <input
            type="text"
            className="border p-2 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your QR code content!"
            value={qrValue}
            onChange={(e) => setQrValue(e.target.value)}
          />
        )}

        <div className="flex justify-center mb-4">
          <div ref={qrRef} className="p-4 bg-gray-50 rounded-lg border-2 border-transparent">
            <QRCode value={isDynamic && qrValue ? qrValue : 'https://www.rebrandic.com/'} />
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default App;
