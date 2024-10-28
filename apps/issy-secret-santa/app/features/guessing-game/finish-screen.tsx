import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

export const FinishScreen = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-red-600 p-4 text-white">
            <Confetti colors={['#FFF']} friction={1} gravity={0.01} />
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
