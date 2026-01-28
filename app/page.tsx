export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sejati Kurniabudi</h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">Security Engineer</p>
          <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base">
            <a href="tel:085876878711" className="flex items-center gap-2 hover:text-blue-200 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              085876878711
            </a>
            <a href="mailto:jatikurniabudi4@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jatikurniabudi4@gmail.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-4xl">
            I have developed a strong foundation in cybersecurity, supported by my work experience in IT Security at several companies, 
            where I specialized in monitoring, detecting, and analyzing incidents across networks, servers, and endpoints. With these skills, 
            I am ready to contribute my best efforts to protect organizations from evolving threats.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="section-title">Work Experience</h2>
          
          <div className="space-y-6">
            {/* PT Aino Indonesia */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Security Engineer</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">PT Aino Indonesia</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sleman, Yogyakarta</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">Feb 2024 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Implemented SIEM (Wazuh) for monitoring security events.</li>
                <li>Reviewed code quality in the CI/CD process using SonarQube.</li>
                <li>Analyzed security issues, responded to incidents, and suggested remediation to mitigate security or business impacts.</li>
                <li>Conducted Vulnerability Assessment and Penetration Testing (VAPT) on mobile, web, and API products, both existing and prerelease.</li>
              </ul>
            </div>

            {/* Investree */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Security Engineer</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">Investree Randhika Jaya</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sleman, Yogyakarta</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">Aug 2022 - Feb 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Regularly conducted vulnerability assessments and penetration testing on web and mobile applications during the development phase.</li>
                <li>Performed annual penetration testing in Indonesia, Thailand, and the Philippines.</li>
                <li>Validated and managed bug bounty reports from bug hunters.</li>
                <li>Researched and developed monitoring tools, including Wazuh.</li>
              </ul>
            </div>

            {/* Q2 Technologies - Analyst */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">IT Security Analyst</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">Q2 Technologies</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Jakarta Selatan</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">Jul 2019 - Nov 2021</span>
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">SOC at Bank BTPN</p>
              <p className="text-gray-700 dark:text-gray-300">
                Monitoring, detecting, and analyzing cybersecurity incidents on networks, servers, and endpoints. Responding to anomalous 
                activity that could be indicative of a security incident and validating that potential security incident before making the report.
              </p>
            </div>

            {/* Q2 Technologies - Pentester */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Penetration Tester</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">Q2 Technologies</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Banten</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">Jun 2019 - Jul 2019</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Gained knowledge in IT Security with a focus on Penetration Testing for web and mobile platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="section-title">Education</h2>
          
          <div className="space-y-6">
            {/* University */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor Degree in Computer Science</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">Universitas Bina Nusantara</p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">GPA: 3.40/4.00</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">Jun 2020 - May 2024</span>
              </div>
            </div>

            {/* High School */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">High School Diploma in Software Engineering</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">SMK Telkom Purwokerto</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">Jul 2016 - Jun 2019</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Semifinalist Informatics Logical Programming Competition by Universitas Surabaya in 2018 and 2019</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="section-title">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Soft Skills */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Analytical Thinking', 'Problem-Solving', 'Attention to Detail', 'Critical Thinking'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hard Skills */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Hard Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Penetration Testing', 'Web Security', 'Vulnerability Assessment', 'Network Security', 'Information Security', 'Mobile Security'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="section-title">Certifications & Licenses</h2>
          
          <div className="space-y-6">
            {/* CEH */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certified Ethical Hacker v12</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">EC Council</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">Jan 2023</span>
              </div>
            </div>

            {/* Android Security */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Android Application Security Testing</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">Merdeka Siber Academy</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">Sep 2022</span>
              </div>
            </div>

            {/* CSA */}
            <div className="card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certified SOC Analyst v1</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">EC Council</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 md:mt-0">May 2021</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Sejati Kurniabudi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
