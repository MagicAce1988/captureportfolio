import { AboutSection, ServicesSection, FaqSection } from '../../components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

const AboutUs = ({ ...props }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
