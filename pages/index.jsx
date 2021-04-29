import Header from 'components/Header'

function IndexPage() {
  const servicesData = [
    {
      id: 'search_doctor',
      title: "Search doctor",
      description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      icon: "/img/services-01.png"
    },
    {
      id: 'online_pharmacy',
      title: "Online pharmacy",
      description: "Buy  your medicines with our mobile application with a simple delivery system",
      icon: "/img/services-02.png"
    },
    {
      id: 'consultation',
      title: "Consultation",
      description: "Free consultation with our trusted doctors and get the best recomendations",
      icon: "/img/services-03.png"
    },
    {
      id: 'details_info',
      title: "Details info",
      description: "Free consultation with our trusted doctors and get the best recomendations",
      icon: "/img/services-04.png"
    },
    {
      id: 'emergency_care',
      title: "Emergency care",
      description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
      icon: "/img/services-05.png"
    },
    {
      id: 'tracking',
      title: "Tracking",
      description: "Track and save your medical history and health data ",
      icon: "/img/services-06.png"
    }
  ]
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
            <div className="rounded-lg shadow-xl px-10 py-16 bg-white" key={item.id} id={item.id}>
              <div className="h-24 flex items-end mb-6">
                <img src={item.icon} alt="icon" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="font-light leading-normal text-gray-500">{item.description}</p>
            </div>
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