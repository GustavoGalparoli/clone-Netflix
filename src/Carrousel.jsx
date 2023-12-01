import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const Carrousel = ({children,finCarrousel=()=>{},click=(e)=>{},id}) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
    //  console.log(progress);
    // este evento sirve para usar el progreso
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
      // este evento detecta el cambio de slider
    });
   
    swiperElRef.current.addEventListener('swiperreachend', (e) => {
      // este evento detecta el fin del carrousel
      finCarrousel();
    });
    swiperElRef.current.addEventListener('swiperclick', (e) => {
      // este evento detecta cuando se hace click en un slider

      if(e.detail[0].clickedIndex!==undefined){
       click(e);
      }
     
    });
      
  }, []);

  return (
    <swiper-container 
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
      id = {id}
    >

      { 
      children
      
      }
    </swiper-container>
  );
};