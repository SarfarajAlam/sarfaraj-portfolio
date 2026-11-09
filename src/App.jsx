import React, { useState } from 'react';
import { 
  Code, Smartphone, Terminal, Database, Cloud, 
  ExternalLink, Github, Linkedin, Mail, Phone, 
  MapPin, Download, Sparkles, Cpu, Layers, CheckCircle2, 
  X, Send, User, ChevronRight, FileText, Camera
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // AI Simulators inside modals
  const [geminiQuery, setGeminiQuery] = useState('');
  const [geminiResult, setGeminiResult] = useState('');
  const [tfDetected, setTfDetected] = useState(false);

  const projects = [
    {
      id: 'fedcorp',
      title: 'Fedcorp Banking App',
      category: 'mobile',
      tag: 'Fintech',
      desc: 'Secure mobile banking application featuring advanced security protocols, biometric auth, and native Android (Kotlin) / iOS (Swift) integration.',
      tech: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'REST API'],
      highlights: ['Biometric & End-to-end encryption', 'High-performance native module bridges', 'Zero-downtime transactional stability']
    },
    {
      id: 'neobuy',
      title: 'NeoBuy E-Commerce Platform',
      category: 'fullstack',
      tag: 'E-Commerce',
      desc: 'Comprehensive e-commerce suite with real-time order tracking, geolocation map routing, Stripe/Razorpay payments, and Node.js backend.',
      tech: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
      highlights: ['Real-time geolocation delivery tracking', 'Optimized payment gateway integration', 'Robust inventory management REST API']
    },
    {
      id: 'asco',
      title: 'ASCO Meeting Platform',
      category: 'ai',
      tag: 'AI & Web/Mobile',
      desc: 'Conference & medical guideline application supporting web and mobile with live video streaming, schedule management, and Gemini AI Guideline Assistant.',
      tech: ['Flutter', 'Dart', 'Gemini AI API', 'WebRTC', 'Python'],
      highlights: [
        '✨ Built-in Gemini AI Guideline Assistant to query clinical/disease data',
        'Cross-platform Web & Mobile single codebase delivery',
        'High-speed multimedia schedule streaming'
      ],
      hasAiDemo: 'gemini'
    },
    {
      id: 'lt-edutech',
      title: 'L&T Edutech Suite',
      category: 'ai',
      tag: 'EdTech & AI',
      desc: 'Advanced educational platform featuring interactive video players, custom media streaming, and TensorFlow-powered camera AI object detection.',
      tech: ['Flutter', 'TensorFlow Lite', 'Python', 'SQLite'],
      highlights: [
        '✨ TensorFlow Camera AI Object Detection triggering contextual video playback',
        'Interactive educational multimedia modules',
        'Offline-first SQLite caching layer'
      ],
      hasAiDemo: 'tensorflow'
    },
    {
      id: 'srplus',
      title: 'SRPlus Management App',
      category: 'mobile',
      tag: 'Enterprise',
      desc: 'Enterprise workforce management solution enabling real-time employee geolocation tracking, shift scheduling, and online task assignment.',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'Sockets'],
      highlights: ['Live GPS tracking & telemetry', 'Automated task allocation workflow', 'Scalable WebSocket communication']
    },
    {
      id: 'dhyanchand',
      title: 'Dhyanchand Museum App',
      category: 'desktop',
      tag: 'Desktop & Kiosk',
      desc: 'Interactive desktop museum application built with Flutter featuring custom kiosk UI, multimedia archival players, and hologram camera features.',
      tech: ['Flutter Desktop', 'Dart', 'Custom UI/UX'],
      highlights: ['Cross-platform desktop architecture', 'Interactive hologram camera module', 'High-definition archival video playback']
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleGeminiQuery = (e) => {
    e.preventDefault();
    if (!geminiQuery.trim()) return;
    setGeminiResult('Analyzing medical protocols and clinical guidelines via Gemini AI...');
    setTimeout(() => {
      setGeminiResult(`[Gemini AI Response]: Based on oncology protocol guidelines for "${geminiQuery}", recommended staging requires biomarker evaluation, multidisciplinary tumor board review, and adherence to NCCN stage-specific pathways.`);
    }, 1000);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePhoto(url);
      setIsPhotoModalOpen(false);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center font-bold text-lg text-black shadow-lg shadow-cyan-500/20">
              SA
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block">Sarfaraj Alam</span>
              <span className="text-xs text-cyan-400 font-mono">Senior Full Stack & Mobile Engineer</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsCvModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-sm font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Interactive CV</span>
            </button>
            <a 
              href="https://wa.me/919501613302" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-28 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            6+ Years Experience • Bangalore, India
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Building High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Mobile & Web Ecosystems</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Senior Software Engineer specializing in scalable cross-platform Flutter mobile architectures (iOS, Android, Desktop), React.js web apps, and robust Node.js/Python backends integrated with AI models like Gemini and TensorFlow.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-xl shadow-cyan-500/25"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setIsCvModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 font-semibold transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Full CV</span>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/sarfaraj-alam-ab7148141" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sarfaraj.dev1@gmail.com" className="hover:text-cyan-400 transition-colors p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+919501613302" className="hover:text-cyan-400 transition-colors p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Profile Card / Photo Frame */}
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-72 sm:w-80 rounded-3xl bg-slate-900 border border-slate-800 p-4 shadow-2xl">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 mb-4">
              <img 
                src={profilePhoto} 
                alt="Sarfaraj Alam" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button 
                onClick={() => setIsPhotoModalOpen(true)}
                className="absolute bottom-3 right-3 p-3 rounded-xl bg-slate-900/90 hover:bg-cyan-500 hover:text-black border border-slate-700 backdrop-blur-md transition-all shadow-lg flex items-center gap-2 text-xs font-semibold"
              >
                <Camera className="w-4 h-4 text-cyan-400 group-hover:text-black" />
                <span>Customize Photo</span>
              </button>
            </div>
            <div className="space-y-1 px-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Sarfaraj Alam</h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Available</span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Bangalore, 560087, India</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technical Expertise */}
      <section id="expertise" className="py-24 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-3">Core Competencies</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Engineering Stack & Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile Cross-Platform</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                5+ years crafting production-grade Flutter & Dart applications. Native module bridges with Kotlin (Android) and Swift (iOS).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Full Stack Web</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Robust web applications and RESTful APIs built with React.js, Node.js, Express, and Python for seamless multi-platform delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">AI Integrations</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Integrated Gemini AI APIs for clinical/guideline intelligence and TensorFlow Lite for real-time camera object detection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cloud & DevOps</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                AWS cloud deployments, MongoDB & MySQL database optimization, domain consolidations, and automated CI/CD release pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-3">Portfolio Showcase</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Production Projects</h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
              {['all', 'mobile', 'fullstack', 'ai', 'desktop'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                    activeTab === tab 
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setGeminiResult('');
                  setGeminiQuery('');
                }}
                className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
                      {project.tag}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">{project.desc}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Case Study & Live Demo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-24 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-3">Career Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Professional Work Experience</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
            {[
              {
                company: "PradeepIT Global Consulting Private Limited",
                role: "Full Stack Developer",
                period: "03/2025 – Present",
                desc: "Spearheading end-to-end development of cross-platform applications utilizing Python, Flutter/Dart, Kotlin, and Swift. Optimizing state management and enforcing rigorous performance standards across client projects."
              },
              {
                company: "Splenta System Pvt. Ltd.",
                role: "Flutter Developer",
                period: "01/2024 – 02/2025",
                desc: "Architected robust cross-platform mobile apps using Flutter and Dart. Implemented advanced async data handling and performance tuning for high-speed reliable user experiences."
              },
              {
                company: "Skillablers Technologies Pvt. Ltd.",
                role: "Lead Flutter Developer",
                period: "04/2021 – 01/2024",
                desc: "Led full development cycles for mobile applications with native Kotlin/Swift bridges. Developed RESTful Express.js backends, React.js web interfaces, and optimized MongoDB databases."
              },
              {
                company: "HNG Labs Pvt. Ltd.",
                role: "Android Developer",
                period: "08/2019 – 04/2021",
                desc: "Focused on native Android front-end architecture, modular state management systems, and reliable end-to-end software delivery."
              }
            ].map((job, idx) => (
              <div key={idx} className="relative pl-10">
                <div className="absolute left-2.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 border-4 border-slate-950"></div>
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-bold text-lg text-white">{job.role} <span className="text-cyan-400 font-normal">@ {job.company}</span></h3>
                    <span className="font-mono text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full w-fit">{job.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-3">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Let's build something exceptional together.</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you need a senior mobile engineer for a Flutter ecosystem or a full-stack specialist for React and Node.js, my inbox is always open.
              </p>

              <div className="space-y-4">
                <a href="mailto:sarfaraj.dev1@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email Me</span>
                    <span className="font-semibold text-slate-200">sarfaraj.dev1@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+919501613302" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Call / WhatsApp</span>
                    <span className="font-semibold text-slate-200">+91 9501 61 3302</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 relative">
              {formSubmitted ? (
                <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. Sarfaraj will get back to you shortly.</p>
                </div>
              ) : null}

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Tell me about your project..." 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/80 text-center text-xs text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} Sarfaraj Alam. Designed & Built with React, Vite & Tailwind CSS.</p>
      </footer>

      {/* Project Detail Modal with Live AI Demos */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20 inline-block mb-4">
              {selectedProject.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">{selectedProject.desc}</p>

            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">Key Technical Highlights</h4>
            <ul className="space-y-2 mb-8">
              {selectedProject.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Interactive AI Simulation for ASCO */}
            {selectedProject.hasAiDemo === 'gemini' && (
              <div className="mb-8 p-6 rounded-2xl bg-slate-950 border border-cyan-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-bold text-sm text-cyan-400">Live Gemini AI Guideline Assistant Simulator</h4>
                </div>
                <p className="text-xs text-slate-400 mb-4">Test the AI assistant integrated into the ASCO Meeting platform:</p>
                
                <form onSubmit={handleGeminiQuery} className="flex gap-2 mb-4">
                  <input 
                    type="text" 
                    value={geminiQuery}
                    onChange={(e) => setGeminiQuery(e.target.value)}
                    placeholder="Ask about oncology guideline (e.g. breast cancer protocol)..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                  <button type="submit" className="px-4 py-2.5 rounded-xl bg-cyan-500 text-black text-xs font-bold hover:opacity-90">
                    Query AI
                  </button>
                </form>

                {geminiResult && (
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 leading-relaxed">
                    {geminiResult}
                  </div>
                )}
              </div>
            )}

            {/* Interactive TensorFlow Simulation for L&T Edutech */}
            {selectedProject.hasAiDemo === 'tensorflow' && (
              <div className="mb-8 p-6 rounded-2xl bg-slate-950 border border-cyan-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-bold text-sm text-cyan-400">Live TensorFlow Object Detection Simulator</h4>
                </div>
                <p className="text-xs text-slate-400 mb-4">Simulate camera object detection triggering contextual info videos:</p>
                
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Camera Feed Status</span>
                    <span className="text-sm font-bold text-emerald-400">{tfDetected ? 'Object Detected: Gearbox Assembly [98.4%]' : 'Scanning for objects...'}</span>
                  </div>
                  <button 
                    onClick={() => setTfDetected(!tfDetected)}
                    className="px-3.5 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-black transition-all"
                  >
                    {tfDetected ? 'Reset Scan' : 'Simulate Detection'}
                  </button>
                </div>

                {tfDetected && (
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-xs text-cyan-300 border border-cyan-500/20">
                    🎬 Triggering contextual info video player for detected engineering module.
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {selectedProject.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Profile Photo Customizer Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <button 
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-2">Update Profile Photo</h3>
            <p className="text-xs text-slate-400 mb-6">Upload a photo from your computer to customize your portfolio hero section instantly.</p>
            
            <input 
              type="file" 
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full text-xs text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-cyan-500 file:text-black hover:file:opacity-90 cursor-pointer mb-4"
            />
          </div>
        </div>
      )}

      {/* Interactive CV Modal */}
      {isCvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <button 
              onClick={() => setIsCvModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
              <div>
                <h2 className="text-2xl font-bold">Sarfaraj Alam</h2>
                <p className="text-cyan-400 text-sm font-mono">Senior Mobile & Full Stack Developer</p>
              </div>
              <button 
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs flex items-center gap-2 hover:opacity-90"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
            </div>

            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">Professional Summary</h4>
                <p className="text-slate-400 leading-relaxed">
                  Results-driven Mobile and Full Stack Developer with 6+ years of professional software engineering experience, specializing in cross-platform Flutter mobile development, React.js web apps, and Node.js/Python backends.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">Core Technical Skills</h4>
                <p className="text-slate-400"><strong>Mobile:</strong> Flutter, Dart, Android SDK, Kotlin, Swift</p>
                <p className="text-slate-400"><strong>Web & Backend:</strong> React.js, Node.js, Express, Python, MongoDB, MySQL</p>
                <p className="text-slate-400"><strong>AI & Advanced:</strong> Gemini AI API, TensorFlow Lite, CI/CD Pipelines</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">Education</h4>
                <p className="text-slate-400"><strong>Lovely Professional University</strong> — Bachelor of Science in Computer Science (2014 – 2017)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
