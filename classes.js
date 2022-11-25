class CopaDoMundo {
    constructor(country, year){
        this.country = country
        this.year = year
    }
    showChampion(team){
        return `A copa do ${this.country} foi disputada no ano de ${this.year} e o campeão foi ${team}`

    }
}

const copa86 = new CopaDoMundo("México", 1986)
const copa70 = new CopaDoMundo("Mexico", 1970)
const champion86 = copa86.showChampion("Argentina")
const champion70 = copa70.showChampion("Brasil")

console.log(champion86)
console.log(champion70)