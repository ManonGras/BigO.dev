
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Palette = {
    id: number;
    name: string;
    colors: {
        bgPrimary: string;
        bgSecondary: string;
        accent: string;
        textPrimary: string;
        textSecondary: string;
        border: string;
    };
};

export const PALETTES: Palette[] = [
    {
        id: 0,
        name: 'Default Dark',
        colors: {
            bgPrimary: '#020617', // slate-950
            bgSecondary: '#0f172a', // slate-900
            accent: '#4f46e5', // indigo-600
            textPrimary: '#f8fafc', // slate-50
            textSecondary: '#94a3b8', // slate-400
            border: '#1e293b', // slate-800
        }
    },
    {
        id: 1,
        name: 'Ocean Dusk',
        colors: {
            bgPrimary: '#51395b',
            bgSecondary: '#477495',
            accent: '#64a3b4',
            textPrimary: '#fadcd4',
            textSecondary: '#92abb0',
            border: '#8c4263',
        }
    },
    {
        id: 2,
        name: 'Deep Earth',
        colors: {
            bgPrimary: '#0c151a',
            bgSecondary: '#162127',
            accent: '#cf9d7c',
            textPrimary: '#cf9d7c',
            textSecondary: '#94a3b8',
            border: '#724c39',
        }
    },
    {
        id: 3,
        name: 'Velvet Sunset',
        colors: {
            bgPrimary: '#1a0c19',
            bgSecondary: '#2d2230',
            accent: '#6d3c52',
            textPrimary: '#fadcd4',
            textSecondary: '#cf9d7c',
            border: '#4b2137',
        }
    },
    {
        id: 4,
        name: 'Midnight Steel',
        colors: {
            bgPrimary: '#071739',
            bgSecondary: '#4a6382',
            accent: '#a68768',
            textPrimary: '#cdd4da',
            textSecondary: '#a4b6c4',
            border: '#e2c29c',
        }
    },
    {
        id: 5,
        name: 'Amber Abyss',
        colors: {
            bgPrimary: '#0c0f1e',
            bgSecondary: '#153041',
            accent: '#e17739',
            textPrimary: '#fecb67',
            textSecondary: '#6c504c',
            border: '#214f5f',
        }
    },
    {
        id: 6,
        name: 'Roseate Dusk',
        colors: {
            bgPrimary: '#140e1c',
            bgSecondary: '#462037',
            accent: '#a0525f',
            textPrimary: '#f9aaad',
            textSecondary: '#c5767c',
            border: '#683a45',
        }
    },
    {
        id: 7,
        name: 'Muted Lavender',
        colors: {
            bgPrimary: '#242e49',
            bgSecondary: '#564963',
            accent: '#b18b9a',
            textPrimary: '#ffe0e6',
            textSecondary: '#7c677a',
            border: '#6e546d',
        }
    }
];

interface ThemeContextType {
    currentPalette: Palette;
    setPalette: (id: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentPalette, setCurrentPalette] = useState<Palette>(PALETTES[0]);

    const setPalette = (id: number) => {
        const palette = PALETTES.find(p => p.id === id);
        if (palette) {
            setCurrentPalette(palette);
        }
    };

    useEffect(() => {
        const root = document.documentElement;
        const { colors } = currentPalette;
        root.style.setProperty('--bg-primary', colors.bgPrimary);
        root.style.setProperty('--bg-secondary', colors.bgSecondary);
        root.style.setProperty('--accent', colors.accent);
        root.style.setProperty('--text-primary', colors.textPrimary);
        root.style.setProperty('--text-secondary', colors.textSecondary);
        root.style.setProperty('--border', colors.border);
    }, [currentPalette]);

    return (
        <ThemeContext.Provider value={{ currentPalette, setPalette }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
