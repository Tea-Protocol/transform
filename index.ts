
/**
 * @deprecated 优先使用 tinycolor2 polished 等第三方工具方法
 * 
 * 将十六进制颜色转化为 rgba 颜色
 * @param {String} hex 十六进制颜色
 * @param {Number} opacity 透明度 0-1，默认为 1
 * @returns {String} rgba 颜色
 * @example
 * const rgba = hexToRgba('#f44336', 0.2)
 * // rgba(244, 67, 54, 0.2)
 */
export const hexToRgba = (hex: string, opacity: number = 1): string => {
  if (!hex) return ''
  if (typeof hex !== 'string') return ''
  const formatedHex = hex.replace(/\s+/g, '')
  const available = formatedHex.length === 7
  if (!available) return ''
  return `
    rgba(
      ${parseInt('0x' + hex.slice(1, 3))},
      ${parseInt('0x' + hex.slice(3, 5))},
      ${parseInt('0x' + hex.slice(5, 7))},
      ${opacity}
    )`
}
