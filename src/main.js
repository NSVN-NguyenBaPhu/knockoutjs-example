var FirstViewModel = function (firstName, lastName) {
    this.firstName = ko.observable(firstName)
    this.lastName = ko.observable(lastName)
    this.number = ko.observable(1)
    this.fullName = ko.pureComputed(function () {
        return this.firstName() + ' ' + this.lastName() + ' ' + this.number()
    }, this)
    this.increaseNumber = function () {
        this.number(this.number() + 1)
        if (this.number() >= 5)
            this.limitClick(true)
    }
    this.limitClick = ko.observable(false)

    this.lstFood = ko.observableArray(["Break", "Rice", "Noodle"])
    this.newFood = ko.observable()
    this.addNewFood = function () {
        if (this.newFood() == undefined || this.newFood().trim().length == 0)
            return
        this.lstFood.push(this.newFood())
        this.newFood("")
    }
    this.selectedFood = ko.observable(["Break"])
    this.removeFood = function () {
        this.lstFood.removeAll(this.selectedFood())
        this.selectedFood([])
    }
    this.sortFood = function () {
        this.lstFood.sort();
    }
};

$(document).ready(function () {
    ko.applyBindings(new FirstViewModel("Phú", "Nguyễn Bá"));
});
