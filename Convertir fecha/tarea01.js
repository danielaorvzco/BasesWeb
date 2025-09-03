const meses = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
                'Octubre', 'Noviembre', 'Diciembre'];

const numerosFecha = [];
let y = 0;

function convertirFecha (fecha) {
    if (fecha.length !== 10 || fecha.charAt(2) !== '/' || fecha.charAt(5) !== '/') {
        console.log("Asegurate de ingresar la fecha con el formato dd/mm/aaaa");
        return null;
    }

    for (i = 0; i < 10; i++) {
        if (fecha.charAt(i) !== '/') {
            numerosFecha[y] = fecha.charAt(i);
            y++;
        }
    }

    for (i = 0; i < numerosFecha.length; i ++) {
        if (numerosFecha[i] < '0' || numerosFecha[i] > '9') {
            console.log("No se admiten letras dentro de la fecha");
            return null;
        }
    }

    const fechaArr = fecha.split('/');

    const day = parseInt(fechaArr[0]);
    const month = parseInt(fechaArr[1]);
    const year = parseInt(fechaArr[2]);

    if (day <= 0 || day > 31 ) {
        console.log("Número de día inexistente");
        return null;
    } else if (month <= 0 || month > 12) {
        console.log("Mes inexistente");
        return null;
    } else if (year <= 0) {
        console.log("Año no valido");
        return null;
    }

    console.log(day + ' de ' + meses[month - 1] + ' del ' + year);
}

convertirFecha("11/03/2003");














