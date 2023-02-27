<template>
    <div class="containeri rounded-lg">
      <img src="../assets/butterpaper_logo.png" height="100" width="180" alt="200">
         <h1 class="font-bold text-2xl text-centre  " >Last step! Set up your store details, and you're done!</h1>
          <h2 class="subPart my-6">Get ready to start selling on Butterpaper, it's gonna be fun
    Hit 'Complete Setup' and let us handle the rest
    You'll be taken to the admin console, where you'll be at your best!</h2>
    
        <div class="mb-6">
        <label class="block text-black-700 text-lg font-bold mb-2">What is the name of your store?</label>
        <input type="text" class="bg-white-50 border border-gray-300 text-gray-900 text-l rounded-mg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-4">
        <label class="block text-black-700 text-lg font-bold mb-2" for="country">
          Which country is your bussiness located in?
        </label>
        <select class="bg-white-50 border border-gray-300 text-black-900 text-sm rounded-mg focus:ring-grey-500 focus:border-black-500 block w-full p-2.5 dark:bg-grey-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="country" v-model="selectedCountry">
          <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name }}</option>
        </select>
      </div>
      <div>
        <label class="block text-black-700 text-lg font-bold mb-2" for="country">
          What currency do you use for transactions?
        </label>
        <select class="bg-white-50 border border-gray-300 text-black-900 text-sm rounded-mg focus:ring-grey-500 focus:border-black-500 block w-full p-2.5 dark:bg-grey-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="country" v-model="selectedcurrency">
          <option v-for="country in currency" :key="country.codi" :value="country.codi">{{ country.named }}</option>
        </select>
      </div>
      <br>
      <div>
        <button class="bg-gray-500 cursor-not-allowed flex font-medium items-center mr-4 px-4 py-2 rounded-lg text-sm text-white btn-shadow-primary " type="submit" @click="onsubmt"><span class="mr-2 text-2xl"></span>Complete Setup</button>
          
      </div>
    </div>
    </template>
    <script>
    export default {
      data() {
        return {
          selectedCountry: ''
        }
      },
      computed: {
        countries() {
          // Return an array of country objects with a code and name property
          return [
            { code: 'US', name: 'United States' , flag:'india-logo.png' },
            { code: 'CA', name: 'Canada' , flag:'india-logo.png' },
            { code: 'MX', name: 'Mexico' , flag:'india-logo.png'},
            { code: 'IN', name: 'India' , flag:'india-logo.png'}
            // Add more countries as needed
          ]
        },
        currency() {
          return [
            {codi:'Rs.' , named:'Indian Rupees'},
            {codi:'USD' , named:'US Dollar'}
          ]
        }
      },
      methods:{
        onsubmt(){
            alert("submted")
        }
   
      }


    }
    </script>
    <style>
    .containeri{
    padding: 2.5rem;
        width: 48%;
        height: 70vh;
        margin: 5rem auto;
        border-radius: 4%;
        background-color: #fff;
    }
       /* body{ font-family: Noto Sans,sans-serif;
        background-color: #D6D7DA;
    } */
    </style>