import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Swiper as SwiperType } from 'swiper'

interface ISlide {
  type: 'image'
  src: string
}

const MediaSlider: React.FC = () => {
  const [current, setCurrent] = useState(6)
  const [fullScreen, setFullScreen] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  const slides: ISlide[] = useMemo(() => {
    const images = import.meta.glob('/src/assets/img/slider/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' })
    return Object.values(images).map(src => ({ type: 'image', src }))
  }, [])

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (!fullScreen) return
    if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % slides.length)
    if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + slides.length) % slides.length)
    if (e.key === 'Escape') setFullScreen(false)
    if (e.key === ' ') e.preventDefault()
  }, [fullScreen, slides.length])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  useEffect(() => {
    if (!swiperRef.current?.autoplay) return
    if (fullScreen) {
      swiperRef.current.autoplay.stop()
    } else {
      swiperRef.current.autoplay.start()
    }
  }, [fullScreen])

  useEffect(() => {
    if (!fullScreen && swiperRef.current) {
      swiperRef.current.slideToLoop(current, 0); // instant sync
    }
  }, [fullScreen, current]);

  return (
    <div className="my-24">
      <h2 className="text-center text-4xl font-bold mb-10 text-orange-300 font-title">Képek</h2>
      <div id="slider" className="w-full max-w-5xl mx-auto cursor-pointer">
        <div
          className="relative aspect-video overflow-hidden rounded-md"
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => {
            if (!fullScreen) swiperRef.current?.autoplay.start()
          }}
        >
          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            effect="coverflow"
            flipEffect={{ slideShadows: true, limitRotation: true }}
            navigation
            pagination={{ clickable: true }}
            speed={1000}
            loop
            initialSlide={9}
            autoplay={{ delay: 10000}}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
            className="absolute inset-0 w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="w-full h-full" onClick={() => setFullScreen(true)}>
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-full rounded-md"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <AnimatePresence>
          {fullScreen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullScreen(false)}
            >
              <motion.div
                key={current}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative max-w-[95%] aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={slides[current].src}
                  alt={`FullSlide ${current}`}
                  className="object-contain w-full h-full rounded-md"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MediaSlider
