import Image from "next/image";
import Link from "next/link";

export default function CookiesPage() {
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
          Cookie Policy
        </h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500"><strong>Last updated:</strong> January 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">
              Luca Calcio AI uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors use our website</li>
              <li><strong>Functional Cookies:</strong> These improve your experience by remembering your preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                <p>
                  These cookies are strictly necessary for the operation of our website. They enable core functionality 
                  such as security, network management, and accessibility.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                <p>
                  We use analytics cookies to collect information about how visitors use our website. This helps us 
                  improve the website and understand which pages are most popular.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Third-Party Cookies</h3>
                <p>
                  Some of our pages may contain content from third parties (such as embedded videos or social media buttons), 
                  which may set their own cookies. We don&apos;t control these cookies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Most browsers allow you to refuse cookies or delete cookies</li>
              <li>You can set your browser to notify you when cookies are being used</li>
              <li>You can disable cookies entirely, though this may affect website functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Browser Settings</h2>
            <p className="mb-4">
              To manage cookies in your browser:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p><strong>Email:</strong> chris@starsite.digital</p>
              <p><strong>Company:</strong> Edge Ahead Media Limited</p>
              <p><strong>Website:</strong> Luca Calcio AI</p>
            </div>
          </section>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
            <p className="text-green-800 font-semibold">
              By continuing to use our website, you consent to our use of cookies as described in this policy.
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
            <Link href="/" className="px-4 py-2 rounded-lg border-2 border-green-600 bg-green-600 text-white hover:bg-green-700 hover:border-green-700 font-medium transition-all shadow-md hover:shadow-lg">← Back to Home</Link>
            <Link href="/terms" className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-100 hover:border-gray-400 font-medium transition-all shadow-md hover:shadow-lg">Terms & Conditions</Link>
            <Link href="/privacy" className="px-4 py-2 rounded-lg border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 font-medium transition-all shadow-md hover:shadow-lg">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}