
import React, { useState } from 'react';
import { X, Check, Plus, Minus, Trash2, HelpCircle } from 'lucide-react';

interface VisualDataEditorProps {
    initialData: number[];
    onSave: (newData: number[]) => void;
    onCancel: () => void;
    type: 'array' | 'tree' | 'list';
}

const VisualDataEditor: React.FC<VisualDataEditorProps> = ({ initialData, onSave, onCancel, type }) => {
    const [data, setData] = useState<number[]>([...initialData]);
    const [showInfo, setShowInfo] = useState(false);

    const handleUpdateValue = (idx: number, val: string) => {
        const newVal = parseInt(val);
        if (!isNaN(newVal)) {
            const nextData = [...data];
            nextData[idx] = newVal;
            setData(nextData);
        } else if (val === '') {
            const nextData = [...data];
            nextData[idx] = 0;
            setData(nextData);
        }
    };

    const addItem = () => {
        if (data.length < 30) {
            setData([...data, Math.floor(Math.random() * 90) + 10]);
        }
    };

    const removeItem = (idx: number) => {
        if (data.length > 2) {
            setData(data.filter((_, i) => i !== idx));
        }
    };

    const getTypeDescription = () => {
        switch (type) {
            case 'tree': return 'Values will be inserted into the BST in this order.';
            case 'list': return 'Elements represent sequential nodes in the linked list.';
            default: return 'Elements in the array to be processed by the algorithm.';
        }
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="w-full max-w-4xl bg-[#0f172a] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-500/10 rounded-2xl">
                            <Plus className="text-indigo-400" size={24} />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-black text-white tracking-tight">Data Structure Editor</h3>
                            <div className="flex items-center gap-2 text-slate-400">
                                <span className="text-xs font-bold uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded text-indigo-300">
                                    {type === 'tree' ? 'Binary Search Tree' : type === 'list' ? 'Linked List' : 'Array'}
                                </span>
                                <span className="text-xs">•</span>
                                <p className="text-xs transition-opacity">{getTypeDescription()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowInfo(!showInfo)}
                            className={`p-2 rounded-full transition-all ${showInfo ? 'bg-indigo-500 text-white' : 'hover:bg-white/5 text-slate-400'}`}
                        >
                            <HelpCircle size={20} />
                        </button>
                        <button onClick={onCancel} className="p-2 hover:bg-white/5 rounded-full transition-all text-slate-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Editor Area */}
                <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                    {showInfo && (
                        <div className="mb-8 p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-3xl animate-in slide-in-from-top-4 duration-300">
                            <h4 className="text-sm font-bold text-indigo-300 mb-2 uppercase tracking-widest">How it works</h4>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {type === 'tree'
                                    ? "Add values to define the insertion sequence. The visualizer will build a Binary Search Tree by taking each value in the order shown."
                                    : type === 'list'
                                        ? "Each block represents a node. Arrows will be automatically generated between nodes to form a linked list."
                                        : "Numerical values that will be visualized as bars of varying heights. The algorithm will sort or search through these values."
                                }
                            </p>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-6 justify-center items-center">
                        {data.map((val, idx) => (
                            <div key={idx} className="flex items-center gap-3 animate-in zoom-in duration-300" style={{ animationDelay: `${idx * 50}ms` }}>
                                <div className="group relative flex flex-col items-center">
                                    <div className="absolute -top-6 text-[10px] font-black text-slate-600 tracking-tighter uppercase transition-colors group-hover:text-indigo-400">
                                        node {idx + 1}
                                    </div>
                                    <div className="w-20 border-2 border-white/5 rounded-2xl overflow-hidden focus-within:border-indigo-500/50 transition-all bg-white/[0.02] hover:bg-white/[0.04] shadow-xl group-hover:shadow-indigo-500/5">
                                        <input
                                            type="number"
                                            value={val === 0 ? '' : val}
                                            onChange={(e) => handleUpdateValue(idx, e.target.value)}
                                            placeholder="0"
                                            className="w-full h-16 text-center text-2xl font-black bg-transparent text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:opacity-20"
                                        />
                                        <button
                                            onClick={() => removeItem(idx)}
                                            className="w-full h-8 bg-black/40 text-slate-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center border-t border-white/5"
                                        >
                                            <Trash2 size={12} />
                                        </button>
                                    </div>
                                </div>
                                {type === 'list' && idx < data.length - 1 && (
                                    <div className="flex flex-col items-center gap-1 opacity-20">
                                        <div className="w-6 h-[2px] bg-slate-400 rounded-full" />
                                        <div className="w-2 h-2 border-r-2 border-t-2 border-slate-400 rotate-45 -translate-x-0.5" />
                                    </div>
                                )}
                            </div>
                        ))}

                        <button
                            onClick={addItem}
                            className="w-20 h-16 rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-slate-500 hover:border-indigo-500/50 hover:text-indigo-400 transition-all hover:bg-indigo-500/5 group"
                        >
                            <Plus size={24} className="group-hover:scale-110 transition-transform" />
                            <span className="text-[8px] font-black uppercase mt-1 tracking-widest">Add</span>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-between items-center">
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                        Total Elements: <span className="text-indigo-400">{data.length}</span> / 30
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={onCancel}
                            className="px-8 py-3 rounded-2xl font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => onSave(data)}
                            className="px-10 py-3 rounded-2xl font-black text-white bg-indigo-600 hover:bg-indigo-500 shadow-2xl shadow-indigo-500/20 transition-all flex items-center gap-3 text-sm hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Check size={18} /> Save and Visualize
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualDataEditor;
