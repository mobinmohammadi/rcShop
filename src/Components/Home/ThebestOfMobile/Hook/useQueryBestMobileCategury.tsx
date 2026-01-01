import { useQuery } from "@tanstack/react-query"
import { CateguryApi } from "../../../../services/Categury/CateguryApi"

export const useQueryBestMobileCategury = () => {
    const { data } = useQuery({
        queryKey: ["getBestmobileCategury"],
        queryFn: () => CateguryApi.getCateguryBestmobile()
    })

    return data
}