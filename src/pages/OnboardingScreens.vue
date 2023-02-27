<template>
  <section class="h-screen bg-gradient-to-b from-[#f4f4f4] to-[#D6D7DA] flex items-center justify-center">
    <div class="bg-white w-1/2 rounded-lg shadow-custom p-6">
      <img class="h-12 -mr-2" src="@/assets/butterpaper_logo.png" />
      <div v-if="step === 'basic-details'" class="px-2">
        <div class="py-4 space-y-2">
          <h1 class="font-medium text-xl text-gray-900">Let’s get <del>started</del> butter’d!</h1>
          <p class="text-gray-600 text-sm">
            Drop your deets, let's get started real quick. We just need the basics, so we can help you get lit.
          </p>
        </div>
        <form class="" @submit.prevent="submitForm">
          <div class="mb-5">
            <p class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap">your name</p>
            <input
              class="px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
              type="text"
              placeholder="Enter your name"
              name="your name"
            />
          </div>
          <div class="mb-5">
            <p class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap">your email</p>
            <input
              class="px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
              type="email"
              placeholder="Enter your email"
              name="your email"
            />
          </div>
          <div class="mb-5">
            <p class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap">your phone</p>
            <div class="relative">
              <div
                class="absolute inset-y-0 my-auto text-gray-500 left-0 flex items-center px-3 border-r pointer-events-none text-base"
              >
                🇮🇳 +91
              </div>
              <input
                class="pl-20 px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
                type="text"
                placeholder="Enter your phone"
                name="your phone"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="px-2" v-if="step === 'onboarding'">
        <div class="h-2 rounded-full bg-gray-100 w-full overflow-hidden mt-4">
          <div class="bg-gradient-to-r from-gray-500 to-gray-700 h-full" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="py-4 space-y-2">
          <h1 class="font-medium text-xl text-gray-900">{{ question }}</h1>
          <p class="text-gray-600 text-sm">{{ keyvalue }}</p>
        </div>
        <div class="grid grid-cols-2 gap-x-6 gap-y-4">
          <div
            class="px-4 py-2 rounded border relative flex items-center hover:bg-gray-50"
            :class="{ 'border-blue-400': selectedOption === option.value }"
            v-for="(option, index) in options"
            :key="index"
          >
            <input
              class="hidden"
              type="radio"
              :id="`option-${index}`"
              :value="option.value"
              :name="option.value"
              v-model="selectedOption"
            />
            <label class="absolute h-full w-full cursor-pointer" :for="`option-${index}`" />
            <input
              type="checkbox"
              :checked="selectedOption === option.value"
              class="h-4 w-4 cursor-pointer outline-none rounded border border-gray-300 focus:outline-none bg-gray-100 hover:bg-gray-50 mr-2"
            />
            <p class="text-gray-600 font-medium">{{ option.label }}</p>
            <img v-if="option.imgsrc" :src="`/icons/${option.imgsrc}.png`" class="ml-auto h-16" />
          </div>
        </div>
      </div>
      <div v-if="step === 'completed'" class="px-2">
        <div class="py-4 space-y-2">
          <h1 class="font-medium text-xl text-gray-900">Last step! Set up your store details, and you're done!</h1>
          <p class="text-gray-600 text-sm">
            Get ready to start selling on Butterpaper, it's gonna be fun Hit 'Complete Setup' and let us handle the rest
            You'll be taken to the admin console, where you'll be at your best!
          </p>
        </div>
        <div class="mb-5">
          <p class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap">
            What is the name of your store?
          </p>
          <input
            class="px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
            type="text"
            placeholder="Enter store name"
            name="your store name"
            v-model="details.storeName"
          />
        </div>
        <div class="mb-5">
          <p class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap">
            Which country is your bussiness located in?
          </p>

          <select
            class="px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
            id="country"
            v-model="selectedCountry"
          >
            <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name }}</option>
          </select>
        </div>
        <div class="mb-5">
          <p class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap">
            What currency do you use for transactions?
          </p>

          <select
            class="px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
            id="country"
            v-model="selectedcurrency"
          >
            <option v-for="country in currency" :key="country.codi" :value="country.codi">{{ country.named }}</option>
          </select>
        </div>
      </div>
      <div class="flex items-center mt-12 px-2">
        <button v-if="step === 'onboarding'" class="flex items-center text-gray-900" @click="prevQuestion">
          <Icon icon="charm:chevron-left" class="text-xl" />
          Back
        </button>
        <button v-if="step === 'onboarding'" class="text-sm text-gray-600 mr-4 ml-auto" @click="skipQuestion">
          Skip
        </button>
        <button
          v-if="step !== 'completed'"
          class="bg-gray-700 font-medium px-4 pr-2 py-1 rounded-lg text-sm text-white btn-shadow-primary flex items-center"
          :class="{ 'ml-auto': step === 'basic-details' }"
          @click="step === 'basic-details' ? (step = 'onboarding') : nextQuestion()"
        >
          Next
          <Icon icon="charm:chevron-right" class="text-xl" />
        </button>
        <button
          v-else
          class="bg-gray-700 font-medium px-4 pl-2 py-1 rounded-lg text-sm text-white btn-shadow-primary flex items-center ml-auto"
          @click="go()"
        >
          <Icon icon="material-symbols:fitbit-check-small-rounded" class="text-3xl" />
          Completed
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// import { Icon } from '@iconify/vue';
export default {
  name: 'OnboardingScreens',
  // components: { Icon },
  data() {
    return {
      step: 'basic-details',
      questions: [
        {
          question: 'What do you want to use Butterpaper for?',

          keyvalue:
            'Butterpaper got you, no need to fret. Just let us know your use case, so we can help you succeed and stay ahead.',
          options: [
            { label: 'E-commerce', value: 'physical', imgsrc: 'Ecommerce' },
            { label: 'Fintech', value: 'digital', imgsrc: 'Fintech' },
            { label: 'Real Estate', value: 'services', imgsrc: 'RealEstate' },
            { label: 'Education', value: 'ed', imgsrc: 'other' },
            { label: 'Event Management', value: 'event', imgsrc: 'Event' },
            { label: 'Transportation', value: 'transport', imgsrc: 'Transportation' },
            { label: 'Digital Products', value: 'dig', imgsrc: 'other' },
          ],
          selectedOption: null,
        },
        {
          question: 'How Big is Your Team?',
          keyvalue:
            'Butterpaper got you, no need to fret. Just let us know your use case, so we can help you succeed and stay ahead.',
          options: [
            { label: 'Solo', value: '1' },
            { label: 'Small', value: '2-10' },
            { label: 'Medium', value: '11-50' },
            { label: 'Large', value: '51+' },
          ],
          selectedOption: null,
        },
        {
          question: 'Where Do You Want to Sell?',
          keyvalue: 'key are awesome',
          options: [
            { label: 'Online Store', value: 'online', imgsrc: 'OnlineStore' },
            { label: 'Physical Store', value: 'physically', imgsrc: 'PhysicalStore' },
            { label: 'Marketplaces', value: 'market', imgsrc: 'Marketplace' },
            { label: 'Social Media', value: 'social', imgsrc: 'SocialMedia' },
            { label: 'Mobile Apps', value: 'digitally', imgsrc: 'MobileApps' },
            { label: 'Other', value: 'anything else', imgsrc: 'other' },
          ],
        },
      ],
      progress: 0,
      currentQuestionIndex: 0,
      completed: false,
      currency: [
        { codi: 'Rs.', named: 'Indian Rupees' },
        { codi: 'USD', named: 'US Dollar' },
      ],
      countries: [
        { code: 'US', name: 'United States', flag: 'india-logo.png' },
        { code: 'CA', name: 'Canada', flag: 'india-logo.png' },
        { code: 'MX', name: 'Mexico', flag: 'india-logo.png' },
        { code: 'IN', name: 'India', flag: 'india-logo.png' },
        // Add more countries as needed
      ],
      selectedCountry: null,
      countriesp: [
        { name: 'India', code: '91' },
        { name: 'United States', code: '1' },
        { name: 'Canada', code: '1',  },
        { name: 'Australia', code: '61' },
        { name: 'United Kingdom', code: '44' },
       
      ]
    };
  },
  computed: {
    question() {
      return this.questions[this.currentQuestionIndex].question;
    },
    keyvalue() {
      return this.questions[this.currentQuestionIndex].keyvalue;
    },
    options() {
      return this.questions[this.currentQuestionIndex].options;
    },
    selectedOption: {
      get() {
        return this.questions[this.currentQuestionIndex].selectedOption;
      },
      set(value) {
        this.questions[this.currentQuestionIndex].selectedOption = value;
      },
    },
  },
  methods: {
    nextQuestion() {
      console.log('gfd');
      if (this.selectedOption === null) {
        alert('Please select an option.');
        return;
      }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
        this.step = 'completed';
      } else {
        this.currentQuestionIndex++;
        this.progress += 25;
      }
    },
    skipQuestion() {
      //   if (this.selectedOption === null) {
      //   alert('Please select an option.');
      //   return;
      // }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
        this.step = 'completed';
      } else {
        this.currentQuestionIndex++;
        this.progress += 33;
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.progress -= 25;
      } else {
        this.step = 'basic-details';
      }
    },
    go() {
      window.location.href = '/';
    },
  },
};
</script>

<style></style>
