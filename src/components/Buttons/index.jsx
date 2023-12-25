import './style.css';
import propT from 'prop-types';

export const Button = ({ previous, descripiton, next }) => {
  const handlePreviousFunction = () => {
    previous();
  };

  const handleNextFunction = () => {
    next();
  };

  return (
    <div className="button-style">
      <button
        className="previous-style"
        type="submit"
        onClick={handlePreviousFunction}
      >
        {'<'}
      </button>
      <div className="description-style">{descripiton}</div>
      <button className="next-style" type="submit" onClick={handleNextFunction}>
        {'>'}
      </button>
    </div>
  );
};

Button.propTypes = {
  previous: propT.func.isRequired,
  descripiton: propT.string.isRequired,
  next: propT.func.isRequired,
};
