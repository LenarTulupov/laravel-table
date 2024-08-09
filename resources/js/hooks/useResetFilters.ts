import { useFilterContext } from "@/Contexts/FilterContext"
import { useEffect } from "react"


const useResetFilters = () => {
  const { resetFilters } = useFilterContext();
  
  useEffect(() => {
    resetFilters();
  }, [])
}

export default useResetFilters