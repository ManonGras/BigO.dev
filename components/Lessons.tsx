
import React from 'react';
import {
    Book,
    Clock,
    Users,
    MessageSquare,
    Mail,
    History,
    Zap,
    Shield,
    BarChart3,
    Terminal,
    ChevronRight,
    Info,
    Calendar,
    GraduationCap,
    Scale,
    Code2,
    CheckCircle2,
    LayoutDashboard,
    ShieldCheck,
    Search,
    UserCheck,
    Award,
    BookOpen,
    Code
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Lessons: React.FC = () => {
    const { t, language } = useLanguage();
    const { currentPalette } = useTheme();

    const lesson = t.lessons.ea4;

    return (
        <div className="max-w-5xl mx-auto space-y-16 pb-32">
            {/* Hero Section */}
            <header className="relative p-12 md:p-16 rounded-[50px] overflow-hidden shadow-2xl border transition-all duration-500 hover:shadow-accent/20"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[80px] -ml-32 -mb-32 rounded-full" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 text-accent font-bold tracking-[0.2em] text-xs uppercase mb-8">
                        <span className="w-12 h-[2px] bg-accent rounded-full" />
                        Université Paris Cité • Licence Info
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-[1.1]" style={{ color: 'var(--text-primary)' }}>
                        {lesson.title}
                        <span className="block text-2xl md:text-3xl mt-4 font-semibold opacity-60 tracking-normal">{lesson.subtitle}</span>
                    </h1>
                    <p className="text-xl max-w-3xl leading-relaxed font-medium opacity-80" style={{ color: 'var(--text-secondary)' }}>
                        {lesson.description}
                    </p>
                </div>
            </header>

            {/* 1. Intro & Epistemology */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <BookOpen className="text-accent" size={36} />
                    <h2 className="text-4xl font-black tracking-tight">{lesson.intro.title}</h2>
                </div>
                <div className="p-10 rounded-[40px] border shadow-xl flex flex-col gap-8 relative overflow-hidden"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <p className="text-lg leading-relaxed relative z-10">
                        {lesson.intro.content}
                    </p>
                    <div className="p-8 rounded-3xl bg-accent/5 border border-accent/10 space-y-4">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Search className="text-accent" />
                            {lesson.intro.thematicTitle}
                        </h3>
                        <p className="opacity-70 leading-relaxed">
                            {lesson.intro.thematicContent}
                        </p>
                    </div>
                </div>
            </section>

            {/* Historical Context */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[40px] border shadow-xl flex flex-col gap-6"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="p-4 rounded-3xl bg-pink-500/10 text-pink-500 self-start">
                        <History size={32} />
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">{lesson.genesis.heritageTitle}</h2>
                    <p className="text-md leading-relaxed opacity-70 italic">
                        {lesson.genesis.quote}
                    </p>
                    <p className="text-sm opacity-60 leading-relaxed">
                        {lesson.genesis.heritageContent}
                    </p>
                    <div className="mt-auto p-6 rounded-3xl bg-black/20 border border-white/5">
                        <p className="font-bold text-pink-500 mb-2">{lesson.genesis.khwarizmiTitle}</p>
                        <p className="text-xs opacity-60 italic">
                            {lesson.genesis.khwarizmiDesc}
                        </p>
                    </div>
                </div>

                <div className="p-10 rounded-[40px] border shadow-xl flex flex-col gap-6"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="p-4 rounded-3xl bg-purple-500/10 text-purple-500 self-start">
                        <Zap size={32} />
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">{lesson.genesis.evolutionTitle}</h2>
                    <p className="text-sm leading-relaxed opacity-70">
                        {lesson.genesis.evolutionContent}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                        <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-center">
                            <div className="text-3xl font-black text-purple-500 mb-1">∞</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">{lesson.modernDef.universality}</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-center">
                            <div className="text-3xl font-black text-purple-500 mb-1">⚡</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">{lesson.modernDef.celerity}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Operational Framework */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <Calendar className="text-accent" size={36} />
                    <h2 className="text-4xl font-black tracking-tight">{lesson.schedule.title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Schedule Table */}
                        <div className="overflow-x-auto rounded-[32px] border shadow-xl"
                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest opacity-40">{lesson.schedule.tableTitleHeading}</th>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest opacity-40">{lesson.schedule.tableFreqHeading}</th>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest opacity-40">{lesson.schedule.tableSlotsHeading}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                                        <td className="p-6 font-bold">{lesson.schedule.lectures}</td>
                                        <td className="p-6 opacity-60">{lesson.schedule.lecturesFreq}</td>
                                        <td className="p-6 font-medium text-blue-500">{lesson.schedule.lecturesTime}</td>
                                    </tr>
                                    <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                                        <td className="p-6 font-bold">{lesson.schedule.tutorials}</td>
                                        <td className="p-6 opacity-60">{lesson.schedule.tutorialsFreq}</td>
                                        <td className="p-6 font-medium text-accent">{lesson.schedule.tutorialsTime}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold">{lesson.schedule.practicals}</td>
                                        <td className="p-6 opacity-60">{lesson.schedule.practicalsFreq}</td>
                                        <td className="p-6 font-medium text-emerald-500">{lesson.schedule.practicalsTime}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Team Section */}
                        <div className="p-10 rounded-[32px] border shadow-xl space-y-8"
                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                            <div className="flex items-center gap-3">
                                <Users className="text-accent" size={24} />
                                <h3 className="text-2xl font-bold">{lesson.team.title}</h3>
                            </div>
                            <p className="font-bold text-lg text-accent">{lesson.team.coordinator}</p>

                            <div className="space-y-4">
                                <h4 className="text-xs font-black uppercase tracking-widest opacity-40">{lesson.team.groupsTitle}</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {lesson.team.groups.map((group, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-black/10 border border-white/5">
                                            <span className="font-bold text-sm">{group.name}</span>
                                            <span className="text-sm opacity-60">{group.teacher}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                                <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-3">{lesson.team.labTeachersTitle}</h4>
                                <p className="text-sm font-medium opacity-60">{lesson.team.labTeachers}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Evaluation Card */}
                        <div className="p-8 rounded-[32px] border shadow-xl flex flex-col h-full"
                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-xl font-bold">{lesson.evaluation.title}</h3>
                            </div>
                            <div className="flex-1 space-y-6">
                                <div className="p-6 rounded-3xl border text-center" style={{ backgroundColor: 'rgba(245, 158, 11, 0.05)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>
                                    <div className="text-4xl font-black text-amber-500 mb-1">{lesson.evaluation.finalExamValue}</div>
                                    <div className="text-[10px] font-black uppercase opacity-60 tracking-widest">{lesson.evaluation.finalExam}</div>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { label: lesson.evaluation.tdExams, value: lesson.evaluation.included },
                                        { label: lesson.evaluation.midterm, value: lesson.evaluation.included },
                                        { label: lesson.evaluation.attendance, value: lesson.evaluation.mandatory }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-black/10">
                                            <span className="text-sm opacity-60 font-medium">{item.label}</span>
                                            <span className="text-sm font-bold">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10 space-y-2">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-amber-500 flex items-center gap-2">
                                        <Award size={14} /> {lesson.evaluation.assiduityTitle}
                                    </h4>
                                    <p className="text-xs leading-relaxed opacity-60 font-medium">{lesson.evaluation.assiduityDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Communication Section */}
            <section className="p-10 md:p-12 rounded-[50px] border shadow-2xl relative overflow-hidden"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500">
                                <MessageSquare size={28} />
                            </div>
                            <h2 className="text-4xl font-black tracking-tight">{lesson.communication.title}</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="group p-6 rounded-3xl border bg-black/10 border-white/5 transition-all hover:border-emerald-500/30">
                                <div className="flex items-center gap-3 font-black text-emerald-500 mb-3 uppercase tracking-widest text-xs">
                                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                    {lesson.communication.moodleTitle}
                                </div>
                                <p className="text-sm opacity-60 leading-relaxed font-medium">{lesson.communication.moodleDesc}</p>
                            </div>
                            <div className="group p-6 rounded-3xl border bg-black/10 border-white/5 transition-all hover:border-emerald-500/30">
                                <div className="flex items-center gap-3 font-black text-emerald-500 mb-3 uppercase tracking-widest text-xs">
                                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                    {lesson.communication.discordTitle}
                                </div>
                                <p className="text-sm opacity-60 leading-relaxed font-medium">{lesson.communication.discordDesc}</p>
                            </div>
                            <div className="sm:col-span-2 p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-6 group">
                                <div className="p-3 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 transition-transform group-hover:rotate-12">
                                    <Mail size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-black uppercase tracking-wider text-emerald-500">TAG EMAIL IMPÉRATIF</p>
                                    <p className="text-lg font-bold">{lesson.communication.emailTag}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-72 h-72 rounded-[40px] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-transparent pointer-events-none transition-opacity group-hover:opacity-100 opacity-60" />
                        <Terminal size={100} className="text-emerald-500 opacity-20 group-hover:scale-110 transition-all duration-700" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="h-1.5 w-full bg-emerald-500/20 rounded-full overflow-hidden mb-3">
                                <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
                            </div>
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] opacity-40 text-emerald-500">
                                <span>{language === 'fr' ? 'PROTOCOLE' : 'PROTOCOL'}</span>
                                <span>{language === 'fr' ? 'SÉCURISÉ' : 'SECURE'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Methodology */}
            <section className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Shield className="text-accent" size={36} />
                            <h2 className="text-4xl font-black tracking-tight">{lesson.pillars.title}</h2>
                        </div>
                        <p className="text-lg opacity-60 font-medium max-w-2xl">{lesson.pillars.intro}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: lesson.pillars.conceptionTitle,
                            desc: lesson.pillars.conceptionDesc,
                            icon: LayoutDashboard,
                            color: "blue",
                            accent: "indigo"
                        },
                        {
                            title: lesson.pillars.correctionTitle,
                            desc: lesson.pillars.correctionDesc,
                            icon: ShieldCheck,
                            color: "emerald",
                            accent: "teal"
                        },
                        {
                            title: lesson.pillars.efficiencyTitle,
                            desc: lesson.pillars.efficiencyDesc,
                            icon: BarChart3,
                            color: "amber",
                            accent: "orange"
                        }
                    ].map((pillar, i) => (
                        <div key={i} className="group p-10 rounded-[40px] border shadow-xl transition-all duration-500 hover:-translate-y-3"
                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                            <div className={`mb-8 p-5 rounded-3xl bg-${pillar.color}-500/10 text-${pillar.color}-500 self-start transition-all duration-500 group-hover:bg-${pillar.color}-500/20 group-hover:scale-110 shadow-lg shadow-transparent group-hover:shadow-${pillar.color}-500/10`}>
                                <pillar.icon size={40} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">{pillar.title}</h3>
                            <p className="text-sm leading-relaxed opacity-60 font-medium">{pillar.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Invariant & Proof Tools */}
                <div className="p-12 rounded-[50px] border shadow-2xl relative overflow-hidden group"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[80px] -mr-48 -mt-48 rounded-full" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-black tracking-tight flex items-center gap-4">
                                <UserCheck size={32} className="text-indigo-500" />
                                {lesson.methodology.invariantTitle}
                            </h3>
                            <p className="text-lg opacity-70 leading-relaxed font-medium">
                                {lesson.methodology.invariantDesc}
                            </p>
                        </div>
                        <div className="w-full md:w-auto p-8 rounded-[40px] bg-black/30 border border-white/5 font-mono text-sm shadow-inner group-hover:border-indigo-500/30 transition-all duration-500">
                            <div className="text-indigo-400 mb-2 font-black uppercase text-[10px] tracking-widest">{language === 'fr' ? 'EXEMPLE ADDITION' : 'ADDITION EXAMPLE'}</div>
                            res ≡ n₁ + n₂ <span className="text-white opacity-40">mod</span> 10ⁱ
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Arithmetic Analysis Comparison */}
            <section className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Scale size={36} className="text-accent" />
                            <h2 className="text-4xl font-black tracking-tight">{lesson.analysis.title}</h2>
                        </div>
                        <p className="text-lg opacity-60 font-medium max-w-2xl">{lesson.analysis.description}</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-black/20 border border-white/10 font-mono text-xs shadow-xl backdrop-blur-md">
                        ℓ = 1 + ⌊ max(log₁₀ n₁, log₁₀ n₂) ⌋
                    </div>
                </div>

                <div className="overflow-hidden rounded-[48px] border shadow-2xl"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{lesson.analysis.operation}</th>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{lesson.analysis.algorithm}</th>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{lesson.analysis.invariant}</th>
                                    <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{lesson.analysis.complexity}</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b group hover:bg-white/5 transition-colors" style={{ borderColor: 'var(--border)' }}>
                                    <td className="p-8 font-black text-lg">{lesson.analysis.addition}</td>
                                    <td className="p-8 font-medium">{lesson.analysis.school}</td>
                                    <td className="p-8 font-mono text-xs opacity-60">res ≡ n₁ + n₂ (mod 10ⁱ)</td>
                                    <td className="p-8 font-black text-indigo-400 text-lg">O(ℓ)</td>
                                </tr>
                                <tr className="border-b group hover:bg-white/5 transition-colors" style={{ borderColor: 'var(--border)' }}>
                                    <td className="p-8 font-black text-lg">{lesson.analysis.multiplication}</td>
                                    <td className="p-8 font-medium">{lesson.analysis.naive}</td>
                                    <td className="p-8 font-mono text-xs opacity-60">res = n₁ × i</td>
                                    <td className="p-8 font-black text-rose-500 text-lg">O(ℓ·10ˡ)</td>
                                </tr>
                                <tr className="border-b group hover:bg-white/5 transition-colors" style={{ borderColor: 'var(--border)' }}>
                                    <td className="p-8 font-black text-lg">{lesson.analysis.multiplication}</td>
                                    <td className="p-8 font-medium">{lesson.analysis.byDigit}</td>
                                    <td className="p-8 font-mono text-xs opacity-60">res ≡ n₁ × {language === 'fr' ? 'chiffre' : 'digit'} (mod 10ⁱ)</td>
                                    <td className="p-8 font-black text-indigo-400 text-lg">O(ℓ)</td>
                                </tr>
                                <tr className="group hover:bg-white/5 transition-colors">
                                    <td className="p-8 font-black text-lg">{lesson.analysis.multiplication}</td>
                                    <td className="p-8 font-medium">{lesson.analysis.school}</td>
                                    <td className="p-8 font-mono text-xs opacity-60">res ≡ n₁ × n₂ (mod 10ⁱ)</td>
                                    <td className="p-8 font-black text-amber-500 text-lg">O(ℓ²)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. Python Implementation */}
            <section className="space-y-12">
                <div className="flex items-center gap-4">
                    <Terminal size={36} className="text-blue-500" />
                    <h2 className="text-4xl font-black tracking-tight">{lesson.python.title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-12 rounded-[50px] border shadow-xl relative overflow-hidden h-full flex flex-col justify-between"
                        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Code size={180} className="text-blue-500" />
                        </div>
                        <div className="relative z-10 space-y-10">
                            <div>
                                <h3 className="text-2xl font-black mb-6 tracking-tight flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    {lesson.python.philosophy}
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-lg opacity-80 leading-relaxed font-medium text-blue-500">{lesson.python.philosophyDesc}</p>
                                    <p className="text-sm opacity-60 leading-relaxed italic">{lesson.python.philosophyDetail}</p>
                                </div>
                            </div>

                            <div className="p-8 rounded-[40px] bg-blue-500/5 border border-blue-500/10 space-y-6">
                                <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 font-black">{lesson.python.polymorphismTitle}</h4>
                                <div className="font-mono text-xs bg-black/40 p-6 rounded-3xl border border-white/5 group-hover:border-blue-500/20 transition-all">
                                    <span className="text-amber-400">def</span> <span className="text-indigo-400">truc</span>(x): <span className="text-white opacity-40"># Magic typing</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">return</span> x + x
                                </div>
                                <p className="text-xs opacity-60 leading-relaxed font-medium">{lesson.python.polymorphismDesc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        <div className="p-10 rounded-[40px] border shadow-xl relative overflow-hidden"
                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <LayoutDashboard size={24} className="text-indigo-500" />
                                <h3 className="text-xl font-bold">{lesson.python.dataTypes}</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <h4 className="font-black text-xs uppercase tracking-widest opacity-60 text-indigo-500">{lesson.python.immutableTitle}</h4>
                                    <p className="text-xs leading-relaxed opacity-60">{lesson.python.immutableDesc}</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-black text-xs uppercase tracking-widest opacity-60 text-emerald-500">{lesson.python.mutableTitle}</h4>
                                    <p className="text-xs leading-relaxed opacity-60">{lesson.python.mutableDesc}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-10 rounded-[40px] bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 shadow-xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <Info size={40} className="text-blue-500 opacity-20 transition-transform group-hover:rotate-12" />
                            </div>
                            <h4 className="font-black text-2xl mb-6 tracking-tight text-blue-400">{lesson.python.introspectionTitle}</h4>
                            <p className="text-sm opacity-60 mb-8 font-medium leading-relaxed">{lesson.python.introspectionDesc}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { cmd: "dir(objet)", desc: language === 'fr' ? 'Attributs/Méthodes' : 'Attr/Methods' },
                                    { cmd: "help(objet)", desc: language === 'fr' ? 'Aide Interactive' : 'Interactive Help' },
                                    { cmd: "Docstrings", desc: language === 'fr' ? 'Documentation' : 'Documentation' }
                                ].map((tool, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-black/30 border border-white/5 text-center space-y-2 hover:border-blue-500/30 transition-all">
                                        <code className="text-xs text-blue-400 font-black">{tool.cmd}</code>
                                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{tool.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Checklist */}
            <section className="p-12 md:p-16 rounded-[60px] bg-accent text-white shadow-2xl shadow-accent/40 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-[2s]" />

                <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">{lesson.success.title}</h2>
                        <p className="text-xl opacity-80 font-medium leading-relaxed max-w-xl">{lesson.success.description}</p>
                    </div>
                    <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {lesson.success.checklist.map((item, i) => (
                            <div key={i} className="flex items-center gap-5 bg-white/10 backdrop-blur-xl p-6 rounded-[32px] border border-white/20 shadow-xl transition-all hover:translate-x-2">
                                <div className="p-2 rounded-full bg-white/10">
                                    <CheckCircle2 size={24} className="text-white shrink-0" />
                                </div>
                                <span className="font-bold text-sm md:text-md tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lessons;
