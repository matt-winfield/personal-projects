import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowSize } from '@uidotdev/usehooks';
import { usePreloadResources } from './usePreloadResources';
import * as reactLoaderSpinner from 'react-loader-spinner';
import { cn } from '@/utils/misc';
const { Bars } = reactLoaderSpinner;

interface WelcomeScreenProps {
    onFinish?: () => void;
}

export const WelcomeScreen = ({ onFinish }: WelcomeScreenProps) => {
    const [screen, setScreen] = useState(0);
    const { width, height } = useWindowSize();
    const mapDataReady = usePreloadResources();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-red-600 p-4 text-white">
            <Confetti
                colors={['#FFF']}
                friction={1}
                gravity={0.01}
                width={width ?? 0}
                height={height ?? 0}
                initialVelocityY={{ min: 0, max: 0.2 }}
            />
            <div
                className={cn(
                    'pointer-events-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity',
                    hydrated && 'opacity-0',
                )}
            >
                <div
                    className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            </div>
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
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mt-2"
                            src="/images/dancing-santa.gif"
                            key="santa"
                        />
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
                            disabled={!mapDataReady}
                        >
                            {mapDataReady ? (
                                'Continue'
                            ) : (
                                <Bars width={12} height={12} />
                            )}
                        </MotionButton>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

const MotionButton = motion(Button);
