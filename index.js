// const cardsData = [
//   {
//     title: "Mountain Adventure",
//     description: "Join our 12-day trek through the breathtaking Himalayas.",
//     image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
//     daysLeft: 12,
//   },
//   {
//     title: "Beach Getaway",
//     description: "Relax under the sun with our all-inclusive beach package.",
//     image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
//     daysLeft: 7,
//   },
//   {
//     title: "City Lights Tour",
//     description: "Experience the vibrant nightlife and urban attractions.",
//     image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
//     daysLeft: 5,
//   },
//   {
//     title: "Safari Expedition",
//     description: "Explore the wild and witness majestic animals up close.",
//     image: "https://images.pexels.com/photos/1465901/pexels-photo-1465901.jpeg",
//     daysLeft: 3,
//   },
// ];

// const addTemplateToDOM = (card) => {
//   const templateCard = `<div class="col-4">
//                   <div class="card border-0">
//                     <div
//                       class="new_parent position-relative overflow-hidden rounded-5"
//                     >
//                       <img
//                         src="${card.image}"
//                         class="card-img-top object-fit-cover"
//                         alt="..."
//                         style="height: 150px"
//                       />
//                       <div
//                         class="card-overlay"
//                       >
//                         <h4 class="text-white text-center">${card.daysLeft} days left</h4>
//                       </div>
//                     </div>

//                     <div class="card-body">
//                       <h5
//                         class="card-title text-uppercase small text-center text-primary-emphasis"
//                         style="letter-spacing: 2px"
//                       >
//                        ${card.title}
//                       </h5>
//                       <p
//                         class="card-text text-center text-opacity-50 text-secondary"
//                       >
//                         ${card.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>`;
//   cardWrapper.innerHTML = cardWrapper.innerHTML + templateCard;
// };

// const cardWrapper = document.querySelector(".card-wrapper");
// cardsData.forEach(addTemplateToDOM);

const dataTypes = [
  "number",
  "string",
  "boolean",
  "null",
  "object",
  "undefined",
];
