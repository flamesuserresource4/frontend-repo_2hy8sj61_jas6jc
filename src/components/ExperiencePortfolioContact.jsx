import React from 'react';
import { Briefcase, CheckCircle, Calendar, Link } from 'lucide-react';

const Case = ({ title, tech, role, result, challenge }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="text-lg font-semibold text-slate-900">{title}</div>
    <div className="mt-1 text-sm text-indigo-700">Tech: {tech}</div>
    <ul className="mt-3 space-y-2 text-sm text-slate-700">
      <li>• Role: {role}</li>
      <li>• Result: {result}</li>
      <li>• Challenge: {challenge}</li>
    </ul>
  </div>
);

const ExperiencePortfolioContact = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-indigo-900">Internship & Experience</h2>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 text-slate-800">
            <span className="inline-flex items-center gap-2 font-semibold text-indigo-800"><Briefcase size={18}/> IT Support Intern — PLN NP Unit Pembangkitan Pacitan</span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-600"><Calendar size={16}/> Jul – Dec 2025</span>
          </div>
          <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 text-green-600" size={16}/> Hardware installation and configuration</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 text-green-600" size={16}/> Software installation and setup</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 text-green-600" size={16}/> LAN troubleshooting and maintenance</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 text-green-600" size={16}/> Printer maintenance and repair</li>
          </ul>
          <div className="mt-4 text-sm text-slate-600">Key outcomes: Configured 63+ devices on schedule and restored 8+ LAN points under tight deadlines.</div>
        </div>

        <h3 id="portfolio" className="mt-12 text-2xl font-bold text-indigo-900">Project Case Studies</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Case
            title="Office Computer Network Design"
            tech="Cisco Packet Tracer"
            role="Project Creator"
            result="Designed a functional topology with proper IP addressing and VLAN segmentation"
            challenge="First-time project with a steep learning curve"
          />
          <Case
            title="Device Installation & Configuration"
            tech="Computer Systems"
            role="Internship Team Member"
            result="Configured 63+ computers/laptops on time with standard images and policies"
            challenge="Tight deadline and operational pressure"
          />
          <Case
            title="LAN Network Maintenance"
            tech="LAN Cable, Crimping Tools, RJ45"
            role="Assistant Technician"
            result="Fixed 8+ network connection points and documented patching"
            challenge="Limited cable access and physical constraints"
          />
        </div>

        <div id="style-guide" className="mt-16 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900">Design Style Guide</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <div className="font-semibold text-slate-900">Color Palette</div>
              <ul className="mt-2 text-sm text-slate-700 space-y-2">
                <li>• Primary: Indigo 600 (#4F46E5), Violet 600 (#7C3AED), White (#FFFFFF)</li>
                <li>• Secondary: Slate 700 (#334155), Slate 200 (#E2E8F0)</li>
                <li>• Accent: Sky 400 (#38BDF8), Emerald 500 (#10B981)</li>
              </ul>
              <div className="mt-3 flex gap-2">
                {['#4F46E5','#7C3AED','#FFFFFF','#334155','#E2E8F0','#38BDF8','#10B981'].map((c)=> (
                  <div key={c} className="h-8 w-8 rounded border" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-slate-900">Typography & UI</div>
              <ul className="mt-2 text-sm text-slate-700 space-y-2">
                <li>• Headings: Geist/Inter — bold, tight tracking</li>
                <li>• Body: Inter/Manrope — regular, comfortable line-height</li>
                <li>• Layout: 12–16px padding on mobile, 24–32px on desktop; max width 72rem</li>
                <li>• Icons: Lucide outline style; consistent stroke and size (16–24px)</li>
                <li>• Spacing: Section padding 64–80px; card gap 16–24px</li>
                <li>• Performance: Optimize images, defer non-critical scripts</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="contact" className="mt-16 rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900">Let’s Connect</h3>
          <p className="mt-2 text-slate-700">Open to IT Support and Junior Network Engineer roles starting 2026. I respond quickly to messages.</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-800 sm:grid-cols-2 lg:grid-cols-3">
            <a className="inline-flex items-center gap-2 hover:underline" href="mailto:rendy.jalu.it@gmail.com"><Link size={16}/> Email: rendy.jalu.it@gmail.com</a>
            <a className="inline-flex items-center gap-2 hover:underline" href="tel:+6285124007143"><Link size={16}/> Phone: +62 851-2400-7143</a>
            <a className="inline-flex items-center gap-2 hover:underline" href="https://linkedin.com/in/rendy-jalu-s-442032380" target="_blank" rel="noreferrer"><Link size={16}/> LinkedIn Profile</a>
            <a className="inline-flex items-center gap-2 hover:underline" href="https://instagram.com/rendyjalu_" target="_blank" rel="noreferrer"><Link size={16}/> Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePortfolioContact;
