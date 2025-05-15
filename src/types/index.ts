export type ShopType = "FRANCHISE" | "REGULAR"

export type Shop = {
    id: string
    address: string
    imageUrl: string
    type: ShopType
}
