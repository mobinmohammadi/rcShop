import { useQuery } from "@tanstack/react-query"
import { ProductApi } from "../../../services/Product/ProductApi"

export const useQueryProductId = (id: string) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => ProductApi.getProduct(id)

    })

    return { data, isError, isLoading }
}