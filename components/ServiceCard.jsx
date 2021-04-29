
/** @type {React.FC<{ item: { id: string, icon: string, title: string, description: string } }>} */
const ServicesCard = ({ item }) => (
  <div className="rounded-lg shadow-xl px-10 py-16 bg-white" id={item.id}>
    <div className="h-24 flex items-end mb-6">
      <img src={item.icon} alt="icon" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
    <p className="font-light leading-normal text-gray-500">{item.description}</p>
  </div>
)

export default ServicesCard