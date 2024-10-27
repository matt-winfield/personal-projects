import { ImageMap } from '@/features/guessing-game/image-map';
import { ClientOnly } from 'remix-utils/client-only';

export default function Index() {
    return (
        <main className="flex h-full flex-col items-center">
            <ClientOnly>{() => <ImageMap />}</ClientOnly>
        </main>
    );
}
