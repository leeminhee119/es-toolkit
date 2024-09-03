const htmlUnescapes: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
};

/**
 * The inverse of `escape`. This method converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `str` to their corresponding characters.
 *
 * @param {string} str The string to unescape.
 * @returns {string} Returns the unescaped string.
 */
export function unescape(str: string): string {
  return str.replace(/&(?:amp|lt|gt|quot|#(0+)?39);/g, match => htmlUnescapes[match] || "'");
}