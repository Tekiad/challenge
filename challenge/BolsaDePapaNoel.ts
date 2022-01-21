
export interface Regalo {
    name: string,
    peso: number,
}

class BolsaDePapaNoel {

    static pesoMaxRegalo = 5000 

    regalos: Regalo[] = []

    agregarRegalo(regalo: Regalo) {
        
        if(this.yaExiste(regalo)){
            throw new Error("No se puede agregar el mismo regalo")
        }
        if(regalo.peso > BolsaDePapaNoel.pesoMaxRegalo) {
            throw new Error ("El regalo no puede pesar más de 5kg")
        }
        this.regalos.push(regalo)
    }

    yaExiste(regalo: Regalo): boolean {
        /* Verifico que sean de datos idénticos, PERO no son el mismo objeto 
        y por eso no uso includes (Puntero a diferente pos en memoria) */
        return this.regalos.some(item => item.name === regalo.name && item.peso == regalo.peso)
    }

    pesoActual(): number {
        let total = 0;
        this.regalos.forEach(elem => {
            total += elem.peso
        })
        return total
    }

    regaloMasPesado(): Regalo | undefined {
        return this.regalos.reduce((anterior, actual) => (+anterior.peso > +actual.peso) ? anterior : actual)
    }
}
export default BolsaDePapaNoel