import React from 'react';
import { Cpu, Server, Shield, Wrench, Layers, FileDown } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-indigo-900">
    {children}
  </span>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold tracking-tight text-indigo-900 md:text-3xl">{title}</h2>
    {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
  </div>
);

const AboutSkills = () => {
  const handleDownloadCV = () => {
    const content = `Rendy Jalu Saputra\nPacitan, Indonesia\nEmail: rendy.jalu.it@gmail.com | Phone: +62 851-2400-7143\nLinkedIn: linkedin.com/in/rendy-jalu-s-442032380 | Instagram: @rendyjalu_\n\nPROFILE\nFuture Network Engineer with hands-on experience in IT support, LAN maintenance, and device configuration. Strong fundamentals in routing, switching, subnetting, and Windows/Linux administration.\n\nEDUCATION\nSMKN Ngadirojo — Computer & Network Engineering (TKJ)\nGraduation: 2026\n\nCERTIFICATIONS\n- LSP TKJ - SMK Negeri Ngadirojo\n- Public Speaking - Motiva Center (2025)\n- Artificial Intelligence - MySkill (2025)\n- Internet of Things (IoT) - MySkill (2025)\n- Microsoft Office - MySkill (2025)\n- CSCU Introduction - IDN Networkers (2025)\n- Cisco CCNA Introduction - IDN Networkers (2026)\n\nEXPERIENCE\nIT Support Intern — PLN NP Unit Pembangkitan Pacitan (Jul–Dec 2025)\n- Installed and configured hardware and software across 60+ endpoints\n- Troubleshot LAN issues, restored connectivity for 8+ network points\n- Performed scheduled printer maintenance and repairs\n\nPROJECTS\nOffice Computer Network Design (Cisco Packet Tracer) — Designed a functional office network.\nDevice Installation & Configuration — Configured 63+ devices under tight deadlines.\nLAN Network Maintenance — Resolved cabling and termination faults in challenging locations.\n\nSKILLS\nNetworking: MikroTik, Cisco, Subnetting, VLAN\nHardware: PC Troubleshooting, Cable Crimping\nSoftware: Packet Tracer, Microsoft Office, Canva\nOperating Systems: Windows Server, Linux\n\nCAREER GOALS\nTarget Roles: IT Support / Junior Network Engineer | Availability: 2026`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rendy_Jalu_Saputra_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="relative z-10 -mt-14 rounded-t-3xl bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeader
              title="About Me"
              subtitle="Professional yet approachable — focused on reliable, secure networks"
            />
            <p className="text-slate-700">
              I am a Computer & Network Engineering student at SMKN Ngadirojo (graduating in 2026) with
              hands-on experience in IT support and LAN maintenance. During my internship at PLN NP Unit
              Pembangkitan Pacitan, I installed and configured hardware/software across 60+ endpoints,
              troubleshot network issues, and maintained critical devices under tight deadlines.
            </p>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700">
              <li>Strong foundation in routing, switching, subnetting, and VLANs</li>
              <li>Comfortable with Windows Server and Linux environments</li>
              <li>Clear communicator with public speaking training</li>
              <li>Career goal: IT Support / Junior Network Engineer (available 2026)</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge>Pacitan, Indonesia</Badge>
              <Badge>SMK Student</Badge>
              <Badge>IT Support Experience</Badge>
              <button onClick={handleDownloadCV} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-500">
                <FileDown className="h-4 w-4" /> Download CV
              </button>
            </div>
          </div>

          <div>
            <SectionHeader title="Technical Skills" subtitle="Core competencies for network engineering" />
            <div className="grid gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-indigo-700">
                  <Server className="h-5 w-5" />
                  <h3 className="font-semibold">Networking</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-slate-700">
                  <Badge>MikroTik</Badge>
                  <Badge>Cisco</Badge>
                  <Badge>Subnetting</Badge>
                  <Badge>VLAN</Badge>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-indigo-700">
                  <Wrench className="h-5 w-5" />
                  <h3 className="font-semibold">Hardware</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-slate-700">
                  <Badge>PC Troubleshooting</Badge>
                  <Badge>Cable Crimping</Badge>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-indigo-700">
                  <Cpu className="h-5 w-5" />
                  <h3 className="font-semibold">Software</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-slate-700">
                  <Badge>Packet Tracer</Badge>
                  <Badge>Microsoft Office</Badge>
                  <Badge>Canva</Badge>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-indigo-700">
                  <Shield className="h-5 w-5" />
                  <h3 className="font-semibold">Operating Systems</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-slate-700">
                  <Badge>Windows Server</Badge>
                  <Badge>Linux</Badge>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-indigo-700">
                <Layers className="h-5 w-5" />
                <h3 className="font-semibold">Design Style Guide (Quick Reference)</h3>
              </div>
              <ul className="grid gap-2 text-sm text-indigo-900">
                <li>Colors: Blue (#2563EB), Purple (#7C3AED), White (#FFFFFF)</li>
                <li>Typography: Headings – Inter/Geist Bold; Body – Inter/Manrope Regular</li>
                <li>Layout: Minimalist, generous whitespace, clear section headers</li>
                <li>Icons: Lucide – outlined, consistent stroke, subtle color accents</li>
                <li>Spacing: 64px section padding on desktop, 32px on mobile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
