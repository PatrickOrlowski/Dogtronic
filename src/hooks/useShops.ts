import { useEffect, useState } from "react"
import { Shop } from "../types"
import { v4 as uuidv4 } from "uuid"

const generateMockShops = (count: number, start = 0): Shop[] => {
    const cities = ["Kraków", "Warszawa", "Gdańsk", "Poznań", "Wrocław"]
    const streets = [
        "ul. Jana Pawła 2",
        "ul. Długa",
        "ul. Krótka",
        "ul. Słoneczna",
        "ul. Zielona",
    ]

    return Array.from({ length: count }, (_, i) => {
        const id = uuidv4()
        const city = cities[Math.floor(Math.random() * cities.length)]
        const street = streets[Math.floor(Math.random() * streets.length)]
        const postalCode = `${Math.floor(Math.random() * 90 + 10)}-${Math.floor(Math.random() * 900 + 100)}`

        return {
            id,
            address: `${street} ${postalCode}, ${city}`,
            imageUrl: `https://picsum.photos/seed/${start + i}/400/300`,
            type: Math.random() > 0.5 ? "FRANCHISE" : "REGULAR",
        }
    })
}

const useShops = () => {
    const [shops, setShops] = useState<Shop[]>([])
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const fetchMore = async () => {
        if (isLoading) return

        setIsLoading(true)
        setIsError(false)

        try {
            await new Promise((res) => setTimeout(res, 1000)) // Simulate delay
            const newShops = generateMockShops(10, page * 10)

            if (newShops.length === 0) {
                setHasMore(false)
            } else {
                setShops((prev) => [...prev, ...newShops])
                setPage((prev) => prev + 1)
            }
        } catch {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMore()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        shops,
        fetchMore,
        hasMore,
        isLoading,
        isError,
    }
}

export default useShops
