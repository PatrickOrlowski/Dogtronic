import React from "react"
import ShopListInfinite from "./components/ShopListInfinite"
import useShops from "./hooks/useShops"

const App: React.FC = () => {
    const { shops, fetchMore, hasMore, isLoading, isError } = useShops()

    return (
        <main className="min-h-screen bg-gray-100">
            <header className="bg-white shadow p-4 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Shop List</h1>
            </header>
            <ShopListInfinite
                shops={shops}
                fetchMore={fetchMore}
                hasMore={hasMore}
                isLoading={isLoading}
                isError={isError}
            />
        </main>
    )
}

export default App
