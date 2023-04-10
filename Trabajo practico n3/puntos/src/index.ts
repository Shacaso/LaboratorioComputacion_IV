//PUNTO 1
const resultadoDoble = (a: number, b: number): number => { return (a + b) * 2; }
// console.log(resultadoDoble(2,2))


//PUNTO 2
const getVillano = (nombre: string, arma: string = "pistola", edad?: number): string => {
    return edad ? `${nombre} tiene una edad de: ${edad} y arma: ${arma}` : `${nombre} tiene un ${arma}`
};
// console.log(getVillano("Alejo"))


//PUNTO 3
const countVowels = (text: string): string => {
    return `Number of vowels are: ${text.match(/[aeiou]/gi).length}`
}
// console.log(getVillano("qruwipoeajhfslaaaaaaa"))


// PUNTO 4
enum Move {
    ROCK, PAPER, SCISSOR
}
class Match {
    player1: Move;
    player2: Move;

    constructor(player1: Move, player2: Move) {
        this.player1 = player1;
        this.player2 = player2;
    }
}

const RPSGame = (matches) => {
    let result = []
    matches.forEach(e => {
        if (e.player1 === Move.ROCK && e.player2 === Move.PAPER) { result.push("Gana 2"); }
        if (e.player1 === Move.ROCK && e.player2 === Move.ROCK) { result.push("Empate"); }
        if (e.player1 === Move.ROCK && e.player2 === Move.SCISSOR) { result.push("Gana 1"); }

        if (e.player1 === Move.SCISSOR && e.player2 === Move.PAPER) { result.push("Gana 1"); }
        if (e.player1 === Move.SCISSOR && e.player2 === Move.ROCK) { result.push("Gano 2"); }
        if (e.player1 === Move.SCISSOR && e.player2 === Move.SCISSOR) { result.push("Empate"); }

        if (e.player1 === Move.PAPER && e.player2 === Move.PAPER) { result.push("Empate"); }
        if (e.player1 === Move.PAPER && e.player2 === Move.ROCK) { result.push("Gano 1"); }
        if (e.player1 === Move.PAPER && e.player2 === Move.SCISSOR) { result.push("Gana 2"); }
    });

    return result
}

const matches = [new Match(Move.ROCK, Move.PAPER), new Match(Move.ROCK, Move.SCISSOR), new Match(Move.ROCK, Move.ROCK)]
// console.log(RPSGame(matches))


//PUNTO 5

interface Reptil {
    nombre: string,
    tipo: string,
    paisOrigen: string,
    pesoPromedio: number,
    esVenenosa: boolean
}

let reptil: Reptil = {
    nombre: "cobra",
    tipo: "serpiente",
    paisOrigen: "India",
    pesoPromedio: 2.5,
    esVenenosa: true
}

// PUNTO 6

class FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }
}

class Rectángulo extends FiguraGeometrica {
    area(): number {
        return (this.base * this.altura)
    }
}

class Triangulo extends FiguraGeometrica {
    area(): number {
        return ((this.base * this.altura) / 2)
    }
}
// console.log((new Triangulo(2, 4)).area)



//PUNTO 7





//PUNTO 8
const getBeers = async () => {
    let url = `https://random-data-api.com/api/beer/random_beer?size=25`;
    let response = await fetch(url);
    let result = await response.json();
    let beers = []

    result.forEach(e => {
        beers.push({
            id: e.id,
            uid: e.uid,
            brand: e.brand,
            name: e.name,
            style: e.style,
            hop: e.hop,
            yeast: e.yeast,
            malts: e.malts,
            ibu: e.ibu,
            alcohol: e.alcohol,
            blg: e.blg
        })

    });

    console.log(`------------------------------------------------------------------------------------------------`)
    beers.forEach(e => {
        console.log(`\n[Brand: ${e.brand}, Name: ${e.name}, Style: ${e.style}, Ibu: ${e.ibu}, Alcohol: ${e.alcohol}]`)
    });
    console.log(`------------------------------------------------------------------------------------------------`)
}

// getBeers() 