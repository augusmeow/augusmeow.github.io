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
            href: '/logo.svg',
        }],
        ['meta', { name: 'theme-color', content: '#3c8772' }],
    ],
    themeConfig: {
        // sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DrAugus/' },
            { icon: 'github', link: 'https://github.com/augusmeow/' },
        ],
        editLink: {
            pattern: 'https://github.com/augusmeow/augusmeow.github.io/tree/master/src/:path',
            text: 'Suggest changes to this page',
        },
        footer: {
            message: 'Released under the GNU License.',
            copyright: 'Copyright © 2023-present Augus'
        },

    }
})