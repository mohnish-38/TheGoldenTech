'use client'
import { Carousel } from '@mantine/carousel';
import { Container, Image, Paper, px, rem } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

export default function EmblaCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return(
  <Carousel 
    loop
    withControls={false} 
    plugins={[autoplay.current]}
    withIndicators
    slideSize={{ base: '100%', sm: '70%' }}
    slideGap={{ base: rem(2), sm: 'xl' }}
>{slides}</Carousel>
)
  
}