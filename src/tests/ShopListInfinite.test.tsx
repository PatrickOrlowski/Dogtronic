import React from "react"
import { render, screen } from "@testing-library/react"
import ShopListInfinite from "../components/ShopListInfinite"
import { Shop } from "../types"

const mockShops: Shop[] = [
    {
        id: "shop-1",
        address: "ul. Krótka 55-555, Wrocław",
        imageUrl: "https://example.com/shop1.jpg",
        type: "REGULAR",
    },
]

describe("ShopListInfinite", () => {
    it("renders ShopList and loading more message", () => {
        render(
            <ShopListInfinite
                shops={mockShops}
                fetchMore={jest.fn()}
                hasMore={true}
                isLoading={true}
                isError={false}
            />
        )

        expect(screen.getByText("Wrocław")).toBeInTheDocument()
        expect(screen.getByText(/loading more shops/i)).toBeInTheDocument()
    })
})
