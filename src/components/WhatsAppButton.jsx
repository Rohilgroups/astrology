import React from 'react';
import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const phoneNumber = "919003398732"; 
  const message = t('waMessage');
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      style={{
        position: 'fixed',
        bottom: window.innerWidth < 768 ? '20px' : '30px',
        right: window.innerWidth < 768 ? '20px' : '30px',
        backgroundColor: '#25D366',
        color: '#FFF',
        width: window.innerWidth < 768 ? '50px' : '60px',
        height: window.innerWidth < 768 ? '50px' : '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        zIndex: 1000,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
      }}
    >
      <svg viewBox="0 0 32 32" width="35" height="35" fill="currentColor">
        <path d="M16 2.001c-7.72 0-14 6.28-14 14 0 2.484.654 4.819 1.808 6.877L2.023 29.58l6.868-1.802A13.914 13.914 0 0016 30.001c7.72 0 14-6.28 14-14 0-7.72-6.28-14-14-14zm7.576 20.082c-.313.88-1.558 1.631-2.484 1.769-.74.11-1.63.262-4.996-1.134-4.068-1.688-6.732-5.836-6.938-6.111-.205-.276-1.657-2.198-1.657-4.195 0-1.996 1.04-3.003 1.41-3.414.37-.411.802-.514 1.07-.514.267 0 .534.004.76.014.246.012.576-.098.902.686.329.791 1.13 2.75 1.233 2.955.103.205.174.444.03.719-.144.274-.216.445-.432.698-.216.253-.453.535-.647.74-.215.226-.443.473-.185.914.257.441 1.144 1.884 2.454 3.05 1.696 1.509 3.096 1.974 3.559 2.18.462.205.733.171 1.01-.144.277-.315 1.192-1.391 1.51-1.871.319-.48.638-.401 1.059-.25.421.15 2.662 1.254 3.124 1.486.462.232.771.353.884.55.113.197.113 1.134-.2 2.014z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
