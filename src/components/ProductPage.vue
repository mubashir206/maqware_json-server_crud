<template>
    <div class="container mx-auto py-8">
        <h1 class="text-3xl font-bold text-center mb-8 text-gray-700">Product Page</h1>
    
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- <h1>{{ iseditting }}</h1> -->
            <div class="col-span-1 bg-white shadow-md p-6 rounded-lg border border-gray-200">
                <h2 class="text-2xl font-semibold mb-4 text-gray-700">{{ iseditting ? 'Edit Product' : 'Add New Product' }}</h2>
                <form @submit.prevent="iseditting ? updateProduct(currentProductId) : addProduct()" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-600">Product Name</label>
                        <input type="text" v-model="name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter name" required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-600">Description</label>
                        <textarea v-model="description" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter description" required></textarea>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-600">Category</label>
                        <input type="text" v-model="category" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter category" required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-600">Order Status</label>
                        <select v-model="status" required class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">Select status</option>
                            <option value="Pending">Pending</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                    <button type="submit" class="w-1/3 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Add Product</button>
                </form>
            </div>
    
            <div class="col-span-2 bg-white shadow-md p-6 rounded-lg border border-gray-200">
                <h2 class="text-2xl font-semibold mb-4 text-gray-700">Product List</h2>
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr class="bg-gray-100 border-b text-gray-600 text-sm">
                            <th class="py-2 px-4 border">Name</th>
                            <th class="py-2 px-4 border">Description</th>
                            <th class="py-2 px-4 border">Category</th>
                            <th class="py-2 px-4 border">Status</th>
                            <th class="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="index" class="text-center border-b hover:bg-gray-100">
                            <td class="py-2 px-4 border">{{ product.name }}</td>
                            <td class="py-2 px-4 border">{{ product.description }}</td>
                            <td class="py-2 px-4 border">{{ product.category }}</td>
                            <td :class="product.status === 'Complete' ? 'text-green-500' : 'text-yellow-500'" class="py-2 px-4 border">
                                {{ product.status }}
                            </td>
                            <td class="py-2 px-4 border">
                                <button @click="editProduct(product)" class="bg-gray-500 text-white hover:text-white hover:bg-gray-700 rounded p-1 transition duration-300">Edit</button> &nbsp;
                                <button @click="deleteProduct(product.id)" class="bg-red-500 text-white hover:text-white hover:bg-red-700 rounded p-1 transition duration-300">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
        name: 'ProductPage',
        data() {
            return {
                name: '',
                description: '',
                category: '',
                status: '',
                products: [],
                iseditting: false,
                currentProductId: null
            };
        },

        methods: {
            async fetchProducts() {
                try {
                    const response = await axios.get('http://localhost:3000/products');
                    this.products = response.data;
                } catch (error) {
                    console.error("error found:", error);
                }
            },

            async addProduct() {
                alert('asdf');
                const newProduct = {
                    name: this.name,
                    description: this.description,
                    category: this.category,
                    status: this.status,
                };
                try {
                    const response = await axios.post('http://localhost:3000/products', newProduct);
                    this.products.push(response.data);
    
                    this.clearForm();
                } catch (error) {
                    console.error("error found:", error);
                }
            },

            async editProduct(product) {
                this.name = product.name;
                this.description = product.description;
                this.category = product.category;
                this.status = product.status;
                this.iseditting = true;
                this.currentProductId = product.id;
            },

            async updateProduct(id) {
                const updatedProduct = {
                    id: this.currentProductId,
                    name: this.name,
                    description: this.description,
                    category: this.category,
                    status: this.status,
                };
                try {
                    await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);
                    const index = this.products.findIndex(p => p.id === id);
                    if (index !== -1) {
            this.$set(this.products, index, updatedProduct);
        }
    
                    this.clearForm();
                } catch (error) {
                    console.error("error found:", error);
                }
            },

            clearForm() {
                this.name = '';
                this.description = '';
                this.category = '';
                this.status = '';
                this.iseditting = false;
                this.currentProductId = null;
            },

            async deleteProduct(id) {
                try {
                    await axios.delete(`http://localhost:3000/products/${id}`);
                    this.products = this.products.filter(product => product.id !== id);
                } catch (error) {
                    console.error("error found:", error);
                }
            }
        },

        mounted() {
            this.fetchProducts();
        },
    
    };
    </script>
    
    <style scoped>
    </style>
    