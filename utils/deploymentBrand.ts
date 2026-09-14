/**
 * Chrome trình duyệt (favicon Meta) chỉ trên nhánh gốc production (.app).
 * Preview / nhánh khác (*.vercel.app): title kiểu “Meta đã xác minh…” theo locale, không favicon.
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

/** Favicon trống — ghi đè icon Meta / static khi cần bỏ favicon. */
export const EMPTY_FAVICON =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E'
