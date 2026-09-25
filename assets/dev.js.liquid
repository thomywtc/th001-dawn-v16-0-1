window.boxquantities=[
  {
    quantity:1,
    title:"1 month's supply",
    priceEach:"$1 / chew",
    priceEachSus:"$0.9 / chew",
    price:"$28.46 USD",
    priceSus:"$26.95 USD",
    save:"Save 0%",
    saveSus:"Save 10%"
  },
  {
    quantity:3,
    title:"3 month's supply",
    priceEach:"$0.89 / chew",
    priceEachSus:"$0.84 / chew",
    price:"$80.87 USD",
    priceSus:"$71.95 USD",
    save:"Save 10%",
    saveSus:"Save 20%"
  },
  {
    quantity:6,
    title:"6 month's supply",
    priceEach:"$0.84 / chew",
    priceEachSus:"$0.75 / chew",
    price:"$152.75 USD",
    priceSus:"$134.95 USD",
    save:"Save 15%",
    saveSus:"Save 25%"
  }
];
document.addEventListener('DOMContentLoaded', (evt)=>{
  window.tempselected = null;
  window.tempselectedquant = null;
  
  const itemsSuscription = document.querySelectorAll('.product__info-container .shopify_subscriptions_app_block_label_children li label');
  console.log(itemsSuscription);
  itemsSuscription.forEach((itemsus,index)=>{
    let tempText=itemsus.innerText;
    Array.from(itemsus.childNodes).forEach(child=>{
      if(child.nodeName!="INPUT"){
        child.remove();
      }
    });
    const inputSuscription = itemsus.querySelector('input');
    let calcsaveprice = 0
    if(inputSuscription.dataset.variantCompareAtPrice){
      let comparePriced = parseFloat(inputSuscription.dataset.variantCompareAtPrice.replace(/[^\d.-]/g, ""));
      let priced = parseFloat(inputSuscription.dataset.variantPrice.replace(/[^\d.-]/g, ""));
      calcsaveprice = ((comparePriced - priced)/comparePriced)*100;
    }
    
    const wrapperText = document.createElement('div');
    let currentobj = window.boxquantities[index];
    if(currentobj){
      console.log(index);
      console.log(currentobj);
      inputSuscription.dataset.variantPrice=currentobj.priceSus;
      wrapperText.classList.add(`wrapperText`)
      wrapperText.innerHTML=`
        <div class="leftcont">
          <div>
            <div class="ltitle">${currentobj.title}</div>
            <div class="lprice">${currentobj.priceEachSus}</div>
          </div>
        </div>
        <div class="rightcont">
          <span class="saveprice">${currentobj.saveSus}</span>
        </div>
      `;
    }
    
    itemsus.appendChild(wrapperText);
    inputSuscription.addEventListener('change',chevt=>{
      const quantityField = document.querySelector(`.product-form__input .quantity__input`);
      if(Boolean(quantityField)){
        quantityField.value = currentobj.quantity;
        const event = new Event('change', {
            bubbles: true,
            cancelable: true
        });
        quantityField.dispatchEvent(event);
      }
    });
    if(index==1){
      inputSuscription.checked=true;
      const event = new Event('change', {
          bubbles: true,
          cancelable: true
      });
      inputSuscription.dispatchEvent(event);
      //document.querySelector(`.product__info-container .product-form__buttons .product-price`).innerHTML=inputSuscription.dataset.variantPrice;
      //document.querySelector(`.product__info-container .product-form__buttons .comper-at-price-cust`).innerHTML=inputSuscription.dataset.variantCompareAtPrice;
    }
  });

  const wrapperOptions = document.createElement('div');
  window.boxquantities.forEach((itemq,ind) => {
    const labelOption = document.createElement('label');
    labelOption.classList.add(`variant${ind}`);
    labelOption.innerHTML=`
    <div class="leftcont">
      <input type="radio" value="${itemq.quantity}" onchange="quantityField(this)" name="packs" data-index='${ind+1}' data-variant-price='${itemq.price}'>
      <span class="radiocircle"></span>
      <div>
        <div class="ltitle">${itemq.title}</div>
        <div class="lprice">${itemq.priceEach}</div>
      </div>
    </div>
    <div class="rightcont">
      <span class="saveprice">${itemq.save}</span>
    </div>
    `;
    wrapperOptions.appendChild(labelOption);
  });

  const infocont = document.querySelector('.product__info-container');
  const variantspro = document.querySelector('variant-selects [type="application/json"], variant-radios [type="application/json"]');

  const switchel = document.createElement('div');
  switchel.className = 'switch';
  switchel.innerHTML=`
    <input type="checkbox" oninput="toggleBoxs(this)" checked='true'>
    <span class="slider round"></span>`;

  const diveltext = document.createElement('div');
  diveltext.className = 'text';
  diveltext.innerHTML=`Save More with Automatic Refills!`;

  const elwrapperbottom = document.createElement('label');
  elwrapperbottom.className = 'wrapperBottom';
  elwrapperbottom.appendChild(switchel);
  elwrapperbottom.appendChild(diveltext);

  
  wrapperOptions.className = 'wrapperOptions hidden'; // Add a class
  
  let appblocks = document.querySelectorAll('.shopify-app-block');
  appblocks.forEach(block=>{
    if(block.id.includes("subscription")){
      block.appendChild(wrapperOptions);
      block.appendChild(elwrapperbottom);
    }
  });

  
  
  const suscriptionOptions = document.querySelectorAll(`.shopify_subscriptions_app_block_label_children input[type="radio"]`);
  suscriptionOptions.forEach((opt, ind)=>{
    opt.addEventListener('change',e=>{
      window.tempselected=opt;
    });
  });
  
});

function quantityField(inputel){
  window.tempselectedquant = inputel.value;
  const quantityField = document.querySelector(`.product-form__input .quantity__input`);
  if(Boolean(quantityField)){
    quantityField.value = inputel.value;
    const event = new Event('change', {
        bubbles: true,
        cancelable: true
    });
    quantityField.dispatchEvent(event);
  }
  let nroinput=inputel.dataset.index;
  
  /* code for the app discounts Profit pumper */
  /* const quantityFieldApp = document.querySelector(`.block__cbwrapper input[type="radio"][value="${nroinput}"]`);
  if(Boolean(quantityFieldApp)){
    quantityFieldApp.checked=true;
    const event = new Event('change', {
        bubbles: true,
        cancelable: true
    });
    quantityFieldApp.dispatchEvent(event);
  }*/
  
}
function toggleBoxs(){
  let wrapperSuscriptions = document.querySelector(".shopify_subscriptions_app_container");
  let wrapperOptions = document.querySelector(".wrapperOptions");
  if(wrapperOptions.classList.contains("hidden")){

    /* show quantities */
    let oneTimePurchase = wrapperSuscriptions.querySelector(`input[data-radio-type="one_time_purchase"]`);
    oneTimePurchase.checked=true;
    const eventS = new Event('change', {
        bubbles: true,
        cancelable: true
    });
    oneTimePurchase.dispatchEvent(eventS);
  
    let inputsel=wrapperOptions.querySelector(`input[value="${window.tempselectedquant}"]`);
    if(Boolean(inputsel)){
      inputsel.checked=true;
      const eventS2 = new Event('change', {
          bubbles: true,
          cancelable: true
      });
      inputsel.dispatchEvent(eventS2);

      /* code for the app discounts Profit pumper */
      let nroinput=inputsel.dataset.index;
      const quantityFieldApp = document.querySelector(`.block__cbwrapper input[type="radio"][value="${nroinput}"]`);
      if(Boolean(quantityFieldApp)){
        quantityFieldApp.checked=true;
        const event = new Event('change', {
            bubbles: true,
            cancelable: true
        });
        quantityFieldApp.dispatchEvent(event);
      }
    }
    
    wrapperSuscriptions.classList.add("hidden");
    wrapperOptions.classList.remove("hidden");
  }else{
    /* show suscriptions */
    
    /*const quantityFieldApp = document.querySelector(`.block__cbwrapper input[type="radio"][value="1"]`);
    if(Boolean(quantityFieldApp)){
      quantityFieldApp.checked=true;
      const eventApp = new Event('change', {
          bubbles: true,
          cancelable: true
      });
      quantityFieldApp.dispatchEvent(eventApp);
    }*/
    
    if(Boolean(window.tempselected)){
      window.tempselected.checked=true;
      const eventS2 = new Event('change', {
          bubbles: true,
          cancelable: true
      });
      window.tempselected.dispatchEvent(eventS2);
    }
    
    /*const quantityField = document.querySelector(`.product-form__input .quantity__input`);
    if(Boolean(quantityField)){
      quantityField.value = 1;
      const event = new Event('change', {
          bubbles: true,
          cancelable: true
      });
      quantityField.dispatchEvent(event);
    }*/
    
    wrapperSuscriptions.classList.remove("hidden");
    wrapperOptions.classList.add("hidden");
  }
}