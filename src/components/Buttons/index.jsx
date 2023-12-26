import { useState } from 'react';
import './style.css';
import propT from 'prop-types';
import { motion } from 'framer-motion';

export const Button = ({ previous, descripiton, next }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = (nextOrPrevious) => {
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
      if (nextOrPrevious === 'previous') previous();
      else next();
    }, 500);
  };

  return (
    <div className="button-style">
      <button
        className="previous-style"
        type="submit"
        onClick={() => handleToggleVisibility('previous')}
      >
        {'<'}
      </button>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }} // Defina a duração da transição
        className="description-style"
      >
        {descripiton}
      </motion.div>

      {/* <div className="description-style">{descripiton}</div> */}
      <button
        className="next-style"
        type="submit"
        onClick={() => handleToggleVisibility('next')}
      >
        {'>'}
      </button>
    </div>
  );
};

Button.propTypes = {
  previous: propT.func.isRequired,
  descripiton: propT.oneOfType([propT.string, propT.number]).isRequired,
  next: propT.func.isRequired,
};
