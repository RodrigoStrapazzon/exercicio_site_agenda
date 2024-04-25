var contacts = [];

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Verifica se o contato já existe
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name && contacts[i].phone === phone) {
            alert('Este contato já existe!');
            return;
        }
    }

    // Adiciona o contato ao array
    contacts.push({ name: name, phone: phone });

    // Adiciona o contato à tabela
    var table = document.getElementById('contactsTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = phone;

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});
