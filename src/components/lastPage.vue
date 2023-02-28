<template>
    <div class="containeri rounded-lg">
      <img src="../assets/butterpaper_logo.png" height="100" width="180" alt="200">
         <h1 class="font-bold text-2xl text-centre  " >Last step! Set up your store details, and you're done!</h1>
          <h2 class="subPart my-6">Get ready to start selling on Butterpaper, it's gonna be fun
    Hit 'Complete Setup' and let us handle the rest
    You'll be taken to the admin console, where you'll be at your best!</h2>
    
        <div class="mb-6">
        <label class="block text-black-700 text-lg font-medium mb-2">What is the name of your store?</label>
        <input type="text" class="bg-white-50 border border-gray-300 text-gray-900 text-l rounded-mg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-4">
        <label class="block text-black-700 text-lg font-medium mb-2" for="country">
          Which country is your bussiness located in?
        </label>
        <select class="bg-white-50 border border-gray-300 text-black-900 text-sm rounded-mg focus:ring-grey-500 focus:border-black-500 block w-full p-2.5 dark:bg-grey-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="country" v-model="selectedCountry">
          <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name }}</option>
        </select>
      </div>
      <div>
        <label class="block text-black-700 text-lg font-medium mb-2" for="country">
          What currency do you use for transactions?
        </label>
        <select class="bg-white-50 border border-gray-300 text-black-900 text-sm rounded-mg focus:ring-grey-500 focus:border-black-500 block w-full p-2.5 dark:bg-grey-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" id="country" v-model="selectedcurrency">
          <option v-for="country in currency" :key="country.codi" :value="country.codi">{{ country.named }}</option>
        </select>
      </div>
      <br>
      <div>
        <button class="bg-gray-500 flex font-medium items-center mr-4 px-4 py-2 rounded-lg text-sm text-white btn-shadow-primary " type="submit" ><span class="mr-2 text-2xl"></span>Complete Setup</button>
          
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
    <style >
    body{
      background-color: #D6D7DA;
    }
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
    <!-- <template>
      
       <div class="py-4 space-y-2">
          <h1 class="font-medium text-xl text-gray-900">
            Last step! Set up your store details, and you're done!
          </h1>
          <p class="text-gray-600 text-sm">
            Get ready to start selling on Butterpaper, it's gonna be fun Hit
            'Complete Setup' and let us handle the rest You'll be taken to the
            admin console, where you'll be at your best!
          </p>
        </div>
        <div class="mb-5">
          <p
            class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap"
          >
            What is the name of your store?
          </p>
          <input
            class="px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
            type="text"
            placeholder="Enter store name"
            name="your store name"
            v-model="lastFormData.storeName"
           
          />
        </div>
        <div class="mb-5">
          <p
            class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap"
          >
            Which country is your bussiness located in?
          </p>

          <select
            class="px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
            id="country"
            v-model="lastFormData.countryName"
          >
            <option
              v-for="country in countries"
              :key="country.code"
              :value="country.code"
            >
              {{ country.name }}
            </option>
          </select>
        </div>
        <div class="mb-5">
          <p
            class="text-sm mb-1.5 font-light text-gray-800 capitalize whitespace-nowrap"
          >
            What currency do you use for transactions?
          </p>
          <select
            class="px-4 py-2.5 rounded border border-gray-200 w-full text-sm focus:border-[#6BAC69] outline-none focus:ring-0 placeholder:opacity-60"
            id="country"
            v-model="lastFormData.currency"
          >
            <option
              v-for="country in currency"
              :key="country.codi"
              :value="country.codi"
            >
              {{ country.named }}
            </option>
          </select>
        </div>

    </template>
    <script>
    export default {
  name: "OnboardingScreens",
  // components: { Icon },
  data() {
    return {
     
    
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
      lastFormData:{
        storeName:"",
        countryName:"",
        currency:""

      }
    };
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
  </script> -->