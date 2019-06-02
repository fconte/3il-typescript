Exercice Typescript
===

![alt text](https://github.com/fconte/3il-typescript/blob/master/cover.png?raw=true)

Initialisation
---
1. Installer typescript
```
npm install -g typescript
```
2. Créer le fichier ```script.ts``` à la racine du projet
3. Compiler le fichier .ts en .js avec la commande ```tsc script.ts```
4. Dans un nouveau terminal, se placer à la racine du projet et lancer la commande ```php -S 0.0.0.0:4242```, le site est désormais accessible depuis ```http://localhost:4242```


Enum State
---
1. Dans le fichier ```script.ts``` créer un énum ```State``` définit par deux élements: ```Done``` et ```Todo```.

Interface Todo
---
1. Dans le fichier ```script.ts``` créer l'interface Todo
2. Cette interface définit les trois propriétés du schéma


Classe TodoList
---
La classe TodoList gère un tableau de todo. Il est possible d'ajouter, changer l'état et supprimer une todo.

1. Dans le fichier ```script.ts``` créer la classe TodoList
2. Implémenter les trois méthodes publiques définies dans le schéma


