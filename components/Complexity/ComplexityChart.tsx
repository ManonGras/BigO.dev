
import React, { useMemo } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    AreaChart,
    Area
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { TrendingUp } from 'lucide-react';

interface DataPoint {
    n: number;
    ops: number;
}

interface ComplexityChartProps {
    history: DataPoint[];
    currentN: number;
    complexity: string;
}

const ComplexityChart: React.FC<ComplexityChartProps> = ({ history, currentN, complexity }) => {
    const { currentPalette } = useTheme();
    const { t } = useLanguage();

    const chartData = useMemo(() => {
        // Generate theoretical points for the range of n in history + some buffer
        const maxN = Math.max(...history.map(d => d.n), 30);
        const minN = 1;

        // Calculate a scale factor to make theoretical curve pass through or near the real data
        // Usually we scale it based on the average ops/theory ratio
        let scale = 1;
        if (history.length > 0) {
            const getRawTheory = (comp: string, nValue: number) => {
                switch (comp) {
                    case 'O(1)': return 1;
                    case 'O(log n)': return Math.log2(nValue);
                    case 'O(n)': return nValue;
                    case 'O(n log n)': return nValue * Math.log2(nValue);
                    case 'O(n²)': return nValue * nValue;
                    default: return nValue;
                }
            };

            const ratios = history.map(d => d.ops / (getRawTheory(complexity, d.n) || 1));
            scale = ratios.reduce((a, b) => a + b, 0) / ratios.length;
        }

        const data = [];
        for (let i = minN; i <= maxN; i++) {
            const realPoint = history.find(h => h.n === i);

            const getTheory = (comp: string, nValue: number) => {
                switch (comp) {
                    case 'O(1)': return scale;
                    case 'O(log n)': return Math.log2(nValue) * scale;
                    case 'O(n)': return nValue * scale;
                    case 'O(n log n)': return nValue * Math.log2(nValue) * scale;
                    case 'O(n²)': return nValue * nValue * scale;
                    default: return nValue * scale;
                }
            };

            data.push({
                n: i,
                ops: realPoint ? realPoint.ops : null,
                theory: getTheory(complexity, i),
            });
        }
        return data;
    }, [history, complexity]);

    return (
        <div className="w-full h-full min-h-[300px] p-6 rounded-3xl border shadow-2xl relative overflow-hidden backdrop-blur-md"
            style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                borderColor: 'var(--border)',
                backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)'
            }}>
            <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl" style={{ backgroundColor: `${currentPalette.colors.accent}20`, color: 'var(--accent)' }}>
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                            {t.visualizer.complexityChartTitle}
                        </h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black opacity-70">
                            {complexity} — {t.visualizer.realVsTheoretical || "Réel vs Théorique"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-slate-800/50">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                        <span style={{ color: 'var(--text-secondary)' }}>{t.visualizer.comparisons || "Réel"}</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-slate-800/50">
                        <div className="w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: 'var(--accent)', border: '1px dashed var(--accent)' }}></div>
                        <span style={{ color: 'var(--text-secondary)' }}>{t.visualizer.theory || "Théorie"}</span>
                    </div>
                </div>
            </div>

            <div className="w-full h-[220px] relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorTheory" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--text-secondary)" stopOpacity={0.05} />
                                <stop offset="95%" stopColor="var(--text-secondary)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis
                            dataKey="n"
                            stroke="var(--text-secondary)"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: 'var(--text-secondary)', opacity: 0.5 }}
                        />
                        <YAxis
                            stroke="var(--text-secondary)"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: 'var(--text-secondary)', opacity: 0.5 }}
                        />
                        <Tooltip
                            cursor={{ stroke: 'var(--accent)', strokeWidth: 1, strokeDasharray: '5 5' }}
                            contentStyle={{
                                backgroundColor: 'rgba(2, 6, 23, 0.9)',
                                borderColor: 'var(--border)',
                                borderRadius: '12px',
                                borderWidth: '1px',
                                backdropFilter: 'blur(8px)',
                                fontSize: '12px',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                            }}
                            itemStyle={{ padding: '2px 0' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="theory"
                            stroke="var(--text-secondary)"
                            strokeWidth={1}
                            fillOpacity={1}
                            fill="url(#colorTheory)"
                            strokeDasharray="4 4"
                            isAnimationActive={true}
                            animationDuration={1500}
                        />
                        <Area
                            type="monotone"
                            dataKey="ops"
                            stroke="var(--accent)"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorReal)"
                            connectNulls
                            isAnimationActive={true}
                            animationDuration={800}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-20"
                style={{ backgroundColor: 'var(--accent)' }}></div>
        </div>
    );
};

export default ComplexityChart;
