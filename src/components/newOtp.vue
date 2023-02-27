<template>
  <div class="flex flex-col items-center mt-24">
    <h1 class="text-3xl font-bold mb-4 text-center text-gray-800">Almost Done! You’d have received a passcode on your email.</h1>
    <h3 class="text-2xl font-italic mb-4 text-center">You're almost there, don't you despair. Just give us the passcode, and your custom app will be in the air.</h3>
    <label class="text-2xl font-medium" for="otp-input">Enter the six digit code</label>
    <div class="flex justify-center mt-8" @keydown="handleKeyDown" @paste="handlePaste">
      <input
        v-for="(digit, index) in digits"
        :key="index"
        :id="`otp-${index}`"
        type="text"
        v-model="otp[index]"
        maxlength="1"
        autocomplete="on"
        class="w-12 h-12 text-center text-2xl mx-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <button class="mt-8 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" @click="handleSubmit">Submit</button>
    <p class="my-2">Didn’t receive the code? <a href="#">Resend</a> .</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      digits: 6, // number of OTP digits
      otp: new Array(6).fill(''),
    };
  },
  methods: {
    handleKeyDown(event) {
      // prevent non-digit input and move focus to next input field
      const keyCode = event.keyCode;
      const target = event.target;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      } else if (keyCode >= 48 && keyCode <= 57 && target.value) {
        const nextInput = target.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    },

    handleSubmit() {
     
      this.$router.push('/lastpage');
    },
  },
};
</script>
