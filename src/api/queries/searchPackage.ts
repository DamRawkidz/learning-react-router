
import type { PackageSummary } from "../types/packageSummay";


interface SearchResponse {
    objects: {
        package: {
            name: string
            description: string
            version: string
            keywords: string[]
        }
    }[]
}

export async function searchPackage(term: string): Promise<PackageSummary[]>{
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
      )

      const data: SearchResponse = await res.json()


      return data.objects.map(({ package: {  name, description,version, keywords } }) => {
        return {
            name,
            description,
            version,
            keywords
        };
      });
}