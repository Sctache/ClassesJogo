// Objetivo: Crie uma classe genérica que represente um herói
// de uma aventura e que possua as seguintes propriedades:
//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

class hero {
    constructor (name, age, type){
        this.name = name
        this.age = age
        this.type = type
        
        let power = ""
        this.power = power

        if (this.type === "mago"){
        this.power = "magia";
    }

        else if (this.type === "guerreiro"){
        this.power = "espada";
    }

         else if (this.type === "monje"){
        this.power = "artes marciais";
    }

         else if (this.type === "ninja"){
        this.power = "shuriken";
    }

        else {
        this.power = "nada";
    }
}
    escrever(){
    
    console.log (`O ${this.type} atacou usando ${this.power}`)
}
}

//Além disso, deve ter um método chamado atacar que deve atender
// os seguientes requisitos:
//- exibir a mensagem: "o {tipo} atacou usando {ataque}"), em que o {tipo}
// deve ser concatenado com o tipo que está na propriedade da classe.



//- No {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

let person = new hero ("Diogo", 25, "guerreiro");
let person2 = new hero ("Sookie", 19, "ninja");
let person3 = new hero ("Mary", 69, "metamorfo")

//Saída: Ao final deve se exibir uma mensagem:
//- "o {tipo} atacou usando {ataque}"
person.escrever()
person2.escrever()
person3.escrever ()