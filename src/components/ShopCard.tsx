import React from "react"
import { Shop } from "../types"
import { parseAddress } from "../utils/parseAddress"

type Props = {
    shop: Shop
}

const ShopCard: React.FC<Props> = ({ shop }) => {
    const { city, street } = parseAddress(shop.address)

    return (
        <li className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <img
                src={shop.imageUrl}
                alt={`Shop ${shop.id}`}
                loading="lazy"
                className="w-full md:w-48 h-32 object-cover rounded-md"
            />
            <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-gray-500">ID: {shop.id}</p>
                <p className="text-lg font-semibold">{street}</p>
                <p className="text-gray-600">{city}</p>
                <span
                    className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded ${
                        shop.type === "FRANCHISE"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                    }`}
                >
                    {shop.type}
                </span>
            </div>
        </li>
    )
}

export default ShopCard
