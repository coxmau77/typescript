(() => {
  let userId: string | Number;
  userId = 2024;
  userId = "año 20224";

  function greeting(content: string | number) {
    console.log(`txt: ${content}`);
    // guardians ts
    if (typeof content === "string") {
      console.log(`string: ${content.toUpperCase()}`);
    } else {
      console.log(`number: ${content} metodo toFixed(1): ${content.toFixed(1)}`);
    }
  }

  function defineType(content: string | number) {
    typeof content === "number" ? content.toFixed(1) : content.toUpperCase()
  }

  greeting("Saludando desde una function");
  greeting(299.99);

  console.log(`Definir el tipo con una funcion:
      string: ${defineType("Hola mundo!")}: type: ${typeof (defineType("Hola mundo!"))}
      number: ${defineType(1999.99)}: type: ${typeof (defineType(1999.99))}
    `);

})();
