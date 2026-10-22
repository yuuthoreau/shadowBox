import { createShadowValue } from './utils.js';

// 1. Kumpulkan semua referensi elemen HTML di satu tempat
export const elements = {
  inputs: {
    x: document.getElementById('x-offset'),
    y: document.getElementById('y-offset'),
    blur: document.getElementById('blur'),
    spread: document.getElementById('spread'),
    opacity: document.getElementById('opacity'),
    color: document.getElementById('color'),
    inset: document.getElementById('inset')
  },
  labels: {
    x: document.getElementById('x-val'),
    y: document.getElementById('y-val'),
    blur: document.getElementById('blur-val'),
    spread: document.getElementById('spread-val'),
    opacity: document.getElementById('opacity-val')
  },
  previewBox: document.getElementById('preview-box'),
  cssOutput: document.getElementById('css-output'),
  copyBtn: document.getElementById('copy-btn')
};

// 2. Fungsi untuk membaca nilai terkini dari semua input
export function getInputState() {
  const { inputs } = elements;
  return {
    x: inputs.x.value,
    y: inputs.y.value,
    blur: inputs.blur.value,
    spread: inputs.spread.value,
    opacity: inputs.opacity.value,
    color: inputs.color.value,
    inset: inputs.inset.checked
  };
}

// 3. Fungsi untuk memperbarui layar (angka label, kotak preview, dan teks kode)
export function renderShadow() {
  const state = getInputState();
  const { labels, previewBox, cssOutput } = elements;

  // Perbarui teks indikator angka
  labels.x.textContent = `${state.x}px`;
  labels.y.textContent = `${state.y}px`;
  labels.blur.textContent = `${state.blur}px`;
  labels.spread.textContent = `${state.spread}px`;
  labels.opacity.textContent = state.opacity;

  // Hitung nilai bayangan lewat modul utils dan terapkan ke layar
  const shadowValue = createShadowValue(state);
  previewBox.style.boxShadow = shadowValue;
  cssOutput.textContent = `box-shadow: ${shadowValue};`;
}