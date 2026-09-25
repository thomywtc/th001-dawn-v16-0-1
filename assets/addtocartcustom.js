document.addEventListener('DOMContentLoaded', ()=> {
  class FulfillmentTime extends HTMLElement {
    constructor () {
      super()
      this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
      this.form = this.querySelector('form');
      const this_55 = this;
      this_55.currentvariantproduct = document.querySelector(`#fulfillmentTime`);
      this_55.currentvariantproduct.addEventListener('change', this.addSelectedToCart.bind(this));
      this_55.existincart = false;
      this_55.viewCart();
    }
    async viewCart() {
      let dataviewcart="";
      const options = Array.from(this.currentvariantproduct.options);
      try {
        const response = await fetch('/cart.js', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        dataviewcart = await response.json();
        
      } catch (error) {
          console.error('Error fetching data:', error);
      } finally {
        let dataviewcart = data.items
        getitems.forEach((item,index)=>{
          let searchopt = options.filter(element => element.value==item.variant_id);
          if(searchopt.length>0){
            this.existincart = item;
            this.existincart.line=index+1;
          }
        }); 
      }
    }
    
    async addSelectedToCart (s) {
      const variantsel=s.target.value;

       this.currentvariantproduct.setAttribute("disabled", "");
      
      if(Boolean(this.existincart) && variantsel!=''){
        console.log("existe en el carrito+++++++++++++++++");
        const line=this.existincart.line;
        const quantity=0;
        const body = JSON.stringify({
          line,
          quantity,
          sections:  this.cart.getSectionsToRender().map((section) => section.id),
          sections_url: window.location.pathname,
        });
        /*const elemdelet = document.querySelector(`#CartDrawer-Remove-${line}`);
        elemdelet.click();*/

        const responsechange = await fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
     
        const datachange = await responsechange.json();
        
        
        const items = []
        items.push({
            id: Number(variantsel),
            quantity: 1
        })
        if(datachange){

          this.cart.setActiveElement(document.activeElement);
          const response = await fetch('/cart/add.js', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
               //body: formData
              body: JSON.stringify({ items, 'sections': this.cart.getSectionsToRender().map((section) => section.id), 'sections_url':window.location.pathname, 'source': 'product-form'})
          })
        
          const data = await response.json();
          if (document.querySelector('#CartDrawer')) {
              setTimeout(() => {
                this.cart.renderContents(data);
              });
  
              if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
          } else {
            location.href = window.cart_route
          }
          
        }

      }else{

        if(variantsel==''){
          console.log("VAcio  no en el carrito*********************************"); 
          this.viewCart();
          const line=this.existincart.line;
          const quantity=0;
          const body = JSON.stringify({
            line,
            quantity,
            sections:  this.cart.getSectionsToRender().map((section) => section.id),
            sections_url: window.location.pathname,
          });
          const elemdelet = document.querySelector(`#CartDrawer-Remove-${line}`);
          elemdelet.click();
        }else{
          console.log("alguna variante  no en el carrito*********************************");
          const items = []
          let dataadvar="";
          items.push({
              id: Number(variantsel),
              quantity: 1
          })
  
          this.cart.setActiveElement(document.activeElement);
          try {
            const response = await fetch('/cart/add.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                 //body: formData
                body: JSON.stringify({ items, 'sections': this.cart.getSectionsToRender().map((section) => section.id), 'sections_url':window.location.pathname, 'source': 'product-form'})
            })
          
            dataadvar = await response.json();
          }catch (error) {
              console.error('Error fetching data:', error);
              //contentDiv.innerHTML = 'Failed to load data.';
          }finally {
              // Hide the loading indicator
              this.currentvariantproduct.removeAttribute("disabled");
          }
          
          if (document.querySelector('#CartDrawer')) {
              setTimeout(() => {
                this.cart.renderContents(dataadvar);
              });
  
              if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
          } else {
            location.href = window.cart_route
          }
  
        }
      }
      
    }

    disableLoading(line) {
      const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
      mainCartItems.classList.remove('cart__items--disabled');
  
      const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
      const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);
  
      cartItemElements.forEach((overlay) => overlay.classList.add('hidden'));
      cartDrawerItemElements.forEach((overlay) => overlay.classList.add('hidden'));
    }
  }
  customElements.define('fulfillment-time', FulfillmentTime)
});