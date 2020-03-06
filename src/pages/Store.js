import React from 'react';

const Store = (props) => {
  const storeItems = [
    {
      id: '0010D',
      images: [],
      type: 'donation',
      name: "Donate $10",
      price: "10.00",
      description: "$10 Donation to VOWAID Foundation",
    },
    {
      id: '0020D',
      images: [],
      type: 'donation',
      name: "Donate $20",
      price: "20.00",
      description: "$20 Donation to VOWAID Foundation",
    },
    {
      id: '0050D',
      images: [],
      type: 'donation',
      name: "Donate $50",
      price: "50.00",
      description: "$50 Donation to VOWAID Foundation",
    },
    {
      id: '0100D',
      images: [],
      type: 'donation',
      name: "Donate $100",
      price: "100.00",
      description: "$100 Donation to VOWAID Foundation",
    },
    {
      id: '1500D',
      images: [],
      type: 'donation',
      name: "Donate $1500",
      price: "1500.00",
      description: "$1500 Donation to VOWAID Foundation",
    },
    {
      id: '2600C',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,q_50,h_230/v1535165336/VOWAID/26XX-coin-squirrel.png',
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,q_50,h_230/v1535165336/VOWAID/26XX-coin-skull.png',
      ],
      type: 'coin',
      name: "26XX SIGINT/EW Challenge Coin",
      price: "25.00",
      description: "Full color, 2&quot;, 26xx Skull and Secret Squirrel",
    },
    {
      id: '2621P',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_fill,f_auto,h_230,w_169/v1539732628/VOWAID/2621-pin.jpg',
      ],
      type: 'pin',
      name: "2621 Pin",
      price: "10.00",
      description: "1&quot; 2621 Pin",
    },
    {
      id: '2641P',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_230/v1539732628/VOWAID/2641-pin.jpg',
      ],
      type: 'pin',
      name: "2641 Pin",
      price: "10.00",
      description: "1&quot; 2641 Pin",
    },
    {
      id: '2651P',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_fill,f_auto,h_230,w_169/v1539732628/VOWAID/2651-pin.jpg',
      ],
      type: 'pin',
      name: "2651 Pin",
      price: "10.00",
      description: "1&quot; 2651 Pin",
    },
    {
      id: '26XXD',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_230/v1539732629/VOWAID/26XX-decal.jpg',
      ],
      type: 'decal',
      name: "26XX Decal",
      price: "10.00",
      description: "3&quot; 26XX Decal",
    },
    {
      id: '2651D',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_230/v1539732628/VOWAID/2651-decal.jpg',
      ],
      type: 'decal',
      name: "2651 Decal",
      price: "10.00",
      description: "3&quot; 2651 Decal",
    },
    {
      id: '2602D',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_230/v1548123160/VOWAID/2602-decal.jpg',
      ],
      type: 'decal',
      name: "2602 Decal",
      price: "10.00",
      description: "3&quot; 2602 Decal",
    },

    {
      id: '2629D',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_230/v1548123160/VOWAID/2629-decal.jpg',
      ],
      type: 'decal',
      name: "2629 Decal",
      price: "10.00",
      description: "3&quot; 2629 Decal",
    },
    {
      id: '267XD',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_230/v1548123159/VOWAID/267X-decal.jpg',
      ],
      type: 'decal',
      name: "267X Decal",
      price: "10.00",
      description: "3&quot; 267X Decal",
    },
    {
      id: '2691D',
      images: [
        'https://res.cloudinary.com/missionwebdev/image/upload/c_scale,f_auto,h_230/v1548123159/VOWAID/2691-decal.jpg',
      ],
      type: 'decal',
      name: "2691 Decal",
      price: "10.00",
      description: "3&quot; 2691 Decal",
    },
  ];

  return (
    <article>
      {storeItems.map((storeItem) => (
        <section>
          <h4>{storeItem.name}</h4>

          <h4><small>$</small>{storeItem.price}</h4>

          {storeItem.images.map((imageSrc) => (
            <img src={imageSrc} alt={storeItem.name} />
          ))}

          <button
            class="snipcart-add-item"
            data-item-id={storeItem.id}
            data-item-name={storeItem.name}
            data-item-price={storeItem.price}
            data-item-image={storeItem.images[0]}
            data-item-url="/products.json"
            data-item-description={storeItem.description}
          >Add to Cart</button>
        </section>
      ))}
    </article>
  );
};

export default Store;