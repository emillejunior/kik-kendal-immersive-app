import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';

// assets
import { ChevronRight, Play } from 'lucide-react';
import logo from '../assets/logo/logokik.png';
import logoW from '../assets/logo/logo-w.png';
import logoSez from '../assets/logo/logosez.png';
import logoSezW from '../assets/logo/logosez-ball-w.png';
import jababekaLogo from '../assets/logo/logojababeka.png';
import jababekaLogoW from '../assets/logo/logojababeka-w.png';
import sembcorpLogo from '../assets/logo/logosembcorp.png';

// i18n
import { useI18n } from '../i18n';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { copy } = useI18n();

  return (
    <div className="to-brand-100 dark:to-brand-900 from-background flex h-full w-full flex-col items-center justify-center bg-gradient-to-br">
      <div className="flex w-full items-center gap-16 px-64">
        <div className="flex w-2/3 flex-col items-start gap-8">
          <div className="flex flex-col gap-8 py-8">
            <div className="flex gap-12">
              <motion.img
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 1.25 }}
                transition={{ duration: 0.75, delay: 1.25 }}
                src={logo}
                className="h-24 w-auto dark:brightness-0 dark:invert"
                alt="KIK logo"
              />
              <motion.img
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 1.25 }}
                transition={{ duration: 0.75, delay: 1.75 }}
                src={logoSez}
                className="h-24 w-auto dark:brightness-0 dark:invert"
                alt="SEZ logo"
              />
            </div>
            <motion.h1
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 1.4 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-brand-800 dark:text-brand-100 flex max-w-7xl flex-col gap-x-2 gap-y-2.5 py-8 text-6xl leading-16 font-bold"
            >
              <span>{copy.pages.index.title} </span>
              <span className="text-7xl font-extrabold">{copy.pages.index.title2} </span>
              <span>{copy.pages.index.title3}</span>
            </motion.h1>
          </div>
          {/* Logos Section */}
          <div className="flex h-18 items-center justify-center gap-12 dark:opacity-50">
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="h-full w-auto"
            >
              <img src={jababekaLogo} className="h-full w-auto dark:hidden" alt="KIK logo" />
              <img src={jababekaLogoW} className="hidden h-full w-auto dark:block" alt="KIK logo" />
            </motion.div>
            <motion.img
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.5, delay: 2.75 }}
              src={sembcorpLogo}
              className="h-full w-auto dark:brightness-0 dark:invert"
              alt="SEZ logo"
            />
          </div>
        </div>

        <div className="flex w-1/3 justify-center gap-9 py-6">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.66, delay: 1.5 }}
          >
            <Link
              to="/play"
              className="flex items-center gap-4 rounded-lg bg-green-900 px-12 py-8 text-2xl font-semibold text-white shadow-lg shadow-black/10 transition-colors duration-900 dark:bg-green-100 dark:text-black"
            >
              <motion.span
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -10, opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.66 }}
              >
                <Play fill="currentColor" className="block size-6 animate-pulse" />
              </motion.span>
              <span className="block">{copy.nav.play}</span>
            </Link>
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.66, delay: 1.8 }}
          >
            <Link
              to="/explore"
              className="flex items-center gap-4 rounded-lg bg-green-900 px-12 py-8 text-2xl font-semibold text-white shadow-lg shadow-black/10 transition-colors duration-900 dark:bg-green-100 dark:text-black"
            >
              <span className="block">{copy.nav.explore}</span>

              <motion.span
                className="flex h-5"
                animate={{ x: 0, scale: 1, opacity: 1 }}
                initial={{ x: -10, scale: 2.5, opacity: 0 }}
                transition={{ delay: 2, duration: 0.66 }}
              >
                <span className="flex h-5 w-2 items-center justify-center overflow-hidden">
                  <ChevronRight className="absolute block size-9 animate-pulse" />
                </span>
                <span className="flex h-5 w-2 items-center justify-center overflow-hidden">
                  <ChevronRight className="absolute block size-9 animate-pulse" />
                </span>
                <span className="flex h-5 w-2 items-center justify-center overflow-hidden">
                  <ChevronRight className="absolute block size-9 animate-pulse" />
                </span>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="fixed right-10 bottom-10 z-10 flex flex-col items-center justify-center">
        <motion.img
          animate={{ y: 0 }}
          initial={{ y: 300 }}
          transition={{ duration: 3 }}
          src={logoSezW}
          className="h-64 w-auto opacity-40 dark:opacity-10 dark:invert"
          alt="SEZ Watermark"
        />
      </div>
      <div className="fixed bottom-10 left-10 z-10 flex flex-col items-center justify-center">
        <motion.img
          animate={{ y: 0 }}
          initial={{ y: 300 }}
          transition={{ duration: 3 }}
          src={logoW}
          className="h-64 w-auto opacity-40 dark:opacity-10 dark:invert"
          alt="KIK Watermark"
        />
      </div>
    </div>
  );
}
