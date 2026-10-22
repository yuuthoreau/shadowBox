/**
 * Mengubah kode warna Hex (#RRGGBB) dan nilai alpha (0-1) menjadi format rgba()
 */
export function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Merakit objek konfigurasi slider menjadi string nilai CSS box-shadow
 */
export function createShadowValue(state) {
  const rgbaColor = hexToRgba(state.color, state.opacity);
  const insetKeyword = state.inset ? 'inset ' : '';
  return `${insetKeyword}${state.x}px ${state.y}px ${state.blur}px ${state.spread}px ${rgbaColor}`;
}