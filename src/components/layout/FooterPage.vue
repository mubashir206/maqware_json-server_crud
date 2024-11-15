<template>
    <div>
      <footer>
        <div class="bg-gray-500 py-2">
          <h1 class="text-white mx-3 text-xl text-center">Copyright © Maqware solutions {{ currentYear }}</h1>
        </div>
      </footer>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'FooterPage',
  
    data() {
      return {
        currentYear: new Date().getFullYear(), 
      };
    },
  };
  </script>
  