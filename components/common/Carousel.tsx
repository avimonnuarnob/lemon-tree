import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick').then((m) => m.default), {
  ssr: false,
});

export default function Carousel({ children }: any) {
  const settings = {
    className: 'center',
    centerMode: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}
