import Slider from "react-slick";
import { BiUser } from "react-icons/bi";
import img1 from "src/assets/img/testimonials/testi-1.png";
import img2 from "src/assets/img/testimonials/testi-2.png";
import img3 from "src/assets/img/testimonials/testi-3.png";

import tutus from "src/assets/img/testimonials/tutus.jpeg";
import atung from "src/assets/img/testimonials/atung.jpeg";
import garry from "src/assets/img/testimonials/garry.jpeg";

import imgUser from "src/assets/img/testimonials/user.png";
import { FaQuoteLeft } from "react-icons/fa";

export function TestimonialComponent() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      name: "User 1 ",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "nteger lobortis imperdiet arcu, nec dapibus quam porttitor ac. Etiam blandit ac nibh sit amet efficitur. Praesent nec ultrices massa, ac malesuada lacus. Aliquam mi turpis, semper ut consequat eget, sodales ut turpis.",
      icon: <BiUser size={28} color="white" />,
    },
    {
      name: "User 2",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "nteger lobortis imperdiet arcu, nec dapibus quam porttitor ac. Etiam blandit ac nibh sit amet efficitur. Praesent nec ultrices massa, ac malesuada lacus. Aliquam mi turpis, semper ut consequat eget, sodales ut turpis.",
      icon: <BiUser size={28} color="white" />,
    },
    {
      name: "User 3",
      desc: "nteger lobortis imperdiet arcu, nec dapibus quam porttitor ac. Etiam blandit ac nibh sit amet efficitur. Praesent nec ultrices massa, ac malesuada lacus. Aliquam mi turpis, semper ut consequat eget, sodales ut turpis.",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <BiUser size={28} color="white" />,
    },
    {
      name: "User 4",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "nteger lobortis imperdiet arcu, nec dapibus quam porttitor ac. Etiam blandit ac nibh sit amet efficitur. Praesent nec ultrices massa, ac malesuada lacus. Aliquam mi turpis, semper ut consequat eget, sodales ut turpis.",
      icon: <BiUser size={28} color="white" />,
    },
    {
      name: "User 5",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "nteger lobortis imperdiet arcu, nec dapibus quam porttitor ac. Etiam blandit ac nibh sit amet efficitur. Praesent nec ultrices massa, ac malesuada lacus. Aliquam mi turpis, semper ut consequat eget, sodales ut turpis.",
      icon: <BiUser size={28} color="white" />,
    },
    {
      name: "User 6",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "nteger lobortis imperdiet arcu, nec dapibus quam porttitor ac. Etiam blandit ac nibh sit amet efficitur. Praesent nec ultrices massa, ac malesuada lacus. Aliquam mi turpis, semper ut consequat eget, sodales ut turpis.",
      icon: <BiUser size={28} color="white" />,
    },
  ];

  return (
    <div className="text-center lg:px-20 px-8 py-20" id="Testimonial">
      <div className="mt-16"></div>
      <div className="header-title text-center">
        <h2 className="text-4xl font-medium">Apa Kata Pengguna Kami</h2>
        <p className="text-sm mt-5 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="lg:w-3/4 w-full mx-auto mt-8 bg-white h-full">
        <Slider {...settings}>
          {testimonials.map((el, idx) => {
            return (
              <div
                key={idx}
                className="bg-white w-full h-full lg:px-20 flex flex-col justify-center items-center"
              >
                <FaQuoteLeft className="text-gray-300 text-4xl mx-auto" />
                <p className="mt-8 text-lg text-gray-600">{el.desc}</p>
                <div className="img w-20 h-20 mx-auto mt-10 rounded-full overflow-hidden">
                  <img
                    src={el.img ?? imgUser}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <h4 className="text-lg text-gray-900 mt-4 font-medium">
                  {el.name}
                </h4>
                <h4 className="text-md text-gray-600 mt-0">{el.title}</h4>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
