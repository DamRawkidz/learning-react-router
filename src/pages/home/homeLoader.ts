import { getFeaturePacakge } from "../../api/queries/getFeaturePackages";
import { PackageDetail } from "../../api/types/packageDetail";

export interface HomeLoaderResult {
    featurePacakages: PackageDetail[]
}

export async function homeLoader(): Promise<HomeLoaderResult> {
    const featurePacakages  = await getFeaturePacakge()

    
    return {
        featurePacakages
    }
}
