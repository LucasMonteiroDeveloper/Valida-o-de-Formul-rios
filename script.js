function validar() {

	var valor = document.getElementById("numero").value;

	if(valor.length > 2) {
		alert("Você digitou um número com mais de 2 digitos.Tente novamente!");
		return false;
	} else {
		return true;
	}
}