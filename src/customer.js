// Model
function Customer(id, name, address) {
    var self = this;
    self.id = ko.observable(id);
    self.name = ko.observable(name);
    self.address = ko.observable(address);
}
// ViewModel
var CustomerVM = function () {
    this.customers = ko.observableArray([
        new Customer(1, "Phú NB", "HT1"),
        new Customer(2, "Sirius", "HN2")
    ]);

    this.addCus = function () {
        let curId = this.customers().length + 1;
        this.customers.push(new Customer(curId, "New Customer" + curId, "HT" + curId));
    }
    
}

ko.applyBindings(new CustomerVM());