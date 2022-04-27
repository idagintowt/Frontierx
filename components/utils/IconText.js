import PropTypes from 'prop-types';
import Image from 'next/image'

export default function IconText({img, text}) {
  return <span className="flex items-center">
    <span className="mr-[0.375rem] mt-1"><Image src={`/${img}.svg`} alt={text} width={15} height={15}/></span>
    <span>{text}</span>
  </span>
}

IconText.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
