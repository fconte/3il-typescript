

var list = new TodoList();
list.addTodo('Acheter du pain');
list.addTodo('Vendre la voiture');
drawList();

// Affiche la liste de todos
function drawList() {
    // On sélectionne la liste ul
    var ul = document.getElementById('list');
    // On supprime tous les éléments de cette liste
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    // Pour chaque todo
    list.todos.forEach(function (todo) {
        // On crée le nouvel élement
        var li = document.createElement('li');
        li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
        // On définit le texte de l'élément
        li.appendChild(document.createTextNode(todo.title));
        var actionsSpan = document.createElement('span');
        // Si la todo est faite, on attribut à l'élément la classe 'isdone'
        if (todo.state == State.Done) {
            li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center text-muted isdone');
        }
        else {
            // Sinon on ajoute le bouton pour marquer la todo comme effectuée
            var doneButton = document.createElement('span');
            doneButton.textContent = "Done";
            doneButton.setAttribute('class', 'badge badge-info badge-pill done');
            doneButton.setAttribute('data-id', todo.id.toString());
            actionsSpan.appendChild(doneButton);
            actionsSpan.appendChild(document.createTextNode(' '));
        }
        // On crée un Bouton de suppression
        var removeButton = document.createElement('span');
        removeButton.textContent = "X";
        removeButton.setAttribute('class', 'badge badge-danger badge-pill remove');
        // On passe l'id au bouton de suppression
        removeButton.setAttribute('data-id', todo.id.toString());
        // On affecte le boutton à l'élément
        actionsSpan.appendChild(removeButton);
        li.appendChild(actionsSpan);
        // On ajoute l'élément à la liste
        ul.appendChild(li);
    });
}
// Event listener sur le click
document.addEventListener('click', function (event) {
    // On récupère l'élement cliqué
    var target = event.target;
    // Si l'élement cliqué est le bouton "Ajouter"
    if (target.matches('#addTodoButton')) {
        // On récupère le champs texte
        var input = document.getElementById('todoInput');
        // On ajoute le contenu à la todolist
        list.addTodo(input.value);
        // On vide le champs texte
        input.value = "";
        // On rafraichit la liste affichée
        drawList();
    }
    // Si l'élement cliqué est le bouton "Supprimer"
    if (target.matches('.remove')) {
        // On récupère l'identifiant de la todo courante
        var id = target.getAttribute('data-id');
        // On demande la suppression de cet id de todo à la liste
        list.removeTodo(parseInt(id, 10));
        // On rafraichit la liste affichée
        drawList();
    }
    // Si l'élement cliqué est le bouton "C'est fait!"
    if (target.matches('.done')) {
        // On récupère l'identifiant de la todo courante
        var id = target.getAttribute('data-id');
        // On demande le fermeture de cet id de todo à la liste
        list.closeTodo(parseInt(id, 10));
        // On rafraichit la liste affichée
        drawList();
    }
}, false);
