import React from "react";
import PropTypes from 'prop-types';
import Image from 'next/image'
import IconText from "../../../utils/IconText"
import withTooltip from "../../../utils/WithTooltip.js"

const InfoIcon = () => {
  return (<Image src="/help.svg" alt="Help" width={15} height={15}/>)
}

const AccordionTitle = ({isOpen, toggleAccordion, title, info}) => {
  const Tooltip = withTooltip(InfoIcon)

  return <div className="h-[3.35rem] flex justify-between items-end font-extrabold">
    <div className="flex">
      <IconText img="system" text={title}/> {info.length > 0 && <Tooltip content={info}/>}
    </div>
    <span className={`transition-[transform] ease-in-out duration-500 ${isOpen
        ? "rotate-180"
        : "rotate-0"}`} onClick={toggleAccordion}>
      <Image className="cursor-pointer" src="/arrow.svg" alt="Arrow" width={15} height={15}/>
    </span>
  </div>
}

const AccordionContent = ({isOpen, children}) => {
  return <div className="pb-[1.45rem]">
    <div className={`${isOpen
        ? "max-h-[21.375rem]"
        : "max-h-0"} transition-[max-height] ease-in-out duration-700 overflow-y-scroll overflow-x-hidden`}>
      <div className="mt-[1.2rem] h-fit">{children}</div>
    </div>
  </div>
}

export default function Accordion({
  title,
  children,
  open = false,
  info = ""
}) {
  const [isOpen, toggle] = React.useState(open)
  const toggleAccordion = () => {
    toggle((prevIsOpen) => !prevIsOpen)
  }

  return <div className="w-full bg-dark-violet px-[1.875rem] rounded-sm">
    <AccordionTitle isOpen={isOpen} toggleAccordion={toggleAccordion} title={title} info={info}/>
    <AccordionContent isOpen={isOpen} children={children}/>
  </div>
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  info: PropTypes.string
};

AccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired
};

AccordionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  info: PropTypes.string
};
