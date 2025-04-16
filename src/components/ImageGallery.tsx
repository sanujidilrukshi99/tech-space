import { motion } from 'framer-motion';

const galleryItems = [
  {
    img: "/images/470871140_122231423480034196_2396142416418194223_n.jpg",
    title: "ICT Lab Sessions",
    description: "Students working on practical assignments",
    category: "work"
  },
  {
    img: "/images/470870034_122231403480036198_996446492696586205_n.jpg",
    title: "Coding Workshop",
    description: "Learning programming fundamentals",
    category: "event"
  },
  {
    img: "/images/470873161_122231373480039201_5897803294604340925_n.jpg",
    title: "Project Development",
    description: "Students working on their projects",
    category: "work"
  },
  {
    img: "/images/470873370_122231363480040202_7349671645899583704_n.jpg",
    title: "Interactive Learning",
    description: "Engaging with technology",
    category: "work"
  }
];

const ImageGallery = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {galleryItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="group relative overflow-hidden rounded-xl"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-6 text-white">
              <span className="text-sm uppercase tracking-wider text-purple-300">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
