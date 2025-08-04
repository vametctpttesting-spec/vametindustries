import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <NextSeo
        title="Privacy Policy - Vamet Industries"
        description="Privacy Policy and Legal Disclaimers for Vamet Industries"
        canonical="https://vametindustries.com/privacy-policy"
      />
      <Head>
        <title>Privacy Policy - Vamet Industries</title>
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
            Privacy Policy & Legal Disclaimers
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Copyright Notice
              </h2>
              <p className="mb-4">
                All content, images, designs, graphics, text, software, and
                other materials on this website are the exclusive property of{' '}
                <strong>Vamet Industries</strong> and are protected by Indian
                and international copyright laws, including but not limited to
                the Copyright Act, 1957 of India.
              </p>
              <p className="mb-4">
                <strong>
                  Unauthorized use, reproduction, distribution, or modification
                  of any content from this website is strictly prohibited
                  without prior written consent from Vamet Industries.
                </strong>{' '}
                Legal action will be taken against any individual or entity
                found to be in violation of these terms under the applicable
                laws of India.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Intellectual Property Rights
              </h2>
              <p className="mb-4">
                The trademarks, service marks, logos, and all other proprietary
                materials displayed on this website are the property of Vamet
                Industries. No permission is granted to use these marks without
                the express written permission of Vamet Industries.
              </p>
              <p className="mb-4">
                Any unauthorized use of our intellectual property may result in
                civil and criminal penalties under the Trade Marks Act, 1999 and
                other applicable Indian laws.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Privacy Policy
              </h2>
              <h3 className="text-lg font-semibold mb-3 brand-color">
                Information Collection
              </h3>
              <p className="mb-4">
                We collect information you provide directly to us, such as when
                you contact us through our website, request information about
                our products, or engage with our services. This may include your
                name, email address, phone number, company information, and any
                other information you choose to provide.
              </p>

              <h3 className="text-lg font-semibold mb-3 brand-color">
                Use of Information
              </h3>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Provide information about our products and services</li>
                <li>
                  Process business transactions and maintain business
                  relationships
                </li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 brand-color">
                Data Protection
              </h3>
              <p className="mb-4">
                We implement appropriate security measures to protect your
                personal information in accordance with the Information
                Technology Act, 2000 and the Personal Data Protection Bill (when
                enacted). We do not sell, trade, or otherwise transfer your
                personal information to third parties without your consent,
                except as described in this policy.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Website Usage Terms
              </h2>
              <p className="mb-4">
                By accessing and using this website, you agree to comply with
                and be bound by the following terms:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  You may view and download content solely for personal,
                  non-commercial use
                </li>
                <li>
                  You may not modify, distribute, transmit, or use the content
                  for commercial purposes
                </li>
                <li>
                  You may not remove any copyright or proprietary notices from
                  the content
                </li>
                <li>
                  You may not use automated systems to access or collect
                  information from this website
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                The information on this website is provided on an &quot;as
                is&quot; basis. Vamet Industries makes no representations or
                warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, or availability of the
                website or the information contained herein.
              </p>
              <p className="mb-4">
                Vamet Industries shall not be liable for any damages arising
                from the use of this website or reliance on any information
                provided herein.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Governing Law and Jurisdiction
              </h2>
              <p className="mb-4">
                These terms and conditions shall be governed by and construed in
                accordance with the laws of India. Any disputes arising out of
                or in connection with this website shall be subject to the
                exclusive jurisdiction of the courts in Hyderabad, Telangana,
                India.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Legal Action Notice
              </h2>
              <p className="mb-4 font-semibold">
                WARNING: Any unauthorized reproduction, distribution, or use of
                content from this website may result in:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Civil action for damages under the Copyright Act, 1957</li>
                <li>Criminal prosecution under applicable Indian laws</li>
                <li>Injunctive relief to prevent further infringement</li>
                <li>Attorney fees and legal costs</li>
              </ul>
              <p className="mb-4">
                We actively monitor for unauthorized use of our content and will
                pursue all available legal remedies against infringers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 brand-color">
                Contact Information
              </h2>
              <p className="mb-4">
                For any questions regarding this Privacy Policy or to request
                permission for use of our content, please contact us at:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> vametindustries@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 8886959691
                </p>
                <p>
                  <strong>Address:</strong> Shed No: F-10A, Sy No: 252, Phase –
                  1, IDA, Jeedimetla, Hyderabad - 500 055, India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <strong className="brand-color">Last Updated:</strong>{' '}
                <span className="brand-color font-bold">July 2025</span>
                <br />
                This Privacy Policy may be updated from time to time. Please
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
