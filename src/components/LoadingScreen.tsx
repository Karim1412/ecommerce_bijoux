import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center">
        {/* Crescent moon animation */}
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.path
            d="M30 4C19.507 4 11 12.507 11 23s8.507 19 19 19c3.361 0 6.527-.872 9.279-2.409A15.85 15.85 0 0 1 21 23a15.85 15.85 0 0 1 18.279-15.637C36.791 5.013 33.51 4 30 4z"
            fill="#D4AF37"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="45"
            cy="12"
            r="2.5"
            fill="#D4AF37"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />
          <motion.circle
            cx="50"
            cy="19"
            r="1.5"
            fill="#D4AF37"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 0.4 }}
          />
        </motion.svg>

        {/* Brand name */}
        <motion.div
          className="mt-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.h1
            className="font-serif text-2xl tracking-[0.3em] text-ivory"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            LUNA BIJOUX
          </motion.h1>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="mt-6 w-32 h-[1px] bg-ivory/10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.9, duration: 1.5, ease: 'easeInOut' }}
            onAnimationComplete={onComplete}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
