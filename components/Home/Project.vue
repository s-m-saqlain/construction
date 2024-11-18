<template>
  <section class="bg-gray-900 text-white py-16">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">Our Latest Projects</h2>
      <swiper
  :slides-per-view="3"
  :space-between="30"
  :loop="true"
  class="project-slider"
  :breakpoints="{
    320: { // For devices with a screen width of 640px and up (tablet)
      slidesPerView: 1, // Show 1 slide
      spaceBetween: 10, // Reduce space between slides if needed
    },
    640: { // For devices with a screen width of 640px and up (tablet)
      slidesPerView: 1, // Show 1 slide
      spaceBetween: 10, // Reduce space between slides if needed
    },
    1024: { // For devices with a screen width of 1024px and up
      slidesPerView: 2, // Show 2 slides
      spaceBetween: 20,
    },
    1280: { // For devices with a screen width of 1280px and up
      slidesPerView: 3, // Default 3 slides
      spaceBetween: 30,
    },
  }"
>
  <swiper-slide v-for="(project, index) in projects" :key="index">
    <div class="bg-white text-black p-6 rounded-lg">
      <img
        :src="project.image"
        alt=""
        class="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 class="font-semibold text-lg">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </swiper-slide>
</swiper>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
const projects = [
  {
    image: "/path-to-project-image1.jpg",
    title: "Project 1",
    description: "Description for project 1.",
  },
  {
    image: "/path-to-project-image2.jpg",
    title: "Project 2",
    description: "Description for project 2.",
  },
  {
    image: "/path-to-project-image3.jpg",
    title: "Project 3",
    description: "Description for project 3.",
  },
];
</script>