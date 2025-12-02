// Máscaras automáticas para CPF, Telefone e CEP
document.addEventListener('DOMContentLoaded', function () {
    const cpf = document.querySelector('input[name="cpf"]');
    const tel = document.querySelector('input[name="telefone"]');
    const cep = document.querySelector('input[name="cep"]');

    cpf.addEventListener('input', () => {
        let v = cpf.value.replace(/\D/g, '');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        cpf.value = v;
    });

    tel.addEventListener('input', () => {
        let v = tel.value.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
        tel.value = v;
    });

    cep.addEventListener('input', () => {
        let v = cep.value.replace(/\D/g, '');
        v = v.replace(/^(\d{5})(\d)/, '$1-$2');
        cep.value = v;
    });

    // Mensagem de sucesso
    document.getElementById('formCadastro').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('mensagemSucesso').classList.add('mostrar');
        setTimeout(() => {
            document.getElementById('mensagemSucesso').classList.remove('mostrar');
            this.reset();
        }, 5000);
    });
});