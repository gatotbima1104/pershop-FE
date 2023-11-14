import { defineStore } from "pinia";
import axiosInstance from "../lib";
import Swal from "sweetalert2"

export const useProducts = defineStore("product", {
  state: () => ({
    products: [],
    productInfo: {
      id: "",
      name: "",
      price: 0,
      stock: 0,
      category: "" || null,
      isUpdated: false,
    },
  }),
  actions: {
    async handleSubmit() {
      const { name, price, category, stock, isUpdated, id } = this.productInfo;
      try {
        if (isUpdated == false) {
          await axiosInstance.post("/product", {
            name,
            price,
            stock,
            category,
          });
          alert("product added");
        } else {
          await axiosInstance.patch("/product/" + id, {
            name,
            price,
            stock,
            category,
          });
          alert("product updated successfully");
          await this.clearStateUpdated();
        }
        await this.getProduct();
      } catch (error) {
        if (error.response.status === 400) {
          console.log("please fill form before submitting");
        }
      }
    },
    async getProduct() {
      try {
        const res = await axiosInstance.get("/product");
        this.products = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async removeProductById(id) {
      // const confirmation = confirm("Are you sure to delete this product?");
      Swal.fire({
        title: "Delete",
        text: "Are you sure to delete this product?",
        icon: 'info',
        confirmButtonText: 'Remove',
        confirmButtonColor: 'red',
        cancelButtonText: "Cancel",
        cancelButtonColor: "Grey",
        showCancelButton: true
      }).then( async (result)=> {
        if(result.isConfirmed){
          await Swal.fire('Deleted', 'Product deleted successfully', 'success')
          await axiosInstance.delete(`/product/${id}`);
          await this.getProduct();
        } else if (result.isDenied){
          null
        }
      })

    },
    async editData(objProduct) {
      this.productInfo = {
        ...objProduct,
        isUpdated: true,
      };
    },
    async clearStateUpdated() {
      this.productInfo = {
        isUpdated: false,
        id: "",
        name: "",
        price: 0,
        stock: 0,
        category: "" || null,
      };
    },

    formatPrice(price){
      const formattedPrice = Intl.NumberFormat('id-ID', {
        currency: 'IDR',
        style: 'currency'
      }).format(price)
      return formattedPrice
    }
  },
});
