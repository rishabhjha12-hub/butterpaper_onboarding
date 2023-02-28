<template>
 <div class="h-2 rounded-full bg-gray-100 w-full overflow-hidden mt-4">
          <div
            class="bg-gradient-to-r from-gray-500 to-gray-700 h-full"
            :style="{ width: progress + '%' }"
          ></div>
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
            v-if="questions[currentQuestionIndex].questionType === 'radio'"
              class="hidden"
              type="radio"
              :id="`option-${index}`"
              :value="option.value"
              :name="option.value"
              v-model="selectedOption"
            />
           
            <input
              v-if="questions[currentQuestionIndex].questionType === 'radio'"
              type="radio"
              :checked="selectedOption === option.value"
              class="h-4 w-4 cursor-pointer outline-none rounded border border-gray-300 focus:outline-none bg-gray-100 hover:bg-gray-50 mr-2"
              v-model="selectedOption"
            
             
         
            />
            <input
              v-else-if="
                questions[currentQuestionIndex].questionType === 'checkbox'
              "
              type="checkbox"
              :checked="selectedOption === option.value"
              :id="`option-${index}`"
              :name="option.value"
              :value="option.value"
              class="h-4 w-4 cursor-pointer outline-none rounded border border-gray-300 focus:outline-none bg-gray-100 hover:bg-gray-50 mr-2"
            />
            <label
              class="absolute h-full w-full cursor-pointer"
              :for="`option-${index}`"
            />

            <p class="text-gray-600 font-medium">{{ option.label }}</p>
            <img
              v-if="option.imgsrc"
              :src="`/icons/${option.imgsrc}.png`"
              class="ml-auto h-16"
            />
          </div>
        </div>
</template>
<script>
export default {
  // components: { Icon },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        selectedOption:""
      },
      step: "basic-details",
      questions: [
        {
          question: "What do you want to use Butterpaper for?",
          questionType: "radio",
          keyvalue:
            "Butterpaper got you, no need to fret. Just let us know your use case, so we can help you succeed and stay ahead.",
          options: [
            { label: "E-commerce - Ready to take your online store to the next level? Build powerful e-commerce apps that enable your customers to shop with ease.", value: "physical", imgsrc: "Ecommerce" },
            { label: "Fintech - Create apps for lending, digital wallets, loan management, affiliate management, and more.", value: "digital", imgsrc: "Fintech" },
            { label: "Real Estate", value: "services", imgsrc: "RealEstate" },
            { label: "Education", value: "ed", imgsrc: "other" },
            { label: "Event Management", value: "event", imgsrc: "Event" },
            {
              label: "Transportation",
              value: "transport",
              imgsrc: "Transportation",
            },
            { label: "Digital Products", value: "dig", imgsrc: "other" },
          ],
          selectedOption: null,
        },
        {
          question: "How Big is Your Team?",
          questionType: "radio",
          keyvalue:
            "Butterpaper got you, no need to fret. Just let us know your use case, so we can help you succeed and stay ahead.",
          options: [
            { label: "Solo :Just me, myself, and I", value: "1" },
            { label: "Small: A small team of 2-10 people", value: "2-10" },
            {
              label: "Medium: A medium-sized team of 11-50 people",
              value: "11-50",
            },
            { label: "Large: A large team of 51+ people", value: "51+" },
          ],
          selectedOption: null,
        },
        {
          question: "Where Do You Want to Sell?",
          questionType: "checkbox",
          keyvalue: "key are awesome",
          options: [
            { label: "Online Store", value: "online", imgsrc: "OnlineStore" },
            {
              label: "Physical Store",
              value: "physically",
              imgsrc: "PhysicalStore",
            },
            { label: "Marketplaces", value: "market", imgsrc: "Marketplace" },
            { label: "Social Media", value: "social", imgsrc: "SocialMedia" },
            { label: "Mobile Apps", value: "digitally", imgsrc: "MobileApps" },
            { label: "Other", value: "anything else", imgsrc: "other" },
          ],
          // selectedOptions: [],
          selectedOption: null,
        },
      ],
      progress: 0,
      currentQuestionIndex: 0,
      completed: false,
      selectedOptions: [], // initialize as empty array
      currency: [
        { codi: "Rs.", named: "Indian Rupees" },
        { codi: "USD", named: "US Dollar" },
      ],
      countries: [
        { code: "US", name: "United States", flag: "india-logo.png" },
        { code: "CA", name: "Canada", flag: "india-logo.png" },
        { code: "MX", name: "Mexico", flag: "india-logo.png" },
        { code: "IN", name: "India", flag: "india-logo.png" },
        // Add more countries as needed
      ],
      selectedCountry: null,
      countriesp: [
        { name: "India", code: "91" },
        { name: "United States", code: "1" },
        { name: "Canada", code: "1" },
        { name: "Australia", code: "61" },
        { name: "United Kingdom", code: "44" },
      ],
      selectedCountryp: "India",
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
      console.log("gfd");
      // if (this.selectedOption === null) {
      //     alert("Please select an option.");
      //     return;
      // }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
        this.step = "completed";
      } else {
        this.currentQuestionIndex++;
        this.progress += 33;
      }
    },
    skipQuestion() {
      //   if (this.selectedOption === null) {
      //   alert('Please select an option.');
      //   return;
      // }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
        this.step = "completed";
      } else {
        this.currentQuestionIndex++;
        this.progress += 33;
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.progress -= 33;
      } else {
        this.step = "basic-details";
      }
    },
    go() {
      window.location.href = "/";
    },
  },
 
};

</script>