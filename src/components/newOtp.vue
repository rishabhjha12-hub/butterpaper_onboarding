<template>
  <div class="flex flex-col items-center mt-24">
    <label class="text-4xl font-medium" for="otp-input">Enter OTP:</label>
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
    handlePaste(event) {
      // handle paste event by filling in input fields with pasted value
      const clipboardData = event.clipboardData || window.clipboardData;
      const pastedData = clipboardData.getData('text');
      if (/^\d+$/.test(pastedData)) {
        const digits = pastedData.split('');
        this.otp.forEach((_, index) => {
          this.$set(this.otp, index, digits[index] || '');
        });
      }
      event.preventDefault();
    },
    handleSubmit() {
      // redirect to another component on submit
      this.$router.push('/another-component');
    },
  },
};
</script>

<style scoped>

</style>
