import './bootstrap';
import '../css/app.css';
import '../css/global.scss'

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import Layout from './Layouts/Layout/Layout';
import { CartProvider } from './Contexts/CartContext';
import { FavoriteProvider } from './Contexts/FavoriteContext';
import { RecentlyViewedProvider } from './Contexts/RecentlyViewedContext';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <RecentlyViewedProvider>
            <FavoriteProvider>
            <CartProvider>
                {/* <Layout> */}
                    <App {...props} />
                {/* </Layout> */}
            </CartProvider>
            </FavoriteProvider>
            </RecentlyViewedProvider>
    );
    },
    progress: {
        color: '#4B5563',
    },
});
