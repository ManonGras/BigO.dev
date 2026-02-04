import React from 'react';
import { COURSES, COURSES_FR } from '../../data/courses';
import { BookOpen, ChevronRight, Code, Table as TableIcon, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Course, CourseSection } from '../../types';

const Courses: React.FC = () => {
    const { t, language } = useLanguage();
    const { currentPalette } = useTheme();

    const [selectedCourseId, setSelectedCourseId] = React.useState<string | null>(null);
    const [selectedSectionId, setSelectedSectionId] = React.useState<string | null>(null);

    const courses = language === 'en' ? COURSES : COURSES_FR;
    const selectedCourse = courses.find(c => c.id === selectedCourseId);
    const selectedSection = selectedCourse?.sections.find(s => s.id === selectedSectionId);

    // Course List View
    if (!selectedCourseId) {
        return (
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-black mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {t.courses.selectCourse}
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                        {language === 'en'
                            ? 'Comprehensive courses on algorithm design, correctness proofs, and complexity analysis'
                            : 'Cours magistraux sur la conception, la preuve de correction et l\'analyse de complexité des algorithmes'}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {courses.map((course) => (
                        <button
                            key={course.id}
                            onClick={() => setSelectedCourseId(course.id)}
                            className="text-left border rounded-3xl p-8 shadow-2xl transition-all hover:scale-[1.02] group"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                borderColor: 'var(--border)',
                            }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-xl" style={{ backgroundColor: `${currentPalette.colors.accent}22` }}>
                                            <BookOpen size={24} style={{ color: 'var(--accent)' }} />
                                        </div>
                                        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                            {course.title}
                                        </h2>
                                    </div>
                                    <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                                        {course.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                                        <span>{course.sections.length} {t.courses.sections}</span>
                                    </div>
                                </div>
                                <ChevronRight
                                    size={28}
                                    className="shrink-0 transition-transform group-hover:translate-x-2"
                                    style={{ color: 'var(--accent)' }}
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // Section List View
    if (!selectedSectionId && selectedCourse) {
        return (
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={() => setSelectedCourseId(null)}
                    className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl transition-all hover:opacity-80"
                    style={{ color: 'var(--accent)', backgroundColor: `${currentPalette.colors.accent}15` }}
                >
                    <ArrowLeft size={20} />
                    {t.courses.backToCourses}
                </button>

                <div className="mb-8">
                    <h1 className="text-4xl font-black mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {selectedCourse.title}
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                        {selectedCourse.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {selectedCourse.sections.map((section, index) => (
                        <button
                            key={section.id}
                            onClick={() => setSelectedSectionId(section.id)}
                            className="text-left border rounded-2xl p-6 shadow-xl transition-all hover:scale-[1.01] group"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                borderColor: 'var(--border)',
                            }}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4 flex-1">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
                                        style={{
                                            backgroundColor: `${currentPalette.colors.accent}22`,
                                            color: 'var(--accent)'
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                        {section.title}
                                    </h3>
                                </div>
                                <ChevronRight
                                    size={24}
                                    className="shrink-0 transition-transform group-hover:translate-x-2"
                                    style={{ color: 'var(--accent)' }}
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // Section Content View
    if (selectedSection && selectedCourse) {
        return (
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => setSelectedSectionId(null)}
                    className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl transition-all hover:opacity-80"
                    style={{ color: 'var(--accent)', backgroundColor: `${currentPalette.colors.accent}15` }}
                >
                    <ArrowLeft size={20} />
                    {t.courses.backToCourses}
                </button>

                <article className="border rounded-3xl p-8 shadow-2xl space-y-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <header>
                        <h1 className="text-3xl font-black mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                            {selectedSection.title}
                        </h1>
                    </header>

                    {/* Main Content */}
                    {selectedSection.content.map((paragraph, i) => (
                        <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {paragraph}
                        </p>
                    ))}

                    {/* Subsections */}
                    {selectedSection.subsections?.map((subsection, i) => (
                        <section key={i} className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                                <span className="w-1 h-8 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                                {subsection.title}
                            </h2>
                            {subsection.content.map((paragraph, j) => (
                                <p key={j} className="text-base leading-relaxed pl-7" style={{ color: 'var(--text-secondary)' }}>
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    ))}

                    {/* Code Example */}
                    {selectedSection.codeExample && (
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                <Code size={20} style={{ color: 'var(--accent)' }} />
                                {selectedSection.codeExample.caption || 'Code Example'}
                            </h3>
                            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
                                <div className="px-4 py-2 border-b flex items-center gap-2" style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderColor: 'var(--border)' }}>
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="ml-2 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                                        {selectedSection.codeExample.language}
                                    </span>
                                </div>
                                <pre className="p-6 overflow-x-auto" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                                    <code className="text-sm font-mono" style={{ color: 'var(--text-primary)' }}>
                                        {selectedSection.codeExample.code}
                                    </code>
                                </pre>
                            </div>
                        </section>
                    )}

                    {/* Table */}
                    {selectedSection.table && (
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                <TableIcon size={20} style={{ color: 'var(--accent)' }} />
                                {language === 'en' ? 'Summary Table' : 'Tableau Récapitulatif'}
                            </h3>
                            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
                                <table className="w-full">
                                    <thead>
                                        <tr style={{ backgroundColor: `${currentPalette.colors.accent}22` }}>
                                            {selectedSection.table.headers.map((header, i) => (
                                                <th
                                                    key={i}
                                                    className="px-6 py-4 text-left font-bold text-sm"
                                                    style={{ color: 'var(--accent)' }}
                                                >
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedSection.table.rows.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="border-t"
                                                style={{
                                                    borderColor: 'var(--border)',
                                                    backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.2)'
                                                }}
                                            >
                                                {row.map((cell, j) => (
                                                    <td
                                                        key={j}
                                                        className="px-6 py-4 text-sm font-mono"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                    >
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}
                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                    {(() => {
                        const currentIndex = selectedCourse.sections.findIndex(s => s.id === selectedSectionId);
                        const prevSection = currentIndex > 0 ? selectedCourse.sections[currentIndex - 1] : null;
                        const nextSection = currentIndex < selectedCourse.sections.length - 1 ? selectedCourse.sections[currentIndex + 1] : null;

                        return (
                            <>
                                {prevSection ? (
                                    <button
                                        onClick={() => setSelectedSectionId(prevSection.id)}
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:opacity-80"
                                        style={{ backgroundColor: `${currentPalette.colors.accent}22`, color: 'var(--accent)' }}
                                    >
                                        <ArrowLeft size={20} />
                                        {language === 'en' ? 'Previous' : 'Précédent'}
                                    </button>
                                ) : <div />}

                                {nextSection ? (
                                    <button
                                        onClick={() => setSelectedSectionId(nextSection.id)}
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:opacity-80"
                                        style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                                    >
                                        {language === 'en' ? 'Next' : 'Suivant'}
                                        <ChevronRight size={20} />
                                    </button>
                                ) : <div />}
                            </>
                        );
                    })()}
                </div>
            </div>
        );
    }

    return null;
};

export default Courses;
