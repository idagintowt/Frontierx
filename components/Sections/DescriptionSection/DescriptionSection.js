import React from "react";
import PropTypes from 'prop-types';
import {Link} from "../../utils/Link"
import IconText from "../../utils/IconText"
import {DescriptionData} from "../../../data"

const Button = ({img, text, value, setValue, activeValue}) => {
  const color = activeValue === value
    ? "dark-grey"
    : "dark-violet"
  return <button className={`lg:w-[11.5rem] sm:w-[11rem] xs:w-[9rem] h-[3.125rem] bg-${color}
    rounded-sm flex items-center
    justify-center text-sm transition-colors ease-linear duration-200 hover:bg-dark-grey`} onClick={() => setValue(value)}>
    <IconText img={img} text={text}/>
  </button>
}

const Buttons = ({setValue, activeValue}) => {
  const renderButtons = () => {
    return DescriptionData.map((data, index) => {
      return <Button key={index} setValue={setValue} activeValue={activeValue} value={index} text={data.button} img={data.img}/>
    })
  }
  return <div className="lg:w-[37rem] sm:w-[35rem] xs:w-[29rem] flex justify-between mt-[3rem]">
    {renderButtons()}
  </div>
}

const Description = ({data, activeValue}) => {
  const classname = "text-[1rem] mb-[0.75rem]"

  return <div className="animate-fade-in" key={activeValue}>
    <p className="text-xl font-extrabold">{data.title}</p>
    <p className={classname}>
      {data.p1.text}
      {
        Object
          .keys(data.p1.link)
          .length > 0 && <Link text={data.p1.link.text}/>
      }
    </p>
    <p className={classname}>{data.p2}</p>
  </div>
}

export default function DescriptionSection() {
  const [activeValue, setValue] = React.useState(1)

  return <section className="lg:pt-20 m:pt-16md:pt-16 sm:pt-14 xs:pt-12 pb-3 bg-dark-grey relative bg-transparent text-center flex flex-col items-center">
    <Description data={DescriptionData[activeValue]} activeValue={activeValue}/>
    <Buttons setValue={setValue} activeValue={activeValue}/>
  </section>;
}

Description.propTypes = {
  data: PropTypes.object.isRequired,
  activeValue: PropTypes.number.isRequired
};

Buttons.propTypes = {
  setValue: PropTypes.func.isRequired,
  activeValue: PropTypes.number.isRequired
};

Button.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  activeValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired
};
