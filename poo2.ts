class Animal {
    fazerSom() {
        console.log("O animal faz um som.");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("O cachorro late.");
    }
   
}


class Gato extends Animal {
    fazerSom() {
        console.log("O gato mia.");
    }
   
}

const meuAnimal: Animal = new Cachorro();
meuAnimal.fazerSom()