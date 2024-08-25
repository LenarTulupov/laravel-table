import { ISize } from "@/types/basic.interface";
<<<<<<< HEAD
import { Dispatch, SetStateAction } from "react";
=======
import { Dispatch } from "react";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

const handleSizeClick = (
  size: ISize, 
  setSelectedSize: Dispatch<SetStateAction<ISize | null>>
) => {
  setSelectedSize(size);
}

export default handleSizeClick