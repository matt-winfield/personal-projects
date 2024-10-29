import { FinishScreen } from '@/features/guessing-game/finish-screen';
import { ImageMap } from '@/features/guessing-game/image-map';
import { WelcomeScreen } from '@/features/guessing-game/welcome-screen';
import { useState } from 'react';

export default function Index() {
    const [screen, setScreen] = useState(0);

    return (
        <main className="flex h-full flex-col items-center">
            {screen === 0 && <WelcomeScreen onFinish={() => setScreen(1)} />}
            {screen === 1 && <ImageMap onFinish={() => setScreen(2)} />}
            {screen === 2 && <FinishScreen />}
        </main>
    );
}
