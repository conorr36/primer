# Conor Reilly Primer Coding Challenge

Hey team, taking down some of the key features I implemented during my time with the Primer platform. 


## Initial Implementation 

I started by git cloning the example-web-checkout repo here: https://github.com/primer-io/example-web-checkout. Following the steps, I connected my initial checkout flow and created some test payments from the basic checkout modal. 


## Adding eCommerce framework

From there I added a basic eCommerce **HTML/CSS/JS** single-page framework around the Primer checkout button to see how it would look on an actual shopping site. This site was focused on selling jeans. 

![enter image description here](https://i.imgur.com/9rhU8eFl.png)


## Adding more payment methods

I then added several payment methods options such as **Klarna, PayPal and Sofort**. This was accomplished by setting up the **Connections, Checkout, and Workflows** for each of these payment methods. I set up the correct payment processor and set the correct currencies and minimum purchase amounts for each of these APMs. 

![enter image description here](https://i.imgur.com/m8KnQMq.png)


## Customizing Checkout fields

From there I began customizing the checkout modal fields **inputLabel, submitButton, and base**  to match the color scheme of the rest of the site using the following code within the client.js file.

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




##  Customizing Error/Success messages

Added event-related messaging for successful purchases with the following snippet. 

    const universalCheckout = await Primer.showUniversalCheckout(clientToken, {
    
    container: '#checkout-container',

    successScreen: {
      type: "CHECK",
      title: "Your jeans are on the way!",
    },

![success](https://i.imgur.com/hMFDIvtm.png)



##  Improvements I would make to docs 

 1. Add a list of all items and types that can be changed for Primer specific buttons with customization example snippets. 
 2. Add examples of how to change APM buttons and their styling.
 3. Add JSON examples of curl request and better documentation of results of those API endpoints. Common error messages, expected values etc...
