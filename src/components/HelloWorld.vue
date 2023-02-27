<!-- <template>
  <div class="container">
    <img src="../assets/download.jpg" height="100" width="100" alt="">
    <div v-if="!completed">
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      <h1 class="question">{{ question }}</h1>
      <div class="opt-cont">
      <div class="options" v-for="(option, index) in options" :key="index">
        <div class="card-body">
        <input type="radio" :id="`option-${index}`" :value="option.value" :name="option.value" v-model="selectedOption">
        <label :for="`option-${index}`">{{ option.label }}</label>
        </div>
      
      </div>
      </div>

      <button class="btn-next" @click="prevQuestion">Prev</button>
      <button class="btn-next" @click="nextQuestion">Next</button>
      
    </div>
    <div v-else>
      <h1 class="congratulations">Congratulations! You've completed the onboarding process.</h1>
    </div>
    <h1 class="text-3xl font-bold underline bg-gray-800">
    Hello world!
  </h1>
  
  </div>
</template>

<style>
img{
  margin-right: 90%;
  margin-bottom: 20px;
}
body{
  font-family: 'Noto Sans', sans-serif;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA1IiBoZWlnaHQ9IjE4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjM4Nl8xMDMwMzEpIj48cGF0aCBmaWxsPSIjNzlERkZGIiBkPSJNMCAwaDMwNXYxODEuNTQ4SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8yMzg2XzEwMzAzMSkiPjxwYXRoIGQ9Ik01OS45MDggMzcuOTVjLTI5LjA0Ny0zMS40NjgtNDIuMzYtMTMuMTExLTQ1LjM4NyAwLTkuNjgzIDI0LjIwNy0xOS4zNjUgMjcuODM4IDAgNTcuNDkgMTkuMzY1IDI5LjY1My00LjIzNiA0NC43ODItMjkuMDQ3IDExOS44MjItMjQuODEyIDc1LjA0IDE0OC44NjktMTIuMTAzIDE3Ni4xMDEtMzYuOTE1IDI3LjIzMi0yNC44MTEgMzAuMjU4LTEwNy4xMTMtMzQuNDk0LTc4LjA2NS02NC43NTIgMjkuMDQ3LTMwLjg2My0yMi45OTYtNjcuMTczLTYyLjMzMnoiIGZpbGw9IiM1RkQ1QjYiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZl8yMzg2XzEwMzAzMSkiPjxwYXRoIGQ9Ik0yNTMuMDg3LTExMy4zMzljMjkuMDQ4LTMxLjQ2OCA0Mi4zNjEtMTMuMTEyIDQ1LjM4NyAwIDkuNjgzIDI0LjIwNiAxOS4zNjUgMjcuODM3IDAgNTcuNDktMTkuMzY1IDI5LjY1MyA0LjIzNiA0NC43ODIgMjkuMDQ3IDExOS44MjEgMjQuODEyIDc1LjA0LTE0OC44NjktMTIuMTAzLTE3Ni4xMDEtMzYuOTE0LTI3LjIzMi0yNC44MTItMzAuMjU4LTEwNy4xMTMgMzQuNDk0LTc4LjA2NiA2NC43NTIgMjkuMDQ4IDMwLjg2My0yMi45OTYgNjcuMTczLTYyLjMzMXoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8yMzg2XzEwMzAzMSkiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZl8yMzg2XzEwMzAzMSkiPjxlbGxpcHNlIGN4PSIyOTMuMTgyIiBjeT0iMTI5LjUyOSIgcng9IjEzMS41OCIgcnk9IjUwLjk3OSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI1LjY0NCAyOTMuMTgyIDEyOS41MjkpIiBmaWxsPSIjQ0FDMkZFIi8+PC9nPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMjM4Nl8xMDMwMzEiIHg9Ii03Ny40NiIgeT0iLTM5Ljk0MSIgd2lkdGg9IjMxNy44MzYiIGhlaWdodD0iMzQ1LjU2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzMC4yNTgiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMzg2XzEwMzAzMSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZl8yMzg2XzEwMzAzMSIgeD0iNDguNDEzIiB5PSItMjE1LjQzNyIgd2lkdGg9IjM2Ni4yNDkiIGhlaWdodD0iMzkzLjk3MyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDIuMzYxIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMjM4Nl8xMDMwMzEiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJmaWx0ZXIyX2ZfMjM4Nl8xMDMwMzEiIHg9Ijc1LjY4MSIgeT0iLTQwLjQ3NSIgd2lkdGg9IjQzNS4wMDEiIGhlaWdodD0iMzQwLjAwOSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDguNDEzIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMjM4Nl8xMDMwMzEiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjM4Nl8xMDMwMzEiIHgxPSIxODIiIHkxPSI0Mi41IiB4Mj0iMjgzIiB5Mj0iNy41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0NDRkZGMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0NDRkZGMiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImNsaXAwXzIzODZfMTAzMDMxIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDMwNXYxODEuNTQ4SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+);
    background-repeat: no-repeat;
    background-size: cover;
  
}
.opt-cont{
 
  display: flex;
  flex-wrap: wrap;
  
 
} 
.container {
  padding: 2.5rem;
  width: 42%;
  height: 70vh;
  margin: 5rem auto;
  border-radius: 4%;

 
  background-color: white;
}

.progress-bar {
  
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  margin: auto;
 
}


.progress {
  height: 100%;
  background-color: #0d6efd;
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
  margin: 1.8em;

  
}

label {
  margin-left: 10px;
}

.btn-next {
  margin: 9%;
  margin-top: 5%;
  padding: 10px 20px;
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
}

.btn-next:hover {
  background-color: #007bff;
}


.card-body {
  display: flex;
  align-items: center;
  flex-flow: row;
  width: 20rem;
  height: 5rem;
  border: 2px solid black;

  /* background-color: #007bff; */
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

@media only screen and (max-width: 600px) {
  body {
    background-image: none;
  }
  .options {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* margin: 1.8em; */
  margin: 1rem auto;
  }
  .opt-cont{
 
 display: flex;
 flex-wrap: wrap;

 width: 100%;
 

}
}



</style>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: 'What type of products do you plan to sell?',
          options: [
            { label: 'Physical products', value: 'physical' },
            { label: 'Digital products', value: 'digital' },
            { label: 'Services', value: 'services' },
            
          ],
          selectedOption: null,
        },
        {
          question: 'How many products do you plan to sell?',
          options: [
            { label: 'Less than 10', value: '0-10' },
            { label: '10-50', value: '10-50' },
            { label: 'More than 50', value: '50+' },
          ],
          selectedOption: null,
        },
        {
          question: 'What payment methods do you want to offer?',
          options: [
            { label: 'Credit card', value: 'credit' },
            { label: 'PayPal', value: 'paypal' },
            { label: 'Other', value: 'other' },
          ],
          selectedOption: null,
        },
        {
          question: 'Do You have an online audience?',
          options: [
            { label: 'yes', value: 'yes' },
            { label: 'no', value: 'no' },
          
            
          ]
        }
      ],
      progress:0,
      currentQuestionIndex: 0,
      completed: false,
    };
  },
  computed: {
    question() {
      return this.questions[this.currentQuestionIndex].question;
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
      if (this.selectedOption === null) {
        alert('Please select an option.');
        return;
      }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
      } else {
        this.currentQuestionIndex++;
        this.progress+=25 
      }
    },
    prevQuestion() {

      if (this.currentQuestionIndex >0) {
        
  
        this.currentQuestionIndex--;
        this.progress-=25 
      }
    },
  },
 
  
};
</script> -->




<template>
  <div class="container1 rounded-lg">
    <img class=logo src="../assets/butterpaper_logo.png" height="100" width="180" alt="200">
    <div v-if="!completed">
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      <h1 class="font-bold text-2xl text-centre " >{{ question }}</h1>
      <h2 class="subPart">{{keyvalue}}</h2>
      <div class="opt-cont">
      <div class="options" v-for="(option, index) in options" :key="index">
        <div class="card-body">
        <input type="radio" :id="`option-${index}`" :value="option.value" :name="option.value" v-model="selectedOption">
        
        <label :for="`option-${index}`">{{ option.label }}</label>

        <img v-if="option.imgsrc" :src="option.imgsrc"  class="mx-20" alt="Option image" height="20" width="30">
        <!-- <img v-for="(option, index) in options" :key="index" class="mx-4" src="../assets/logo.png" height="20" width="20" alt="dummy"> -->
        </div>
      </div>
      </div>
      <button class="btn-next" @click="prevQuestion">Prev</button>
      <button class="skip-next" @click="skipQuestion">Skip</button>
      <button class="btn-prev" @click="nextQuestion">Next</button>
    </div>
    <div v-else>
      <newOtp/>
    </div>
  </div>
</template>
<style>
img{
  margin-right: 90%;
  margin-bottom: 20px;
}
body{
  background-color: #D6D7DA;
}
.opt-cont{
  display: flex;
  flex-wrap: wrap;
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
  background-color: #32931A;
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
.skip-next{
  position: fixed;
  right: 38rem;
  bottom: 15rem;

}
.btn-prev {
  
  position: fixed;
   bottom: 14rem;
  right: 32rem;
  
  padding: 10px 20px;
  background-color: #7E7D84;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
}
.btn-next {
  
  position: fixed;
   bottom: 14rem;
   left: 32rem;
  /* margin: 9%; */
  
  padding: 10px 20px;
  background-color: #7E7D84;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
}
.btn-next:hover {
  background-color: #147A0F;
}
.card-body {
  display: flex;
  align-items: center;
  flex-flow: row;
  height: 4rem;
  border: 1px solid rgb(111, 110, 110);
  /* background-color: #007BFF; */
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
@media only screen and (max-width: 600px) {
  body {
    background-image: none;
  }
  .options {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* margin: 1.8em; */
  margin: 1rem auto;
  }
  .opt-cont{
 display: flex;
 flex-wrap: wrap;
 width: 100%;
}

.btn-prev {
  
  position: relative;
  padding: 10px 20px;
  background-color: #7E7D84;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
}
.btn-next {
  
  position: relative;
  
  padding: 10px 20px;
  background-color: #7E7D84;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
}
.btn-next:hover {
  background-color: #147A0F;
}
}

@media only screen and (max-width: 900px) {
  body {
    background-image: none;
  }
  .options {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* margin: 1.8em; */
  margin: 1rem auto;
  }
  .opt-cont{
 
 display: flex;
 flex-wrap: wrap;

 width: 100%;
 

}
}
</style>
<script>
import newOtp from './newOtp.vue'
export default {
  data() {
    return {
      questions: [
        {
          question: 'What do you want to use Butterpaper for?',
          
          keyvalue:'Butterpaper got you, no need to fret. Just let us know your use case, so we can help you succeed and stay ahead.',
          options: [
            { label: 'E-commerce', value: 'physical',imgsrc:require('../assets/logo.png') },
            { label: 'Fintech', value: 'digital',imgsrc:require('../assets/left.avif') },
            { label: 'Real Estate', value: 'services',imgsrc:require('../assets/left.avif') },
            { label:'Event Management' , value:'event',imgsrc:require('../assets/left.avif')},
            { label:'Education' , value:'ed',imgsrc:require('../assets/left.avif')},
            { label:'Transportation' , value:'transport',imgsrc:require('../assets/left.avif')},
            { label:'Digital Products', value:'dig',imgsrc:require('../assets/left.avif')}
          ],
          selectedOption: null,
        },
        {
          question: 'How Big is Your Team?',
          keyvalue:'Butterpaper got you, no need to fret. Just let us know your use case, so we can help you succeed and stay ahead.',
          options: [
            { label: 'Solo', value: '1',imgsrc:"../assets/left.avif" },
            { label: 'Small', value: '2-10',imgsrc:"../assets/left.avif" },
            { label: 'Medium', value: '11-50',imgsrc:"../assets/left.avif" },
            { label:'Large' , value:'51+',imgsrc:"../assets/left.avif"}
          ],
          selectedOption: null,
        },
        {
          question: 'Where Do You Want to Sell?',
          keyvalue:'key are awesome',
          options: [
            { label: 'Online Store', value: 'online' },
            { label: 'Physical Store', value: 'physically' },
            { label: 'Marketplaces', value: 'market' },
            { label: 'Social Media', value: 'social' },
            { label: 'Mobile Apps', value: 'digitally' },
            { label: 'Other', value: 'anything else' },
          ]
        }
      ],
      progress:0,
      currentQuestionIndex: 0,
      completed: false,
    };
  },
  components: {

    newOtp
    

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
      if (this.selectedOption === null) {
        alert('Please select an option.');
        return;
      }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
      } else {
        this.currentQuestionIndex++;
        this.progress+=25
      }
    },
    skipQuestion(){
      //   if (this.selectedOption === null) {
      //   alert('Please select an option.');
      //   return;
      // }
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.completed = true;
      } else {
        this.currentQuestionIndex++;
        this.progress+=33
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex >0) {
        this.currentQuestionIndex--;
        this.progress-=25
      }
    },
  },
};
</script>







