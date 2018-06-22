function HashStorage() {
    this.storage = {};
    this.addValue = function(key, value){
        this.storage[key] = value;
    };
    this.getValue = function(key){
        if (key in this.storage) {
            return this.storage[key];
        } else {
            return undefined;
        }
    };
    this.deleteValue = function(key){
        if (key in this.storage){
            delete this.storage[key];
            return true;
        } else {
            return false;
        }
    };
    this.getKeys = function(){
       return Object.keys(this.storage);
    }
}

var drinkStorage = new HashStorage();

function getDrinksInformation(){
    var name = prompt('Введите название напитка','');
    var caract = confirm('Напиток алкогольный?');
        if (caract) {
            var alcCaract = 'да';
        } else {
            alcCaract = 'нет';
        }
    var recipe = prompt('Введите рецепт приготовления напитка','');
    drinkStorage.addValue( name,{alcKey: alcCaract, recipeKey: recipe});
    /*drinkStorage.toString = function(){return drinkStorage.storage}
    console.log(drinkStorage)*/
}

function showDrinksInformation(){
    var name = prompt('Введите название напитка','');
    var item = drinkStorage.getValue(name);
    if (item) {
        alert('Название напитка: '+name+'\n'+'Признак алкогольности: '+drinkStorage.storage[name].alcKey+'\n'+'Рецепт: '+drinkStorage.storage[name].recipeKey);
    } else {
        alert('Я такого напитка пока не знаю');
    }
}
function deleteDrinksInformation(){
    var name = prompt('Введите название напитка','');
    var deleteItem = drinkStorage.deleteValue(name);
    if (deleteItem){
        alert('Напиток удален')
    } else {
        alert('Я такого напитка пока не знаю')
    }
}
function showDrinksList(){
    alert( drinkStorage.getKeys() );
}