import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

const ContactUs = ({ ...props }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      Contact Us
    </motion.div>
  );
};

export default ContactUs;
