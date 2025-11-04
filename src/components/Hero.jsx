import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Phone, MapPin, Link } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    const cvText = `Rendy Jalu Saputra\nPacitan, Indonesia\nEmail: rendy.jalu.it@gmail.com | Phone: +62 851-2400-7143\nLinkedIn: linkedin.com/in/rendy-jalu-s-442032380\nInstagram: @rendyjalu_\n\nCareer Objective\nAspiring IT Support / Junior Network Engineer with hands-on experience in LAN troubleshooting, device configuration, and enterprise support. Passionate about building reliable, secure, and scalable networks. Available in 2026.\n\nEducation\nSMKN Ngadirojo — Computer & Network Engineering (TKJ), Graduating 2026\n\nCertifications\n- LSP TKJ — SMK Negeri Ngadirojo\n- Public Speaking — Motiva Center (2025)\n- Artificial Intelligence — MySkill (2025)\n- Internet of Things (IoT) — MySkill (2025)\n- Microsoft Office — MySkill (2025)\n- CSCU Introduction — IDN Networkers (2025)\n- Cisco CCNA Introduction — IDN Networkers (2026)\n\nTechnical Skills\nNetworking: MikroTik, Cisco, Subnetting, VLAN\nHardware: PC Troubleshooting, Cable Crimping\nSoftware: Packet Tracer, Microsoft Office, Canva\nOperating Systems: Windows Server, Linux\n\nInternship Experience\nPLN NP Unit Pembangkitan Pacitan — IT Support Intern (Jul–Dec 2025)\n- Installed/configured hardware and software for 63+ devices on schedule\n- Troubleshot and maintained LAN connectivity; repaired 8+ network points\n- Performed routine printer maintenance and repairs\n\nProjects\n1) Office Computer Network Design — Cisco Packet Tracer\n- Designed a functional office network topology including VLAN segmentation\n2) Device Installation & Configuration — Internship Team Member\n- Configured 63+ computers/laptops under tight deadlines\n3) LAN Network Maintenance — Assistant Technician\n- Restored connectivity at 8+ endpoints in challenging access conditions\n\nCareer Targets\n- Role: IT Support / Junior Network Engineer\n- Companies: ISP, Telkom, Biznet\n- Availability: 2026\n\nReferences available on request.`;
    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rendy_Jalu_Saputra_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-900 to-white text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 ring-1 ring-inset ring-indigo-400/30">
              Future Network Engineer
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Rendy Jalu Saputra
            </h1>
            <p className="mt-4 text-indigo-100 leading-relaxed">
              SMK student specializing in Computer & Network Engineering (TKJ). I design, deploy, and troubleshoot secure and efficient networks. Currently interning in IT Support and preparing for a career as a Junior Network Engineer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={handleDownloadCV} className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                <Download size={18} /> Download CV
              </button>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-purple-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300">
                Contact Me
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-2 text-sm text-indigo-100 sm:grid-cols-2">
              <div className="flex items-center gap-2"><MapPin size={16}/>Pacitan, Indonesia</div>
              <a href="mailto:rendy.jalu.it@gmail.com" className="flex items-center gap-2 hover:underline"><Mail size={16}/>rendy.jalu.it@gmail.com</a>
              <a href="tel:+6285124007143" className="flex items-center gap-2 hover:underline"><Phone size={16}/>+62 851-2400-7143</a>
              <div className="flex items-center gap-2"><Link size={16}/><a className="hover:underline" href="https://linkedin.com/in/rendy-jalu-s-442032380" target="_blank" rel="noreferrer">LinkedIn</a> · <a className="hover:underline" href="https://instagram.com/rendyjalu_" target="_blank" rel="noreferrer">Instagram</a></div>
            </div>
          </div>
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-indigo-950/40">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
