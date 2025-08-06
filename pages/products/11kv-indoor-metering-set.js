import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function IndoorMeteringSet11kV() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('')
        }, 5000)
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result.message)
        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('')
        }, 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <NextSeo
        title="11 kV Indoor Metering Set - Vamet Industries"
        description="High-quality 11 kV Indoor Metering Set designed for indoor applications. Oil-filled, vacuum impregnated for metering applications."
        canonical="https://vametindustries.com/products/11kv-indoor-metering-set"
      />
      <Head>
        <title>11 kV Indoor Metering Set - Vamet Industries</title>
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
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1">
                <li className="inline-flex items-center">
                  <Link href="/">
                    <a className="breadcrumb-link inline-flex items-center text-sm font-medium">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <Link href="/#products">
                      <a className="breadcrumb-link ml-1 mr-1 text-sm font-medium">
                        Products
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-black">
                      11 kV Indoor Metering Set
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Product Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-normal text-left md:text-4xl brand-color mb-4">
              11 kV Indoor Metering Set
            </h1>
            <p className="text-lg text-gray-600">
              High-quality indoor metering set designed for metering
              applications combining voltage and current transformers for indoor
              installation
            </p>
          </div>

          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications Table */}
            <div className="space-y-8">
              {/* Basic Specifications */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 brand-color">
                  Product Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody className="space-y-2">
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700 w-1/2">
                          Product Classification
                        </td>
                        <td className="py-2 text-gray-600">
                          Instrument Transformer
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Manufacturer
                        </td>
                        <td className="py-2 text-gray-600">Vamet Industries</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Application
                        </td>
                        <td className="py-2 text-gray-600">Metering</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Rated System Voltage
                        </td>
                        <td className="py-2 text-gray-600">11 kV</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-gray-700">
                          Highest System Voltage
                        </td>
                        <td className="py-2 text-gray-600">12 kV</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Voltage Transformer Specifications */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 brand-color">
                  a.) Voltage Transformer
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody className="space-y-2">
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700 w-1/2">
                          Rated voltage ratio
                        </td>
                        <td className="py-2 text-gray-600">(11000) / (110)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Winding Connections
                        </td>
                        <td className="py-2 text-gray-600">Star-Star</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Rated Burden
                        </td>
                        <td className="py-2 text-gray-600">10 VA</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Class of Accuracy
                        </td>
                        <td className="py-2 text-gray-600">0.2</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Rated voltage factor and time
                        </td>
                        <td className="py-2 text-gray-600">1.2 continuous</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-gray-700">
                          Equipment Conforms to
                        </td>
                        <td className="py-2 text-gray-600">IS 3156</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Current Transformer Specifications */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 brand-color">
                  b.) Current Transformer
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody className="space-y-2">
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700 w-1/2">
                          Rated Primary Current
                        </td>
                        <td className="py-2 text-gray-600">
                          As per requirement
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Rated Burden
                        </td>
                        <td className="py-2 text-gray-600">5 VA</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          Class of Accuracy
                        </td>
                        <td className="py-2 text-gray-600">0.2S</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-gray-700">
                          Conforms to
                        </td>
                        <td className="py-2 text-gray-600">IS 2705</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Technical Specifications */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 brand-color">
                  General Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700 w-1/2">
                          1. Name and address of Manufacturer
                        </td>
                        <td className="py-2 text-gray-600">
                          Vamet Industries, Hyderabad
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          2. Type
                        </td>
                        <td className="py-2 text-gray-600">
                          Outdoor, Oil filled, Vacuum Impregnated : MOD/CB
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          3. Nature of service
                        </td>
                        <td className="py-2 text-gray-600">Outdoor *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          4. Type of Cooling
                        </td>
                        <td className="py-2 text-gray-600">ON *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          5. System characteristics
                        </td>
                        <td className="py-2 text-gray-600">
                          <div className="space-y-1">
                            <div>
                              <strong>a.</strong> Rated system voltage: 11 kV
                            </div>
                            <div>
                              <strong>b.</strong> Highest system voltage: 12 kV
                            </div>
                            <div>
                              <strong>c.</strong> Rated system frequency: 50 Hz
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          6. Oil
                        </td>
                        <td className="py-2 text-gray-600">
                          <div className="space-y-1">
                            <div>
                              <strong>a.</strong> Specification: To IS 335 *
                            </div>
                            <div>
                              <strong>b.</strong> Quantity for First Filling:
                              Approx. 60 liters.
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          7. Total weight with oil
                        </td>
                        <td className="py-2 text-gray-600">Approx. 200 Kgs.</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          8. Outline dimensional drawing with mounting details
                        </td>
                        <td className="py-2 text-gray-600">As per drawing</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          9. Mounting Details
                        </td>
                        <td className="py-2 text-gray-600">As per drawing</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-gray-700">
                          10. Overall dimensions
                        </td>
                        <td className="py-2 text-gray-600">As per drawing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Voltage Transformer Detailed Specifications */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 brand-color">
                  a.) Voltage Transformer - Detailed Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700 w-1/2">
                          1. Rated voltage ratio
                        </td>
                        <td className="py-2 text-gray-600">
                          (11000) / (110) *
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          2. Winding Connections
                        </td>
                        <td className="py-2 text-gray-600">Star-Star</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          3. Rated Burden
                        </td>
                        <td className="py-2 text-gray-600">10 VA *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          4. Class of Accuracy
                        </td>
                        <td className="py-2 text-gray-600">0.2*</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          5. Rated voltage factor and time
                        </td>
                        <td className="py-2 text-gray-600">1.2 continuous *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          6. Limits of ratio and phase error
                        </td>
                        <td className="py-2 text-gray-600">
                          Within limits specified by IS
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          7. Temperature rise of top oil at 1.2 times rated
                          primary voltage with rated secondary
                        </td>
                        <td className="py-2 text-gray-600">
                          Within limits specified by IS
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          8. H.V. Bushing Characteristics
                        </td>
                        <td className="py-2 text-gray-600">
                          <div className="space-y-1">
                            <div>
                              <strong>a.</strong> Type: Outdoor/ Indoor, Glazed
                              Porcelain *
                            </div>
                            <div>
                              <strong>b.</strong> Make: Suitable indigenous
                            </div>
                            <div>
                              <strong>c.</strong> Electrical characteristics: To
                              IS 2099 / 1996 *
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          9. One-minute power frequency withstand test on
                          primary winding kV rms
                        </td>
                        <td className="py-2 text-gray-600">28 *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          10. One-minute power frequency withstand test on
                          secondary winding kV rms
                        </td>
                        <td className="py-2 text-gray-600">3 *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          11. High voltage impulse withstand test on primary
                          windings kV peak
                        </td>
                        <td className="py-2 text-gray-600">75 *</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-gray-700">
                          12. Reference specification to which the equipment
                          conform
                        </td>
                        <td className="py-2 text-gray-600">IS 3156 / 1992</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Current Transformer Detailed Specifications */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 brand-color">
                  b.) Current Transformer - Detailed Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700 w-1/2">
                          1. Rated Voltage/Highest Voltage
                        </td>
                        <td className="py-2 text-gray-600">11 kV / 12 kV *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          2. Rated Primary Current
                        </td>
                        <td className="py-2 text-gray-600">Amps *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          3. Secondary Core details
                        </td>
                        <td className="py-2 text-gray-600">
                          <div className="space-y-1">
                            <div>
                              <strong>a.</strong> Rated Secondary Current: 5 Amp
                              *
                            </div>
                            <div>
                              <strong>b.</strong> Rated Output: Rated Output
                            </div>
                            <div>
                              <strong>c.</strong> Class of accuracy: 0.2S *
                            </div>
                            <div>
                              <strong>d.</strong> Accuracy limit factor: NA *
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          4. Turns Ratio
                        </td>
                        <td className="py-2 text-gray-600">
                          Nominally same as transformation ratio
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          5. Short time thermal current & its duration
                        </td>
                        <td className="py-2 text-gray-600">
                          To suit system fault level
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          6. Rated dynamic current (peak value)
                        </td>
                        <td className="py-2 text-gray-600">
                          2.5 * Short Time Current Rating
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">7.</td>
                        <td className="py-2 text-gray-600">
                          <div className="space-y-1">
                            <div>
                              <strong>a.</strong> Rated continuous thermal
                              current: 120% of rated primary current *
                            </div>
                            <div>
                              <strong>b.</strong> Temperature rise over ambient:
                              Within limits prescribed by IS. *
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          8. Impulse withstand test voltage kV Peak
                        </td>
                        <td className="py-2 text-gray-600">75 *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          9. One-minute power frequency dry/wet withstand test
                          voltage on primary kV rms
                        </td>
                        <td className="py-2 text-gray-600">28 *</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium text-gray-700">
                          10. One-minute power frequency withstand test voltage
                          on secondary kV rms
                        </td>
                        <td className="py-2 text-gray-600">3 *</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-gray-700">
                          11. Reference specification to which the equipment
                          conform
                        </td>
                        <td className="py-2 text-gray-600">IS 2705 / 1992</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Only items marked with* are
                    guaranteed. All others are indicative and subject to change.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="relative h-[500px] mb-4">
                  <Image
                    src="/images/site/vamet-product-details-10.jpg"
                    alt="11 kV Indoor Metering Set"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center brand-color mb-2">
                  11 kV Indoor Metering Set
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Indoor Oil-Filled Metering Set for Indoor Metering
                  Applications
                </p>
              </div>

              {/* Contact Information */}
              <div className="mt-6 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold brand-color mb-4">
                  Get a Quote
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Contact us for pricing and technical specifications tailored
                  to your requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span className="text-base md:text-sm text-black font-medium">
                      vametindustries@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span className="text-base md:text-sm text-black font-medium">
                      +91 8886959691
                    </span>
                  </div>
                </div>
              </div>

              {/* Send Message Section */}
              <div className="mt-6 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold brand-color mb-4">
                  Send Message
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical text-sm"
                      placeholder="Enter your message..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting && (
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>

                {/* Toast Messages */}
                {submitStatus === 'success' && (
                  <div className="fixed top-4 right-4 z-50 p-4 bg-green-500 text-white rounded-lg shadow-lg flex items-center space-x-2 animate-pulse">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="font-medium">
                      Message sent successfully!
                    </span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="fixed top-4 right-4 z-50 p-4 bg-red-500 text-white rounded-lg shadow-lg flex items-center space-x-2 animate-pulse">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="font-medium">
                      Failed to send message. Please try again.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
