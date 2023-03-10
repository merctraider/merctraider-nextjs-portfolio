import '../styles/globals.css';
import SimpleReactLightbox from 'simple-react-lightbox'
import {motion, AnimatePresence} from 'framer-motion'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode='wait'>
    <SimpleReactLightbox>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={
          {duration:0.75}
        }
        variants={
          {
            initialState:{
              opacity:0
            },
            animateState:{
              opacity:1
            },
            exitState:{

            }
          }
        }
      >
      <Component {...pageProps} />
      </motion.div>
    </SimpleReactLightbox>
    </AnimatePresence>
  );
}

export default MyApp;