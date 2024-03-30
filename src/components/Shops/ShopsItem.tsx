import { FC } from "react";
import { IShop } from "types/shopsTypes.ts";

interface ShopsItemProps {
  shop: IShop;
}

const ShopsItem: FC<ShopsItemProps> = ({ shop }) => {
  return (
    <div className="shops__item">
      <div className="shops__item-address">{shop.address}</div>
      <div className="shops__item-time">{shop.time}</div>
    </div>
  );
};

export default ShopsItem;
