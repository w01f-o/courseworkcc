import { FC } from "react";
import { IContact } from "types/contactsTypes.ts";

interface ContactCardProps {
  contacts: IContact;
}

const ContactsCardItem: FC<ContactCardProps> = ({ contacts }) => {
  return (
    <div className="contacts__item">
      {contacts.icon}
      <h3 className="contacts__item-title">{contacts.title}</h3>
      <div className="contacts__item-description">{contacts.description}</div>
    </div>
  );
};

export default ContactsCardItem;
