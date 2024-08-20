import cardimg1 from '../../assets/productcard/card-1.png';
import cardimg2 from '../../assets/productcard/card-2.png';
import cardimg3 from '../../assets/productcard/card-3.png';

const IcognativeProductsCard = () => {
  const cardData = [
    {
      title: 'Voice Cloning',
      description: [
        "Synthesizes artificial voices that closely mimic a specific person's speech patterns, enabling realistic voice replication for various applications.",
      ],
      image: cardimg1,
    },
    {
      title: 'Smart Contract Development',
      description: [
        'Creates self-executing contracts with predefined terms and conditions directly on a blockchain, ensuring trust, transparency, and automation in agreements.',
      ],
      image: cardimg2,
    },
    {
      title: '3D Object Generation',
      description: [
        'Creates three-dimensional digital representations of objects from various data sources, such as images, point clouds, or sketches, for use in virtual environments, simulations, or manufacturing.',
      ],
      image: cardimg3,
    },
  ];

  return (
    <div className="Productscard-container max-w-screen-2xl mx-auto px-4 my-28">
      <div className="headline px-4 mb-0">
        <h1 className="w-full text-4xl font-medium text-[#08122A]">
          Key Tools
        </h1>
        <p className="opacity-50 text-lg mt-4 mb-0">
          Explore an ecosystem where technology serves <br /> humanity &
          empowers people
        </p>
      </div>

      <div className="card-main">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card-container max-h-[520px] card${index + 1}`}
            style={{
              backgroundImage: `url(${card.image})`,
            }}>
            <div className="card-content">
              <h1 className="w-full text-4xl font-medium]">{card.title}</h1>
              <p className="card-description opacity-90 mt-6">
                <ul>
                  {card.description.map((element, index) => (
                    <li key={index} className="py-1 text-[20px]">
                      {element}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
            <div className="card-icon-container">
              <div className="card-icon">→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IcognativeProductsCard;
