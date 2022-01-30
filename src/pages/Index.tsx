import { motion } from "framer-motion";
const pVariants = {
  hidden: {
    y: -250,
    opacity: 0,
  },
  visible: {
    y: -10,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};
const Index = () => {
  return (
    <div className="text-2xl">
      <div className="bg-white  sticky top-20 py-2">
        <h4 className="text-4xl pl-3 lg:pl-3">Deashboard</h4>
      </div>
      <div className="mx-6 text-3xl bg-white text-sky-600 px-6 py-10 mt-4">
        <motion.p variants={pVariants} initial="hidden" animate="visible">
          Welcome to Deashboard Page
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
