class validator {
    constructor(fields) {
        this.errors = {};
        this.fields = fields;
    }

    isValid(state) {
        this.validate(state);
        for (let field in this.errors) {
            if (this.errors[field]) { return false; }
        }
        return true;
    }

    isValidEmail = email => { return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email); }

    isValidAddress = str => { return /^#?[\d-]+\s[\w\d\s-_#\.]+$/.test(str); }

    isValidZip = str => { return /^\d{5}(?:-\d{4})?$/.test(str); }

    isValidName = str => { return /^[A-Za-z]{1,}(?:\s[A-Za-z]+)*$/.test(str); }

    match = (str1, str2) => { return (str1 === str2) ? true : false; }

    required = str => { return str !== null && this.minLen(str); }

    requiredTrue = el => { return el ? true : false; }

    minLen = (str, min = 1) => { return (str + '').trim().length >= min ? true : false; }

    maxLen = (str, max = 1) => { return (str + '').trim().length <= max ? true : false; }



    validate(data = {}, fields = null) {
        if (!fields) { fields = this.fields; }
        for (let field in fields) {
            let value = data[field];
            let tests = fields[field];
            let error = '';
            tests.forEach(test => {
                if (this[test.test]) { /// checks this object to see if test is defined
                    let arg = test.test === 'match' ? data[test.arg] : test.arg;
                    console.log(field, ':', value, 'about to test', test.test)
                    if (!this[test.test].call(this, value, arg)) {
                        error += test.err + ' ';
                    }
                    console.log(this[test.test])

                }
            });
            this.errors[field] = error ? error : null;
        }
        return this.errors;
    }
}

export default validator;