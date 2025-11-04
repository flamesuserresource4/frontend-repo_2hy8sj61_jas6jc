import React from 'react';
import { Award, BadgeCheck, Briefcase } from 'lucide-react';

const Card = ({ children }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">{children}</div>
);

const CertItem = ({ title, org, year }) => (
  <li className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2 text-sm">
    <span className="flex items-center gap-2 text-slate-800">
      <BadgeCheck className="h-4 w-4 text-indigo-600" /> {title}
    </span>
    <span className="text-slate-500">{org}{year ? ` • ${year}` : ''}</span>
  </li>
);

const CertsExperience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <div className="mb-4 flex items-center gap-2 text-indigo-700">
              <Award className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>
            <ul className="grid gap-2">
              <CertItem title="LSP TKJ" org="SMK Negeri Ngadirojo" />
              <CertItem title="Public Speaking" org="Motiva Center" year="2025" />
              <CertItem title="Artificial Intelligence" org="MySkill" year="2025" />
              <CertItem title="Internet of Things (IoT)" org="MySkill" year="2025" />
              <CertItem title="Microsoft Office" org="MySkill" year="2025" />
              <CertItem title="CSCU Introduction" org="IDN Networkers" year="2025" />
              <CertItem title="Cisco CCNA Introduction" org="IDN Networkers" year="2026" />
            </ul>
          </Card>

          <Card>
            <div className="mb-4 flex items-center gap-2 text-indigo-700">
              <Briefcase className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Professional Experience</h3>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">IT Support Intern — PLN NP Unit Pembangkitan Pacitan</h4>
              <p className="text-sm text-slate-600">July – December 2025</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>Installed and configured hardware/software across 60+ endpoints</li>
                <li>Performed LAN troubleshooting and preventive maintenance</li>
                <li>Maintained and repaired office printers to reduce downtime</li>
                <li>Collaborated with teams to meet tight internal timelines</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertsExperience;
