/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Noto Sans JP', 'sans-serif'],
                'noto-jp': ['Noto Sans JP', 'sans-serif'],
            },
            colors: {
                // Paleta de colores basada en la imagen proporcionada
                primary: {
                    // Rosa suave - F7B2C4 (más claro)
                    50: '#fef7f9',
                    100: '#fdeef3',
                    200: '#fcdde6',
                    300: '#f9bfd0',
                    400: '#f7b2c4',  // Color de la paleta
                    500: '#f39bb1',
                    600: '#ed7691',
                    700: '#e05577',
                    800: '#bc4a63',
                    900: '#9e4154',
                },
                secondary: {
                    // Coral/Salmón - F4A08E (segundo color)
                    50: '#fef6f4',
                    100: '#feede9',
                    200: '#fdd9d1',
                    300: '#fabfb0',
                    400: '#f4a08e',  // Color de la paleta
                    500: '#ed7f6b',
                    600: '#da6348',
                    700: '#b85239',
                    800: '#964732',
                    900: '#7c3e2f',
                },
                accent: {
                    // Rojo vibrante - E60026 (color de acento)
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#e60026',  // Color de la paleta
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                },
                neutral: {
                    // Beige rosado - FDD3C5 (cuarto color)
                    50: '#fefcfb',
                    100: '#fef8f6',
                    200: '#fef0eb',
                    300: '#fde4db',
                    400: '#fdd3c5',  // Color de la paleta
                    500: '#fbbfa8',
                    600: '#f7a082',
                    700: '#f0825e',
                    800: '#e56943',
                    900: '#d1562f',
                },
                light: {
                    // Beige muy claro - FDDCF (quinto color)
                    50: '#fffefe',
                    100: '#fefcfb',
                    200: '#fef9f7',
                    300: '#fef4f1',
                    400: '#fddcf0',  // Color de la paleta (aproximado)
                    500: '#fbc4a9',
                    600: '#f9a885',
                    700: '#f58b63',
                    800: '#ef7244',
                    900: '#e25d2a',
                },
            }
        },
    },
    plugins: [],
}