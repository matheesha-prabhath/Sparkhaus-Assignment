const services = [
  { title: "Web Development", description: "Build responsive and modern websites." },
  { title: "Mobile Apps", description: "Develop sleek and functional mobile applications." },
  { title: "UI/UX Design", description: "Craft user-friendly and beautiful interfaces." },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
