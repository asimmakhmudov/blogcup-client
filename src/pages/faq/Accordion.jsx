import React, { useRef, useState } from "react";
import "./accordion.css";
import { BsChevronRight } from "react-icons/bs"
export const Accordion = (props) => {

    const [accordion, setAccordion] = useState("");
    const [accordionHeight, setAccordionHeight] = useState("0px")
    const [iconRotate, setIconRotate] = useState("");
    const content = useRef(null);

    const accordionHandler = () => {
        setAccordion(accordion === "" ? "active" : "")
        setAccordionHeight(accordion === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setIconRotate(accordion === "active" ? "accordion__icon" : "accordion__icon rotate")
    }

    return (
        <div className="accordion__section">
        <button className={`accordion ${accordion}`} onClick={accordionHandler}>
            <p className="accordion__title">{props.title}</p>
            <BsChevronRight className={iconRotate} style={{color: "#777"}}/>
        </button>
        <div ref={content} style={{maxHeight: `${accordionHeight}`}} className="accordion__content">
            <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
            />
        </div>
        </div>
    );
};
