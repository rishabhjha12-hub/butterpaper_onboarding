<template>
  <div class="">
    <div class="container1 rounded-lg">
      <img
        class="logo"
        src="../assets/butterpaper_logo.png"
        height="100"
        width="180"
        alt="200"
      />
      <div v-if="!completed">
        <div class="progress-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
        <h1 class="font-bold text-2xl text-centre my-1">{{ question }}</h1>
        <h2 class="subPart">{{ keyvalue }}</h2>
        <div class="opt-cont">
          <div class="options" v-for="(option, index) in options" :key="index">
            <div class="card-body">
           <!-- <input type="checkbox" :id="`option-${index}`" :value="option.value" v-model="selectedOptions"  > -->
           <!-- <div v-if="questions[currentQuestionIndex].questionType === 'radio'"> -->
            <input  v-if="questions[currentQuestionIndex].questionType === 'radio'" type="radio" :id="`option-${index}`" :value="option.value" :name="option.value" v-model="selectedOption">
        <!-- </div> -->
        <!-- <div v-else-if="questions[currentQuestionIndex].questionType === 'checkbox'"> -->
          <input v-else-if="questions[currentQuestionIndex].questionType === 'checkbox'" type="checkbox" :id="`option-${index}`" :value="option.value" v-model="selectedOptions " > 
        <!-- </div> -->

              <label :for="`option-${index}`">{{ option.label }}</label>
              <!-- <input
                :type="question.questionType"
                :id="`question-${index}`"
                :value="option.value"
                v-model="question.selectedOption"
                v-if="question.questionType === 'radio'"
              />
              <input
                :type="question.questionType"
                :id="`question-${index}`"
                :value="option.value"
                v-model="question.selectedOptions"
                v-else-if="question.questionType === 'checkbox'"
              /> -->
              

              <img
                v-if="option.imgsrc"
                :src="option.imgsrc"
                class="mx-9"
                alt="Option image"
                height="30"
                width="30"
              />
              <!-- <img v-for="(option, index) in options" :key="index" class="mx-4" src="../assets/logo.png" height="20" width="20" alt="dummy"> -->
            </div>
          </div>
        </div>
        <button
          class="bg-gray-500 flex font-medium items-center mr-4 px-4 py-2 rounded-lg text-sm text-white btn-shadow-primary btn-prev"
          @click="prevQuestion"
        >
          <span class="mr-2 text-2xl"></span>Prev
        </button>
        <button
          class="bg-gray-500 flex font-medium items-center mr-4 px-4 py-2 rounded-lg text-sm text-white btn-shadow-primary btn-next"
          @click="nextQuestion"
        >
          <span class="mr-2 text-2xl"></span>Next
        </button>
        <!-- <button class="btn-next" @click="prevQuestion">Prev</button> -->
        <button class="skip-next" @click="skipQuestion">Skip</button>
        <!-- <button class="btn-prev" @click="nextQuestion">Next</button> -->
      </div>
      <div v-else>
        <newOtp />
      </div>
    </div>
  </div>
</template>
<style>
img {
  margin-right: 90%;
  margin-bottom: 20px;
}
body {
  background-color: #d6d7da;
}
.opt-cont {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.container1 {
  padding: 3rem;
  width: 48%;
  height: 70vh;
  margin: 5rem auto;
  border-radius: 4%;
  background-color: white;
}
.progress-bar {
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  width: 100%;
  margin: auto;
}
.progress {
  height: 100%;
  background-color: #32931a;
  border-radius: 5px;
}
.question {
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.options {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
}
label {
  margin-left: 10px;
}
.skip-next {
  position: fixed;
  right: 38rem;
  bottom: 14.5rem;
}
.btn-next {
  position: fixed;
  bottom: 14rem;
  right: 32rem;
}
.btn-prev {
  position: fixed;
  bottom: 14rem;
  left: 32rem;
}

.card-body {
  display: flex;
  align-items: center;
  flex-flow: row;
  height: 4rem;
  border: 1px solid rgb(111, 110, 110);
  /* background-color: #007BFF; */
  padding: 1rem;
  width: 15rem;
}
.card-body > div {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
}
label[for^="option-"] {
  cursor: pointer;
}
input[type="radio"]:checked + label {
  font-weight: bold;
}
</style>
<script>
import newOtp from "./newOtp.vue";
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
    newOtp,
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
     
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
      } else {
        this.currentQuestionIndex++;
        this.progress += 33.33;
      }
    },
    skipQuestion() {
      //   if (this.selectedOption === null) {
      //   alert('Please select an option.');
      //   return;
      // }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
      } else {
        this.currentQuestionIndex++;
        this.progress += 33.33;
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.progress -= 33.33;
      }
    },
  },
};
</script>
