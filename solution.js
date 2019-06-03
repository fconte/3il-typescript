// Nous allons créer le coeur d'une todo list.
// Une toto list est définie par une liste qui contient des todos
// Une todo est définie par un identifiant, un titre et un état (todo, done)
// 1 - Création d'un enum 'State' qui aura deux valeurs: Todo et Done
var State;
(function (State) {
    State[State["Todo"] = 0] = "Todo";
    State[State["Done"] = 1] = "Done";
})(State || (State = {}));
;
// 3 - Création d'une classe TodoList
// Cette classe a une propriété: todos qui est un tableau de todo
// Cette classe a trois méthodes publiques:
// - addTodo qui prend en paramètre une chaine de caractère (le titre)
// - switchStateOfTodo qui prend en paramètre un nombre représentant l'identifiant de la todo dont l'état doit changer
// - remove qui prend en paramètre un nombre représentant l'identifiant de la todo à supprimer
var TodoList = (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTodo = function (title) {
        this.todos.push({
            id: this.getNewId(),
            title: title,
            state: State.Todo
        });
    };
    TodoList.prototype.switchStateOfTodo = function (id) {
        this.todos.forEach(function (todo, i) {
            if (todo.id === id) {
                todo.state = (todo.state == State.Done ? State.Todo : State.Done);
            }
        });
    };
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoList.prototype.getNewId = function () {
        var max = 0;
        this.todos.forEach(function (todo) {
            if (todo.id > max) {
                max = todo.id;
            }
        });
        return (max + 1);
    };
    return TodoList;
}());
