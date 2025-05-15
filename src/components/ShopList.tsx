import React from "react"
import { Shop } from "../types"
import ShopCard from "./ShopCard"

type Props = {
    shops: Shop[]
    isLoading: boolean
    isError: boolean
}

const ShopList: React.FC<Props> = ({ shops, isLoading, isError }) => {
    if (isError) {
        return (
            <p className="text-red-600 text-center py-4">
                Error loading shops. Please try again.
            </p>
        )
    }

    if (isLoading && shops.length === 0) {
        return <p className="text-center py-4">Loading shops...</p>
    }

    if (!isLoading && shops.length === 0) {
        return <p className="text-center py-4 text-gray-500">No shops found.</p>
    }

    return (
        <ul className="grid gap-4">
            {shops.map((shop) => (
                <ShopCard key={shop.id} shop={shop} />
            ))}
        </ul>
    )
}

export default ShopList
