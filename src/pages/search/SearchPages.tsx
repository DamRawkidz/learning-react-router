import { useLoaderData } from "react-router-dom"

import { SearchLoaderResult } from "./searchLoader"
import PackageListItem from "./packageListitem"

export default function SearchPage() {
    const { searchResults } = useLoaderData() as SearchLoaderResult
    
    const renderResult = searchResults.map(( result ) => {
        return <PackageListItem pack={result} key={result.name} />
    })

    return <div>
        <h1 className="text-2xl font-bold my-6">Search Result </h1>
        <div className="space-y-4 mt-4">
            {renderResult}
        </div>
    </div>
}