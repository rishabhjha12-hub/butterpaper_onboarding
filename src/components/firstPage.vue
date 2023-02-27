<template>
      
    <div class="container1 rounded-lg">
        <img src="../assets/butterpaper_logo.png" height="100" width="180" alt="200">
      <h1 class="text-3xl font-bold mb-4 text-center text-gray-800">Let’s get  <del>started</del>  butter’d!</h1>
      <h3 class="text-2xl font-italic mb-4 text-center">Drop your deets, let's get started real quick. We just need the basics, so we can help you get lit.</h3>
      <form class="" @submit.prevent="submitForm">
        <div class="mb-6">
        <label class="block text-black-700 text-lg font-medium mb-2">Enter your full name</label>
        <input type="text" class="bg-white-50 border border-gray-300 text-gray-900 text-l rounded-mg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
        <div class="mb-6">
        <label class="block text-black-700 text-lg font-medium mb-2">Enter your Email</label>
        <input type="email" class="bg-white-50 border border-gray-300 text-gray-900 text-l rounded-mg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
        <div class="mb-6">
          <label class="block text-black-500 text-lg font-medium mb-2" for="phone" >Phone Number:</label>
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
          <button type="submit" class="bg-gray-500 cursor-not-allowed flex font-medium items-center mr-4 px-4 py-2 rounded-lg text-sm text-white btn-shadow-primary" @click="goToAboutPage"  >Next</button>
          <!-- <button class="bg-gray-700 flex font-medium items-center mx-auto px-4 py-1 rounded-lg text-sm text-white btn-shadow-primary " type="submit" @click="goToAboutPage"><span class="mr-2 text-2xl"></span>Submit</button> -->
          
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
methods: {
  submitForm() {
    this.$router.push('/onboard')
  }
}



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
  /* body{
    background-color: gray;
  }
  */
  
  </style>
  