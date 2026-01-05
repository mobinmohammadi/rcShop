import { axiosClient } from "../axiosClient"

export const SmartFlagshipsSlider = {
    getSmartFlash() {
        const url = 'smartFlagships'
        return axiosClient.get(url)
    }
}