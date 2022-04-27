import Link from "../../utils/Link"
import Accordion from "./components/Accordion"
import TextAccordion from "./contents/TextAccordion.js"
import CardsAccordion from "./contents/CardsAccordion.js"

export default function AccordionsSection() {
  return <section className="pb-10 bg-dark-grey relative bg-transparent items-center">
    <div className="grid grid-cols-2 gap-[1.188rem] mt-[3.75rem] mx-auto px-[7.063rem]">
      <div className="w-full">
        <Accordion title="Lorem ipsum" open>
          <TextAccordion/>
        </Accordion>
      </div>
      <div className="w-full">
        <div className="w-full">
          <Accordion title="Lorem ipsum" info="Lorem ipsum" open>
            <CardsAccordion/>
          </Accordion>
        </div>
        <div className="w-full pt-[1.5rem]">
          <Accordion title="Lorem ipsum">
            <CardsAccordion/>
          </Accordion>
        </div>
      </div>
    </div>
  </section>;
}
