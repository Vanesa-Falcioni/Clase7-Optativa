//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!
let Banco = {
  clientes: arrayCuentas,
  // consultarCliente, el cual recibirá un
  // nombre (titular) por parámetro,
  consultarcliente: function (titular) {
    //deberá buscarlo en la lista de cuentas y retornar el
    // objeto cliente que corresponda con ese nombre ingresado.
    titularbuscado = this.clientes.filter(function (cliente) {
      return cliente.titularCuenta === titular;
    });
    return titularbuscado.length > 0
      ? titularbuscado[0]
      : "No se encontro dicho titular";
  },
  DepositarCliente: function (titular, dinero) {
    // debera buscarlo en la lista de cuentas
    let clienteBuscado = this.consultarcliente(titular);
    // sumar la plata al saldo
    clienteBuscado.saldoEnPesos += dinero;
    //muestra el cliente buscado
    console.log("Mostrando el cliente buscado");
    console.log(clienteBuscado);
  },
  //   5. Crear un último método llamado extracción que recibirá también dos parámetros:
  // el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
  Extraccion: function (titular, plata) {
    let personaBuscada = this.consultarcliente(titular);
    //si el retiro que quiere realizar es mayor al que tiene en la cuenta
    if (personaBuscada.saldoEnPesos < plata) {
      console.log("Su saldo es insuficiente para realizar esta extraccion");
    }
    //si le alcanza, ahi se resta la plata-
    else {
      personaBuscada.saldoEnPesos -= plata;
      console.log(
        "extraccion exitosa, su saldo restante es: " +
          personaBuscada.saldoEnPesos,
      );
    }
  },
  // correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
  // menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
  // De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
  // saldo es: XXXX”
};
//muestra el cliente buscado
console.log(Banco.consultarcliente("Jacki Shurmer"));
//muestra el cliente con el saldo que le decimos sumado al que ya traia.
Banco.DepositarCliente("Jacki Shurmer", 1000);
//mostrar la extraccion
Banco.Extraccion("Jacki Shurmer", 10000);

//crear un objeto literal con datos
let colegio = {
  lista_nombres: [
    {
      nombre: "Sergio Aurelio",
      edad: 54,
      legajo: 123456,
      listadenotas: [8, 9, 1, 0],
    },
    {
      nombre: "Aquiles Lasserre",
      edad: 12,
      legajo: 456789,
      listadenotas: [8, 8, 7],
    },
    {
      nombre: "Benicio Lasserre",
      edad: 16,
      legajo: 321654,
      listadenotas: [5, 6, 5],
    },
  ],
  propiedadUnica: function (arreglo, propiedad) {
    let resultado = arreglo.map(function (unAlumno) {
      let ArregloNuevo = {};
      ArregloNuevo[propiedad] = unAlumno[propiedad];
      return ArregloNuevo;
    });
    return resultado;
  },
  calcular_promedio: function (notas) {
    //suma de notas
    let suma_total = notas.reduce(function (acumulador, nota) {
      return acumulador + nota;
    }, 0);
    //calcula el promedio
    let promedio = suma_total / notas.length;
    //verificamos si esta aprobado o desaprobado
    let condicion =
      promedio >= 6 ? "Se encuentra aprobado" : " Se encuentra desaprobado";
    return "promedio: " + promedio + condicion;
  },
};
console.log(colegio.propiedadUnica(colegio.lista_nombres, "nombre"));
console.log(colegio.calcular_promedio(colegio.lista_nombres[0].listadenotas));
