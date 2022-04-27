import PropTypes from 'prop-types';
import Image from 'next/image'

export function Link({
  text,
  src = "#"
}) {
  return <a href={src} className="text-link ml-1 cursor-pointer transition-color ease-linear duration-200 hover:text-white">{text}</a>
}

export function IconLink({
  img,
  text,
  src = "#"
}) {
  return <span className="flex items-center">
    <span className="mr-[0.969rem] -mb-1">
      <Image src={`/${img}.svg`} alt={text} width={20} height={20}/>
    </span>
    <Link src={src} text={text}/>
  </span>
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string
};

IconLink.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string
};
