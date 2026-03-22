import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PrivacyPolicy: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="privacy-policy"
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy <span className="relative inline-block">Policy
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white" />
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            Last updated: March 22, 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-bw rounded-2xl p-8 border border-white/20 space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
            <p>
              This personal portfolio website is operated by Bishal Adhikari ("I", "me", or "my").
              This Privacy Policy explains how information is collected, used, and protected when you
              visit and interact with this site.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">2. Information I Collect</h3>
            <p className="mb-3">
              This site itself does not directly collect personally identifiable information unless you
              choose to contact me (for example, via email or the contact form, which opens your email
              client). However, certain technical information may be collected automatically by my
              hosting provider or analytics/advertising services, such as:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>IP address and approximate location</li>
              <li>Browser type and version</li>
              <li>Device and operating system information</li>
              <li>Pages visited and time spent on pages</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">3. Cookies and Similar Technologies</h3>
            <p>
              This site may use cookies and similar technologies to improve performance and provide a
              better browsing experience. Cookies are small text files stored on your device that help
              remember your preferences and understand how the site is used.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">4. Google AdSense and Advertising</h3>
            <p className="mb-3">
              This website uses Google AdSense, a third-party advertising service provided by Google
              LLC ("Google"). Google and its partners may use cookies and similar technologies to
              serve personalized ads based on your previous visits to this and other websites.
            </p>
            <p className="mb-3">
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to you
              based on your visit to this site and/or other sites on the Internet. You may opt out of
              personalized advertising by visiting Google&apos;s Ads Settings page:
              {" "}
              <a
                href="https://adssettings.google.com/authenticated"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline-animate"
              >
                https://adssettings.google.com/authenticated
              </a>
              .
            </p>
            <p>
              For more information about how Google uses data from partner sites, please visit:
              {" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline-animate"
              >
                https://policies.google.com/technologies/ads
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">5. Third-Party Links</h3>
            <p>
              This site may contain links to third-party websites (such as GitHub or LinkedIn).
              I am not responsible for the content or privacy practices of those external sites.
              I recommend reviewing the privacy policies of any third-party services you visit.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">6. Data Security</h3>
            <p>
              I take reasonable measures to protect this site and any information processed through it.
              However, no method of transmission over the Internet or method of electronic storage is
              100% secure, and I cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">7. Children&apos;s Privacy</h3>
            <p>
              This site is not directed to children under the age of 13, and I do not knowingly collect
              personal information from children. If you believe that a child has provided me with
              personal information, please contact me so that I can delete it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h3>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated "Last updated" date. Your continued use of the site after changes are
              posted constitutes your acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">9. Contact</h3>
            <p>
              If you have any questions about this Privacy Policy or how your information is handled,
              you can contact me at:{" "}
              <a
                href="mailto:bsaladkari@gmail.com"
                className="text-white underline-animate"
              >
                bsaladkari@gmail.com
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
