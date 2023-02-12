export default {
  loadCart(state) {
    let cart = localStorage.getItem('myCart')
    if (cart) {
      state.cart = JSON.parse(cart)
    }
  },
  addToCart(state, product) {
    let itemFound = state.cart.find((p) => p.product.id === product.id)
    if (!itemFound) {
      state.cart.push({ product, quantity: 1 })
    }
    if (itemFound) {
      itemFound.quantity += 1
    }

    localStorage.setItem('myCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Cart Updated.',
      icon: 'success',
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  decreaseItemCount(state, index) {
    let item = state.cart[index]
    if (!item) return
    if (item.quantity === 1) {
      state.cart.splice(index, 1)
    } else {
      item.quantity -= 1
    }

    this.$swal({
      toast: true,
      text: 'Cart Updated.',
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  removeCartItem(state, index) {
    state.cart.splice(index, 1)

    this.$swal({
      toast: true,
      text: 'Item Removed.',
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  increaseItemCount(state, index) {
    let item = state.cart[index]
    item.quantity += 1

    this.$swal({
      toast: true,
      text: 'Cart Updated.',
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  clearCart(state) {
    state.cart = []

    localStorage.removeItem('myCart')
  },
}
