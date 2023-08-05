
import React from 'react';
import { ChatIcon } from '@heroicons/react/solid'; // Import ikon Chat dari Heroicons

function Cta() {
  const nomorWhatsapp = '+62895700990716';
  const whatsappLink = `https://wa.me/${nomorWhatsapp}`;

  const handleClick = () =>{
    window.open(whatsappLink, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className='flex items-center z-10 space-x-2 bg-orange-500 shadow-orange-500/10 shadow-[0_20px_35px] px-6 py-3 text-white rounded-xl cursor-pointer'
    >
      <ChatIcon className='w-6 h-6' /> {/* Ikon WhatsApp */}
      <span>Hubungi Kami</span>
    </button>
  );
}

export default Cta;
