import { defineConfig } from 'vitepress'

export default defineConfig({
    // These are app level configs.
    title: 'Augus Pilot',
    description: 'Augus All Site',
    base: "/",
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico',
        }],
        ['meta', { name: 'theme-color', content: '#ff64b9' }],
    ],
    themeConfig: {
        logo: '/logo/logo.jpg',
        // sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DrAugus/' },
        ],
        editLink: {
            pattern: 'https://github.com/augusmeow/augusmeow.github.io/tree/master/src/:path',
            text: 'Suggest changes to this page',
        },
        footer: {
            message: 'Released under the GNU License.',
            copyright: 'Copyright © 2023-present Augus'
        },
    },
    locales: {
        root: {
            label: '中文',
            lang: 'zh'
        },
        en: {
            label: 'English',
            lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
            link: '/en/', // default /fr/ -- shows on navbar translations menu, can be external

            // other locale specific properties...
        }
    },
})
