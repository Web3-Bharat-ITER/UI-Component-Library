import React from "react";
import Link from "next/link";

//Framer Motion
import { AnimatePresence, useAnimation, motion } from "framer-motion";

type props = {
  link: string;
  icon: any;
  name: string;
};

const SocialButton: React.FC<props> = ({ link, icon, name }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const controls = useAnimation();
  function handleMouseEnter() {
    setIsHovered(true);
    controls.start("hover");
  }

  function handleMouseLeave() {
    setIsHovered(false);
    controls.start("initial");
  }
  return (
    <Link href={link}>
      <motion.div
        layout
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <motion.div className='flex flex-row space-x-2 p-2 rounded-lg bg-neutral-800/60 text-neutral-500 shadow-md select-none hover:brightness-200 active:scale-90 ease-linear duration-100 cursor-pointer m-2'>
          <motion.div layout>{icon}</motion.div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                layout
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.08, delay: 0.299 }}
                className=' font-medium text-2xl'
              >
                {name}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default SocialButton;
