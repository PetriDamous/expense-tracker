## Context Project

section-10-context

1. Make context work

2. Refactor reducer to handle all of the state inside of the form component.

## HTTP Project

scetion-14-http

1. Add data from SWAPI into app
2. Use promise chain
3. Then convert to async await

## Advance Redux

advance-redux

1. Refactor code. Make it to where all logic for state is handled by redux
2. Make a total quanity property for cart state
3. make a ui slice for handling toggling on and off the cart
4. change our main shoppingSlice to cartSlice since this will deal with the cart and cart data and cart data that needs to be shared wither other components such as cartButton that toggles the cart on and off
5. Remove uuid. We dont need it just work with existing item structure and change it it to fit each need. you where on the right track.
6. look into using the find() array method instead of the findIndex() method.
7. split files into ui-slice and cart-slice and have index.js handle the store logic
8. We are using redux so you can move certain things to the items themselves and not the parent component that holds the list of items

setup a dummy firebase to send HTTP requests to.
