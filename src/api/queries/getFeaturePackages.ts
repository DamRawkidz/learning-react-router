import { PackageDetail } from "../types/packageDetail"


const FEATURE_PACKAGES = [
    'react',
    'typescript',
    'esbuild',
    'vite'
]
export async function getFeaturePacakge(){
    const pormise = FEATURE_PACKAGES.map(async (name) => {
        const res =  await fetch(`https://registry.npmjs.org/${name}`)
        return res.json()
    })

    const data = await Promise.all(pormise)
    return data as PackageDetail[]
}