import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            items: [
            { name: 'Milk', purchased: false }, 
            { name: 'Beans', purchased: true}, 
            { name: 'Eggs', purchased: false }, 
            { name: 'Coffee', purchased: false }
        ],
            newItem: "",
            todos: [
                { name: 'Feed the cat', priority: 'low' },
                { name: 'Write a novel', priority: 'low' },
                { name: 'Create a killer app', priority: 'low' },
            ],
            newTodo: "",
            priority: ""
        },
        methods: {
            saveNewItem: function() {
                if (this.newItem) {
                    this.items.push({
                        name: this.newItem,
                        purchased: false
                    });
                    this.newItem = "";
                }
            },
            buyItem: function(index) {
                this.items[index].purchased = true;
            },
            saveNewTodo: function() {
                if(this.newTodo) {
                    this.todos.push({
                        name: this.newTodo,
                        priority: this.priority
                    })
                }
            }
        }
    })
})
