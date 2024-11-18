<template>
  <section class="container mx-auto py-16 text-center">
    <h2 class="text-3xl font-bold mb-4">What Our Clients Say</h2>
    <swiper :slides-per-view="1" loop autoplay>
      <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
        <div class="bg-gray-100 p-6 rounded-lg">
          <p class="text-lg">{{ testimonial.quote }}</p>
          <p class="text-sm mt-4 font-semibold">- {{ testimonial.author }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const testimonials = [
  { quote: "Great work and service!", author: "Client A" },
  { quote: "Highly recommended!", author: "Client B" },
];
</script>