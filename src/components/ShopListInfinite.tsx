import React, { useRef, useCallback } from "react"
import { Shop } from "../types"
import ShopList from "./ShopList"

type Props = {
    shops: Shop[]
    fetchMore: () => void
    hasMore: boolean
    isLoading: boolean
    isError: boolean
}

const ShopListInfinite: React.FC<Props> = ({
    shops,
    fetchMore,
    hasMore,
    isLoading,
    isError,
}) => {
    const observer = useRef<IntersectionObserver | null>(null)

    const sentinelRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (isLoading) return
            if (observer.current) observer.current.disconnect()

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    fetchMore()
                }
            })

            if (node) observer.current.observe(node)
        },
        [isLoading, hasMore, fetchMore]
    )

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <ShopList shops={shops} isLoading={isLoading} isError={isError} />
            <div ref={sentinelRef} className="h-8" />
            {isLoading && shops.length > 0 && (
                <p className="text-center py-4 text-sm text-gray-500">
                    Loading more shops...
                </p>
            )}
            {!hasMore && !isLoading && (
                <p className="text-center py-4 text-sm text-gray-400">
                    No more shops to load.
                </p>
            )}
        </div>
    )
}

export default ShopListInfinite
