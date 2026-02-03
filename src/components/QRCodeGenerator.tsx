import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [qrCodeValue, setQrCodeValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const generateQRCode = () => {
        setQrCodeValue(inputValue);
    };

    return (
        <div>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter text or URL"
            />
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qrCodeValue && <QRCode value={qrCodeValue} />}
        </div>
    );
};

export default QRCodeGenerator;