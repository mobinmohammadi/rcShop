import { axiosClient } from "../axiosClient"

export const ProductApi = {
    getProduct(id:string) {
        const url = `smartFlagships/${id}`
        return axiosClient.get(url)
    }
}