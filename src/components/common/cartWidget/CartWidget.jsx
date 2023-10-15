import { BsFillCartPlusFill } from "react-icons/bs";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge } from "@mui/material";

export const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} showZero color="warning">
        <ShoppingBagOutlinedIcon />
      </Badge>
    </div>
  );
};
