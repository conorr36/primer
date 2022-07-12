window.addEventListener("load", onLoaded);

async function onLoaded() {
  const clientSession = await fetch('/client-session', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  }).then(data => data.json())

  const { clientToken } = clientSession


  
  

  const universalCheckout = await Primer.showUniversalCheckout(clientToken, {
    // Specify the selector of the container element
    container: '#checkout-container',

    successScreen: {
      type: "CHECK",
      title: "Your jeans are on the way!",
    },

    

    /**
     * When the checkout flow has been completed, you'll receive
     * the successful payment via `onCheckoutComplete`.
     * Implement this callback to redirect the user to an order confirmation page and fulfill the order.
     */
    onCheckoutComplete({ payment }) {
      console.log('Checkout Complete!', payment)
    },

    style: {

        inputLabel: {
          fontFamily: "tahoma",
          color: "#FFFFFF",
        },

        input: {
          base: {
            borderStyle: "solid solid solid solid",
            borderColor: "#B66B3E",
            boxShadow: "2px",
            background: "#f2ece1",
            fontFamily: "tahoma",
            borderRadius: "5px",
            paddingHorizontal: "0px",
            lineHeight: "",
            color: "#383838",
            placeholder: {
              color: "#383838",
            },
          },
        },
      
			submitButton: {
				base: {
					color: '#000000',
					background: '#B66B3E',
					borderRadius: '10px',
					boxShadow: 'none',
				},
				disabled: {
					color: '#9b9b9b',
					background: '#e1deda',
        },
      
      },
    },

    /**
     * Learn more about the other options at:
     * https://primer.io/docs
     * https://www.npmjs.com/package/@primer-io/checkout-web
     */
  })
}
