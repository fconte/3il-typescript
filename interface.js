var list = new TodoList();
// Hydrate les todos
var cache = JSON.parse(window.localStorage.getItem('todos'));
if (Array.isArray(cache)) {
    list.todos = cache;
}
drawList();
document.getElementById('todoInput').onkeyup = function (e) {
    if (e.keyCode == 13) {
        var val = this.value;
        if (val != "") {
            // On ajoute le contenu à la todolist
            list.addTodo(this.value);
            // On vide le champs texte
            this.value = "";
            // On rafraichit la liste affichée
            drawList();
            storeInLocalStorage();
        }
    }
};
// Stocke les données dans le local storage
function storeInLocalStorage() {
    // Vide le local storage
    window.localStorage.clear();
    // Store les todos
    window.localStorage.setItem('todos', JSON.stringify(list.todos));
}
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
            li.setAttribute('class', 'list-group-item d-flex bg-light justify-content-between align-items-center text-muted isdone');
        }
        else {
            li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center done');
        }
        li.setAttribute('data-id', todo.id.toString());
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
        if (input.value != "") {
            // On ajoute le contenu à la todolist
            list.addTodo(input.value);
            // On vide le champs texte
            input.value = "";
            // On rafraichit la liste affichée
            drawList();
            storeInLocalStorage();
        }
    }
    // Si l'élement cliqué est le bouton "Supprimer"
    if (target.matches('.remove')) {
        // On récupère l'identifiant de la todo courante
        var id = target.getAttribute('data-id');
        // On demande la suppression de cet id de todo à la liste
        list.removeTodo(parseInt(id, 10));
        // On rafraichit la liste affichée
        drawList();
        storeInLocalStorage();
    }
    // Si l'élement cliqué est la tache
    if (target.matches('li')) {
        // On récupère l'identifiant de la todo courante
        var id = target.getAttribute('data-id');
        // On demande le changement d'état de cet id de todo à la liste
        list.switchStateOfTodo(parseInt(id, 10));
        // On rafraichit la liste affichée
        drawList();
        storeInLocalStorage();
    }
}, false);
