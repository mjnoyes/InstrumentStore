new Vue({
  el: "#store-app",
  data: {
    items: [
      {
        name: "Fender Standard Electric Guitar",
        type: "Guitar",
        price: "1000.00",
        brand: "fender",
        image:         "https://c1.zzounds.com/media/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-bf5f8f55a8f23541c0088a33e44120df.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Yamaha Piano",
        type: "Piano",
        price: "2900.00",
        brand: "yamaha",
        image:    "https://usa.yamaha.com/files/427DE39AADE447B5A30422DF725647A8_12073_2139x2001_c587b9fef86903b89a823353fa512cf0.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Maton Acoustic Guitar",
        type: "Guitar",
        price: "2900.00",
        brand: "maton",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.aS4buCJ41fSPXDT32uaflQHaLI&pid=Api&P=0&w=300&h=300",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Fender  Acoustic Guitar",
        type: "Guitar",
        price: "1200.00",
        brand: "fender",
        image:          "https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/7_Body_Left_Front_NA-bdf3bf6945697431b572fe5d596d3df1.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Yamaha Electric Violin",
        price: "600.00",
        type: "Violin",
        brand: "yamaha",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.kPZQf0xqJ0OmhHlu3B1W9gHaSU&pid=Api&P=0&w=300&h=300",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Yamaha French Horn",
        type: "French Horn",
        price: "300.00",
        brand: "yamaha",
        image:
          "https://www.musisol.com/26094-thickbox_default/yamaha-yhr-302m.jpg",
        hover: false,
        hasPopUp: false
      },
    ],
    showPopUp: false,
    popUpItem: {},
    cart: [],
    newName: "",
    newPrice: "",
    newBrand: "fender",
    newType: "",
    noImage:      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Orange_question_mark.svg/1200px-Orange_question_mark.svg.png"
  },

  methods: {
    newItem: function () {
      if (this.newName.trim() != "" && this.newPrice.trim() != "") {
        this.items.push({
          name: this.newName.trim(),
          type: this.newType.trim(),
          price: this.newPrice.trim(),
          brand: this.newBrand,
          noImage: true,
          hover: false
        });
      } else {
        alert("You have not entered the necessary information for submission");
      }
      this.newName = "";
      this.newPrice = "";
      this.newType = "";
      this.newCategory = "";
    },
    addToCart: function (item, index) {
      this.cart.push(item);
      this.items.splice(index, 1);
    },
    popUp: function (item) {
      this.showPopUp = !this.showPopUp;
      window.scrollTo(0, 0);
      this.popUpItem = item;
    },
    empty: function () {
      this.items = this.items.concat(this.cart);
      this.cart = [];
    }
  }
});