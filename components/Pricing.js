import Image from 'next/image'
import Link from 'next/link'

export default function Pricing() {
  const productTitles = [
    '11kV Current Transformer',
    '11kV Single Phase Potential Transformer',
    '11kV Current Transformer Dual Ratio',
    '33kV Current Transformer',
    '33kV Single Phase Potential Transformer',
    '33kV Current Transformer Dual Ratio',
    '33kV Current Transformer for Higher Current Ratio',
    '11kV 3 Phase Potential Transformer',
    '11 kV Semi-Indoor Metering Set',
    '11 kV Indoor Metering Set',
  ]

  return (
    <section id="products" className="py-6">
      <div className="max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center md:leading-tight md:tracking-normal md:text-4xl brand-color">
          Products
        </h1>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-black leading-relaxed">
            All our products are custom designed and manufactured to suit
            customers&apos; individual and specific requirements. We have built
            a reputation of supplying well designed, robust, and reliable
            products to our customers.
          </p>
        </div>

        {/* Product Tiles Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productTitles.map((title, index) => (
              <div key={index + 1} className="text-center">
                {index === 0 ? (
                  <Link href="/products/11kv-current-transformer" passHref>
                    <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                      <div className="relative h-64 p-4">
                        <Image
                          src={`/images/site/vamet-product-${index + 1}.jpg`}
                          alt={title}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </button>
                  </Link>
                ) : index === 1 ? (
                  <Link href="/products/11kv-potential-transformer" passHref>
                    <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                      <div className="relative h-64 p-4">
                        <Image
                          src={`/images/site/vamet-product-${index + 1}.jpg`}
                          alt={title}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </button>
                  </Link>
                ) : index === 2 ? (
                  <Link
                    href="/products/11kv-current-transformer-dual-ratio"
                    passHref
                  >
                    <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                      <div className="relative h-64 p-4">
                        <Image
                          src={`/images/site/vamet-product-${index + 1}.jpg`}
                          alt={title}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </button>
                  </Link>
                ) : index === 3 ? (
                  <Link href="/products/33kv-current-transformer" passHref>
                    <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                      <div className="relative h-64 p-4">
                        <Image
                          src={`/images/site/vamet-product-${index + 1}.jpg`}
                          alt={title}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </button>
                  </Link>
                ) : index === 4 ? (
                  <Link href="/products/33kv-potential-transformer" passHref>
                    <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                      <div className="relative h-64 p-4">
                        <Image
                          src={`/images/site/vamet-product-${index + 1}.jpg`}
                          alt={title}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </button>
                  </Link>
                ) : (
                  <button className="group relative bg-white hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 w-full">
                    <div className="relative h-64 p-4">
                      <Image
                        src={`/images/site/vamet-product-${index + 1}.jpg`}
                        alt={title}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </button>
                )}
                <h3 className="mt-4 text-lg font-semibold text-center brand-color px-2">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
