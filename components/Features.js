import Image from 'next/image'

export default function Features() {
  return (
    <section id="features" className="py-3">
      <div className="max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center md:leading-tight md:tracking-normal md:text-4xl brand-color">
          Why Us?
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-6 text-lg text-black leading-relaxed">
            Vamet make CTs and PTs have Zero Failures since our inception. We
            are the most sought after brand in the field of Instrument
            Transformers. Our products have gained a unique brand name that has
            set a benchmark for reliable and long term working/performance to
            the system conditions.
          </p>
          <p className="text-lg text-black leading-relaxed">
            Being a Customer centric and Quality driven organization, we keenly
            listen to our customers&apos; product requirements and supply them
            the most technically viable and reliable products.
          </p>
        </div>

        {/* Vision, Mission, Core Values Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Vision */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Image
                  src="/images/site/vamet-vision.jpg"
                  alt="Vision"
                  width={200}
                  height={200}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold brand-color">Vision</h3>
              <p className="text-black leading-relaxed">
                To emerge as a synonymous brand for quality Instrument
                Transformers in India.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Image
                  src="/images/site/vamet-mission.jpg"
                  alt="Mission"
                  width={200}
                  height={200}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold brand-color">Mission</h3>
              <p className="text-black leading-relaxed">
                Accurate Metering and Safeguarding Grid Infrastructure.
              </p>
            </div>

            {/* Core Values */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Image
                  src="/images/site/vamet-core-values.jpg"
                  alt="Core Values"
                  width={200}
                  height={200}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold brand-color">
                Core Values
              </h3>
              <p className="text-black leading-relaxed">
                Honesty, Reliability, Innovation, Customer Centric.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
