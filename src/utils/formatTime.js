import { DateTime } from "luxon"

/**
 * Formats date and time with luxon library with ability uppercase.
 *
 * @param {string} date - The ISO date string.
 * @param {string} format - Format token (e.g., "HH", "ccc").
 * @param {Object} [opt={}] - Optional configuration object.
 * @param {string} [opt.locale="ru"] - The locale to be used for formatting. <b>Default</b> is "ru".
 * @param {boolean} [opt.uppercase=false] - Whether to capitalize the first letter. <b>Default</b> is false.
 *
 * @returns {string}
 */
export const formatTime = (date, format, opt = {}) => {
   const options = {
      locale: opt.locale || "ru",
      uppercase: opt.uppercase || false,
   }

   const dateTime = DateTime.fromISO(date).setLocale(options.locale).toFormat(format)

   if (options.uppercase) return dateTime.charAt(0).toUpperCase() + dateTime.slice(1)

   return dateTime
}