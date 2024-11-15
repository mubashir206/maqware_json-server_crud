 <template>
     <header class="bg-gradient-to-l from-zinc-500 to-zinc-700 shadow-lg py-4">
    <div class="container mx-auto flex items-center justify-between px-4">
      
      <div class="flex items-center space-x-3">
        <router-link to="/" class="text-white hover:text-amber-400 transition duration-500 text-2xl font-semibold"> <span class="text-red-700 text-4xl">T</span>ourist</router-link>
      </div>


      <nav class="flex-1 flex justify-center space-x-6">
        <router-link to="/" class="text-white hover:text-amber-400  text-lg font-semibold transition duration-300">
          User
        </router-link>
        <router-link to="/product" class="text-white hover:text-amber-400 text-lg font-semibold transition duration-300">
          Product
        </router-link>
        <router-link to="/about" class="text-white hover:text-amber-400 text-lg font-semibold transition duration-300">
          About
        </router-link>
        <router-link to="#" class="text-white hover:text-amber-400 text-lg font-semibold transition duration-300">
          Contact
        </router-link>
      </nav>

 
      
    </div>
  </header>
</template>
 
 <script>

export default{
  name: 'HeaderPage',

}

</script>