import { axiosClient } from "../axiosClient"

export const CateguryApi = {
    getCateguryBestmobile() {
        const url = 'theBestBrandPhone'
        return axiosClient.get(url)
    }
}