class Person {

    constructor(age, faveColor) {
        this.age = age
        this.faveColor = faveColor
    }

    nap() {
        console.log('ZZZZZZZZZZZ')
    }
}





class Teacher extends Person {

    static all = []

    constructor(firstName, lastName, age, color, ...stuff) {
        super(age, color)
        this.firstName = firstName
        this.lastName = lastName
        this.stuff = stuff
        Teacher.all.push(this)
    }

    introduce() {
        return `Hi, I'm ${this.firstName}`
    }

    nap() {
        console.log('teachers like naps')
    }

    static findByName(name) {
        return Teacher.all.find(teacher => teacher.firstName === name)
    }
}


const raffy = new Teacher('Raffy', 'Rafferty', 9, 'red', 4, 5, 88, 'yay')
const michelle = new Teacher('Michelle', 'Rios', 4, 'red')
const annie = new Teacher('Annie', 'Zheng', 5, 'blue')