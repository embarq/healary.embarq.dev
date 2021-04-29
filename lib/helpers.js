export function isMobile() {
  return typeof window !== 'undefined' ? window.innerWidth <= 568 : true
}