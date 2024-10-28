import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { useWindowSize } from '@uidotdev/usehooks';

export const FinishScreen = () => {
    const { width, height } = useWindowSize();

    return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-red-600 p-4 text-white">
            <Confetti
                colors={['#FFF']}
                friction={1}
                gravity={0.01}
                width={width ?? 0}
                height={height ?? 0}
            />
            <motion.div
                className="text-center text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="welcome"
            >
                Merry Christmas!
            </motion.div>
        </div>
    );
};
