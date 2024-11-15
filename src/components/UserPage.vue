<template>
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">User Information Form</h1>
      <p class="text-green-400">{{ message }}</p>
      <form @submit.prevent="isEditing ? updateUser() : addUser()" class="space-y-4 bg-gray-100 p-6 rounded shadow-md">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="mt-1 w-full py-2 block border-gray-300 rounded shadow focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
  
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full py-2 border-gray-300 rounded shadow focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
  
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 py-2 block w-full border-gray-300 rounded shadow focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
  
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            v-model="address"
            class="mt-1 block w-full py-2 border-gray-300 rounded shadow focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
  
        <button
          type="submit"
          class="w-1/6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
  
      <h2 class="text-xl font-bold mt-8 mb-4">User Information Table</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm">
            <th class="py-2 px-4 border">Name</th>
            <th class="py-2 px-4 border">Email</th>
            <th class="py-2 px-4 border">Password</th>
            <th class="py-2 px-4 border">Address</th>
            <th class="py-2 px-4 border">Action</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index" class="text-center border-t hover:bg-gray-100">
            <td class="py-2 px-4 border">{{ user.name }}</td>
            <td class="py-2 px-4 border">{{ user.email }}</td>
            <td class="py-2 px-4 border">{{ user.password }}</td>
            <td class="py-2 px-4 border">{{ user.address }}</td>
            <td>
                <button @click="deleteUser(index)" class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition">
              Delete
            </button>
            &nbsp;
            <button @click="editUser(index)" class="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
//   import userData from '@/assets/db.json';
  
  export default {
    name: 'UserPage',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        address: '',
        // users: userData 
        users: [], 
        message: '',
        isEditing : false,
      currentIndex : null,
      };
    },
    methods: {
      addUser() {
        const newUser = {
          name: this.name,
          email: this.email,
          password: this.password,
          address: this.address
        };

        this.users.push(newUser);
        this.message = 'user created successfully';
        this.name = '';
        this.email = '';
        this.password = '';
        this.address = '';

        setTimeout(() => {
            this.message = '';
      }, 3000);
        
      },

      deleteUser(index){
        this.users.splice(index, 1);
        this.message = 'user delete successfully';

        setTimeout(() => {
            this.message = '';
      }, 3000);
        
      },

      editUser(index) {
      const user = this.users[index];
      this.name = user.name;
      this.email = user.email;
      this.password = user.password;
      this.address = user.address;
      this.isEditing = true;
      this.currentIndex = index;
    },
    updateUser() {
      if (this.currentIndex !== null) {
        this.users[this.currentIndex] = {

          name: this.name,
          email: this.email,
          password: this.password,
          address: this.address
        };
        
        this.isEditing = false;
        this.currentIndex = null;
        this.name = '';
        this.email = '';
        this.password = '';
        this.address = '';
        this.message = 'User has been updated successfully';

        setTimeout(() => {
            this.message = '';
      }, 3000);
        


      }
    },
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  