import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import data from "../../utils/accordion";
import "./Value.css";

const Value = () => {
    return (
        <div className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our value </span>
                    <span className="primaryText">Value We give to you</span>
                    <span className="secondaryText">
                        We always ready to help by providing the best services
                        for you. <br />
                        We believe a good place to live can make life better.
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => (
                            <AccordionItem
                                className="accordionItems"
                                key={i}
                                uuid={i}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accoridonButton">
                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDownCircle />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Value;
