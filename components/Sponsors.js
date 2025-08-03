import Image from 'next/image'

export default function Sponsors() {
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
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-2 mt-6 md:grid-cols-4 md:gap-3">
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              src="/images/site/vamet-vr-1.jpg"
              alt="APSPDCL Vendor Registration"
              width={200}
              height={120}
              className="mt-6 h-16 w-auto object-contain transition duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              src="/images/site/vamet-vr-2.jpg"
              alt="APTRANSCO Vendor Registration"
              width={200}
              height={120}
              className="mt-6 h-16 w-auto object-contain transition duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              src="/images/site/vamet-vr-3.jpg"
              alt="TSNPDCL Vendor Registration"
              width={200}
              height={120}
              className="mt-6 h-16 w-auto object-contain transition duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              src="/images/site/vamet-vr-4.jpg"
              alt="Vendor Registration Certificate"
              width={200}
              height={120}
              className="mt-6 h-16 w-auto object-contain transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
