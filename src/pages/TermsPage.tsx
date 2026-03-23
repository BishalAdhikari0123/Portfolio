const TermsPage: React.FC = () => {
  return (
    <section id="terms" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms <span className="relative inline-block">& Conditions
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white" />
            </span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: March 23, 2026</p>
        </div>

        <article className="glass-bw rounded-2xl p-8 border border-white/20 space-y-7 text-gray-300 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Purpose of this website</h2>
            <p>
              This website is a personal developer portfolio operated by Bishal Adhikari. It is intended to share project
              case studies, technical write-ups, educational content, and contact information for professional collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Content accuracy</h2>
            <p>
              I strive to keep all technical content and project information accurate and up to date. However, software
              practices evolve quickly, and content may become outdated over time. You should independently verify details
              before relying on them in production systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Intellectual property</h2>
            <p>
              Unless otherwise stated, written content, layouts, and original code samples on this site are owned by the
              site operator. Third-party names, trademarks, and libraries belong to their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. External links</h2>
            <p>
              This site may contain links to external services such as GitHub, LinkedIn, or project deployments. I am not
              responsible for the content, availability, or security practices of those third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. Acceptable use</h2>
            <p>
              You agree not to misuse this site, attempt unauthorized access, automate abusive traffic, or interfere with
              its normal operation. Any unlawful or abusive use is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">6. Limitation of liability</h2>
            <p>
              This website and its content are provided on an "as-is" basis without warranties of any kind. To the extent
              permitted by applicable law, I am not liable for any direct or indirect damages resulting from use of this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">7. Updates to terms</h2>
            <p>
              These terms may be updated periodically. Continued use of this website after updates indicates acceptance of
              the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">8. Contact</h2>
            <p>
              For questions related to these terms, contact me at
              <a href="mailto:bsaladkari@gmail.com" className="text-white underline-animate"> bsaladkari@gmail.com</a>.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default TermsPage;
