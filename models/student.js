class Student {
    constructor(id, student_first, student_last, hobby) {
        this.id = id
        this.student_first = student_first
        this.student_last = student_last
        this.hobby = hobby
    }

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
    }

    get student_first() {
        return this._student_first
    }

    set student_first(value) {
        this._student_first = value
    }

    get student_last() {
        return this._student_last
    }

    set student_last(value) {
        this._student_last = value
    }

    get hobby() {
        return this._hobby
    }

    set hobby(value) {
        this._hobby = value
    }

    toString() {
        return `Student {id: ${this.id}, first name: ${this.student_first}, last name: ${this.student_last}, hobby: ${this.hobby}}`
    }
}

module.exports = { Student }