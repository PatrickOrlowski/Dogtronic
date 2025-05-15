export const parseAddress = (
    address: string
): { city: string; street: string } => {
    const [streetPart, city] = address.split(",").map((s) => s.trim())
    const street = streetPart.replace(/\d{2}-\d{3}/, "").trim()
    return { city, street }
}
