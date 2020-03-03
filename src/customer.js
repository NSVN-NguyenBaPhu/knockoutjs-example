// Model
function Customer(id, name, address) {
    var self = this;
    self.id = ko.observable(id);
    self.name = ko.observable(name);
    self.address = ko.observable(address);
}
// ViewModel
var CustomerVM = function () {
    var vm = this;
    vm.customer = new Customer(null, "", "");
    vm.maxId = 3;
    vm.customers = ko.observableArray([
        new Customer(1, "Phú NB", "HT1"),
        new Customer(2, "Sirius", "HN2")
    ]);
    vm.refreshData = function () {
        vm.customer.id(null);
        vm.customer.name("");
        vm.customer.address("");
    }
    vm.refreshData();
    vm.addCus = function () {
        let curId = vm.maxId++;
        // let curId = vm.getIdForAddCus() + 1;
        let cusAdd = ko.toJS(vm.customer);
        cusAdd.id = curId;
        vm.customers.push(cusAdd);
        vm.refreshData();
    }
    vm.removeCus = function (id) {
        id = 2;
        var index = vm.customers().map(c => c.id).indexOf(id);
        var index2 = vm.customers().map(c => c.name).indexOf("Sirius");
        vm.customers().splice(index, 1);
    }
    vm.getIdForAddCus = function () {
        return Math.max.apply(Math, vm.customers().map(function (c) { return c.id; }))
    }

}

ko.applyBindings(new CustomerVM());