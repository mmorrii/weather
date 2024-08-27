export const getPaginatedItems = (array, index) => {
    const startIndex = index * 24
    const endIndex = startIndex + 24

    return array.slice(startIndex, endIndex)
}