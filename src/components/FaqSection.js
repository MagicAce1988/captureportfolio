const FaqSection = () => {
  const questions = [
    {
      question: 'How do I Start?',
      answerParagraphs: [
        'Lorem ipsum dolor sit amet.',
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, hic!',
      ],
    },
    {
      question: 'Daily Schedule',
      answerParagraphs: [
        'Lorem ipsum dolor sit amet.',
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, hic!',
      ],
    },
    {
      question: 'Different Payment Methods',
      answerParagraphs: [
        'Lorem ipsum dolor sit amet.',
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, hic!',
      ],
    },
    {
      question: 'What products do you offer.',
      answerParagraphs: [
        'Lorem ipsum dolor sit amet.',
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, hic!',
      ],
    },
  ];
  return (
    <div className="faq">
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      {questions.map((current) => (
        <div className="question">
          <h4>{current.question}</h4>
          <div className="answer">
            {current.answerParagraphs.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
