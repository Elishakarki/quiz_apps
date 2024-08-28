import { useState } from "react";
import "./quiz.css";
import data from "../../assets/data.js";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [questions, setQuestions] = useState(data[index]);
  let [total, calculateTotal] = useState(0);
  let [selectedOption, setSelectedOption] = useState(null);
  let [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option, optionIndex) => {
    console.log(option, optionIndex);
    setSelectedOption(option);
    setIsCorrect(optionIndex === questions.ans);
  };

  const handleNext = () => {
    if (index < data.length - 1) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setQuestions(data[nextIndex]);
      if (isCorrect) {
        calculateTotal(total + 1);
      }

      setSelectedOption(null);
      setIsCorrect(null);
    }
    if (index === data.length - 1) {
      alert(
        `Quiz completed! Your total score is ${
          total + (isCorrect ? 1 : 0)
        } out of ${data.length}`
      );
      // Optionally, you can reset the quiz or take any other action here
      return;
    }
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}. {questions.question}
      </h2>
      <ul>
        <li
          onClick={() => handleOptionClick(questions.option1, 1)}
          className={
            selectedOption === questions.option1
              ? isCorrect
                ? "selected correct"
                : "selected wrong"
              : ""
          }
        >
          {questions.option1}
        </li>
        <li
          onClick={() => handleOptionClick(questions.option2, 2)}
          className={
            selectedOption === questions.option2
              ? isCorrect
                ? "selected correct"
                : "selected wrong"
              : ""
          }
        >
          {questions.option2}
        </li>
        <li
          onClick={() => handleOptionClick(questions.option3, 3)}
          className={
            selectedOption === questions.option3
              ? isCorrect
                ? "selected correct"
                : "selected wrong"
              : ""
          }
        >
          {questions.option3}
        </li>
        <li
          onClick={() => handleOptionClick(questions.option4, 4)}
          className={
            selectedOption === questions.option4
              ? isCorrect
                ? "selected correct"
                : "selected wrong"
              : ""
          }
        >
          {questions.option4}
        </li>
      </ul>
      <button onClick={handleNext} disabled={!selectedOption}>
        Next
      </button>
      <div className="index">
        {index + 1} of {data.length} questions
      </div>
    </div>
  );
};

export default Quiz;
