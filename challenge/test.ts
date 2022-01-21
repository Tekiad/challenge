import { assert, assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts'
import BolsaDePapaNoel, { Regalo } from "./BolsaDePapaNoel.ts";

Deno.test('Agrego un regalo a la bolsa y compruebo que existe', () => {
    const bolsa = new BolsaDePapaNoel()
    const regalo: Regalo = {
        name: "Iphone 13",
        peso: 500
    }
    bolsa.agregarRegalo(regalo)
    //bolsa.agregarRegalo(regalo) Si agrego dos veces, arroja error por throw en agregarRegalo() 
    //console.log(regalo);
    assert(bolsa.yaExiste(regalo))
})

Deno.test('Compruebo que si no agregué un regalo a la bolsa, no esté dentro de la bolsa', () => {
    const bolsa = new BolsaDePapaNoel()
    const regalo: Regalo = {
        name: "Samsung Galaxy S20",
        peso: 400
    }
    //bolsa.agregarRegalo(regalo). Si lo agrego, actual y expected son diferentes
    assertEquals(bolsa.yaExiste(regalo), false)
})


Deno.test('No es posible agregar dos veces un mismo regalo', () => {
    const bolsa = new BolsaDePapaNoel()
    const regalo1: Regalo = {
        name: "Iphone 13",
        peso: 500
    }
    /* Si cambio el segundo regalo da error ya que assertThrows espera 
    una excepción, al no obtenerla, tira una excepción propia */
    const regalo2: Regalo = {
        name: "Iphone 13",
        peso: 500
    }

    assertThrows(() => {
        bolsa.agregarRegalo(regalo1)
        bolsa.agregarRegalo(regalo2)
    })
})

Deno.test("No puedo agregar un regalo que pese más de 5 kg (5000 gramos)", () => {
    const bolsa = new BolsaDePapaNoel()
    const regalo: Regalo = {
        name: "Televisor 60'",
        peso: 8000
    }

    assertThrows(() => {
        bolsa.agregarRegalo(regalo)
    })
})

Deno.test("Agrego a la bolsa regalos por un peso de 240 gramos y hay dentro exactamente 240 gramos", () => {
    const bolsa = new BolsaDePapaNoel()
    const regalo1: Regalo = {
        name: "Iphone 11",
        peso: 194
    }
    const regalo2: Regalo = {
        name: "Airpods",
        peso: 46
    }

    bolsa.agregarRegalo(regalo1)
    bolsa.agregarRegalo(regalo2)

    //console.log(bolsa.pesoActual());
    assertEquals(bolsa.pesoActual(), 240)
})

Deno.test("Obtengo el regalo más pesado de la bolsa", () => {
    const bolsa = new BolsaDePapaNoel()
    const regalo1: Regalo = {
        name: "Libro: Harry Potter y la piedra filosofal",
        peso: 220
    }
    const regalo2: Regalo = {
        name: "Cubo de Rubik",
        peso: 120
    }
    const regalo3: Regalo = {
        name: "Casco de Ironman",
        peso: 1496
    }

    bolsa.agregarRegalo(regalo1)
    bolsa.agregarRegalo(regalo2)
    bolsa.agregarRegalo(regalo3)

    //console.log(bolsa.regaloMasPesado());
    assertEquals(bolsa.regaloMasPesado()?.name, regalo3.name)
})