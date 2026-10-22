import { elements, renderShadow } from './ui.js';

function initApp() {
  // 1. Pasang event listener pada setiap kontrol input
  Object.values(elements.inputs).forEach((inputElement) => {
    inputElement.addEventListener('input', renderShadow);
  });

  // 2. Pasang event listener untuk tombol Salin CSS
  elements.copyBtn.addEventListener('click', () => {
    const codeToCopy = elements.cssOutput.textContent;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      elements.copyBtn.textContent = 'Tersalin!';
      setTimeout(() => {
        elements.copyBtn.textContent = 'Salin CSS';
      }, 1500);
    });
  });

  // 3. Render tampilan awal saat halaman pertama kali dimuat
  renderShadow();
}

// Jalankan aplikasi
initApp();