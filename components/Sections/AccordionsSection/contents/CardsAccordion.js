import PropTypes from 'prop-types';
import {CardsAccordionData} from "../../../../data"

const Card = ({subtitle, title, value}) => {
  const classname = "text-light-grey text-xxs opacity-85"

  return <div className="min-w-[10rem] m-[0.313rem] h-[6.188rem] bg-dark-grey py-[1rem] rounded-sm cursor-pointer flex flex-col items-center justify-between outline outline-link outline-0 hover:outline-2">
    <p className={classname}>{subtitle}</p>
    <p className="font-extrabold">{title}</p>
    <p className={classname}>{`${value}%`}</p>
  </div>
}

export default function CardsAccordion() {
  return <div className="w-full flex justify-center flex-wrap py-0.5 px-0.5">
    {CardsAccordionData.map((value, index) => <Card key={index} {...value}/>)}
  </div>
}

Card.propTypes = {
  subtitle: PropTypes.string,
  subtitle: PropTypes.string,
  value: PropTypes.number
};
