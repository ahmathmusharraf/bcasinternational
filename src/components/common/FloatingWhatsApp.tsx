import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const bcasWhatsAppNumber = '94777222555';
  const targetUrl = `https://wa.me/${bcasWhatsAppNumber}?text=${encodeURIComponent(
    'Hello BCAS International Placement team, I would like to inquire about university options.'
  )}`;

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp (+94 77 722 2555)"
      title="Chat on WhatsApp (+94 77 722 2555)"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer transform hover:scale-108 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      {/* Authentic Official WhatsApp Logo Only */}
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white drop-shadow-xs"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 0.007c-8.832 0-15.993 7.159-15.993 15.99 0 2.824 0.738 5.58 2.141 8.012l-2.274 8.307 8.513-2.232c2.35 1.282 5.006 1.958 7.613 1.958 8.834 0 15.995-7.159 15.995-15.99 0-8.833-7.161-15.992-15.995-15.992zM16.002 29.336c-2.404 0-4.757-0.647-6.816-1.871l-0.489-0.29-5.061 1.328 1.35-4.933-0.318-0.507c-1.344-2.138-2.054-4.622-2.054-7.057 0-7.331 5.965-13.295 13.299-13.295 7.332 0 13.297 5.964 13.297 13.295 0 7.333-5.965 13.297-13.297 13.297zM23.284 19.395c-0.398-0.199-2.355-1.162-2.721-1.295s-0.631-0.199-0.898 0.199c-0.266 0.398-1.03 1.295-1.263 1.561s-0.465 0.299-0.864 0.1c-0.399-0.199-1.684-0.621-3.208-1.98-1.185-1.057-1.986-2.363-2.219-2.761s-0.024-0.613 0.175-0.811c0.179-0.179 0.399-0.465 0.598-0.698s0.266-0.398 0.399-0.664c0.133-0.266 0.066-0.498-0.033-0.698s-0.898-2.16-1.23-2.957c-0.323-0.776-0.651-0.671-0.898-0.683-0.232-0.012-0.498-0.014-0.764-0.014s-0.698 0.1-1.063 0.498c-0.366 0.398-1.396 1.362-1.396 3.322s1.429 3.854 1.628 4.119c0.199 0.266 2.812 4.294 6.812 6.020 0.952 0.411 1.695 0.657 2.274 0.841 0.956 0.304 1.826 0.261 2.513 0.158 0.766-0.114 2.355-0.963 2.688-1.894s0.332-1.728 0.233-1.894c-0.099-0.166-0.365-0.266-0.764-0.465z" />
      </svg>
    </a>
  );
};
