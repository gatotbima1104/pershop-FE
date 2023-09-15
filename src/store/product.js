import { defineStore } from "pinia";
import axiosInstance from "../lib";

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
      const confirmation = confirm("Are you sure to delete this product?");
      confirmation ? await axiosInstance.delete(`/product/${id}`) : null;
      await this.getProduct();
    },
    async editData(objProduct) {
      // this.productInfo.name = objProduct.name;
      // this.productInfo.price = objProduct.price;
      // this.productInfo.stock = objProduct.stock;
      // this.productInfo.category = objProduct.category;
      // this.productInfo.id = objProduct.id;
      // this.productInfo.isUpdated = true;
      this.productInfo = {
        ...objProduct,
        isUpdated: true,
      };
    },
    async clearStateUpdated() {
      // this.productInfo.isUpdated = false,
      // this.productInfo.id = "",
      // this.productInfo.name = "",
      // this.productInfo.price = 0,
      // this.productInfo.stock = 0,
      // this.productInfo.category = "" || null;

      this.productInfo = {
        isUpdated: false,
        id: "",
        name: "",
        price: 0,
        stock: 0,
        category: "" || null,
      };
    },
  },
});
