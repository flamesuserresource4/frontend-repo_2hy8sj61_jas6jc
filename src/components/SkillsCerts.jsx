import React from 'react';
import { Cpu, Server, Shield, Wrench, Award, Layers } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">{children}</span>
);

const SkillsCerts = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-indigo-900">Technical Competencies</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold"><Layers size={18}/> Networking</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>MikroTik</Badge>
              <Badge>Cisco</Badge>
              <Badge>Subnetting</Badge>
              <Badge>VLAN</Badge>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold"><Wrench size={18}/> Hardware</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>PC Troubleshooting</Badge>
              <Badge>Cable Crimping</Badge>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold"><Cpu size={18}/> Software & Tools</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Packet Tracer</Badge>
              <Badge>Microsoft Office</Badge>
              <Badge>Canva</Badge>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-3">
            <div className="flex items-center gap-2 text-indigo-700 font-semibold"><Server size={18}/> Operating Systems</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Windows Server</Badge>
              <Badge>Linux</Badge>
            </div>
          </div>
        </div>

        <h3 id="certifications" className="mt-12 text-2xl font-bold text-indigo-900">Certificates Gallery</h3>
        <p className="mt-2 text-slate-700">Highlights of formal training and badges that support hands-on capability.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'LSP TKJ — SMK Negeri Ngadirojo',
            'Public Speaking — Motiva Center (2025)',
            'Artificial Intelligence — MySkill (2025)',
            'Internet of Things (IoT) — MySkill (2025)',
            'Microsoft Office — MySkill (2025)',
            'CSCU Introduction — IDN Networkers (2025)',
            'Cisco CCNA Introduction — IDN Networkers (2026)',
          ].map((item) => (
            <div key={item} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700"><Award size={20}/></div>
                <div>
                  <div className="font-semibold text-slate-900">{item}</div>
                  <div className="text-sm text-slate-600">Verified completion</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCerts;
