(()=>{

  function greeting(userId: UserID_type, size: Sizes) {
    if ( typeof userId === "string") {
      console.log(`string: ${userId.toUpperCase()}`)
    } else {
      console.log(`number: ${userId.toFixed(1)}`)
    }
  }

  type UserID_type = string | number ;
  let userId: UserID_type;

  greeting("Hi!", "xl");
  greeting(2024, "2xl");

  // Literal types

  type Sizes = 's'|'m'|'l'|'xl'|'2xl'|'3xl';

  let shirtSizes: Sizes;

  shirtSizes = '2xl';

})();
