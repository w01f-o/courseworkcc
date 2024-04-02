import { Col, Container, Row } from "components/Layout/Layout";
import ProductButtons from "components/UI/ProductButton/ProductButton";
import ReviewsStars from "components/UI/ReviewsStars/ReviewsStars";
import { FC, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IProduct } from "types/productTypes";
import { getCountArray } from "utils/getCountArray";
import { productsList } from "../../data/products";
import NotFoundPage from "../../pages/NotFoundPage";
import "./Product.scss";
import ProductSpecifications from "./ProductSpecifications";
import ProductReviews from "./ProductReviews/ProductReviews";
import classNames from "classnames";

enum CurrentTabEnum {
  specifications,
  reviews,
}

const Product: FC = () => {
  const { id } = useParams();
  const product: IProduct | undefined = useMemo(() => {
    if (id) {
      return productsList.find((product: IProduct) => product.id === +id);
    }

    return undefined;
  }, [id]);

  const imgCountArray = useMemo(() => {
    if (product?.imgBig.length) {
      return getCountArray(product?.imgBig.length);
    }
  }, [product?.imgBig.length]);

  const [currentTab, setCurrentTab] = useState<CurrentTabEnum>(
    CurrentTabEnum.specifications,
  );

  const handleClick = (tab: CurrentTabEnum) => (): void => {
    setCurrentTab(tab);
  };

  return (
    <Container>
      <Row className="product__row">
        {product ? (
          <>
            <Col lg={6} xs={12}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}
              >
                {imgCountArray?.map((_slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="product__img-wrapper">
                      <img src={product.imgBig[index]} alt={product.altName} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
            <Col lg={6} xs={12}>
              <div className="product__info">
                <div className="info-wrapper">
                  <h3 className="product__title">{product.name}</h3>
                  <div className="product__description">
                    {product.description}
                  </div>
                  <ReviewsStars
                    evaluation={product.reviews.map((item) => item.evaluation)}
                  />
                </div>
                <div className="wrapper">
                  <div className="product__price">{product.price} ₽</div>
                  <div className="product__buttons">
                    <ProductButtons
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      img={product.imgSmall}
                      altName={product.altName}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="product__tabs">
                <button
                  className={classNames("product__tabs-item", {
                    active: currentTab === CurrentTabEnum.specifications,
                  })}
                  onClick={handleClick(CurrentTabEnum.specifications)}
                >
                  Характеристики
                </button>
                <button
                  className={classNames("product__tabs-item", {
                    active: currentTab === CurrentTabEnum.reviews,
                  })}
                  onClick={handleClick(CurrentTabEnum.reviews)}
                >
                  Отзывы
                </button>
              </div>
              {currentTab === CurrentTabEnum.specifications ? (
                <ProductSpecifications specification={product.specifications} />
              ) : (
                <ProductReviews reviews={product.reviews} />
              )}
            </Col>
          </>
        ) : (
          <NotFoundPage />
        )}
      </Row>
    </Container>
  );
};

export default Product;
