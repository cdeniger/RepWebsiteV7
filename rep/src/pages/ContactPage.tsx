import React from 'react';
import { Button } from '../components/Button';

const ContactPage: React.FC<{ onOpenDiagnostic: () => void }> = ({
  onOpenDiagnostic,
}) => (
  <div className="animate-fadeIn">
    {/* A. VISUAL & TYPOGRAPHY CONTEXT */}
    {/* Layout Goal: Clean, two-column layout focusing on efficiency and structure. */}
    <section className="pt-32 pb-20 px-6 bg-bone min-h-[60vh]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* B. PRIMARY ACTION: LEAD QUALIFICATION FUNNEL */}
        <div className="space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            Initiate Confidential Inquiry
          </h1>
          <p className="font-mono text-base text-oxford/70 leading-relaxed max-w-md">
            We are intentional about our partnerships. To begin the process of
            professional representation and allow us to assess your specific
            career capital and timeline, please start our diagnostic.
          </p>
          <div className="pt-4">
            <Button onClick={onOpenDiagnostic}>Run My Career Diagnostic</Button>
          </div>
        </div>

        {/* C. SECONDARY CONTACTS & ADMINISTRATION */}
        <div className="space-y-12 md:border-l md:border-oxford/10 md:pl-16">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold">
              Administrative Contacts & Support
            </h2>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <div className="text-oxford/50 text-xs uppercase tracking-widest mb-1">
                  General Inquiries
                </div>
                <a
                  href="mailto:hello@REPteam.com"
                  className="hover:text-signal transition-colors"
                >
                  hello@REPteam.com
                </a>
              </div>
              <div>
                <div className="text-oxford/50 text-xs uppercase tracking-widest mb-1">
                  Media & Press
                </div>
                <a
                  href="mailto:media@REPteam.com"
                  className="hover:text-signal transition-colors"
                >
                  media@REPteam.com
                </a>
              </div>
              <div>
                <div className="text-oxford/50 text-xs uppercase tracking-widest mb-1">
                  Finance & Billing (CPF Services LLC)
                </div>
                <a
                  href="mailto:billing@cpf-services.com"
                  className="hover:text-signal transition-colors"
                >
                  billing@cpf-services.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-oxford/50">
              Mailing Address
            </div>
            <address className="not-italic font-mono text-base leading-relaxed">
              REP.
              <br />
              9329 Springwater Dr.
              <br />
              Dallas, TX 75228
            </address>
          </div>

          {/* D. LEGAL & CONFIDENTIALITY GUARDRAILS */}
          <div className="pt-8 border-t border-oxford/10">
            <p className="font-mono text-xs text-oxford/50 leading-relaxed max-w-sm">
              All communication is treated with strict confidentiality. Rep.
              does not accept unsolicited sales or recruiting inquiries via
              these addresses.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer CTA */}
    <section className="py-24 px-6 bg-oxford text-bone text-center">
      <h2 className="font-serif text-4xl font-bold mb-8">Ready to move?</h2>
      <Button onClick={onOpenDiagnostic}>Get Represented</Button>
    </section>
  </div>
);

export default ContactPage;
