import { FC } from "react";
import { ISpecifications } from "types/productTypes";

interface ProductSpecificationsProps {
  specification: ISpecifications;
}

const ProductSpecifications: FC<ProductSpecificationsProps> = ({
  specification,
}) => {
  return (
    <div className="product__specifications">
      <h5 className="product__specification-title">
        Физические характеристики
      </h5>
      <ul className="product__specification-list">
        <li className="product__specification-item">
          Длина: {specification.physicalSpecifications.length} мм
        </li>
        <li className="product__specification-item">
          Ширина: {specification.physicalSpecifications.width} мм
        </li>
        <li className="product__specification-item">
          Высота: {specification.physicalSpecifications.height} мм
        </li>
        <li className="product__specification-item">
          Вес: {specification.physicalSpecifications.weight} гр
        </li>
      </ul>
      <h5 className="product__specification-title">
        Технические характеристики
      </h5>
      <ul className="product__specification-list">
        <li className="product__specification-item">
          Сенсор: {specification.technicalSpecifications.sensor}
        </li>
        <li className="product__specification-item">
          Микро-переключатели:{" "}
          {specification.technicalSpecifications.microswitches}
        </li>
        <li className="product__specification-item">
          Энкодер: {specification.technicalSpecifications.encoder}
        </li>
        <li className="product__specification-item">
          Максимальное разрешение сенсора:{" "}
          {specification.technicalSpecifications.maxDpi} DPI
        </li>
        <li className="product__specification-item">
          Частота опроса:{" "}
          {specification.technicalSpecifications.pollingFrequency} Гц
        </li>
        <li className="product__specification-item">
          Тип: {specification.technicalSpecifications.type}
        </li>
        {specification.technicalSpecifications.type === "Беспроводная" && (
          <li className="product__specification-item">
            Время автономной работы:{" "}
            {specification.technicalSpecifications.batteryLife} ч
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProductSpecifications;
