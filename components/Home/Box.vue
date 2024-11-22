<template>
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="p-6 border border-[#162855] rounded-[50px] hover:shadow-2xl hover:bg-[#162855] group transition-shadow duration-300 flex flex-col items-center text-center"
      >
        <!-- <component :is="feature.icon" class="w-12 h-12 text-sky-400 mb-4" /> -->
        <h3
          class="text-gray-600 group-hover:text-gray-400 sm:text-2xl sm:font-bold font-medium lg:pt-24 pt-24"
        >
          {{ feature.sub }}
        </h3>
        <h3
          class="text-[#162855] group-hover:text-white xl:text-4xl 2xl:text-5xl lg:text-4xl sm:text-5xl text-4xl lg:py-8 py-4 sm:font-extrabold font-bold"
        >
          {{ feature.title }}
        </h3>
        <h3
          class="text-gray-500 sm:text-xl group-hover:text-gray-400 pb-24 sm:font-bold"
        >
          {{ feature.des }}
        </h3>

        <!-- <div class="lg:mt-24 sm:mt-8">
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
        </div> -->
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
    title: "Mariyah Developers Real Estate",
    des: "Providing Real Estate services",
    // icon: Umbrella,
  },
  {
    sub: "Best water proofing and other chemical coatings",
    title: "Water Proofing And Other Chemical Coatings",
    des: "Provide water proofing and other chemical coatings services",
    // icon: WrenchScrewdriver,
  },
  {
    sub: "Best civil contractors and home renovations",
    title: "Civil Contractors And Home Renovations",
    des: "Provide civil contractors and home renovations services",
    // icon: Tag,
  },
];
</script>