import { Params } from "react-router-dom"
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetail } from "../../api/types/packageDetail";

interface LoaderArgs {
    params: Params
}

export interface DetailLoaderResult {
    details: PackageDetail
}

export async function detailLoader({ params }: LoaderArgs): Promise<DetailLoaderResult>{
    const { name }  = params;
    if(!name){
        throw new Error('Name must be provided')
    }
    
    const details = await getPackage(name)
    return {
        details
    }
}