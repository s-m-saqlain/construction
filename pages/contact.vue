<template>
  <div class="min-h-screen bg-black/90 flex items-center justify-center p-8">
    <div class="container mx-auto lg:max-w-[82rem] xl:max-w-[72rem] 2xl:max-w-[82rem]">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-white space-y-12">
          <img src="~/assets/logo/logo1.png" class="w-48 rounded-md" />

          <div class="space-y-2">
            <h2
              class="flex items-center gap-2 text-2xl font-bold text-amber-500"
            >
              <img src="~/assets/logo/call.png" class="w-6" />
              Call Us
            </h2>
            <p class="ml-9 text-lg">1 (234) 567-891, 1 (234) 987-654</p>
          </div>

          <div class="space-y-2">
            <h2
              class="flex items-center gap-2 text-2xl font-bold text-amber-500"
            >
              <img src="~/assets/logo/location.png" class="w-6" />
              Location
            </h2>
            <p class="ml-9 text-lg">
              121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
            </p>
          </div>

          <div class="space-y-2">
            <h2
              class="flex items-center gap-2 text-2xl font-bold text-amber-500"
            >
              <img src="~/assets/logo/business.png" class="w-6" />
              Business Hours
            </h2>
            <p class="ml-9 text-lg">
              Mon – Fri ...... 10 am – 8 pm, Sat, Sun ....... Closed
            </p>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-white text-sm">Email</label>
              <input
                v-model="formData.email"
                type="email"
                required
                class="w-full bg-transparent border-b border-white/30 focus:border-amber-500 text-white px-3 py-2 outline-none transition-colors"
                placeholder="Enter a valid email address"
              />
            </div>
            <div class="space-y-2">
              <label class="text-white text-sm">Name</label>
              <input
                v-model="formData.name"
                type="text"
                required
                class="w-full bg-transparent border-b border-white/30 focus:border-amber-500 text-white px-3 py-2 outline-none transition-colors"
                placeholder="Enter your Name"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-white text-sm">Address</label>
            <input
              v-model="formData.address"
              type="text"
              required
              class="w-full bg-transparent border-b border-white/30 focus:border-amber-500 text-white px-3 py-2 outline-none transition-colors"
              placeholder="Enter your address"
            />
          </div>

          <div class="space-y-2">
            <label class="text-white text-sm">Budget</label>
            <input
              v-model.number="formData.budget"
              type="number"
              required
              min="1"
              class="w-full bg-transparent border-b border-white/30 focus:border-amber-500 text-white px-3 py-2 outline-none transition-colors"
              placeholder="Enter your budget"
            />
            <p v-if="formData.budget <= 0" class="text-red-500 text-sm">
              Budget must be greater than zero.
            </p>
          </div>

          <div class="space-y-2">
            <label class="text-white text-sm">Message</label>
            <textarea
              v-model="formData.message"
              required
              rows="4"
              class="w-full bg-transparent border-b border-white/30 focus:border-amber-500 text-white px-3 py-2 outline-none transition-colors resize-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface FormData {
  email: string;
  name: string;
  address: string;
  budget: number;
  message: string;
}

const formData = ref<FormData>({
  email: "",
  name: "",
  address: "",
  budget: 0,
  message: "",
});

const handleSubmit = () => {
  if (formData.value.budget <= 0) {
    alert("Budget must be greater than zero!");
    return;
  }
  console.log("Form submitted:", formData.value);
};
</script>