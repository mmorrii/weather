import {DateTime} from "luxon";

export const formatTime = (date, format, opt = {}) => {
    const options = {
        locale: opt.locale || "ru",
        uppercase: opt.uppercase || false
    }

    const dateTime = DateTime.fromISO(date).setLocale(options.locale).toFormat(format)

    if (options.uppercase) return dateTime.charAt(0).toUpperCase() + dateTime.slice(1)

    return dateTime
}