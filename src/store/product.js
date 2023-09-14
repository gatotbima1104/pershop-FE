import { defineStore } from "pinia";
import axiosInstance from "../lib";

export const useProducts = defineStore("product", {
  state: () => ({
    products: [],
    idProduct: "",
    nameProduct: "",
    priceProduct: 0,
    stockProduct: 0,
    categoryProduct: "" || null,
    isUpdated: false,
  }),
  actions: {
    async handleSubmit() {
      const { nameProduct, priceProduct, categoryProduct, stockProduct } = this;
      try {
        if (this.isUpdated == false) {
          await axiosInstance.post("/product", {
            name: nameProduct,
            price: priceProduct,
            stock: stockProduct,
            category: categoryProduct,
          });
          alert("product added");
        } else {
          await axiosInstance.patch("/product/" + this.idProduct, {
            name: nameProduct,
            price: priceProduct,
            stock: stockProduct,
            category: categoryProduct,
          });
          alert("product updated successfully");
          await this.clearStateUpdated()
        }
        await this.getProduct();
      } catch (error) {
        console.log(error);
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
      this.nameProduct = objProduct.name;
      this.priceProduct = objProduct.price;
      this.stockProduct = objProduct.stock;
      this.categoryProduct = objProduct.category;
      this.idProduct = objProduct.id;
      this.isUpdated = true;
    },
    async clearStateUpdated() {
      (this.isUpdated = false),
        (this.idProduct = ""),
        (this.nameProduct = ""),
        (this.priceProduct = 0),
        (this.stockProduct = 0),
        (this.categoryProduct = "" || null);
    },
  },
});
