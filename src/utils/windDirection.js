/**
 * Function for obtaining the value and angle of the wind direction
 *
 * The function normalizes the input degree to a value between 0 and 360
 * and then determines the closest cardinal direction based on standard
 * wind directions in 45-degree increments.
 *
 * @param {number} degree - The wind direction in degrees, which can be any number (positive or negative).
 *
 * @returns {{angle: string, value: string}} - An object containing the value of the direction (e.g., "С", "В")
 * and the corresponding angle in degrees (e.g., "0", "90")
 */
export const getWindDirection = (degree) => {
    const directions = [
        { value: "С", angle: "0" },
        { value: "С-В", angle: "45" },
        { value: "В", angle: "90" },
        { value: "Ю-В", angle: "135" },
        { value: "Ю", angle: "180" },
        { value: "Ю-З", angle: "225" },
        { value: "З", angle: "270" },
        { value: "С-З", angle: "315" },
    ]

    // Convert degree to range from 0 to 360 if degree value will be greater than 360 or negative
    const normalizedDegree = (degree % 360 + 360) % 360

    // Get centre of the axial directions
    const index = Math.floor((normalizedDegree + 22.5) / 45) % 8

    return directions[index]
}