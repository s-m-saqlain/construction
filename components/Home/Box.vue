<template>
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="p-6 border border-[#162855] rounded-lg hover:shadow-lg hover:bg-[#162855] group group transition-shadow duration-300 flex flex-col items-center text-center"
      >
        <!-- <component :is="feature.icon" class="w-12 h-12 text-sky-400 mb-4" /> -->
        <h3
          class="text-gray-600 group-hover:text-gray-400 sm:text-2xl font-medium lg:pt-24 sm:pt-4"
        >
          {{ feature.sub }}
        </h3>
        <h3
          class="text-[#162855] group-hover:text-white sm:text-5xl text-4xl lg:py-8 py-4 font-bold"
        >
          {{ feature.title }}
        </h3>
        <h3 class="text-gray-500 sm:text-xl group-hover:text-gray-400">
          {{ feature.des }}
        </h3>

        <div class="lg:mt-24 sm:mt-8">
          <div class="sm:flex justify-center item-center gap-6">
            <NuxtLink to="/portfolio">
              <button
                class="uppercase mt-6 text-[#162855] font-semibold border border-[#162855] group-hover:bg-white group-hover:text-black py-4 lg:px-10 px-10 xl:px-4 2xl:px-10"
              >
                Learn More
              </button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <button
                class="uppercase mt-6 bg-[#162855] font-semibold text-white group-hover:bg-white group-hover:text-black py-4 lg:px-10 px-10 xl:px-4 2xl:px-10"
              >
                Contact Us
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  sub: string;
  title: string;
  des: string;
  //   icon: any;
}

const features: Feature[] = [
  {
    sub: "Welcome To Mariyah Developers Builde",
    title: "Constructors And Design Services",
    des: "Providing Constructors And Design Services",
    // icon: Umbrella,
  },
  {
    sub: "Best Civil Verse",
    title: "Civil Verse Design Services",
    des: "Provide Civil Verse Services",
    // icon: WrenchScrewdriver,
  },
  {
    sub: "Best Home Renovation",
    title: "Home Renovation Design Services",
    des: "Provide Home Renovation Services",
    // icon: Tag,
  },
];
</script>