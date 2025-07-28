import React, { useState } from 'react';
import { Download, Printer, ZoomIn, ZoomOut, Maximize2, Edit, Save, X, Eye, EyeOff } from 'lucide-react';

// Sample resume data in the recommended format

const jsonw = {
    "personal": {
        "name": "John Doe",
        "title": "Frontend Developer | 3D Web Enthusiast",
        "email": "johndoe@example.com",
        "phone": "+1-123-456-7890",
        "location": "New York, USA",
        "website": null,
        "linkedin": "linkedin.com/in/johndoe",
        "github": "github.com/johndoe"
    },
    "sections": [
        {
            "id": "summary",
            "title": "Professional Summary",
            "type": "markdown",
            "content": "Highly skilled and innovative Frontend Developer with **2+ years of experience**, passionate about crafting immersive and high-performance web experiences. Proficient in **React.js** and **Next.js**, with a strong foundational understanding and growing expertise in **3D graphics development using Three.js and WebGL**. Adept at optimizing applications for complex rendering, collaborating with UI/UX designers and backend engineers, and delivering clean, maintainable code within agile environments.",
            "order": 1,
            "visible": true
        },
        {
            "id": "skills",
            "title": "Technical Skills",
            "type": "markdown",
            "content": "*   **Languages:** HTML, CSS, JavaScript, TypeScript\n*   **Frameworks:** React.js, Next.js, Bootstrap, Tailwind CSS\n*   **3D Graphics & WebGL:** Three.js, WebGL, GLSL (Shaders), Blender (Basic)\n*   **Tools:** Git, VS Code, Chrome DevTools, npm, Figma\n*   **Concepts & Methodologies:** RESTful APIs, Responsive Design, Web Accessibility (WCAG), Cross-Browser Compatibility, Design Systems, Agile Methodologies, Real-time Rendering",
            "order": 2,
            "visible": true
        },
        {
            "id": "experience",
            "title": "Work Experience",
            "type": "markdown",
            "content": "## Frontend Developer\n**XYZ Solutions** • New York, NY • *Jan 2023 - Present*\n- Developed and maintained modern, responsive web applications using **React.js** and **Next.js**, ensuring user-friendly interfaces and high performance.\n- Collaborated closely with UI/UX designers to translate complex design mockups from Figma into pixel-perfect and user-centric UIs, ensuring adherence to design systems.\n- Significantly **optimized application performance** (e.g., achieving 15% faster initial load times) and enhanced SEO/accessibility (WCAG) for improved user experience and search engine ranking.\n- Architected and built reusable React components and managed global state with Redux, contributing to a scalable and maintainable codebase.\n- Participated actively in agile ceremonies (daily standups, sprint planning) and conducted thorough code reviews to maintain high code quality and best practices.\n- Engaged with backend API specifications and contributed to discussions to ensure seamless frontend-backend integration and data flow.\n\n## Web Development Intern\n**WebGenix** • Remote • *Jul 2021 - Dec 2022*\n- Assisted in the development of responsive company websites using HTML, CSS, and JavaScript, contributing to front-end feature implementation.\n- Actively participated in code reviews and daily standups within an agile development team, fostering collaborative problem-solving.\n- Identified and resolved UI bugs and enhanced cross-browser compatibility across various web platforms, improving user experience.",
            "order": 3,
            "visible": true
        },
        {
            "id": "education",
            "title": "Education",
            "type": "markdown",
            "content": "## Bachelor of Technology in Computer Science\n**ABC University** • *2018 - 2022*",
            "order": 4,
            "visible": true
        },
        {
            "id": "projects",
            "title": "Projects",
            "type": "markdown",
            "content": "*   **Interactive 3D Product Viewer:** Developed a responsive web application using **Three.js** and React to display interactive 3D models of products, featuring customizable materials, lighting, and camera controls, demonstrating expertise in 3D rendering and user interaction.\n*   **Portfolio Website:** Designed and developed a responsive personal portfolio using React and Tailwind CSS, showcasing modern web development skills.\n*   **Weather App:** Created a live weather dashboard application utilizing the OpenWeather API to display real-time weather data.",
            "order": 5,
            "visible": true
        },
        {
            "id": "certifications",
            "title": "Certifications",
            "type": "markdown",
            "content": "*   **Frontend Developer Certification** freeCodeCamp\n*   **Responsive Web Design** Coursera",
            "order": 6,
            "visible": true
        },
        {
            "id": "interests",
            "title": "Interests",
            "type": "markdown",
            "content": "UI/UX Design, **3D Web Development**, Shader Programming, Open Source Contributions, Blogging, Tech Meetups",
            "order": 7,
            "visible": true
        }
    ]
}

const sampleResumeData = {
    personal: {
        name: "John Doe",
        title: "Senior Software Engineer",
        email: "john.doe@email.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        website: "johndoe.dev",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe"
    },
    sections: [
        {
            id: "summary",
            title: "Professional Summary",
            type: "markdown",
            content: "Experienced Software Engineer with **5+ years** developing scalable web applications using React, Node.js, and cloud technologies. Proven track record of leading cross-functional teams and delivering high-quality software solutions that improve user experience and business outcomes.",
            order: 1,
            visible: true
        },
        {
            id: "experience",
            title: "Experience",
            type: "markdown",
            content: "## Senior Software Engineer\n**Tech Solutions Inc.** • San Francisco, CA • *2021 - Present*\n\n- Led development of React-based dashboard serving **10,000+ daily users**\n- Reduced application load time by **40%** through code optimization and caching\n- Mentored junior developers and established coding best practices\n- Implemented CI/CD pipeline reducing deployment time by **60%**\n\n## Software Engineer\n**StartupXYZ** • Remote • *2019 - 2021*\n\n- Built RESTful APIs using Node.js and Express serving **1M+ requests daily**\n- Implemented automated testing resulting in **95% code coverage**\n- Collaborated with design team to create responsive user interfaces\n- Optimized database queries reducing response time by **30%**",
            order: 2,
            visible: true
        },
        {
            id: "skills",
            title: "Technical Skills",
            type: "markdown",
            content: "**Frontend:** React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS\n**Backend:** Node.js, Express, Python, Django, PostgreSQL, MongoDB\n**Tools & Cloud:** Git, Docker, AWS, Jenkins, Kubernetes, Terraform\n**Other:** Agile, Test-Driven Development, System Design, GraphQL",
            order: 3,
            visible: true
        },
        {
            id: "education",
            title: "Education",
            type: "markdown",
            content: "## Bachelor of Science in Computer Science\n**University of California, Berkeley** • Berkeley, CA • *2015 - 2019*\n\n**GPA:** 3.8/4.0\n**Relevant Coursework:** Data Structures, Algorithms, Software Engineering, Database Systems",
            order: 4,
            visible: true
        },
        {
            id: "projects",
            title: "Projects",
            type: "markdown",
            content: "## E-commerce Platform\n**Technologies:** React, Node.js, MongoDB, Stripe API\n**Repository:** [github.com/johndoe/ecommerce](https://github.com/johndoe/ecommerce)\n\nFull-stack web application with real-time inventory management, secure payment processing, and mobile-responsive design.\n\n## Task Management App\n**Technologies:** React Native, Firebase, Redux\n**Repository:** [github.com/johndoe/taskapp](https://github.com/johndoe/taskapp)\n\nMobile-first productivity app with real-time collaboration and offline-first architecture.",
            order: 5,
            visible: true
        }
    ]
};

const EditableResumeViewer = ({ initialData = jsonw }) => {
    console.log(initialData)
    const [resumeData, setResumeData] = useState(initialData);
    const [zoomLevel, setZoomLevel] = useState(100);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [editingSection, setEditingSection] = useState(null);
    const [editingPersonal, setEditingPersonal] = useState(false);
    const [tempContent, setTempContent] = useState('');

    const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 200));
    const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));
    const handleDownload = () => console.log('Download resume');
    const handlePrint = () => window.print();
    const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

    const parseMarkdown = (markdown) => {
        if (!markdown) return '';
        return markdown
            .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mb-3">$1</h3>')
            .replace(/^## (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mb-3">$1</h3>')
            .replace(/^# (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 mb-4">$1</h2>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
            .replace(/^- (.*$)/gm, '<li class="ml-4 mb-1">• $1</li>')
            .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')
            .replace(/\n/g, '<br>');
    };

    const startEditingSection = (sectionId) => {
        const section = resumeData.sections.find(s => s.id === sectionId);
        setTempContent(section.content);
        setEditingSection(sectionId);
    };

    const saveSection = () => {
        setResumeData(prev => ({
            ...prev,
            sections: prev.sections.map(section =>
                section.id === editingSection
                    ? { ...section, content: tempContent }
                    : section
            )
        }));
        setEditingSection(null);
        setTempContent('');
    };

    const cancelEdit = () => {
        setEditingSection(null);
        setTempContent('');
    };

    const toggleSectionVisibility = (sectionId) => {
        setResumeData(prev => ({
            ...prev,
            sections: prev.sections.map(section =>
                section.id === sectionId
                    ? { ...section, visible: !section.visible }
                    : section
            )
        }));
    };

    const startEditingPersonal = () => {
        setEditingPersonal(true);
    };

    const savePersonal = (newPersonalData) => {
        setResumeData(prev => ({
            ...prev,
            personal: newPersonalData
        }));
        setEditingPersonal(false);
    };

    const renderPersonalInfo = () => {
        if (editingPersonal) {
            return (
                <div className="text-center mb-8 p-4 border border-blue-300 rounded-lg bg-blue-50">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            value={resumeData.personal.name}
                            onChange={(e) => setResumeData(prev => ({
                                ...prev,
                                personal: { ...prev.personal, name: e.target.value }
                            }))}
                            className="p-2 border rounded"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            value={resumeData.personal.title}
                            onChange={(e) => setResumeData(prev => ({
                                ...prev,
                                personal: { ...prev.personal, title: e.target.value }
                            }))}
                            className="p-2 border rounded"
                            placeholder="Professional Title"
                        />
                        <input
                            type="email"
                            value={resumeData.personal.email}
                            onChange={(e) => setResumeData(prev => ({
                                ...prev,
                                personal: { ...prev.personal, email: e.target.value }
                            }))}
                            className="p-2 border rounded"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            value={resumeData.personal.phone}
                            onChange={(e) => setResumeData(prev => ({
                                ...prev,
                                personal: { ...prev.personal, phone: e.target.value }
                            }))}
                            className="p-2 border rounded"
                            placeholder="Phone"
                        />
                        <input
                            type="text"
                            value={resumeData.personal.location}
                            onChange={(e) => setResumeData(prev => ({
                                ...prev,
                                personal: { ...prev.personal, location: e.target.value }
                            }))}
                            className="p-2 border rounded"
                            placeholder="Location"
                        />
                        <input
                            type="text"
                            value={resumeData.personal.website || ''}
                            onChange={(e) => setResumeData(prev => ({
                                ...prev,
                                personal: { ...prev.personal, website: e.target.value }
                            }))}
                            className="p-2 border rounded"
                            placeholder="Website"
                        />
                    </div>
                    <div className="flex justify-center space-x-2">
                        <button
                            onClick={() => setEditingPersonal(false)}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center space-x-1"
                        >
                            <Save size={16} />
                            <span>Save</span>
                        </button>
                        <button
                            onClick={() => setEditingPersonal(false)}
                            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center space-x-1"
                        >
                            <X size={16} />
                            <span>Cancel</span>
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="text-center mb-8 relative group">
                <button
                    onClick={startEditingPersonal}
                    className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-100 rounded-full hover:bg-blue-200"
                    title="Edit Personal Info"
                >
                    <Edit size={16} />
                </button>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{resumeData.personal.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{resumeData.personal.title}</p>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                    {resumeData.personal.email && <span>{resumeData.personal.email}</span>}
                    {resumeData.personal.phone && <><span>•</span><span>{resumeData.personal.phone}</span></>}
                    {resumeData.personal.location && <><span>•</span><span>{resumeData.personal.location}</span></>}
                    {resumeData.personal.website && <><span>•</span><span>{resumeData.personal.website}</span></>}
                </div>
            </div>
        );
    };

    const visibleSections = resumeData.sections
        .filter(section => section.visible)
        .sort((a, b) => a.order - b.order);

    return (
        <div className={`bg-gray-50 min-h-screen ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
            {/* Toolbar */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-lg font-semibold text-gray-800">Editable Resume Viewer</h1>
                    <span className="text-sm text-gray-500">
                        {resumeData.personal.name} - {resumeData.personal.title}
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={handleZoomOut}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Zoom Out"
                    >
                        <ZoomOut size={18} />
                    </button>
                    <span className="text-sm text-gray-600 min-w-12 text-center">{zoomLevel}%</span>
                    <button
                        onClick={handleZoomIn}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Zoom In"
                    >
                        <ZoomIn size={18} />
                    </button>
                    <div className="w-px h-6 bg-gray-300 mx-2"></div>
                    <button
                        onClick={toggleFullscreen}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Fullscreen"
                    >
                        <Maximize2 size={18} />
                    </button>
                    <button
                        onClick={handlePrint}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Print"
                    >
                        <Printer size={18} />
                    </button>
                    <button
                        onClick={handleDownload}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                        <Download size={16} />
                        <span>Download</span>
                    </button>
                </div>
            </div>

            {/* Resume Container */}
            <div className="flex justify-center p-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-gray-400 rounded-lg transform translate-x-1 translate-y-1"></div>

                    <div
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `scale(${zoomLevel / 100})`,
                            transformOrigin: 'top center',
                            width: '8.5in',
                            minHeight: '11in'
                        }}
                    >
                        <div className="p-12 text-gray-800">
                            {/* Personal Info */}
                            {renderPersonalInfo()}

                            {/* Sections */}
                            {visibleSections.map((section) => (
                                <section key={section.id} className="mb-8 relative group">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 flex-grow">
                                            {section.title}
                                        </h2>
                                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => toggleSectionVisibility(section.id)}
                                                className="p-1 bg-gray-100 rounded hover:bg-gray-200"
                                                title="Toggle Visibility"
                                            >
                                                {section.visible ? <Eye size={16} /> : <EyeOff size={16} />}
                                            </button>
                                            <button
                                                onClick={() => startEditingSection(section.id)}
                                                className="p-1 bg-blue-100 rounded hover:bg-blue-200"
                                                title="Edit Section"
                                            >
                                                <Edit size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {editingSection === section.id ? (
                                        <div className="border border-blue-300 rounded-lg p-4 bg-blue-50">
                                            <textarea
                                                value={tempContent}
                                                onChange={(e) => setTempContent(e.target.value)}
                                                className="w-full h-64 p-3 border rounded-lg font-mono text-sm"
                                                placeholder="Enter markdown content..."
                                            />
                                            <div className="flex justify-end space-x-2 mt-4">
                                                <button
                                                    onClick={saveSection}
                                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center space-x-1"
                                                >
                                                    <Save size={16} />
                                                    <span>Save</span>
                                                </button>
                                                <button
                                                    onClick={cancelEdit}
                                                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center space-x-1"
                                                >
                                                    <X size={16} />
                                                    <span>Cancel</span>
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="prose prose-gray max-w-none">
                                            <div dangerouslySetInnerHTML={{ __html: parseMarkdown(section.content) }} />
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditableResumeViewer;