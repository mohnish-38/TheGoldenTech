'use client'
import { Carousel } from '@mantine/carousel';
import { Container, Image, Paper, px, rem, useMantineTheme } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

export default function IndustriesCrousel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return(
  <Carousel 
  slideSize={{ base: '100%', sm: '50%' }}
  slideGap={{ base: 'xl', sm: 'md' }}
  loop
  align="start"
  plugins={[autoplay.current]}
  slidesToScroll={mobile ? 1 : 2}
>{slides}</Carousel>
)
  
}