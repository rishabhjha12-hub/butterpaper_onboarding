<template>
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
            v-if="questions[currentQuestionIndex].questionType === 'radio'"
              type="radio"
              :checked="selectedOption === option.value"
              :name="option.value"
              class="h-4 w-4 cursor-pointer outline-none rounded border border-gray-300 focus:outline-none bg-gray-100 hover:bg-gray-50 mr-2"
            />
            <input v-else-if="questions[currentQuestionIndex].questionType === 'checkbox'" type="checkbox" :id="`option-${index}`" :checked="selectedOption === option.value" v-model="selectedOptions "/>
           
            
            <p class="text-gray-600 font-medium">{{ option.label }}</p>
            <img v-if="option.imgsrc" :src="`/icons/${option.imgsrc}.png`" class="ml-auto h-16" />
          </div>
        </div>
</template>
<style>

</style>
<script>
// import newOtp from "./newOtp.vue";
export default {
  data() {
    return {
      questions: [
        {
          question: "What do you want to use Butterpaper for?",
          questionType: "checkbox",

          keyvalue:
            "Butterpaper got you, no need to fret. Just let us know your use case, so we can help you succeed and stay ahead.",
          options: [
            {
              label: "E-commerce",
              value: "physical",
              imgsrc: require("../assets/Ecommerce.png"),
            },
            {
              label: "Fintech",
              value: "digital",
              imgsrc: require("../assets/Fintech.png"),
            },
            {
              label: "Real Estate",
              value: "services",
              imgsrc: require("../assets/Real Estate.png"),
            },
            {
              label: "Event Management",
              value: "event",
              imgsrc: require("../assets/Event.png"),
            },
            {
              label: "Education",
              value: "ed",
              imgsrc: require("../assets/5.png"),
            },
            {
              label: "Transportation",
              value: "transport",
              imgsrc: require("../assets/Transportation.png"),
            },
            {
              label: "Digital Products",
              value: "dig",
              imgsrc: require("../assets/left.avif"),
            },
          ],
          selectedOption: null,
        },
        {
          question: "How Big is Your Team?",
          questionType: "radio",

          keyvalue:
            "Butterpaper got you, no need to fret. Just let us know your use case, so we can help you succeed and stay ahead.",
          options: [
            { label: "Solo", value: "1" },
            { label: "Small", value: "2-10" },
            { label: "Medium", value: "11-50" },
            { label: "Large", value: "51+" },
          ],
          selectedOption: null,
        },
        {
          question: "Where Do You Want to Sell?",
          questionType: "checkbox",

          keyvalue: "key are awesome",
          options: [
            {
              label: "Online Store",
              value: "online",
              imgsrc: require("../assets/online store.png"),
            },
            {
              label: "Physical Store",
              value: "physically",
              imgsrc: require("../assets/physical store.png"),
            },
            {
              label: "Marketplaces",
              value: "market",
              imgsrc: require("../assets/social media.png"),
            },
            {
              label: "Social Media",
              value: "social",
              imgsrc: require("../assets/Marketplace.png"),
            },
            {
              label: "Mobile Apps",
              value: "digitally",
              imgsrc: require("../assets/mobile apps.png"),
            },
            { label: "Other", value: "anything else" },
          ],
        },
      ],
      progress: 0,
      currentQuestionIndex: 0,
      completed: false,
    };
  },
  components: {
    // newOtp,
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
  // methods: {
  //   nextQuestion() {
     
  //     if (this.currentQuestionIndex === this.questions.length - 1) {
  //       this.completed = true;
  //     } else {
  //       this.currentQuestionIndex++;
  //       this.progress += 33.33;
  //     }
  //   },
  //   skipQuestion() {
  //     //   if (this.selectedOption === null) {
  //     //   alert('Please select an option.');
  //     //   return;
  //     // }
  //     if (this.currentQuestionIndex === this.questions.length - 1) {
  //       this.completed = true;
  //     } else {
  //       this.currentQuestionIndex++;
  //       this.progress += 33.33;
  //     }
  //   },
  //   prevQuestion() {
  //     if (this.currentQuestionIndex > 0) {
  //       this.currentQuestionIndex--;
  //       this.progress -= 33.33;
  //     }
  //   },
  // },
};
</script>
