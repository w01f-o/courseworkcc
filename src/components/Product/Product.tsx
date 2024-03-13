import { Col, Container, Row } from "components/Layout/Layout";
import ProductButtons from "components/UI/ProductButton/ProductButton";
import ReviewsStars from "components/UI/ReviewsStars/ReviewsStars";
import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IProduct } from "types/productTypes";
import { getCountArray } from "utils/getCountArray";
import { products } from "../../data/products.json";
import NotFoundPage from "../../pages/NotFoundPage";
import "./Product.scss";

const Product: FC = () => {
  const { id } = useParams();
  const product: IProduct | undefined = useMemo(() => {
    if (id) {
      return products.find((product: IProduct) => product.id === +id);
    }

    return undefined;
  }, [id]);

  const imgCountArray = useMemo(() => {
    if (product?.imgBig.length) {
      return getCountArray(product?.imgBig.length);
    }
  }, [product?.imgBig.length]);

  return (
    <Container>
      <Row className="product__row">
        {product ? (
          <>
            <Col xxl={6}>
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
            <Col xxl={6}>
              <div className="product__info">
                <div className="info-wrapper">
                  <h3 className="product__title">{product.name}</h3>
                  <div className="product__description">
                    {product.description}
                  </div>
                  <ReviewsStars
                    evaluation={product.reviews.map(item => item.evaluation)}
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
          </>
        ) : (
          <NotFoundPage />
        )}
      </Row>
    </Container>
  );
};

export default Product;
