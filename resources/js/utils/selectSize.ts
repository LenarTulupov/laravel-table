import { ISize } from "@/types/basic.interface";
import { Dispatch, SetStateAction } from "react";

const handleSizeClick = (
  size: ISize, 
  setSelectedSize: Dispatch<SetStateAction<ISize | null>>
) => {
  setSelectedSize(size);
}

export default handleSizeClick