import { ISize } from "@/types/basic.interface";
import { Dispatch } from "react";

const handleSizeClick = (
  size: ISize, 
  setSelectedSize: Dispatch<SetStateAction<ISize | null>>
) => {
  setSelectedSize(size);
}

export default handleSizeClick