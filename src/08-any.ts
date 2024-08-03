(()=>{
  // No debenriamos utilizar any ya que no tendria sentido el tipado que logramos justamente con typescript
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = undefined;
  myDinamicVar = {};
  myDinamicVar = ``;
  myDinamicVar = `Hola`;

  const rta = (myDinamicVar as string).toLowerCase();
  console.log(rta )
})();
