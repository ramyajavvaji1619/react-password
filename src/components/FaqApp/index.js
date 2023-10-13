import React, { useState } from 'react';
import './index.css';

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png';
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png';

const FaqItem = ({ faqData }) => {
  const [isActive, setIsActive] = useState(false);

  const renderAnswer = () => {
    const { answerText } = faqData;

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      );
    }
    return null;
  };

  const onToggleAnswer = () => {
    setIsActive((prevState) => !prevState);
  };

  const renderActiveImage = () => {
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE;
    const altText = isActive ? 'minus' : 'plus';

    return (
      <button className="button2" type="button" onClick={onToggleAnswer}>
        <img className="image" src={image} alt={altText} />
      </button>
    );
  };

  const { questionText } = faqData;

  return (
    <li className="list-item-container">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        {renderActiveImage()}
      </div>
      {renderAnswer()}
    </li>
  );
};

export default FaqItem;
