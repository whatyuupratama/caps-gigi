'use client';
import { useEffect, useRef, useCallback } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';
import { cn } from '@/lib/utils';
import styles from './css/TextGenerateEffect.module.css'; // Import CSS Module

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  textColor = 'text-white', // Default text color
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  textColor?: string; // New prop for text color
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = useCallback(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  useEffect(() => {
    startAnimation(); // Run animation on initial mount

    intervalRef.current = setInterval(() => {
      // Reset styles for re-animation
      animate(
        'span',
        { opacity: 0, filter: filter ? 'blur(10px)' : 'none' },
        { duration: 0 }
      ); // Reset quickly

      // Trigger the animation again after a short delay to allow the reset to take effect
      setTimeout(() => {
        startAnimation();
      }, 50); // Add a small delay (e.g., 50ms) to ensure reset is complete. Adjust as needed.
    }, 5000); // Set the interval to 10 seconds (10000 milliseconds)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear the interval on unmount
      }
    };
  }, [animate, filter, duration, startAnimation]); // Include startAnimation dependencies

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          // Check if the word is the 🦷 emoji to add shake class
          const isTooth = word.includes('🦷');
          return (
            <motion.span
              key={word + idx}
              className={`${textColor} opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl ${
                isTooth ? styles.simpleShake : ''
              }`} // Use styles.simpleShake
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className='mt-4'>
        <div className='text-2xl leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
