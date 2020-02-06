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
            newItem: ""
        },
        methods: {
            saveNewItem: function() {
                this.items.push({
                    name: this.newItem,
                    purchased: false
                });
                this.newItem = "";
            },
            buyItem: function(index) {
                this.items[index].purchased = true;
            }
        }
    })
})
