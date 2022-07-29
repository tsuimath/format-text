function AppViewModel() {
    this.displayView = ko.observable('')
    this.toUpperCase = function() {
        let currentText = this.displayView()
        this.displayView(currentText.toUpperCase())
    }
    this.toLowerCase = function() {
        let currentText = this.displayView()
        this.displayView(currentText.toLowerCase())
    }
    this.capitalize = function() {
        let currentText = this.displayView(),
            letterCapitalized = currentText.charAt(0).toUpperCase(),
            theRestOfText = currentText.slice(1).toLowerCase()

        this.displayView(letterCapitalized + theRestOfText)
    }
}


ko.applyBindings(new AppViewModel())