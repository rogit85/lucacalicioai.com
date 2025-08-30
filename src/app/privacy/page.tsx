import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header with Logo */}
      <header className="mx-auto max-w-6xl px-4 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <Image 
              src="/Luca.jpeg" 
              alt="Luca Calcio AI" 
              width={60} 
              height={60} 
              className="rounded-full border-3 border-green-600 shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Luca Calcio AI</h2>
              <p className="text-sm text-gray-600">Football Betting Expert</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <div className="w-4 h-6 bg-green-600 rounded-l"></div>
            <div className="w-4 h-6 bg-white border-y border-gray-300"></div>
            <div className="w-4 h-6 bg-red-600 rounded-r"></div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500"><strong>Last updated:</strong> January 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              Luca Calcio AI may collect the following types of information when you visit our website:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Usage data (pages visited, time spent on site, browser type)</li>
              <li>Device information (IP address, device type, operating system)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide relevant content and recommendations</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this privacy policy. We may share information with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service providers who assist in operating our website</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your 
              browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Links</h2>
            <p>
              Our website contains links to betting sites operated by third parties. These sites have their own privacy 
              policies, and we are not responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information against unauthorized access, alteration, 
              disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p>
              Under UK data protection laws, you have rights regarding your personal data, including the right to access, 
              correct, or delete your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p><strong>Email:</strong> chris@starsite.digital</p>
              <p><strong>Company:</strong> Edge Ahead Media Limited</p>
            </div>
          </section>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
            <p className="text-blue-800 font-semibold">
              This privacy policy applies to Luca Calcio AI and is subject to UK data protection laws.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t-2 border-gray-200 bg-gradient-to-r from-green-50 via-white to-red-50">
        <div className="mx-auto max-w-6xl px-4 py-12 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-3 h-4 bg-green-600 rounded-l"></div>
              <div className="w-3 h-4 bg-white border-y border-gray-300"></div>
              <div className="w-3 h-4 bg-red-600 rounded-r"></div>
            </div>
            <div className="text-gray-600 font-medium">© 2025 Luca Calcio AI - Edge Ahead Media Limited</div>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="px-4 py-2 rounded-lg border-2 border-green-500 text-green-700 hover:bg-green-50 font-medium transition-all">← Back to Home</Link>
            <Link href="/terms" className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:bg-green-50 font-medium transition-all">Terms & Conditions</Link>
            <Link href="/cookies" className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:bg-green-50 font-medium transition-all">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}