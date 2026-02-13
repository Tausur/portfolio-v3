import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ContactForm } from "@/components/ContactForm";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { 
  Terminal, Shield, Server, Network, Code, 
  Cpu, Lock, Globe, Database, ArrowRight,
  Github, Linkedin, Mail, CheckCircle, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [siteData] = useState(() => {
    const saved = localStorage.getItem("site_content");
    return saved ? JSON.parse(saved) : {
      hero: {
        title: "Hello, I'm Tausur",
        tagline: "Exploring the digital frontier through ethical hacking, defensive security, and system internals. Building the future, one secure packet at a time."
      },
      about: {
        college: "Notre Dame College",
        school: "Comilla Zilla School"
      }
    };
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      
      <Navigation />

      <main className="relative pt-20">
        
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />

          <div className="max-w-4xl mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                System Online
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight mb-6">
                {siteData.hero.title.split(", I'm ")[0]}, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">{siteData.hero.title.split(", I'm ")[1]}</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground font-mono h-[60px] md:h-[40px] mb-8">
                <Typewriter
                  options={{
                    strings: [
                      "Cybersecurity Learner",
                      "Linux Enthusiast",
                      "Network Explorer",
                      "Future Blue Teamer"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                {siteData.hero.tagline}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-bold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Init Connection
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/20 text-foreground hover:border-primary/50 hover:bg-primary/10 font-mono"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Profile
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
            <ArrowRight className="rotate-90 w-6 h-6 text-primary" />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <SectionHeading title="whoami" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-mono text-sm leading-relaxed space-y-4 text-muted-foreground border-l-2 border-primary/20 pl-6"
              >
                <p>
                  <span className="text-primary">user@system:~$</span> cat profile.txt
                </p>
                <p>
                  I am a student currently studying at <span className="text-foreground font-semibold">{siteData.about.college}</span>. Previously, I was a student of <span className="text-foreground font-semibold">{siteData.about.school}</span>.
                </p>
                <p>
                  My daily driver is <span className="text-foreground font-semibold">Ubuntu Linux</span>. I spend my free time analyzing packets in Wireshark, solving CTFs on TryHackMe, and diving deep into OS internals.
                </p>
                <p>
                  I believe in hands-on learning. Theory is important, but breaking (and fixing) things in a lab environment is where the real understanding happens.
                </p>
                
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-foreground font-bold mb-3 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-primary" />
                      Education & Certificates
                    </h3>
                    <div className="space-y-4 border-l border-primary/10 pl-4 ml-2">
                      <div className="relative">
                        <div className="absolute -left-[1.35rem] top-2 w-2 h-2 rounded-full bg-primary/40" />
                        <h4 className="text-foreground font-semibold">{siteData.about.college}</h4>
                        <p className="text-xs text-primary/60">Higher Secondary Certificate | Current</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[1.35rem] top-2 w-2 h-2 rounded-full bg-primary/40" />
                        <h4 className="text-foreground font-semibold">{siteData.about.school}</h4>
                        <p className="text-xs text-primary/60">Secondary School Certificate | Completed</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[1.35rem] top-2 w-2 h-2 rounded-full bg-primary/40" />
                        <h4 className="text-foreground font-semibold">TryHackMe Certifications</h4>
                        <p className="text-xs text-primary/60">Pre-Security, Complete Beginner | Completed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-primary/60">Location</span>
                    <span className="text-foreground">Dhaka, BD</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-primary/60">Status</span>
                    <span className="text-foreground">Student</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-primary/60">Focus</span>
                    <span className="text-foreground">Blue Team</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3 scale-105 blur-lg opacity-30" />
                <div className="bg-background border border-primary/20 rounded-lg p-6 relative font-mono text-sm shadow-xl">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex">
                      <span className="w-24 text-primary">Attributes</span>
                      <span>[ "Curious", "Persistent", "Analytical" ]</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-primary">Interests</span>
                      <span>[ "Network Security", "Linux", "Forensics" ]</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-primary">Learning</span>
                      <span className="text-yellow-500">"Active"</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-primary">Uptime</span>
                      <span>17 Years</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="capabilities" subtitle="Tools and technologies in my arsenal." align="center" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard 
                title="Linux Fundamentals"
                skills={["Bash Scripting", "File Systems", "Permissions", "Ubuntu/Debian", "Process Management"]}
                icon={<Terminal className="w-6 h-6" />}
                delay={0.1}
              />
              <SkillCard 
                title="Networking"
                skills={["TCP/IP Model", "DNS & DHCP", "HTTP/HTTPS", "Wireshark Analysis", "Subnetting"]}
                icon={<Network className="w-6 h-6" />}
                delay={0.2}
              />
              <SkillCard 
                title="Cybersecurity"
                skills={["OWASP Top 10", "Reconnaissance", "Vulnerability Scanning", "Social Engineering", "Cryptography Basics"]}
                icon={<Shield className="w-6 h-6" />}
                delay={0.3}
              />
              <SkillCard 
                title="Security Tools"
                skills={["Nmap", "Burp Suite", "Metasploit (Basic)", "John the Ripper", "Hydra"]}
                icon={<Lock className="w-6 h-6" />}
                delay={0.4}
              />
              <SkillCard 
                title="Programming"
                skills={["Python", "Shell Scripting", "HTML/CSS", "JavaScript Basics", "Git"]}
                icon={<Code className="w-6 h-6" />}
                delay={0.5}
              />
              <SkillCard 
                title="Operating Systems"
                skills={["Linux (Daily Driver)", "Windows Internals", "Virtualization (VMware/VirtualBox)"]}
                icon={<Cpu className="w-6 h-6" />}
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* LEARNING / LABS */}
        <section id="learning" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
          
          <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeading title="active_labs" />

            <div className="bg-background border border-primary/20 rounded-xl p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://tryhackme-badges.s3.amazonaws.com/UserBadge.svg" alt="THM Badge" className="h-10 opacity-80 invert grayscale" />
                    <h3 className="text-2xl font-bold font-mono">TryHackMe Progress</h3>
                  </div>
                  
                  <p className="text-muted-foreground">
                    I consistently spend time in hands-on labs to reinforce theoretical concepts. Currently ranked in the top 10% of users.
                  </p>

                  <div className="space-y-4">
                    {[
                      { name: "Pre-Security Path", progress: 100 },
                      { name: "Complete Beginner Path", progress: 85 },
                      { name: "Web Fundamentals", progress: 60 },
                      { name: "Jr. Penetration Tester", progress: 30 }
                    ].map((path) => (
                      <div key={path.name} className="space-y-1">
                        <div className="flex justify-between text-xs font-mono uppercase text-muted-foreground">
                          <span>{path.name}</span>
                          <span>{path.progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${path.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-80 bg-black/50 rounded-lg border border-primary/10 p-5 font-mono text-sm">
                  <div className="flex items-center gap-2 text-primary mb-4 border-b border-primary/10 pb-2">
                    <Server className="w-4 h-4" />
                    <span>Recent Activity</span>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Completed "Linux Fundamentals" room</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Rooted "Basic Pentesting" machine</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <Clock className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                      <span>Analyzing "Wireshark 101" pcap files</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionHeading title="roadmap" align="center" />

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />

              <div className="space-y-12 relative">
                {[
                  { 
                    phase: "Short Term", 
                    goal: "Foundation Mastery", 
                    desc: "Solidify networking concepts (CCNA level) and master advanced Linux command line usage.",
                    side: "left"
                  },
                  { 
                    phase: "Mid Term", 
                    goal: "Blue Team Skills", 
                    desc: "Gain proficiency in SOC tools (Splunk, SIEM), threat hunting, and incident response.",
                    side: "right"
                  },
                  { 
                    phase: "Long Term", 
                    goal: "Professional Career", 
                    desc: "Secure a role as a Security Analyst or Penetration Tester and obtain OSCP certification.",
                    side: "left"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center justify-between gap-8 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="w-full md:w-[45%]">
                      <div className="bg-secondary/10 border border-primary/10 p-6 rounded-lg hover:border-primary/40 transition-colors relative group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 rounded-l-lg group-hover:bg-primary transition-colors" />
                        <span className="text-xs font-mono uppercase tracking-widest text-primary/60 mb-2 block">{item.phase}</span>
                        <h3 className="text-xl font-bold font-mono text-foreground mb-2">{item.goal}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 rounded-full bg-background border-4 border-primary z-10 hidden md:block" />
                    
                    <div className="w-full md:w-[45%] hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-background to-background" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <SectionHeading title="init_handshake" />

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-muted-foreground text-lg">
                  Whether you have a question, a project idea, or just want to discuss the latest CVE, my encryption keys are always open.
                </p>

                <div className="space-y-4 font-mono text-sm">
                  <a href="mailto:tausurrahaman@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50 border border-transparent hover:border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>tausurrahaman@gmail.com</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50 border border-transparent hover:border-primary/20">
                    <Github className="w-5 h-5 text-primary" />
                    <span>github.com/tausur</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50 border border-transparent hover:border-primary/20">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span>linkedin.com/in/tausur</span>
                  </a>
                </div>

                <div className="bg-primary/5 p-4 rounded border border-primary/10 text-xs font-mono text-primary/70">
                  <p>-----BEGIN PGP PUBLIC KEY BLOCK-----</p>
                  <p className="opacity-50 my-2">mQENBF+...</p>
                  <p>-----END PGP PUBLIC KEY BLOCK-----</p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:tausurrahaman@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Shield className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center font-mono text-xs text-muted-foreground/60 space-y-2">
            <p>&copy; {new Date().getFullYear()} Tausur Rahaman. All systems operational.</p>
            <p className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Secure Connection Established
            </p>
            <p className="mt-4">Built with React + Tailwind + Caffeine</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
