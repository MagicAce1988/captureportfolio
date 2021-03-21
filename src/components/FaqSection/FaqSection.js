import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import { scrollReveal } from '../../animation';
import { useScroll } from '../../hooks/useScroll';
import { Faq } from './FaqSection.styled';

const FaqSection = ({ ...props }) => {
  const [element, controls] = useScroll();
  const [active, setActive] = useState(null);
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
    <Faq variants={scrollReveal} animate={controls} ref={element}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {questions.map((current, index) => (
          <motion.div
            layout
            onClick={() => setActive(active === index ? null : index)}
            className="question"
          >
            <motion.h4 layout>{current.question}</motion.h4>
            {index === active && (
              <motion.div className="answer">
                {current.answerParagraphs.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;
