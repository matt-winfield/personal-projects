import { FinishScreen } from '@/features/guessing-game/finish-screen';
import { ImageMap } from '@/features/guessing-game/image-map';
import { WelcomeScreen } from '@/features/guessing-game/welcome-screen';
import { LinksFunction } from '@remix-run/cloudflare';
import { useState } from 'react';
import { ClientOnly } from 'remix-utils/client-only';

export default function Index() {
    const [screen, setScreen] = useState(0);

    return (
        <main className="flex h-full flex-col items-center">
            {screen === 0 && <WelcomeScreen onFinish={() => setScreen(1)} />}
            {screen === 1 && (
                <ClientOnly>
                    {() => <ImageMap onFinish={() => setScreen(2)} />}
                </ClientOnly>
            )}
            {screen === 2 && <FinishScreen />}
        </main>
    );
}

export const links: LinksFunction = () => {
    return [{ rel: 'preload', as: 'image', href: '/images/dancing-santa.gif' }];
};
