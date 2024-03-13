import { Container, Row } from "components/Layout/Layout";
import { FC } from "react";

const NotFoundPage: FC = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <div className="not-found">
          404 <br />
          Страница не найдена
        </div>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
