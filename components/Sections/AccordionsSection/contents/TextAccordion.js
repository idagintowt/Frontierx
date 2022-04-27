import {IconLink} from "../../../utils/Link"
import {TextAccordionData} from "../../../../data"

export default function TextAccordion() {
  return <div className="w-full text-xs pr-[5.75rem]">
    <p>{TextAccordionData.description}</p>
    <div className="grid grid-cols-2 gap-6 mt-[2.7rem]">
      {
        TextAccordionData
          .social
          .map((value, index) => <IconLink key={index} img={value.img} text={value.name}/>)
      }
    </div>
  </div>
}
