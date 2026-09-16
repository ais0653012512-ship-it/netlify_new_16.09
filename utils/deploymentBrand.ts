/**
 * Chrome trình duyệt (favicon Meta) chỉ trên nhánh gốc production (.app).
 * Preview / nhánh khác (*.vercel.app): title kiểu “Meta đã xác minh…” theo locale + globe favicon.
 */
export function useMetaBrowserChrome(): boolean {
  // Mỗi deploy Vercel build riêng — preview ≠ production
  if (process.env.VERCEL_ENV === 'preview') return false
  return true
}

/** Client: hostname không phải domain gốc .app (và không phải localhost). */
export function isPrimaryAppHost(hostname: string): boolean {
  const h = hostname.toLowerCase().split(':')[0] ?? ''
  if (h === 'localhost' || h === '127.0.0.1') return true
  if (h.endsWith('.vercel.app')) return false
  return h.endsWith('.app')
}

/** Favicon quả địa cầu cho nhánh preview (không dùng favicon Meta). */
export const PREVIEW_FAVICON = '/static/favicons/globe.svg'
