import Image from 'next/image'
import { useState } from 'react'

export default function Sponsors() {
  const [selectedPdf, setSelectedPdf] = useState(null)

  const handleImageClick = pdfPath => {
    window.open(pdfPath, '_blank')
  }

  return (
    <section className="pb-6 pt-8" id="sponsors">
      <div className="px-4 pb-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center md:leading-tight md:tracking-normal md:text-4xl brand-color">
          Vendor Registrations
        </h1>
        <p className="max-w-4xl mx-auto mb-12 text-lg text-black text-center md:text-lg">
          We are registered as approved vendors with APSPDCL, APTRANSCO and
          TSNPDCL for supplying Current Transformers(CT) and Potential
          Transformers (PT)
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 mt-6">
          <button
            className="group relative bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-gray-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full"
            onClick={() => handleImageClick('/images/site/vamet-vr-1-page.pdf')}
          >
            <div className="relative h-48 p-4 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/site/vamet-vr-1.jpeg"
                alt="APSPDCL Vendor Registration"
                width={200}
                height={120}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </button>

          <button
            className="group relative bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-gray-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full"
            onClick={() => handleImageClick('/images/site/vamet-vr-2-page.pdf')}
          >
            <div className="relative h-48 p-4 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/site/vamet-vr-2.jpeg"
                alt="APTRANSCO Vendor Registration"
                width={200}
                height={120}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </button>

          <button
            className="group relative bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-gray-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full"
            onClick={() => handleImageClick('/images/site/vamet-vr-3-page.pdf')}
          >
            <div className="relative h-48 p-4 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/site/vamet-vr-3.jpeg"
                alt="TSNPDCL Vendor Registration"
                width={200}
                height={120}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </button>
        </div>
      </div>
    </section>
  )
}
