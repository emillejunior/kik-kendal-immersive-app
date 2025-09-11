import { createFileRoute, Link } from '@tanstack/react-router';

// import kikLogo from '../assets/logokik.png';
import logo from '../assets/logo.png';
import logoW from '../assets/logo-w.png';
// import sezLogo from '../assets/logosez.png';
import jababekaLogo from '../assets/logojababeka.png';
import jababekaLogoW from '../assets/logojababeka-w.png';
import sembcorpLogo from '../assets/logosembcorp.png';
import { useI18n } from '../i18n';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ChevronRightCircle } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { copy } = useI18n();

  return (
    <div className="to-brand-100 dark:to-brand-900 from-background flex h-full w-full flex-col items-center justify-center bg-gradient-to-br">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8 py-8">
          {/* <div className="flex gap-3"> */}
          <motion.img
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={logo}
            className="h-32 w-auto"
            alt="KIK logo"
          />
          {/* <motion.img
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              src={sezLogo}
              className="h-32 w-auto dark:brightness-0 dark:invert"
              alt="SEZ logo"
            />
          </div> */}
          <motion.h1
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-brand-800 dark:text-brand-100 py-8 text-6xl font-bold"
          >
            {copy.pages.index.title}
          </motion.h1>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button className="px-12 py-8" asChild>
              <Link to="/explore">{copy.nav.explore}</Link>
            </Button>
          </motion.div>
        </div>
        {/* Logos Section */}
        <div className="flex h-12 items-center justify-center gap-12 dark:opacity-50">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="h-full w-auto"
          >
            <img src={jababekaLogo} className="h-full w-auto dark:hidden" alt="KIK logo" />
            <img src={jababekaLogoW} className="hidden h-full w-auto dark:block" alt="KIK logo" />
          </motion.div>
          <motion.img
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.25 }}
            src={sembcorpLogo}
            className="h-full w-auto dark:brightness-0 dark:invert"
            alt="SEZ logo"
          />
        </div>
      </div>
      <div className="fixed right-10 bottom-10 z-10 flex flex-col items-center justify-center">
        <motion.img
          animate={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ duration: 3 }}
          src={logoW}
          className="h-64 w-auto dark:opacity-10 dark:invert"
          alt="KIK Watermark"
        />
        <Button className="rounded-full p-8" asChild>
          <Link to="/explore" className="flex items-center gap-2">
            {copy.nav.explore} <ChevronRightCircle />
          </Link>
        </Button>
      </div>
    </div>
  );
}
