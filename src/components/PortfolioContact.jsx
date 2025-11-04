import React from 'react';
import { Folder, ExternalLink, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Stat = ({ value, label }) => (
  <div className="rounded-lg bg-white/60 px-4 py-3 text-center">
    <div className="text-2xl font-bold text-indigo-700">{value}</div>
    <div className="text-xs text-slate-600">{label}</div>
  </div>
);

const ProjectCard = ({ title, tech, role, result, challenge }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="mb-2 flex items-center gap-2 text-indigo-700">
      <Folder className="h-5 w-5" />
      <h4 className="font-semibold">{title}</h4>
    </div>
    <ul className="grid gap-1 text-sm text-slate-700">
      <li><span className="font-medium">Technology:</span> {tech}</li>
      <li><span className="font-medium">Role:</span> {role}</li>
      <li><span className="font-medium">Result:</span> {result}</li>
      <li><span className="font-medium">Challenge:</span> {challenge}</li>
    </ul>
  </div>
);

const PortfolioContact = () => {
  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-indigo-900 md:text-3xl">Project Portfolio</h2>
          <p className="mt-1 text-sm text-slate-600">Selected case studies with outcomes and challenges</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Office Computer Network Design"
            tech="Cisco Packet Tracer"
            role="Project Creator"
            result="Successfully designed a functional, scalable office network"
            challenge="First-time project with a steep learning curve"
          />
          <ProjectCard
            title="Device Installation & Configuration"
            tech="Computer Systems"
            role="Internship Team Member"
            result="Configured 63+ computers/laptops on schedule"
            challenge="Tight deadline and high client expectations"
          />
          <ProjectCard
            title="LAN Network Maintenance"
            tech="LAN cabling, RJ45 termination, testing tools"
            role="Assistant Technician"
            result="Fixed 8+ network connection points and reduced downtime"
            challenge="Difficult cable access and routing limitations"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
            <h3 className="text-lg font-semibold">Career Goals</h3>
            <ul className="mt-2 grid gap-2 text-sm text-white/90">
              <li>Target Position: IT Support / Junior Network Engineer</li>
              <li>Target Companies: ISP, Telkom, Biznet</li>
              <li>Availability: 2026</li>
              <li>Hobbies: Reading, Learning, Running</li>
            </ul>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Stat value="60+" label="Devices Configured" />
              <Stat value="8+" label="LAN Fixes" />
              <Stat value="3" label="Case Studies" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
            <p className="mt-1 text-sm text-slate-600">Let's talk about internships or junior roles. I'm ready to learn and contribute.</p>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="mailto:rendy.jalu.it@gmail.com" className="inline-flex items-center gap-2 text-indigo-700 hover:underline">
                <Mail className="h-4 w-4" /> rendy.jalu.it@gmail.com
              </a>
              <a href="tel:+6285124007143" className="inline-flex items-center gap-2 text-indigo-700 hover:underline">
                <Phone className="h-4 w-4" /> +62 851-2400-7143
              </a>
              <a href="https://linkedin.com/in/rendy-jalu-s-442032380" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-700 hover:underline">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://instagram.com/rendyjalu_" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-700 hover:underline">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
            <div className="mt-6">
              <a href="#home" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500">
                Back to Top <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-12 rounded-xl border border-slate-200 bg-white p-5 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Rendy Jalu Saputra • Minimalist, modern, tech-inspired portfolio
        </footer>
      </div>
    </section>
  );
};

export default PortfolioContact;
