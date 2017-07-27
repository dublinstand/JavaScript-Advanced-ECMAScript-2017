function getModel() {
    let model = {
        init: function (num1, num2, result) {
            model.num1 = $(num1);
            model.num2 = $(num2);
            model.result = $(result);
        },
        action: function(operation){
            let val1 = model.num1.val();
            let val2 = model.num2.val();
            model.result.val(operation(val1, val2))
        },
        add: () => model.action((a, b) => a + b),
        substract: () => model.action((a, b) => a - b)
    };

    return model;
}
