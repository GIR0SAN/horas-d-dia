function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  if (fano.value.length == 0 || Number(fano.value) > ano){
    alert("Erro.Verifique os dados e tente novamente.")
  } else {
    var fsex = document.getElementsByClassName('radsex')
    var idade = ano - Number(fano.value)
    var genero_mas = document.getElementById('mas') 
    var genero_fem = document.getElementById('fem')
    if (genero_mas.checked){
      var genero = "Homem"
    } else  if(genero_fem.checked){
      var genero = 'Mulher'
    }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}
