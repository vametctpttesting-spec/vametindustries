import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sponsors from '../components/Sponsors'
import Features from '../components/Features'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <div className="min-h-screen">
      <NextSeo
        title="Plutonium"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: 'https://plutonium.vercel.app/',
          title: 'Plutonium',
          description: 'Plutonium – where darkness meets the web.',
          images: [
            {
              url: 'blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974',
            },
          ],
          site_name: 'Plutonium',
        }}
        twitter={{
          handle: '@saurishhh',
          site: 'https://plutonium.vercel.app/',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="top" className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight md:text-6xl brand-color">
              Leading Manufacturers of High Voltage Instrument Transformers
            </h1>
            <p className="max-w-4xl pt-5 mx-auto text-lg text-black md:text-lg">
              We design and manufacture a wide range of High Voltage, Oil
              Impregnated Instrument Transformers (Current Transformers(CT) and
              Potential Transformers (PT)) for outdoor use. Our products have
              been successfully tested for Impulse Tests and Short Circuit Tests
              at CPRI.
            </p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        /> */}
      </section>

      <Sponsors />

      <Features />

      {/* About Us Section */}
      <section id="about" className="py-6">
        <div className="max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
          <h1 className="mb-8 text-2xl font-bold tracking-normal text-center md:leading-tight md:tracking-normal md:text-4xl brand-color">
            About Us
          </h1>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-black leading-relaxed">
            <p>
              Vamet Industries was started in the year 2000 and it is currently
              managed by Mr. Prasad Chintamaneni. All our products have been
              designed, and developed by Mr. Prasad and his team in 1979 at
              Vamet Electric Private Limited, which was the first company to
              manufacture High Voltage Instrument Transformers in Andhra
              Pradesh. Since then, the products&apos; performance and quality
              have been significantly improved.
            </p>
            <p>
              Since our inception, we have manufactured a wide range and variety
              of Instrument Transformers conforming to Bureau of Indian
              Standards (BIS). The company is well equipped with all facilities
              required for manufacturing of Instrument Transformers.
            </p>
            <p>
              Backed by several years of expertise in the field of instrument
              transformer manufacturing, we provide cost optimum solution to our
              customers. Our experience in the field of Instrument Transformers
              enables us to guide our customers in choosing the right product.
            </p>
          </div>
        </div>
      </section>

      <Pricing />

      {/* Our Customers Section */}
      <section id="customers" className="py-6">
        <div className="max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
          <h1 className="mb-8 text-2xl font-bold tracking-normal text-center md:leading-tight md:tracking-normal md:text-4xl brand-color">
            Our Customers
          </h1>

          {/* Auto-scroll Container */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 animate-scroll">
              {/* First set of images */}
              {Array.from({ length: 18 }, (_, index) => (
                <div key={index + 1} className="flex-shrink-0">
                  <div className="w-48 h-32 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-4 flex items-center justify-center">
                    <Image
                      src={`/images/site/vamet-customer-${index + 1}.jpg`}
                      alt={`Customer ${index + 1}`}
                      width={200}
                      height={100}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 18 }, (_, index) => (
                <div key={`duplicate-${index + 1}`} className="flex-shrink-0">
                  <div className="w-48 h-32 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-4 flex items-center justify-center">
                    <Image
                      src={`/images/site/vamet-customer-${index + 1}.jpg`}
                      alt={`Customer ${index + 1}`}
                      width={200}
                      height={100}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-6">
        <div className="max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
          <h1 className="mb-8 text-2xl font-bold tracking-normal text-center md:leading-tight md:tracking-normal md:text-4xl brand-color">
            Quality
          </h1>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-black leading-relaxed">
              Our products, popularly known as &quot;Vamet make CTs and
              PTs&quot;, are known for their impeccable quality and long life.
              The fact that there were &apos;zero field failures&apos; for the
              CTs and PTs that we have supplied so far, signifies the importance
              of the quality measures that we follow in all our manufacturing
              processes.
            </p>
          </div>

          {/* Quality Tiles */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                  <div className="relative h-64 p-4">
                    <Image
                      src="/images/site/vamet-quality-1.jpg"
                      alt="Rigorous Testing"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </button>
                <h3 className="mt-4 text-lg font-semibold text-center brand-color px-2">
                  Rigorous Testing
                </h3>
              </div>

              <div className="text-center">
                <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                  <div className="relative h-64 p-4">
                    <Image
                      src="/images/site/vamet-quality-2.jpg"
                      alt="Meticulous Selection of Raw Material"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </button>
                <h3 className="mt-4 text-lg font-semibold text-center brand-color px-2">
                  Meticulous Selection of Raw Material
                </h3>
              </div>

              <div className="text-center">
                <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                  <div className="relative h-64 p-4">
                    <Image
                      src="/images/site/vamet-quality-3.jpg"
                      alt="Skilled Work Force"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </button>
                <h3 className="mt-4 text-lg font-semibold text-center brand-color px-2">
                  Skilled Work Force
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-6">
        <div className="max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
          <h1 className="mb-8 text-2xl font-bold tracking-normal text-center md:leading-tight md:tracking-normal md:text-4xl brand-color">
            Contact Us
          </h1>

          {/* Google Maps Widget */}
          <div className="mb-8 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.3800292110013!2d78.42602382917327!3d17.48266799925136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzU3LjYiTiA3OMKwMjUnMzUuNyJF!5e0!3m2!1sen!2sin!4v1504602298965"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Registered Office */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 brand-color">
                Registered Office
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Shed No: F-10A, Sy No: 252,
                  <br />
                  Phase – 1, IDA, Jeedimetla,
                  <br />
                  Hyderabad - 500 055, INDIA
                </p>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+91 8886959691</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>vametindustries@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Works Address */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 brand-color">
                Works Address
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  H-No 5-35/212/A, Plot No 73,
                  <br />
                  Durgasaktipuram Prashanthi Nagar,
                  <br />
                  Industrial Estate, Kukatpally,
                  <br />
                  Hyderabad - 500 072, INDIA
                </p>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+91 9848095751</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>vametindustries@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 brand-color">Social</h3>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/vametindustries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 brand-color brand-color-hover transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://x.com/vametindustries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 brand-color brand-color-hover transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
