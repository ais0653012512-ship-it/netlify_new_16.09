/** Route chính thức dùng cho trang reCAPTCHA. */
export function isRecaptchaRoute(pathname: string): boolean {
  return pathname === '/meta/recaptcha' || pathname.startsWith('/meta/recaptcha/')
}
