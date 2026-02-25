import { CheckCircle2 } from "lucide-react";
import React from "react";

export const MissionAndVision = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            KAYODE FASUA & COMPANY
          </h2>
          <p className="text-muted-foreground">
            Accounting | Auditing | Taxation | Financial Advisory{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-y-3 bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {" "}
                VISION STATEMENT
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading and trusted accounting and auditing firm,
                recognized for excellence, integrity, innovation, and
                transformative financial advisory services that empower
                organizations to thrive sustainably in a dynamic global economy.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {" "}
                MISSION STATEMENT{" "}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At Kayode Fasua & Company, our mission is to deliver exceptional
                accounting, auditing, taxation, and financial advisory services
                grounded in professionalism, independence, ethical integrity,
                and technical excellence. We are committed to providing
                insightful financial solutions, enhancing transparency,
                strengthening governance structures, and supporting our clients
                in achieving longterm financial stability and growth.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {" "}
                CORE VALUES{" "}
              </h3>
              <ul className="text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Integrity: We uphold the highest ethical st a n d a r d s, e n
                  s u r i n g h o n e st y, transparency, and accountability in
                  every engagement.
                </li>

                <li>
                  Professional Excellence: We maintain superior technical
                  competence and continuous improvement in all our services.
                </li>

                <li>
                  Independence & Objectivity: We provide unbiased and
                  evidence-based opinions rooted in professional standards.
                </li>
                <li>
                  Confidentiality: We safeguard client information with the
                  utmost discretion and responsibility.
                </li>
                <li>
                  Innovation: We embrace technology and modern financial tools
                  to enhance service delivery and value creation.
                </li>
                <li>
                  Client Commitment: We build lasting relationships through
                  responsiveness, reliability, and measurable impact.
                </li>
                <li>
                  Team Development: We invest in continuous learning,
                  mentorship, and professional growth.
                </li>
                <li>
                  Public Interest Responsibility: We contribute positively to
                  financial t r a n s p a r e n c y a n d e c o n o m i c
                  development.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-3 bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {" "}
                STRATEGIC OBJECTIVES{" "}
              </h3>
              <ul className="text-muted-foreground leading-relaxed list-decimal list-inside">
                <li>
                  Deliver high-quality audit and assurance services in
                  accordance with International Standards on Auditing (ISA) and
                  relevant regulatory frameworks.
                </li>

                <li>
                  Promote financial integrity, transparency, and accountability
                  within client organizations.
                </li>

                <li>
                  Provide strategic financial advisory services including risk
                  assessment, forensic investigation, and compliance consulting.
                </li>
                <li>
                  Ensure regulatory and statutory compliance for clients across
                  sectors.
                </li>
                <li>
                  Support business growth and sustainability
                  through financial performance analysis and advisory.
                </li>
                <li>
                  Integrate digital accounting systems and financial
                  technologies into service delivery.
                </li>
                <li>
                  Maintain strict adherence to professional ethics and
                  independence standards.
                </li>
                <li>
                  Develop human capital through continuous professional
                  education and training.
                </li>
                <li>
                  Build long-term client partnerships based on trust and
                  measurable value.
                </li>
                <li>
                  Contribute to strengthening financial systems and sustainable
                  economic development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
