function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
};

let foo = new Person('hansol');//hansol
console.log(foo.getName());
Person.prototype.name = 'aa';
console.log(Person.prototype.getName());//aa