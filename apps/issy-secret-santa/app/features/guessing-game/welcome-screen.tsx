import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Confetti from 'react-confetti';
import { AnimatePresence, motion } from 'framer-motion';

interface WelcomeScreenProps {
    onFinish?: () => void;
}

export const WelcomeScreen = ({ onFinish }: WelcomeScreenProps) => {
    const [screen, setScreen] = useState(0);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-red-600 p-4 text-white">
            <Confetti colors={['#FFF']} friction={1} gravity={0.01} />
            <AnimatePresence>
                {screen === 0 && (
                    <>
                        <motion.div
                            className="text-center text-3xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key="welcome"
                        >
                            Merry Christmas Issy!
                        </motion.div>
                        <MotionButton
                            onClick={() => setScreen(1)}
                            className="mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            key="button1"
                        >
                            Continue
                        </MotionButton>
                    </>
                )}
                {screen === 1 && (
                    <>
                        <motion.div
                            className="text-center text-3xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key="prompt"
                        >
                            You've travelled around the world nearly as much as
                            Santa! But can you remember all of the places you've
                            been?
                        </motion.div>
                        <MotionButton
                            onClick={onFinish}
                            className="mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5 }}
                            key="button2"
                        >
                            Continue
                        </MotionButton>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

const MotionButton = motion(Button);
