import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));

// Just for Suspense testing:
export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))