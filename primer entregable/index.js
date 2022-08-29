class Libro{
    constructor(libro){
        this.nombre = libro.nombre;
        this.autor = libro.autor;
    }
}
class Mascota{
    constructor(mascota){
        this.nombre = mascota.nombre;
    }
}
class Usuario{
    constructor(usuario){
        this.nombre = usuario.nombre;
        this.apellido = usuario.apellido;
        this.libros = [];
        this.mascotas = [];
        if(usuario.libro){
            this.libros = [...usuario.libro];
        }
        if(usuario.mascota){
            this.mascotas = [...usuario.mascota];
        }
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nuevaMascota){
        this.mascotas.push(new Mascota({nombre: nuevaMascota}));
    }

    countMascota(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push(new Libro({nombre, autor}));
    }

    getBookNames(){
        return this.libros.map(x => x.nombre);
    }
}



const emiliano = new Usuario({
    nombre:"Emiliano",
    apellido: "Zarza",
    libro: [new Libro({
        nombre: "Corazon de Tinta",
        autor: "Cornelia Funke"
    })],
    mascota: [new Mascota({
        nombre: "Optimus"
    })]
});


emiliano.addBook("señor de los anillos", "tolkien");
emiliano.addBook("IT", "Stephen King");

emiliano.addMascota("Loki");
emiliano.addMascota("Kira");

console.log(emiliano.getBookNames());

console.log(`${emiliano.getFullName()} tiene ${emiliano.countMascota()} mascotas.`);
console.log(`Además ${emiliano.getFullName()} tiene los libros ${emiliano.getBookNames()}`);
console.log(emiliano);