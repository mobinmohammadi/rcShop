import { useQuery } from "@tanstack/react-query"
import { SmartFlagshipsSlider } from "../../../services/Slider/SmartFlagshipsSlider"

export const useQueryProduct = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['smartFlagshipsSlider'],
    queryFn: () => SmartFlagshipsSlider.getSmartFlash()
  })

  return {isPending , data ,error}
}