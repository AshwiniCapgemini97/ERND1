import React, { useState } from "react";
import {
  Button,
  Icon,
  AccordionTitle,
  AccordionContent,
  Accordion,
  Form,
} from "semantic-ui-react";
import InputBox from "../../../shared/components/inputBox/inputBox";
import TextArea from "../../../shared/components/textArea/textArea";

export default function Accordions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    subject: "",
    comment: "",
    faq: "",
  });

  const handleChange = (name, value) => {};

  return (
    <>
      <Accordion fluid styled>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={() => setActiveIndex(0)}
        >
          <Icon name="dropdown" />
          Share your experience
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <Form>
            <InputBox
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              fluid
              type="text"
              placeholder="Subject"
            />
            <TextArea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
            />
            <Button className="commonGlobalBtn">Publish</Button>
          </Form>
        </AccordionContent>
      </Accordion>
      <Accordion fluid styled style={{ marginTop: "20px" }}>
        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={() => setActiveIndex(1)}
        >
          <Icon name="dropdown" />
          FAQ's
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <Form>
            <TextArea
              name="faq"
              placeholder="Short Description"
              value={formData.faq}
              onChange={handleChange}
            />
            <Button className="commonGlobalBtn">Publish</Button>
          </Form>
        </AccordionContent>
      </Accordion>
    </>
  );
}
