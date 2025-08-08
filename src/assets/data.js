import rest from '../assets/rest.png';
import presp from '../assets/precp.png';
import ecom from '../assets/ecom.png';
import app1 from '../assets/app1.jpg';
import app2 from '../assets/app2.jpg';
import app3 from '../assets/app3.jpg';

const testimonials = [
  {
    id: 1,
    name: "Resturent Website",
    description: "Restaurant website with menu, reservation, and contact features.",
    image: rest,
    link: "https://restaurant-1-gamma.vercel.app/"
  },
  {
    id: 2,
    name: "E-commerce Store",
    description: "An e-commerce store with product listings and a shopping cart.",
    image: ecom,
    link: "https://context-api-in-users-products.vercel.app/"

  },
  {
    id: 3,
    name: "Prescripto ",
    description: "Prescripto is a modern online platform that helps patients easily book medical appointments",
    image: presp,
    link: "https://appointmrnt-h28g.vercel.app/"

  },
];
const card=[{
  id: 1,
image: app1,
name: "Devo Press",
description: "A drop shipping app that allows users to shop from a variety.",
},
{
  id: 2,
image: app2,
name: "Furnivo",
description: "A furniture-selling app that offers a comfortable shopping.",
},{
  id: 3,
image: app3,
name: "Resturantory",
description: "A comprehensive food delivery app that enables users to search order and enjoy their favorite meals.",
},
]

export {testimonials,card};
