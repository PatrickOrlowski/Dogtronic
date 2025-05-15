import React from "react"
import { render, screen } from "@testing-library/react"
import ShopCard from "../components/ShopCard"
import { Shop } from "../types"

const mockShop: Shop = {
    id: "shop-123",
    address: "ul. Zielona 12-345, Kraków",
    imageUrl: "https://example.com/image.jpg",
    type: "FRANCHISE",
}

describe("ShopCard", () => {
    it("renders shop data correctly", () => {
        render(<ShopCard shop={mockShop} />)

        expect(screen.getByText("ID: shop-123")).toBeInTheDocument()
        expect(screen.getByText("ul. Zielona")).toBeInTheDocument()
        expect(screen.getByText("Kraków")).toBeInTheDocument()
        expect(screen.getByText("FRANCHISE")).toBeInTheDocument()

        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", mockShop.imageUrl)
        expect(image).toHaveAttribute("alt", "Shop shop-123")
    })
})
