import Header from 'components/Header'
import ServiceCard from 'components/ServiceCard'
import servicesData from 'lib/services-data'

function IndexPage() {
  return (
    <div className="container w-full md:w-auto mx-auto md:px-4">
      <Header />
      <main className="container mx-auto px-8 md:px-4 py-16 md:py-0">
        <section className="flex-center md:pb-24">
          <div className="md:w-2/5">
            <h1 className="text-5xl font-bold leading-snug mb-4">Virtual healthcare<br />for you</h1>
            <p className="text-xl text-gray-500 font-light mb-6">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online<br />for everyone</p>
            <button className="bg-blue-500 text-white py-3 px-10 rounded-full">Consult today</button>
          </div>
          <div className="hidden md:block">
            <img src="/img/hero-illustration.png" alt="Illustration" width="693" height="598" />
          </div>
        </section>
        <section className="container mx-auto md:px-4 py-20 md:py-24 relative">
          <div className="index-services-bg" />
          <div className="md:px-20 md:mb-20">
            <h2 className="text-3xl font-bold md:text-center mb-6">Our services</h2>
            <hr className="w-16 border-black border-solid border-b-2 md:mx-auto mb-8" />
            <p className="text-md text-gray-500 font-light md:text-center">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-20 md:mt-0">
          {servicesData.map(item => (
            <ServiceCard key={item.id} item={item} />
          ))}
          </div>
          <footer className="text-center py-16">
            <a href="#" className="inline-block py-3 px-12 rounded-full text-lg text-blue-400 font-bold border-blue-500 border-solid border-2">Learn more</a>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default IndexPage