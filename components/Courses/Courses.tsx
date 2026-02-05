
import React from 'react';
import { COURSES, COURSES_FR } from '../../data/courses';
import {
    BookOpen,
    ChevronRight,
    Code,
    Table as TableIcon,
    ArrowLeft,
    GraduationCap,
    Sparkles,
    Target
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const Courses: React.FC = () => {
    const { t, language } = useLanguage();
    const { currentPalette } = useTheme();

    const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null);
    const [selectedSectionId, setSelectedSectionId] = React.useState<string | null>(null);

    const courses = language === 'en' ? COURSES : COURSES_FR;
    const selectedCourse = courses.find(c => c.id === selectedCourseId);
    const selectedSection = selectedCourse?.sections.find(s => s.id === selectedSectionId);

    // Vue Liste des Cours (Accueil)
    if (!selectedCourseId) {
        return (
            <div className="max-w-7xl mx-auto pb-20 space-y-12">
                {/* Hero Section */}
                <header className="relative p-12 md:p-16 rounded-[50px] overflow-hidden shadow-2xl border transition-all duration-500 hover:shadow-accent/20"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[80px] -ml-32 -mb-32 rounded-full" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 text-accent font-bold tracking-[0.2em] text-xs uppercase mb-8">
                            <span className="w-12 h-[2px] bg-accent rounded-full" />
                            {language === 'en' ? 'ACADEMIC CURRICULUM' : 'CURSUS ACADÉMIQUE'}
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]" style={{ color: 'var(--text-primary)' }}>
                            {t.courses.selectCourse}
                        </h1>
                        <p className="text-xl max-w-2xl leading-relaxed font-medium opacity-80" style={{ color: 'var(--text-secondary)' }}>
                            {language === 'en'
                                ? 'Comprehensive courses on algorithm design, correctness proofs, and complexity analysis. Master the theoretical foundations.'
                                : 'Cours magistraux sur la conception, la preuve de correction et l\'analyse de complexité des algorithmes. Maîtrisez les fondements théoriques.'}
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courses.map((course) => (
                        <button
                            key={course.id}
                            onClick={() => setSelectedCourseId(course.id)}
                            className="group relative p-10 rounded-[40px] border shadow-xl text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8 p-5 rounded-3xl bg-accent/10 text-accent self-start transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <BookOpen size={32} />
                                </div>

                                <h2 className="text-3xl font-black mb-4 tracking-tight leading-tight group-hover:text-accent transition-colors" style={{ color: 'var(--text-primary)' }}>
                                    {course.title}
                                </h2>

                                <p className="text-base leading-relaxed opacity-70 mb-8 flex-1" style={{ color: 'var(--text-secondary)' }}>
                                    {course.description}
                                </p>

                                <div className="flex items-center justify-between pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
                                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-60">
                                        <Code size={16} />
                                        <span>{course.sections.length} {t.courses.sections}</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-white"
                                        style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // Vue Liste des Sections (Sommaire du Cours)
    if (!selectedSectionId && selectedCourse) {
        return (
            <div className="max-w-5xl mx-auto pb-20 space-y-12">
                <button
                    onClick={() => setSelectedCourseId(null)}
                    className="group flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-sm transition-all hover:bg-accent/10"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    <div className="p-1 rounded-full border transition-colors group-hover:border-accent group-hover:text-accent" style={{ borderColor: 'var(--border)' }}>
                        <ArrowLeft size={16} />
                    </div>
                    <span className="group-hover:text-accent transition-colors">{t.courses.backToCourses}</span>
                </button>

                <div className="relative p-12 rounded-[50px] border overflow-hidden"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest">
                            <GraduationCap size={14} />
                            <span>Module EA4</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
                            {selectedCourse.title}
                        </h1>
                        <p className="text-xl max-w-3xl opacity-80 leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                            {selectedCourse.description}
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 px-4">
                        <Target className="text-accent" size={24} />
                        <h2 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                            {t.courses.sections}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {selectedCourse.sections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => setSelectedSectionId(section.id)}
                                className="group flex items-center gap-6 p-6 rounded-[32px] border transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:bg-accent/5"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderColor: 'var(--border)',
                                }}
                            >
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-iner"
                                    style={{
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--accent)',
                                        boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
                                    }}>
                                    {index + 1}
                                </div>

                                <div className="flex-1 text-left space-y-1">
                                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors" style={{ color: 'var(--text-primary)' }}>
                                        {section.title}
                                    </h3>
                                    <p className="text-sm font-medium opacity-50 uppercase tracking-wider">
                                        {language === 'en' ? 'Section' : 'Chapitre'} {index + 1}
                                    </p>
                                </div>

                                <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-accent group-hover:border-accent group-hover:text-white"
                                    style={{ borderColor: 'var(--border)' }}>
                                    <ChevronRight size={20} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Vue Contenu de la Section
    if (selectedSection && selectedCourse) {
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
                    <span className="group-hover:text-accent transition-colors">{t.courses.backToCourses}</span>
                </button>

                <article className="space-y-12">
                    <header className="space-y-6 text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-accent/20">
                            <Sparkles size={14} />
                            <span>{selectedCourse.title}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
                            {selectedSection.title}
                        </h1>
                    </header>

                    <div className="p-8 md:p-12 rounded-[40px] border shadow-xl space-y-8 relative overflow-hidden"
                        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>

                        <div className="relative z-10 space-y-6">
                            {selectedSection.content.map((paragraph, i) => (
                                <p key={i} className="text-lg leading-relaxed font-medium opacity-90" style={{ color: 'var(--text-secondary)' }}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Subsections */}
                    {selectedSection.subsections?.map((subsection, i) => (
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
                    {selectedSection.codeExample && (
                        <section className="mt-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Code size={28} className="text-accent" />
                                <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                                    {selectedSection.codeExample.caption || 'Implémentation'}
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
                                        {selectedSection.codeExample.language}
                                    </span>
                                </div>
                                <pre className="p-8 overflow-x-auto text-sm font-mono leading-relaxed"
                                    style={{ backgroundColor: 'rgba(0,0,0,0.3)', color: 'var(--text-primary)' }}>
                                    <code>{selectedSection.codeExample.code}</code>
                                </pre>
                            </div>
                        </section>
                    )}

                    {/* Table */}
                    {selectedSection.table && (
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
                                                {selectedSection.table.headers.map((header, i) => (
                                                    <th key={i} className="p-6 text-xs font-black uppercase tracking-widest opacity-60 border-b"
                                                        style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {selectedSection.table.rows.map((row, i) => (
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

                    {/* Navigation Buttons footer */}
                    <div className="grid grid-cols-2 gap-6 mt-16 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
                        {(() => {
                            const currentIndex = selectedCourse.sections.findIndex(s => s.id === selectedSectionId);
                            const prevSection = currentIndex > 0 ? selectedCourse.sections[currentIndex - 1] : null;
                            const nextSection = currentIndex < selectedCourse.sections.length - 1 ? selectedCourse.sections[currentIndex + 1] : null;

                            return (
                                <>
                                    {prevSection ? (
                                        <button
                                            onClick={() => setSelectedSectionId(prevSection.id)}
                                            className="group flex flex-col gap-2 p-6 rounded-3xl border text-left transition-all hover:border-accent/40 hover:bg-accent/5"
                                            style={{ borderColor: 'var(--border)' }}
                                        >
                                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">
                                                <ArrowLeft size={12} />
                                                {language === 'en' ? 'PRECEDENT' : 'PRÉCÉDENT'}
                                            </div>
                                            <div className="font-bold text-lg line-clamp-1" style={{ color: 'var(--text-primary)' }}>
                                                {prevSection.title}
                                            </div>
                                        </button>
                                    ) : <div />}

                                    {nextSection ? (
                                        <button
                                            onClick={() => setSelectedSectionId(nextSection.id)}
                                            className="group flex flex-col gap-2 p-6 rounded-3xl border text-right items-end transition-all hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20"
                                            style={{ borderColor: 'var(--border)' }}
                                        >
                                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-40 group-hover:text-white/80 transition-colors">
                                                {language === 'en' ? 'NEXT' : 'SUIVANT'}
                                                <ChevronRight size={12} />
                                            </div>
                                            <div className="font-bold text-lg line-clamp-1 group-hover:text-white transition-colors" style={{ color: 'var(--text-primary)' }}>
                                                {nextSection.title}
                                            </div>
                                        </button>
                                    ) : <div />}
                                </>
                            );
                        })()}
                    </div>
                </article>
            </div>
        );
    }

    return null;
};

export default Courses;
