import scrollToTop from "@/utils/scrollToTop";
import { useEffect } from "react"

const useScrollToTop = () => {
  useEffect(() => {
    scrollToTop();
  }, [])
}

export default useScrollToTop