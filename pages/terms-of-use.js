import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen">
      <NextSeo
        title="Terms of Use - Vamet Industries"
        description="Terms of Use for Vamet Industries Website"
        canonical="https://vametindustries.com/terms-of-use"
      />
      <Head>
        <title>Terms of Use - Vamet Industries</title>
        <link
          rel="icon"
          type="image/jpeg"
          href="/images/site/vamet-favicon.jpg"
        />
        <link
          rel="shortcut icon"
          type="image/jpeg"
          href="/images/site/vamet-favicon.jpg"
        />
        <link rel="apple-touch-icon" href="/images/site/vamet-favicon.jpg" />
      </Head>
      <Header />

      <section className="py-12">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold tracking-normal text-center md:text-4xl brand-color">
            Terms of Use
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing and using the Vamet Industries website, you accept
                and agree to be bound by the terms and provision of this
                agreement. These Terms of Use constitute a legally binding
                agreement between you and Vamet Industries.
              </p>
              <p className="mb-4">
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Use License
              </h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the
                materials on Vamet Industries&apos; website for personal,
                non-commercial transient viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained on the
                  website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
              <p className="mb-4">
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by Vamet Industries at
                any time.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Product Information
              </h2>
              <p className="mb-4">
                The materials on Vamet Industries&apos; website are provided on
                an &apos;as is&apos; basis. Vamet Industries makes no
                warranties, expressed or implied, and hereby disclaims and
                negates all other warranties including without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
              <p className="mb-4">
                Product specifications, pricing, and availability are subject to
                change without notice. We reserve the right to modify or
                discontinue products at any time.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Limitations
              </h2>
              <p className="mb-4">
                In no event shall Vamet Industries or its suppliers be liable
                for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on Vamet
                Industries&apos; website, even if Vamet Industries or an
                authorized representative has been notified orally or in writing
                of the possibility of such damage.
              </p>
              <p className="mb-4">
                Because some jurisdictions do not allow limitations on implied
                warranties, or limitations of liability for consequential or
                incidental damages, these limitations may not apply to you.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Accuracy of Materials
              </h2>
              <p className="mb-4">
                The materials appearing on Vamet Industries&apos; website could
                include technical, typographical, or photographic errors. Vamet
                Industries does not warrant that any of the materials on its
                website are accurate, complete, or current.
              </p>
              <p className="mb-4">
                Vamet Industries may make changes to the materials contained on
                its website at any time without notice. However, Vamet
                Industries does not make any commitment to update the materials.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">Links</h2>
              <p className="mb-4">
                Vamet Industries has not reviewed all of the sites linked to our
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Vamet Industries of the site.
              </p>
              <p className="mb-4">
                Use of any such linked website is at the user&apos;s own risk.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Modifications
              </h2>
              <p className="mb-4">
                Vamet Industries may revise these terms of service for its
                website at any time without notice. By using this website, you
                are agreeing to be bound by the then current version of these
                terms of service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Governing Law
              </h2>
              <p className="mb-4">
                These terms and conditions are governed by and construed in
                accordance with the laws of India and you irrevocably submit to
                the exclusive jurisdiction of the courts in Hyderabad,
                Telangana, India.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 border border-gray-300">
              <p className="text-sm text-gray-600 text-center">
                <strong>Last Updated:</strong> July 2025
                <br />
                These Terms of Use may be updated from time to time. Please
                check this page periodically for changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
