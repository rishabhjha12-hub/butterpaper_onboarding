<!-- <template>
  <div class="container">
    <article>
      <header>
        <div class="progress">
          <div class="progress-step"
          :class="{'active':index === activeStep}"
          v-for="(step, index) in formSteps"
          :key="'step'+index">
            {{ index + 1 }}
          </div>
        </div>
      </header>
      <section :class="animation">
        <h2>{{ formSteps[activeStep].title }}</h2>
        <div class="input-fields">
          <div class="input-container"
          v-for="(field, index) in formSteps[activeStep].fields"
          :key="'field'+index">
            <input type="text" :class="{'wrong-input': !field.valid}" v-model="field.value" required>
            <label class="input-label">{{ field.label }}</label>
          </div>
        </div>
        <div class="actions">
          <button v-if="activeStep -1 < formSteps.length -1" @click="prevStep">prev</button>
          <button v-if="activeStep +1 < formSteps.length -1" @click="checkFields">next</button>
          <button v-if="activeStep +1 === formSteps.length -1" @click="checkFields">done</button>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        activeStep: 0,
        formSteps: [
          {
            title: "Personal info",
            fields: [
              { label: "Enter Your Name?", value: '', valid: true, pattern: /.+/ },
              { label: "Enter Your Email id?", value: '', valid: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
              { label: "Enter your Phone Number", value: '', valid: true, pattern: /^\d{10}$/ }
            ]
          },
          {
            title: "Compamny Details",
            fields: [
              { label: "Store/Company name", value: '', valid: true, pattern: /.+/ },
              { label: "Number of employees?", value: '', valid: true, pattern: /.+/ },
              { label: "Which Type of Product you want to sell?", value: '', valid: true, pattern: /.+/ }
            ]
          },
          {
            title: "Your data",
            fields: [
              { label: "Type of product?", value: '', valid: true, pattern: /.+/ },
              { label: "Where do you sell?", value: '', valid: true, pattern: /.+/ },
             
            ]
          },
          {
            title: "Thank you!",
          }
        ],
      }
    },
    methods: {
      nextStep() {
    
        setTimeout(() => {
    
          this.activeStep += 1;
        }, 550);
      },
      prevStep() {
     
        setTimeout(() => {
     
          if (this.activeStep>0){
            this.activeStep -= 1;

          }
        
        }, 550);
      },
      checkFields() {
        let valid = true;
        this.formSteps[this.activeStep].fields.forEach(field => {
          if(!field.pattern.test(field.value)) {
            valid = false;
            field.valid = false;
          }
          else {
            field.valid = true;
          }
        });

        if(valid) {
          this.nextStep();
        }
        else {
          this.animation = 'animate-wrong';
          setTimeout(() => {
            this.animation = '';
          }, 400);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
 
  @mixin flexbox() {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    @include flexbox();
    min-width: 100%;
    
    min-height: 100vh;
    font-family: 'Noto Sans', sans-serif;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA1IiBoZWlnaHQ9IjE4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjM4Nl8xMDMwMzEpIj48cGF0aCBmaWxsPSIjNzlERkZGIiBkPSJNMCAwaDMwNXYxODEuNTQ4SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8yMzg2XzEwMzAzMSkiPjxwYXRoIGQ9Ik01OS45MDggMzcuOTVjLTI5LjA0Ny0zMS40NjgtNDIuMzYtMTMuMTExLTQ1LjM4NyAwLTkuNjgzIDI0LjIwNy0xOS4zNjUgMjcuODM4IDAgNTcuNDkgMTkuMzY1IDI5LjY1My00LjIzNiA0NC43ODItMjkuMDQ3IDExOS44MjItMjQuODEyIDc1LjA0IDE0OC44NjktMTIuMTAzIDE3Ni4xMDEtMzYuOTE1IDI3LjIzMi0yNC44MTEgMzAuMjU4LTEwNy4xMTMtMzQuNDk0LTc4LjA2NS02NC43NTIgMjkuMDQ3LTMwLjg2My0yMi45OTYtNjcuMTczLTYyLjMzMnoiIGZpbGw9IiM1RkQ1QjYiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZl8yMzg2XzEwMzAzMSkiPjxwYXRoIGQ9Ik0yNTMuMDg3LTExMy4zMzljMjkuMDQ4LTMxLjQ2OCA0Mi4zNjEtMTMuMTEyIDQ1LjM4NyAwIDkuNjgzIDI0LjIwNiAxOS4zNjUgMjcuODM3IDAgNTcuNDktMTkuMzY1IDI5LjY1MyA0LjIzNiA0NC43ODIgMjkuMDQ3IDExOS44MjEgMjQuODEyIDc1LjA0LTE0OC44NjktMTIuMTAzLTE3Ni4xMDEtMzYuOTE0LTI3LjIzMi0yNC44MTItMzAuMjU4LTEwNy4xMTMgMzQuNDk0LTc4LjA2NiA2NC43NTIgMjkuMDQ4IDMwLjg2My0yMi45OTYgNjcuMTczLTYyLjMzMXoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8yMzg2XzEwMzAzMSkiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZl8yMzg2XzEwMzAzMSkiPjxlbGxpcHNlIGN4PSIyOTMuMTgyIiBjeT0iMTI5LjUyOSIgcng9IjEzMS41OCIgcnk9IjUwLjk3OSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI1LjY0NCAyOTMuMTgyIDEyOS41MjkpIiBmaWxsPSIjQ0FDMkZFIi8+PC9nPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMjM4Nl8xMDMwMzEiIHg9Ii03Ny40NiIgeT0iLTM5Ljk0MSIgd2lkdGg9IjMxNy44MzYiIGhlaWdodD0iMzQ1LjU2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzMC4yNTgiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8yMzg2XzEwMzAzMSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZl8yMzg2XzEwMzAzMSIgeD0iNDguNDEzIiB5PSItMjE1LjQzNyIgd2lkdGg9IjM2Ni4yNDkiIGhlaWdodD0iMzkzLjk3MyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDIuMzYxIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMjM4Nl8xMDMwMzEiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJmaWx0ZXIyX2ZfMjM4Nl8xMDMwMzEiIHg9Ijc1LjY4MSIgeT0iLTQwLjQ3NSIgd2lkdGg9IjQzNS4wMDEiIGhlaWdodD0iMzQwLjAwOSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDguNDEzIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMjM4Nl8xMDMwMzEiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjM4Nl8xMDMwMzEiIHgxPSIxODIiIHkxPSI0Mi41IiB4Mj0iMjgzIiB5Mj0iNy41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0NDRkZGMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0NDRkZGMiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImNsaXAwXzIzODZfMTAzMDMxIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDMwNXYxODEuNTQ4SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+);
    background-repeat: no-repeat;
    background-size: cover;
  
  }

  article {
    display: flex;
    margin: 10px;
    width: calc(100% - 20px);
    max-width: 720px;
    min-height: 480px;
    perspective: 1000px;

    header {
      @include flexbox();
      width: 60px;
      height: 480px;
      background-color: #fff;
      border-right: 2px dotted #DF5C2E;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    }

    .progress-step {
      @include flexbox();
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-bottom: 20px;
      color: #fff;
      background-color: #DF5C2E;
      font-weight: bold;

      &.active {
        background-color: #DF5C2E;

        ~ .progress-step {
          color: #555;
          background-color: #ccc;
        }

        ~ .progress-step::before {
          background-color: #ccc;
        }
      }

      &:before {
        content: '';
        position: absolute;
        top: -20px;
        width: 2px;
        height: 20px;
        background-color: #DF5C2E;
        z-index: 10;
      }

      &:first-child::before {
        display: none;
      }
    }

    section {
      @include flexbox();
      flex-direction: column;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);

      h2 {
        font-size: 1.6rem;
        color: #DF5C2E;
        margin: 0;
        padding: 20px;
      }

      .input-fields {
        @include flexbox();
        flex-direction: column;
        width: 100%;
      }

      .input-container {
        position: relative;
        padding: 30px 20px 20px 20px;
        width: calc(100% - 40px);
        max-width: 400px;

        input {
          position: relative;
          width: 100%;
          font-family: 'Noto Sans', sans-serif;
          font-size: 1.35rem;
          outline: none;
          background: transparent;
          box-shadow: none;
          border: none;
          border-bottom: 2px dashed #DF5C2E;

          &:valid + .input-label {
            top: 10px;
            left: 20px;
            font-size: .7rem;
            font-weight: normal;
            color: #999;
          }

          &.wrong-input + .input-label {
            color: #B92938;
          }
        }
      }

      .input-label {
        position: absolute;
        top: 32px;
        left: 20px;
        font-size: 1.35rem;
        pointer-events: none;
        transition: .2s ease-in-out;
      }

      .actions {
        margin: 0;

        button {
          font-family: 'Noto Sans', sans-serif;
          outline: none;
          border: none;
          color: #fff;
          background-color: #DF5C2E;
          font-size: 1.35rem;
          padding: 5px 20px;
          margin: 5;
          text-transform: uppercase;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }

 
  .animate-wrong {
    animation: wrong .4s ease-in-out;
  }

  

  @keyframes wrong {
    0% { transform: translateX(0); }
    20% { transform: translateX(40px); }
    40% { transform: translateX(20px); }
    60% { transform: translateX(40px); }
    80% { transform: translateX(20px); }
    100% { transform: translateX(0); }
  }
</style> -->

<template>
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
</script>
