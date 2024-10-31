import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { useWindowSize } from '@uidotdev/usehooks';

const images = Array.from({ length: 6 }).map(
    (_, i) => `/images/final/${i + 1}.jpg`,
);

export const FinishScreen = () => {
    const { width, height } = useWindowSize();

    return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-red-600 text-white">
            <Confetti
                colors={['#FFF']}
                friction={1}
                gravity={0.01}
                width={width ?? 0}
                height={height ?? 0}
                initialVelocityY={{ min: 0, max: 0.2 }}
            />
            <motion.div
                className="px-4 text-center text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                Merry Christmas!
            </motion.div>
            <motion.div
                className="mt-3 w-full overflow-x-clip overflow-y-visible px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="relative flex w-max items-center gap-3"
                    animate={{
                        x: [`-${100 / 3}%`, `-${(2 * 100) / 3}%`],
                        transition: {
                            ease: 'linear',
                            duration: 15,
                            repeat: Infinity,
                        },
                    }}
                >
                    {[...images, ...images, ...images].map((src, i) => {
                        const angleMultiplier =
                            (i % images.length) % 2 === 0 ? 1 : -1;
                        return (
                            <motion.img
                                key={i}
                                src={src}
                                className="w-52 md:w-96"
                                animate={{
                                    rotate: [
                                        -5 * angleMultiplier,
                                        5 * angleMultiplier,
                                        -5 * angleMultiplier,
                                    ],
                                    transition: {
                                        ease: 'easeInOut',
                                        duration: 15,
                                        repeat: Infinity,
                                    },
                                }}
                            />
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};
