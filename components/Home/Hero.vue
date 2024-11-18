<template>
  <swiper
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :navigation="true"
    :modules="modules"
    :pagination="{ clickable: true }"
  >
    <swiper-slide>
      <section class="relative bg-cover bg-center text-white bg-hero-bg h-auto">
        <div class="absolute inset-0 bg-gray-900 opacity-50"></div>

        <div class="relative container mx-auto py-24 text-center sm:pt-44">
          <h1 class="text-xl font-bold mb-4 uppercase text-yellow-500">
            Welcome To Mariyah developers Builde
          </h1>

          <h1
            class="sm:block hidden lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase"
          >
            World’s Best
          </h1>

          <h1
            class="sm:block hidden lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase sm:leading-12"
          >
            Contractors and design services
          </h1>
          <h1
            class="sm:hidden mt-12 lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase"
          >
            World’s Best Construction Company
          </h1>

          <p class="text-xl pt-12">Providing Contractors and design services</p>

          <div class="sm:flex justify-center item-center gap-6">
            <NuxtLink to="/portfolio">
              <button
                class="uppercase mt-6 text-yellow-400 font-semibold border border-yellow-500 hover:bg-yellow-500 hover:text-black py-4 px-10"
              >
                Learn More
              </button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <button
                class="uppercase mt-6 bg-yellow-500 font-semibold text-black hover:bg-[#3B3A38] hover:text-white py-4 px-10"
              >
                Contact Us
              </button>
            </NuxtLink>
          </div>
        </div>
      </section>
    </swiper-slide>
    <swiper-slide>
      <section
        class="relative bg-cover bg-center text-white bg-hero1-bg h-auto"
      >
        <div class="absolute inset-0 bg-gray-900 opacity-50"></div>

        <div class="relative container mx-auto py-24 text-center sm:pt-44">
          <h1 class="text-xl font-bold mb-4 uppercase text-yellow-500">
            Best civil Verse
          </h1>

          <h1
            class="sm:block hidden lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase"
          >
            World’s Best
          </h1>

          <h1
            class="sm:block hidden lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase sm:leading-12"
          >
            civil Verse
          </h1>

          <h1
            class="sm:block hidden lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase sm:leading-12"
          >
            Design services
          </h1>

          <p class="text-xl pt-12">Providing civil Verse services</p>

          <div class="sm:flex justify-center item-center gap-6">
            <NuxtLink to="/portfolio">
              <button
                class="uppercase mt-6 text-yellow-400 font-semibold border border-yellow-500 hover:bg-yellow-500 hover:text-black py-4 px-10"
              >
                Learn More
              </button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <button
                class="uppercase mt-6 bg-yellow-500 font-semibold text-black hover:bg-[#3B3A38] hover:text-white py-4 px-10"
              >
                Contact Us
              </button>
            </NuxtLink>
          </div>
        </div>
      </section>
    </swiper-slide>
    <swiper-slide>
      <section
        class="relative bg-cover bg-center text-white bg-hero2-bg h-auto"
      >
        <div class="absolute inset-0 bg-gray-900 opacity-50"></div>

        <div class="relative container mx-auto py-24 text-center sm:pt-44">
          <h1 class="text-xl font-bold mb-4 uppercase text-yellow-500">
            Best Home Renovation
          </h1>

          <h1
            class="sm:block hidden lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase"
          >
            World’s Best
          </h1>

          <h1
            class="sm:block hidden lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase sm:leading-12"
          >
            Home Renovation
          </h1>

          <h1
            class="sm:block hidden lg:text-8xl sm:text-5xl text-3xl font-bold mb-4 uppercase sm:leading-12"
          >
            Design services
          </h1>

          <p class="text-xl pt-12">Providing Home Renovation services</p>

          <div class="sm:flex justify-center item-center gap-6">
            <NuxtLink to="/portfolio">
              <button
                class="uppercase mt-6 text-yellow-400 font-semibold border border-yellow-500 hover:bg-yellow-500 hover:text-black py-4 px-10"
              >
                Learn More
              </button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <button
                class="uppercase mt-6 bg-yellow-500 font-semibold text-black hover:bg-[#3B3A38] hover:text-white py-4 px-10"
              >
                Contact Us
              </button>
            </NuxtLink>
          </div>
        </div>
      </section>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white;
  width: 40px;
  height: 40px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px;
}
</style>
