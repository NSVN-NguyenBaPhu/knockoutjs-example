
// var NestedExampleVM = function () {
//     this.people = [
//         new Person("Annabelle", ["Arnie", "Anders", "Apple"]),
//         new Person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
//         new Person("Charles", ["Cayenne", "Cleopatra"])
//     ]
//     this.showRenderTimes = ko.observable(false)
// }
// var Person = function (name, children) {
//     this.name = name;
//     this.children = ko.observableArray(children);

//     this.addChild = function () {
//         this.children.push("New child");
//     }.bind(this);
// }

// $(document).ready(function () {
//     ko.applyBindings(new NestedExampleVM());
// });
var Person = function(name, children) {
    this.name = name;
    this.children = ko.observableArray(children);
 
    this.addChild = function() {
        this.children.push("New child");
    }.bind(this);
}
 
// The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
var viewModel = {
    people: [
        new Person("Annabelle", ["Arnie", "Anders", "Apple"]),
        new Person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
        new Person("Charles", ["Cayenne", "Cleopatra"])
        ],
    showRenderTimes: ko.observable(false)
};
 
ko.applyBindings(viewModel);