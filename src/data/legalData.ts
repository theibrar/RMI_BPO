export interface LegalDoc {
  slug: string;
  title: string;
  lastUpdated: string;
  sections: { heading: string; content: string[] }[];
}

export const legalDocs: Record<string, LegalDoc> = {
  "acceptable-use": {
    "slug": "acceptable-use",
    "title": "Acceptable Use Policy",
    "lastUpdated": "March 13, 2026",
    "sections": [
        {
            "heading": "1. Introduction",
            "content": [
                "This Acceptable Use Policy (\"AUP\") outlines the rules and guidelines for using the services provided by RMI BPO LLC and the access to our Site. Your use of the Site and our services constitutes your agreement to comply with this policy."
            ]
        },
        {
            "heading": "2. Prohibited Activities",
            "content": [
                "You may not use our Site or services to:",
                "Violate any local, state, national, or international law or regulation;",
                "Transmit any material that is defamatory, offensive, or otherwise objectionable;",
                "Distribute viruses, worms, or any other malicious computer code;",
                "Engage in unauthorized access to our systems or those of any third party;",
                "Perform any activity that interferes with the proper functioning of the Site or services."
            ]
        },
        {
            "heading": "3. Intellectual Property Rights",
            "content": [
                "You must respect the intellectual property rights of RMI BPO LLC and third parties. Any unauthorized use of trademarks, copyrights, or other proprietary information is strictly prohibited."
            ]
        },
        {
            "heading": "4. Security and Monitoring",
            "content": [
                "We reserve the right to monitor the use of our services to ensure compliance with this AUP. Any attempt to circumvent security measures or engage in fraudulent activity will result in the immediate termination of access to our services and potential legal action."
            ]
        },
        {
            "heading": "5. Reporting Violations",
            "content": [
                "If you become aware of any violation of this AUP, please report it to info@rmibpo.com. We will investigate any reported violations and take appropriate action."
            ]
        },
        {
            "heading": "6. Enforcement",
            "content": [
                "Failure to comply with this AUP may result in the suspension or termination of your access to our Site and services. RMI BPO LLC reserves the right to take any other action we deem appropriate in response to violations of this policy."
            ]
        }
    ]
},
  "accessibility": {
    "slug": "accessibility",
    "title": "Accessibility Statement",
    "lastUpdated": "March 13, 2026",
    "sections": [
        {
            "heading": "1. Commitment to Accessibility",
            "content": [
                "RMI BPO LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards."
            ]
        },
        {
            "heading": "2. Conformance Status",
            "content": [
                "The Web Content Accessibility Guidelines (\"WCAG\") defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. RMI BPO LLC's Site is partially conformant with WCAG 2.1 Level AA."
            ]
        },
        {
            "heading": "3. Feedback",
            "content": [
                "We welcome your feedback on the accessibility of RMI BPO LLC's Site. Please let us know if you encounter accessibility barriers on our website:",
                "Phone: +1 (323) 999-2139",
                "E-mail: info@rmibpo.com",
                "Address: KALISPELL, MT",
                "We try to respond to feedback within 5 business days."
            ]
        },
        {
            "heading": "4. Technical Specifications",
            "content": [
                "Accessibility of RMI BPO LLC's Site relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:",
                "HTML",
                "CSS",
                "JavaScript",
                "These technologies are relied upon for conformance with the accessibility standards used."
            ]
        },
        {
            "heading": "5. Assessment Approach",
            "content": [
                "RMI BPO LLC assessed the accessibility of our Site by the following approaches:",
                "Self-evaluation",
                "External evaluation (planned)"
            ]
        }
    ]
},
  "cookies": {
    "slug": "cookies",
    "title": "Cookie Policy",
    "lastUpdated": "March 13, 2026",
    "sections": [
        {
            "heading": "1. What Are Cookies",
            "content": [
                "Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more useful to you."
            ]
        },
        {
            "heading": "2. How We Use Cookies",
            "content": [
                "When you use and access the Site, we may place a number of cookies files in your web browser. We use cookies for the following purposes:",
                "To enable certain functions of the Site;",
                "To provide analytics;",
                "To store your preferences;",
                "To enable advertisement delivery, including behavioral advertising."
            ]
        },
        {
            "heading": "3. Types of Cookies We Use",
            "content": [
                "We use both session and persistent cookies on the Site and we use different types of cookies to run the Site:",
                "Essential cookies: We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.",
                "Preferences cookies: We may use preferences cookies to remember information that changes the way the Site behaves or looks, such as a user's language preference.",
                "Analytics cookies: We may use analytics cookies to track information how the Site is used so that we can make improvements. We may also use analytics cookies to test new advertisements, pages, features or new functionality of the Site to see how our users react to them."
            ]
        },
        {
            "heading": "4. Third-Party Cookies",
            "content": [
                "In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Site, deliver advertisements on and through the Site, and so on."
            ]
        },
        {
            "heading": "5. Your Choices Regarding Cookies",
            "content": [
                "If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly."
            ]
        }
    ]
},
  "copyright": {
    "slug": "copyright",
    "title": "Copyright Notice",
    "lastUpdated": "March 13, 2026",
    "sections": [
        {
            "heading": "1. Ownership of Content",
            "content": [
                "All content included on this Site, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of RMI BPO LLC or its content suppliers and protected by international copyright laws."
            ]
        },
        {
            "heading": "2. Use of Materials",
            "content": [
                "You may view, download, and print materials from this Site for your personal and non-commercial use only. Any other use, including the reproduction, modification, distribution, transmission, republication, or display of the content on this Site, without the prior written permission of RMI BPO LLC is strictly prohibited."
            ]
        },
        {
            "heading": "3. Trademarks",
            "content": [
                "The trademarks, logos, and service marks shown on this Site are the property of RMI BPO LLC or third parties. You are not permitted to use these marks without the prior written consent of RMI BPO LLC or the third party that owns the mark."
            ]
        },
        {
            "heading": "4. Copyright Infringement Claims",
            "content": [
                "RMI BPO LLC respects the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our copyright agent with the necessary information in writing to info@rmibpo.com."
            ]
        },
        {
            "heading": "5. Reservation of Rights",
            "content": [
                "RMI BPO LLC reserves all rights not expressly granted in this copyright notice. We reserve the right to amend this notice at any time without prior notification."
            ]
        }
    ]
},
  "disclaimer": {
    "slug": "disclaimer",
    "title": "Disclaimer",
    "lastUpdated": "March 13, 2026",
    "sections": [
        {
            "heading": "1. Website Disclaimer",
            "content": [
                "The information provided by RMI BPO LLC (\"we\", \"us\", or \"our\") on our website (the \"Site\") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site."
            ]
        },
        {
            "heading": "2. Professional Disclaimer",
            "content": [
                "The Site cannot and does not contain professional business advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional business advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK."
            ]
        },
        {
            "heading": "3. External Links Disclaimer",
            "content": [
                "The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.",
                "WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES."
            ]
        },
        {
            "heading": "4. Errors and Omissions Disclaimer",
            "content": [
                "While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, RMI BPO LLC is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided \"as is\", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied."
            ]
        },
        {
            "heading": "5. \"Use at Your Own Risk\" Disclaimer",
            "content": [
                "All information in the Site is provided \"as is\", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose. In no event will RMI BPO LLC, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this site or for any consequential, special or similar damages, even if advised of the possibility of such damages."
            ]
        }
    ]
},
  "gdpr": {
    "slug": "gdpr",
    "title": "GDPR Compliance",
    "lastUpdated": "March 13, 2026",
    "sections": [
        {
            "heading": "1. Commitment to GDPR",
            "content": [
                "The General Data Protection Regulation (\"GDPR\") is a comprehensive data protection law that came into effect on May 25, 2018. RMI BPO LLC is committed to protecting the privacy and personal data of EU residents in accordance with the GDPR."
            ]
        },
        {
            "heading": "2. Data Subject Rights",
            "content": [
                "Under the GDPR, data subjects have the right to:",
                "Access their personal data;",
                "Rectify any inaccurate data;",
                "Erase their personal data (the \"right to be forgotten\");",
                "Restrict the processing of their data;",
                "Data portability;",
                "Object to the processing of their data."
            ]
        },
        {
            "heading": "3. Data Protection Officer",
            "content": [
                "To ensure our continued compliance with the GDPR, RMI BPO LLC has appointed a Data Protection Officer (\"DPO\"). If you have any questions or concerns about our data protection practices, please contact our DPO at privacy@rmibpo.com."
            ]
        },
        {
            "heading": "4. Data Security and Breach Notification",
            "content": [
                "We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk. In the event of a data breach that is likely to result in a high risk to your rights and freedoms, we will notify you and the relevant supervisory authority without undue delay."
            ]
        },
        {
            "heading": "5. International Data Transfers",
            "content": [
                "We may transfer personal data to countries outside the European Economic Area (\"EEA\"). In such cases, we ensure that adequate safeguards are in place to protect your data, such as standard contractual clauses approved by the European Commission."
            ]
        }
    ]
},
  "privacy": {
    "slug": "privacy",
    "title": "Privacy Policy",
    "lastUpdated": "March 13, 2026",
    "sections": [
        {
            "heading": "1. Introduction",
            "content": [
                "RMI BPO LLC (\"we\", \"our\", or \"us\") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal data, in conjunction with your access to and use of our website and services."
            ]
        },
        {
            "heading": "2. Information We Collect",
            "content": [
                "We collect information that you provide directly to us through our website contact forms, demo requests, and service inquiries. This may include:",
                "Name and contact details (email, phone number, address)",
                "Company information and professional role",
                "Specific information related to your outsourcing needs",
                "Communications and correspondence with our team",
                "We also automatically collect certain information when you browse our site, such as IP addresses, browser types, and usage data via cookies and similar technologies."
            ]
        },
        {
            "heading": "3. How We Use Your Information",
            "content": [
                "We use the collected data for various purposes, including:",
                "To provide and maintain our BPO services",
                "To notify you about changes to our services",
                "To provide customer support and respond to inquiries",
                "To gather analysis or valuable information so that we can improve our services",
                "To monitor the usage of our website and detect technical issues",
                "To provide you with news, special offers, and general information about other services we offer"
            ]
        },
        {
            "heading": "4. Data Protection & Security",
            "content": [
                "The security of your data is important to us. We implement industry-standard security measures, including encryption and secure server infrastructure, to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, remember that no method of transmission over the Internet or method of electronic storage is 100% secure."
            ]
        },
        {
            "heading": "5. Data Sharing & Disclosure",
            "content": [
                "We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above."
            ]
        },
        {
            "heading": "6. Your Rights",
            "content": [
                "Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the information we hold about you. To exercise these rights, please contact us at info@rmibpo.com."
            ]
        },
        {
            "heading": "7. Changes to This Policy",
            "content": [
                "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"last updated\" date."
            ]
        },
        {
            "heading": "8. Contact Us",
            "content": [
                "If you have any questions about this Privacy Policy, please contact us:",
                "By email: info@rmibpo.com",
                "By phone: +1 (323) 999-2139",
                "By mail: KALISPELL, MT"
            ]
        }
    ]
},
  "terms": {
    "slug": "terms",
    "title": "Terms of Use",
    "lastUpdated": "March 13, 2026",
    "sections": [
        {
            "heading": "1. Acceptance of Terms",
            "content": [
                "By accessing and using the website of RMI BPO LLC (\"the Site\"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
            ]
        },
        {
            "heading": "2. Use License",
            "content": [
                "Permission is granted to temporarily download one copy of the materials on RMI BPO LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
                "Modify or copy the materials;",
                "Use the materials for any commercial purpose, or for any public display;",
                "Attempt to decompile or reverse engineer any software contained on the website;",
                "Remove any copyright or other proprietary notations from the materials;",
                "Transfer the materials to another person or \"mirror\" the materials on any other server."
            ]
        },
        {
            "heading": "3. Disclaimer",
            "content": [
                "The materials on RMI BPO LLC's website are provided on an 'as is' basis. RMI BPO LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
            ]
        },
        {
            "heading": "4. Limitations",
            "content": [
                "In no event shall RMI BPO LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RMI BPO LLC's website, even if RMI BPO LLC or an authorized representative has been notified orally or in writing of the possibility of such damage."
            ]
        },
        {
            "heading": "5. Revisions and Errata",
            "content": [
                "The materials appearing on RMI BPO LLC's website could include technical, typographical, or photographic errors. RMI BPO LLC does not warrant that any of the materials on its website are accurate, complete, or current. RMI BPO LLC may make changes to the materials contained on its website at any time without notice."
            ]
        },
        {
            "heading": "6. Links",
            "content": [
                "RMI BPO LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by RMI BPO LLC of the site. Use of any such linked website is at the user's own risk."
            ]
        },
        {
            "heading": "7. Site Terms of Use Modifications",
            "content": [
                "RMI BPO LLC may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Use."
            ]
        },
        {
            "heading": "8. Governing Law",
            "content": [
                "Any claim relating to RMI BPO LLC's website shall be governed by the laws of the State of Montana without regard to its conflict of law provisions."
            ]
        }
    ]
},
};
