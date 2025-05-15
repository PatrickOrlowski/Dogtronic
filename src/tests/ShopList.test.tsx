import React from "react"
import { render, screen } from "@testing-library/react"
import ShopList from "../components/ShopList"
import { Shop } from "../types"

const mockShops: Shop[] = [
    {
        id: "1",
        address: "ul. Długa 11-111, Gdańsk",
        imageUrl: "https://example.com/1.jpg",
        type: "REGULAR",
    },
    {
        id: "2",
        address: "ul. Słoneczna 22-222, Warszawa",
        imageUrl: "https://example.com/2.jpg",
        type: "FRANCHISE",
    },
]

describe("ShopList", () => {
    it("renders list of shops", () => {
        render(<ShopList shops={mockShops} isLoading={false} isError={false} />)

        expect(screen.getByText("ul. Długa")).toBeInTheDocument()
        expect(screen.getByText("Gdańsk")).toBeInTheDocument()
        expect(screen.getByText("ul. Słoneczna")).toBeInTheDocument()
        expect(screen.getByText("Warszawa")).toBeInTheDocument()
    })

    it("renders loading state", () => {
        render(<ShopList shops={[]} isLoading={true} isError={false} />)
        expect(screen.getByText(/loading shops/i)).toBeInTheDocument()
    })

    it("renders empty state", () => {
        render(<ShopList shops={[]} isLoading={false} isError={false} />)
        expect(screen.getByText(/no shops found/i)).toBeInTheDocument()
    })
})
