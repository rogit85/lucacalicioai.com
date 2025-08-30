import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
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
          Terms and Conditions
        </h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. About This Website</h2>
            <p>
              Luca Calcio AI is operated by Edge Ahead Media Limited. This website provides information and comparisons 
              of football betting sites and services available in the UK.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of This Website</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              This website is intended for users who are 18 years of age or older.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information and Content</h2>
            <p>
              The information on Luca Calcio AI is provided for general information purposes only. We strive to keep the 
              information up to date and correct, but we make no representations or warranties about the completeness, 
              accuracy, reliability, or availability of the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. External Links</h2>
            <p>
              Our website contains links to external betting sites. We have no control over the nature, content, and 
              availability of those sites. The inclusion of any links does not necessarily imply a recommendation or 
              endorse the views expressed within them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Responsible Gambling</h2>
            <p>
              Gambling can be addictive. Please gamble responsibly. If you feel you may have a gambling problem, 
              please visit <a href="https://www.begambleaware.org" target="_blank" className="text-green-600 hover:text-green-700 underline">BeGambleAware.org</a> for help and support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p><strong>Company:</strong> Edge Ahead Media Limited</p>
              <p><strong>Email:</strong> chris@starsite.digital</p>
              <p><strong>Website:</strong> Luca Calcio AI</p>
            </div>
          </section>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
            <p className="text-red-800 font-semibold">
              18+ only. Please gamble responsibly. BeGambleAware.org
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
            <Link href="/privacy" className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-100 hover:border-gray-400 font-medium transition-all shadow-md hover:shadow-lg">Privacy Policy</Link>
            <Link href="/cookies" className="px-4 py-2 rounded-lg border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 font-medium transition-all shadow-md hover:shadow-lg">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}


