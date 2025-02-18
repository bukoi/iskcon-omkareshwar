export default function WhyKrishna() {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Heading with Gradient Text */}
            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
                uppercase
                mb-4
                bg-gradient-to-r
                from-sky-500
                to-sky-700
                bg-clip-text
                text-transparent
              "
            >
              WHY KRISHNA?
            </h2>
            
            {/* Paragraph */}
            <p className="max-w-3xl mt-6 text-slate-700 text-lg leading-loose text-justify font-serif">
            Deep dive into the spiritual oasis that is the Hare Krishna Movement by way of these insightful short-films, which even as they sate your curiosity are sure to evoke the great thirst in you. The thirst for Krishna, the desire to serve Him and to walk the path of Bhakti, which is the religion of love and is the core of the Hare Krishna Movement.
            </p>
            
            {/* Divider */}
            <div className="w-[100px] h-[3px] bg-orange-500 mt-6" />
          </div>
        </div>
      </section>
    );
  }
  