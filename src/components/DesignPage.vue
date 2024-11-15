<template>
<div class="container mx-auto py-8 my-6">

    <div class="grid grid-cols-4 grid-flow-row gap-8">
        <div class="bg-gray-500 col-span-2">
            <h1>title</h1>
            <form class="space-y-4">
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
        <div class="bg-red-500 col-span-2">
            <h1>table</h1>

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
                    <tr class="text-center border-b hover:bg-gray-100">
                        <td class="py-2 px-4 border">product</td>
                        <td class="py-2 px-4 border">deses</td>
                        <td class="py-2 px-4 border">cat</td>
                        <td> status</td>

                        <td class="py-2 px-4 border">
                            <button class="bg-gray-500 text-white hover:text-white hover:bg-gray-700 rounded p-1 transition duration-300">Edit</button> &nbsp;
                            <button class="bg-red-500 text-white hover:text-white hover:bg-red-700 rounded p-1 transition duration-300">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

</div>
</template>

<script>
// import axios from 'axios';
 
export default {
    name: 'DesignPage',

    data() {
        return {
            name: '',
            description: '',
            category: '',
            status: '',
            iseditting: false,
            products: [],
            currentProductId: '',
        };
    },

    // methods: {
    //     async fetchdata() {
    //         try {
    //             const response = await axios.get('http://localhost/3000/products');
    //             this.products = response.data;
    //         }catch (error) {
    //         console.log("error found", error);

    //           }
    //         },

    //         mounted(){
    //             this.fetchdata();
    //         },

    //         async createProduct(){

    //             const newProduct = {
    //                 name: this.name,
    //                 desceipion: this.desceipion,
    //                 category: this.category,
    //                 status: this.name,              
    //             };
    //             try {
                    
    //                 const response = await axios.post('http://localhost/3000/products', newProduct);
    //                 this.products.push(response.data);
    //             } catch (error) {
    //                 console.log(error, "error found");
    //             }


    //         },

    //         async deleteProduct(id){
    //             const response = await axios.delete(`http://localhost/3000/products/${id}`);
    //             this.products = response.filter(product => this.products.id !== id)
    //         },

    //         async editProduct(product) {
    //             this.name = product.name;
    //             this.description = product.description;
    //             this.category = product.category;
    //             this.status = product.status;
    //             this.iseditting = true;
    //             this.currentProductId = product.id;
    //         },

    //         async updateProduct(id){
    //             const updatedProduct = {
    //                 id: this.currentProductId,
    //                 name: this.name,
    //                 description: this.description,
    //                 category: this.category,
    //                 status: this.status,
    //             };
    //             await axios.put(`http://localhost/3000/product/${id}`,updatedProduct);
    //         }






    // }
}
</script>

<style scoped>
</style>
