import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Your App - Build the Damn Thing!</title>
        <meta name="description" content="Your app built with AI" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">🎉 Your App is Live!</h1>
            <p className="text-xl text-slate-400">
              Welcome to your freshly built app on Netlify
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">🚀 Next Steps</h2>
              <ol className="text-slate-300 space-y-3 list-decimal list-inside">
                <li>Customize this page to match your vision</li>
                <li>Test with real users</li>
                <li>Deploy updates (git push auto-deploys!)</li>
                <li>Gather feedback and iterate</li>
              </ol>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">📚 Resources</h2>
              <ul className="text-slate-300 space-y-3 list-disc list-inside">
                <li>
                  <a href="https://nextjs.org/docs" className="text-indigo-400 hover:text-indigo-300">
                    Next.js Documentation
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/docs" className="text-indigo-400 hover:text-indigo-300">
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="text-indigo-400 hover:text-indigo-300">
                    Your GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-900/30 border border-blue-700/50 rounded-lg p-8 text-center">
            <p className="text-blue-200 text-lg font-semibold">
              💡 Remember: Ship fast, iterate based on user feedback. Your users will teach you what matters.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
