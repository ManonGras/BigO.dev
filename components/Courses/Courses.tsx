import React from 'react';
import { COURSES, COURSES_FR } from '../../data/courses';
import {
    BookOpen,
    ChevronRight,
    Code,
    Table as TableIcon,
    ArrowLeft,
    Sparkles,
    Play
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Courses: React.FC = () => {
    const { language } = useLanguage();

    const [selectedSectionId, setSelectedSectionId] = React.useState<string | null>(null);

    const courses = language === 'en' ? COURSES : COURSES_FR;
    
    // Écraser les sections pour permettre une navigation inter-chapitres (lecture continue)
    const allSections = React.useMemo(() => {
        return courses.flatMap((course, courseIndex) => 
            course.sections.map((section, sectionIndex) => ({
                ...section,
                courseId: course.id,
                courseTitle: course.title,
                chapterNumber: courseIndex + 1,
                sectionNumber: sectionIndex + 1
            }))
        );
    }, [courses]);

    const activeSectionInfo = selectedSectionId ? allSections.find(s => s.id === selectedSectionId) : null;

    // Vue 1 : Plan chronologique du cours (Roadmap globale)
    if (!activeSectionInfo) {
        return (
            <div className="max-w-5xl mx-auto pb-32 mt-4">
                {/* Hero Section */}
                <header className="relative p-12 md:p-16 mb-16 rounded-[40px] overflow-hidden shadow-2xl border transition-all duration-500"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[100px] -mr-48 -mt-48 rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 text-accent font-bold tracking-[0.2em] text-xs uppercase mb-6">
                                <span className="w-12 h-[2px] bg-accent rounded-full" />
                                {language === 'en' ? 'CHRONOLOGICAL CURRICULUM' : 'CURSUS CHRONOLOGIQUE EA4'}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[1.1]" style={{ color: 'var(--text-primary)' }}>
                                {language === 'en' ? 'Master Algorithmics' : 'Maîtriser l\'Algorithmique'}
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed font-medium opacity-80" style={{ color: 'var(--text-secondary)' }}>
                                {language === 'en'
                                    ? 'Follow this structured path from basic definitions to advanced geometric algorithms. Build your theoretical foundation step by step.'
                                    : 'Suivez ce parcours structuré, des définitions de base jusqu\'aux algorithmes avancés. Bâtissez votre socle théorique étape par étape.'}
                            </p>
                        </div>
                        
                        <div className="shrink-0 hidden sm:block">
                            <div className="w-32 h-32 rounded-full border-4 flex items-center justify-center shadow-2xl transition-transform duration-700 hover:scale-105 hover:rotate-6"
                                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
                                <BookOpen size={48} className="text-accent" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Timeline Syllabus */}
                <div className="relative px-4">
                    {/* The continuous vertical line */}
                    <div className="absolute left-10 md:left-14 top-10 bottom-10 w-1 bg-gradient-to-b from-accent/50 via-accent/20 to-transparent rounded-full hidden md:block" />

                    <div className="space-y-16">
                        {courses.map((course, chapterIndex) => (
                            <div key={course.id} className="relative z-10 md:pl-28 group">
                                {/* Chapter Marker */}
                                <div className="absolute left-[-24px] top-2 w-12 h-12 rounded-full border-4 hidden md:flex items-center justify-center shadow-xl shadow-accent/20 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--accent)' }}>
                                    <span className="text-lg font-black text-accent">{chapterIndex + 1}</span>
                                </div>

                                {/* Chapter Header */}
                                <div className="mb-8">
                                    <h2 className="text-sm font-black text-accent uppercase tracking-widest mb-2 opacity-80">
                                        {language === 'en' ? 'Chapter' : 'Chapitre'} {chapterIndex + 1}
                                    </h2>
                                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
                                        {course.title}
                                    </h3>
                                    <p className="text-lg opacity-70 leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
                                        {course.description}
                                    </p>
                                </div>

                                {/* Sections Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {course.sections.map((section, sectionIndex) => (
                                        <button
                                            key={section.id}
                                            onClick={() => setSelectedSectionId(section.id)}
                                            className="group/btn flex items-center gap-5 p-6 rounded-3xl border text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
                                        >
                                            <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 group-hover/btn:bg-accent group-hover/btn:border-accent group-hover/btn:text-white"
                                                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                                                <Play size={18} className="ml-1" />
                                            </div>
                                            
                                            <div className="flex-1">
                                                <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1" style={{ color: 'var(--text-secondary)' }}>
                                                    {language === 'en' ? 'Lesson' : 'Leçon'} {chapterIndex + 1}.{sectionIndex + 1}
                                                </div>
                                                <div className="font-bold text-lg leading-snug transition-colors group-hover/btn:text-accent" style={{ color: 'var(--text-primary)' }}>
                                                    {section.title}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Vue 2 : Contenu de la Leçon avec navigation fluide
    return (
        <div className="max-w-4xl mx-auto pb-32">
            <button
                onClick={() => setSelectedSectionId(null)}
                className="group flex items-center gap-3 mb-8 px-5 py-3 rounded-2xl font-bold text-sm transition-all hover:bg-accent/10"
                style={{ color: 'var(--text-secondary)' }}
            >
                <div className="p-1 rounded-full border transition-colors group-hover:border-accent group-hover:text-accent" style={{ borderColor: 'var(--border)' }}>
                    <ArrowLeft size={16} />
                </div>
                <span className="group-hover:text-accent transition-colors">
                    {language === 'en' ? 'Back to curriculum' : 'Retour au cursus'}
                </span>
            </button>

            <article className="space-y-12">
                <header className="space-y-6 text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-accent/20">
                        <Sparkles size={14} />
                        <span>Chapitre {activeSectionInfo.chapterNumber} : {activeSectionInfo.courseTitle}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
                        <span className="text-accent/50 mr-4">{activeSectionInfo.chapterNumber}.{activeSectionInfo.sectionNumber}</span>
                        {activeSectionInfo.title}
                    </h1>
                </header>

                <div className="p-8 md:p-12 rounded-[40px] border shadow-xl space-y-8 relative overflow-hidden"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="relative z-10 space-y-6">
                        {activeSectionInfo.content.map((paragraph, i) => (
                            <p key={i} className="text-lg leading-relaxed font-medium opacity-90" style={{ color: 'var(--text-secondary)' }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Subsections */}
                {activeSectionInfo.subsections?.map((subsection, i) => (
                    <section key={i} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[2px] bg-accent rounded-full" />
                            <h2 className="text-3xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                                {subsection.title}
                            </h2>
                        </div>

                        <div className="p-8 rounded-[32px] border bg-black/5 dark:bg-white/5 space-y-4" style={{ borderColor: 'var(--border)' }}>
                            {subsection.content.map((paragraph, j) => (
                                <p key={j} className="text-base leading-relaxed opacity-80" style={{ color: 'var(--text-secondary)' }}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Code Example */}
                {activeSectionInfo.codeExample && (
                    <section className="mt-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Code size={28} className="text-accent" />
                            <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                                {activeSectionInfo.codeExample.caption || 'Implémentation'}
                            </h3>
                        </div>

                        <div className="rounded-[32px] overflow-hidden border shadow-2xl relative group" style={{ borderColor: 'var(--border)' }}>
                            <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none">
                                <Code size={120} />
                            </div>

                            <div className="px-6 py-4 border-b flex items-center justify-between"
                                style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest opacity-60" style={{ color: 'var(--text-secondary)' }}>
                                    {activeSectionInfo.codeExample.language}
                                </span>
                            </div>
                            <pre className="p-8 overflow-x-auto text-sm font-mono leading-relaxed"
                                style={{ backgroundColor: 'rgba(0,0,0,0.3)', color: 'var(--text-primary)' }}>
                                <code>{activeSectionInfo.codeExample.code}</code>
                            </pre>
                        </div>
                    </section>
                )}

                {/* Table */}
                {activeSectionInfo.table && (
                    <section className="mt-12">
                        <div className="flex items-center gap-3 mb-6">
                            <TableIcon size={28} className="text-accent" />
                            <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                                {language === 'en' ? 'Summary Table' : 'Tableau Récapitulatif'}
                            </h3>
                        </div>

                        <div className="overflow-hidden rounded-[32px] border shadow-xl" style={{ borderColor: 'var(--border)' }}>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                                            {activeSectionInfo.table.headers.map((header, i) => (
                                                <th key={i} className="p-6 text-xs font-black uppercase tracking-widest opacity-60 border-b"
                                                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {activeSectionInfo.table.rows.map((row, i) => (
                                            <tr key={i} className="border-b last:border-0 hover:bg-accent/5 transition-colors"
                                                style={{ borderColor: 'var(--border)' }}>
                                                {row.map((cell, j) => (
                                                    <td key={j} className="p-6 font-mono opacity-80" style={{ color: 'var(--text-secondary)' }}>
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                )}

                {/* Navigation Buttons footer avec liens inter-chapitres ! */}
                <div className="grid grid-cols-2 gap-6 mt-16 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
                    {(() => {
                        const currentIndex = allSections.findIndex(s => s.id === selectedSectionId);
                        const prevSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
                        const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

                        return (
                            <>
                                {prevSection ? (
                                    <button
                                        onClick={() => setSelectedSectionId(prevSection.id)}
                                        className="group flex flex-col gap-2 p-6 rounded-3xl border text-left transition-all hover:border-accent/40 hover:-translate-x-1"
                                        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
                                    >
                                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">
                                            <ArrowLeft size={12} />
                                            {language === 'en' ? 'Previous Lesson' : 'Leçon Précédente'}
                                        </div>
                                        <div className="font-bold text-lg line-clamp-1" style={{ color: 'var(--text-primary)' }}>
                                            {prevSection.title}
                                        </div>
                                        {prevSection.chapterNumber !== activeSectionInfo.chapterNumber && (
                                            <div className="text-xs font-bold text-accent mt-1">
                                                ← Chapitre {prevSection.chapterNumber}
                                            </div>
                                        )}
                                    </button>
                                ) : <div />}

                                {nextSection ? (
                                    <button
                                        onClick={() => setSelectedSectionId(nextSection.id)}
                                        className="group flex flex-col gap-2 p-6 rounded-3xl border text-right items-end transition-all hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:translate-x-1"
                                        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
                                    >
                                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-40 group-hover:text-white/80 transition-colors">
                                            {language === 'en' ? 'Next Lesson' : 'Leçon Suivante'}
                                            <ChevronRight size={12} />
                                        </div>
                                        <div className="font-bold text-lg line-clamp-1 group-hover:text-white transition-colors" style={{ color: 'var(--text-primary)' }}>
                                            {nextSection.title}
                                        </div>
                                        {nextSection.chapterNumber !== activeSectionInfo.chapterNumber && (
                                            <div className="text-xs font-bold text-white/80 mt-1">
                                                Chapitre {nextSection.chapterNumber} →
                                            </div>
                                        )}
                                    </button>
                                ) : <div />}
                            </>
                        );
                    })()}
                </div>
            </article>
        </div>
    );
};

export default Courses;
