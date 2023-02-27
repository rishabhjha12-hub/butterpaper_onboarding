<template>
      
    <div class="container1 rounded-lg">
        <img src="../assets/butterpaper_logo.png" height="100" width="180" alt="200">
      <h1 class="text-3xl font-bold mb-4 text-center text-gray-800">Let’s get  <del>started</del>  butter’d!</h1>
      <h3 class="text-2xl font-italic mb-4 text-center">Drop your deets, let's get started real quick. We just need the basics, so we can help you get lit.</h3>
      <form class="max-w-md mx-auto text-center" @submit.prevent="submitForm">
        <!-- <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">Full Name:</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" v-model="name" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">Email:</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Email" id="Email" v-model="Email" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="phone">Phone Number:</label>
          <div class="phone-input flex">
            <div class="relative">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 " v-model="selectedCountry">
                <option v-for="country in countries" :key="country.code" :value="country.code">
                  <img :src="country.flag" class="inline-block w-4 h-4 mr-2">{{ country.name }} (+{{ country.code }})
                </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M15.58 5.5A8 8 0 003.5 9.75v.5a1 1 0 01-2 0v-1c0-.28.22-.5.5-.5h2.19a1 1 0 010 2H1.5a1 1 0 01-.9-.57A10 10 0 0118.5 9a1 1 0 010 2 8 8 0 01-3.92-6.5zm-2.8 3.2a2 2 0 112.83 2.83 2 2 0 01-2.83-2.83z" clip-rule="evenodd"/></svg>
              </div>
            </div>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="phone-number" v-model="phoneNumber" maxlength="10" required>
          </div>
        </div> -->
        <div class="mb-6">
        <label class="block text-black-700 text-lg font-bold mb-2">Enter your full name</label>
        <input type="text" class="bg-white-50 border border-gray-300 text-gray-900 text-l rounded-mg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-6">
        <label class="block text-black-700 text-lg font-bold mb-2">Enter your Email</label>
        <input type="email" class="bg-white-50 border border-gray-300 text-gray-900 text-l rounded-mg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-6">
          <label class="block text-black-700 text-lg font-bold mb-2" for="phone">Phone Number:</label>
          <div class="phone-input flex">
            <div class="relative">
              <select class="bg-white-50 border border-gray-300 text-black-900 text-sm rounded-mg focus:ring-grey-500 focus:border-black-500 block w-full p-2.5 dark:bg-grey-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="country" v-model="selectedcountry">
                <option v-for="country in countries" :key="country.code" :value="country.code">
                  <img :src="country.flag" class="inline-block w-4 h-4 mr-2">{{ country.name }} (+{{ country.code }})
                </option>
              </select>
             
            </div>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="phone-number" v-model="phoneNumber" maxlength="10" required>
          </div>
        </div> 
        <div class="flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </template>
  <script>






export default {
    data(){
        return{
            countries: [
        { name: 'India', code: '91' },
        { name: 'United States', code: '1' },
        { name: 'Canada', code: '1',  },
        { name: 'Australia', code: '61' },
        { name: 'United Kingdom', code: '44' },
       
      ]
    }
    
  
  
} ,



};
</script>
  
  <style>
  .container1{
  padding: 2.5rem;
  width: 48%;
  height: 70vh;
  margin: 5rem auto;
  border-radius: 4%;
  background-color: white;
}
  body{
    background-color: gray;
  }
 
  
  </style>
  