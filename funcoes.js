
module.exports = () => {
  return dado = {
    rollGold: function (lados, nVezes, multiplicador) {
      let numeroRolado = 0;
      let i;
      for (i = 0; i < nVezes; i++){ //Repetição para rolar 1d6 quatro vezes (i < nVezes)
        numeroRolado += Math.floor(Math.random() * lados) + 1; //lados = faces do dado
      }
      numeroRolado *= multiplicador;
      return numeroRolado;
    },
    rollItens: function (st, end, R){
      if(R >= st && R <= end){
        return true;
      }else{
        return false;
      }
    }
  }
}
