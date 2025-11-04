import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-indigo-900">About Me</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I am a Computer & Network Engineering student at SMKN Ngadirojo (graduating in 2026) with a strong interest in enterprise networking and IT support. I enjoy translating technical problems into simple, reliable solutions and I am committed to continuous learning through certifications and hands-on projects.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Career goal: IT Support / Junior Network Engineer (available 2026)</li>
              <li>• Strengths: clear communication, structured troubleshooting, and on-time delivery</li>
              <li>• Hobbies: reading, learning, and running</li>
            </ul>
          </div>
          <div>
            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-700 font-semibold"><GraduationCap size={18}/> Education</div>
              <div className="mt-3 text-slate-800 font-medium">SMKN Ngadirojo — Computer & Network Engineering (TKJ)</div>
              <div className="mt-1 flex items-center gap-2 text-slate-600"><Calendar size={16}/>Graduation: 2026</div>
              <p className="mt-4 text-slate-700 text-sm leading-relaxed">
                Coursework and practice include network topology design, subnetting, VLAN configuration, OS installation, and service deployment on Windows Server and Linux.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
