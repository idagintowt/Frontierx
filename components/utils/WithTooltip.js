import PropTypes from 'prop-types';

const withTooltip = Component => props => {
  return <div className=" group ml-2 relative flex flex-col items-center justify-center">
    <Component/>
    <div className="w-max absolute mb-6 flex flex-col items-center bottom-0 hidden opacity-80 group-hover:flex">
      <span className="relative z-10 rounded-sm p-2 text-xxs text-white whitespace-no-wrap bg-black">{props.content}</span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
    </div>
  </div>;
};

export default withTooltip;

withTooltip.propTypes = {
  content: PropTypes.string.isRequired
};
