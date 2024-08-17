import React from 'react';
import QRCode from 'qrcode.react';

const PDFWithQRCode = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Embed the PDF file */}
      <embed 
        src="/bachelor-answersss (2).pdf" 
        type="application/pdf" 
        style={{ width: '100%', height: '100%' }} 
      />
      {/* QR code overlay */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '54px', // Adjust the top value to position correctly
          left: '440px', // Adjust the left value to position correctly
          background: 'white', 
          padding: '10px', 
          borderRadius: '8px', 
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
          display:'none'
        }}
      >
        <QRCode value="https://bmbs-master.vercel.app/" size={128} />
      </div>
    </div>
  );
};

export default PDFWithQRCode;
