function validar() {

	var valor = document.getElementById("numero").value;

	if(valor.length > 2) {
		alert("Voc� digitou um n�mero com mais de 2 digitos.Tente novamente!");
		return false;
	} else {
		return true;
	}
}