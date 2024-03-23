import { FC } from "react";
import { IFaq } from "types/faqTypes.ts";

interface FaqItemProps {
  faq: IFaq;
}

const FaqItem: FC<FaqItemProps> = ({ faq }) => {
  return (
    <div className="faq__item">
      <h3 className="faq__item-title">{faq.title}</h3>
      <p className="faq__item-text">{faq.text}</p>
    </div>
  );
};

export default FaqItem;
