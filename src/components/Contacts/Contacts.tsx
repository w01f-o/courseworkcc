import { Col, Container, Row } from "components/Layout/Layout.tsx";
import { contactsData } from "components/Contacts/data/contactsData.tsx";
import { IContact } from "types/contactsTypes.ts";
import ContactsCardItem from "components/Contacts/ContactsCardItem.tsx";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <Container>
      <Row className="contacts__row">
        <Col xs={12}>
          <h1 className="contacts__title">Контакты</h1>
        </Col>
        <Col xxl={6} xl={6} lg={6} xs={12}>
          <div className="contacts__text">
            Вы можете <br />
            связаться с нами <br />
            по этим контактам:
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={6} xs={12}>
          <div className="contacts__card">
            {contactsData.map((contact: IContact) => (
              <ContactsCardItem contacts={contact} key={contact.description} />
            ))}
          </div>
        </Col>
        <Col xs={12}>
          <iframe
            className="contacts__map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Afd3362cef91b93e414290a04945c1f53658617abbab373510cead3c156458f66&amp;source=constructor"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
