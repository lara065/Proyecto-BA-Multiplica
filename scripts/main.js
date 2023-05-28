let listaPrecios = [4500,5000,8000,7000]

for (i=0; i < listaPrecios.length; i++) {
  console.log (listaPrecios [i]);
  let precio = document.createElement ("p");
  precio.innerHTML = listaPrecios [i];
  document.getElementsByClassName ("listaPrecios").appendChild (precios);
}