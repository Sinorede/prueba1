
var nombre = "";
var mes = 0;
var dia = 0;
var diamx = 0;
var hora = 0;
var hora = 0;
var invitados = 0;
var tipo = 0;
var ti = "";
var lugar = 0;
var lu = "";
var deco = 0;
var de = "";
var comida = 0;
var co = "";
var bebida = 0;
var be = "";
var entre = 0;
var en = "";
var extra = "";
var prextra = 0;

var comidapp = 0;
var comidar;
comidar = new Array(2);
var bebidapp = 0;
var bebidar;
bebidar = new Array(2);
var prlugar = 0;
var prdeco = 0;
var prcomida = 0;
var prbebida = 0;
var prentre = 0;
var ex = 0;
var total = 0;
var tt = 0;

var elementos;
var cotizacion;
cotizacion = new Array();
var ix = 0;
elementos = new Array("fecha", "hora", "tipo", "lugar", "decoración", "comida", "bebida", "entretenimiento", "extras", "invitados");

var fecha;
fecha = new Date();
var respuesta = false;
function numeros(n) {
    if (n !== null) {
        if (n !== "") {
            if (!isNaN(n)) {
                if (n > 0) {
                    r = true;
                }
                else {
                    alert("ingrese un numero mayor a 0");
                    r = false;
                }
            }
            else {
                alert("no se pueden letras");
                r = false;
            }
        }
        else {
            alert("debes de ingresar un numero");
            r = false;
        }
    }
    else {
        alert("debes de ingresar un numero");
        r = false;
    }
    return r;
}

function letras(a){
    if (a != null && isNaN(a)) {
        if (a.length >= 3 && a.length <= 20) {
            a = a.toLocaleUpperCase();
            cotizacion[ix] = a;
            r=true;
        }
        else {
            alert("Debe introducir como mínimo 3 caracteres y máximo 20");
            r=false;
        }
    }
    else {
        alert("Debes introducir un nombre válido");
        r=false;
    }
    return r;
}

function swit(s){
    if (s !== null) {
        if (s !== "") {
            if (!isNaN(s)) {
                if (s >=1) {
                    if (s <= 3) {
                        r = true;
                    }
                }
                else {
                    r = false;
                }
            }
            else {
                r = false;
            }
        }
        else {
            r = false;
        }
    }
    else {
        r = false;
    }
    return r;
}

do {
    elementos.sort();
    do {
        nombre = prompt("Nombre: ");
       letras(nombre);
    } while (r==false);
    alert("Bienvenido " + nombre);
    do {
        mes = prompt("Ingrese número del mes de la fiesta: ");
        mes = parseInt(mes);
        switch (mes) {
            case 1:
                diamx = 31;
                break;
            case 2:
                diamx = 29;
                break;
            case 3:
                diamx = 31;
                break;
            case 4:
                diamx = 30;
                break;
            case 5:
                diamx = 31;
                break;
            case 6:
                diamx = 30;
                break;
            case 7:
                diamx = 31;
                break;
            case 8:
                diamx = 31;
                break;
            case 9:
                diamx = 30;
                break;
            case 10:
                diamx = 31;
                break;
            case 11:
                diamx = 30;
                break;
            case 12:
                diamx = 31;
                break;
            default:
                alert("ingresa un mes válido");
                break;
        }
    } while (mes === null || mes === "" || isNaN(mes) || mes < 1 || mes > 12);
    do {
        dia = prompt("Ingrese el numero del día de la fecha\nDía máximo: " + diamx);
        numeros(dia);
        if (dia <= diamx && r == true) {
            alert("Día: " + dia);
        }

    } while (dia > diamx || r == false);
    do {
        hora = prompt("A qué hora va a ser la fiesta (24 hrs.): ");
            numeros(hora);
                if (hora <= 24 && r==true) {
                    alert("Hora: " + hora);
                }

    } while ( hora > 24 || r==false);
    do {
        invitados = prompt("cuántos invitados van a ser\nMáximo 1000");
        numeros(invitados);

                if (invitados <= 1000 && r==true) {
                    alert("invitados: " + invitados);
                    invitados = parseInt(invitados);
                }
    } while ( invitados > 1000 || r==false);
    do {
        tipo = prompt("Ingrese el tipo de evento: \n1: cumpleaños\n2: fiesta religiosa\n3: boda");
        tipo = parseInt(tipo);
        switch (tipo) {
            case 1:
                alert("cumpleaños");
                ti = "cumpleaños";
                break;
            case 2:
                alert("fiesta religiosa");
                ti = "fiesta religiosa";
                break;
            case 3:
                alert("boda");
                ti = "boda";
                break;
            default:
                alert("ingresa un mes válido");
                break;
        }
        swit(tipo);
    } while (r===false);
    do {
        lugar = prompt("Ingrese el salón del evento: \n1) QUEENS GARDEN: $70,000 (hasta 1000 personas)\n2) ARBOL DE FUEGO: $45,000 (hasta 400 personas)\n3) PARAÍSO: $17,000 (hasta 250 personas)");
        lugar = parseInt(lugar);
        switch (lugar) {
            case 1:
                alert("QUEENS GARDENS\n+$70,000");
                prlugar = 70000;
                total += 70000;
                lu = "QUEENS GARDENS";
                break;
            case 2:
                alert("ARBOL DE FUEGO\n+$45,000");
                prlugar = 48000;
                total += 48000;
                lu = "ARBOL DE FUEGO";
                break;
            case 3:
                alert("PARAÍSO\n+$17,000");
                prlugar = 17000;
                total += 17000;
                lu = "PARAÍSO";
                break;
            default:
                alert("ingresa un salón válido");
                break;
        }
        swit(lugar);
    } while (r==false);
    do {
        deco = prompt("Ingrese la decoración: \n1) EXCÉNTRICA: $15,000 \n2) CÓMODA: $9,000 \n3) TRADICIONAL: $5,000");
        deco = parseInt(deco);
        switch (deco) {
            case 1:
                alert("EXCÉNTRICA\n+$15,000");
                prdeco = 15000;
                total += 15000;
                de = "excéntrica";
                break;

            case 2:
                alert("CÓMODA\n+$9,000");
                prdeco = 9000;
                total += 9000;
                de = "cómoda";
                break;

            case 3:
                alert("TRADICIONAL\n+$5,000");
                prdeco = 5000;
                total += 5000;
                de = "tradicional";
                break;

            default:
                alert("ingresa una decoración válida");
                break;
        }
        swit(deco);
    } while (r==false);
    comidar[0] = 35000 / invitados;
    comidar[1] = 20000 / invitados;
    comidar[2] = 9000 / invitados;
    do {
        comida = prompt("Ingrese el tipo de comida: \n1) EXÓTICA: $35,000 (costo por persona: $" + comidar[0] + ") \n2) DELICIOSA: $20,000 (costo por persona: $" + comidar[1] + ")\n3) TRADICIONAL: $9,000(costo por persona: $" + comidar[2] + ")");
        comida = parseInt(comida);
        switch (comida) {
            case 1:
                alert("EXÓTICA\n+$35,000");
                prcomida = 35000;
                total += 35000;
                co = "exótica";
                comidapp = comidar[0];
                break;
            case 2:
                alert("DELICIOSA\n+$20,000");
                prcomida = 20000;
                total += 20000;
                co = "deliciosa";
                comidapp = comidar[1];
                break;
            case 3:
                alert("TRADICIONAL\n+$9,000");
                prcomida = 9000;
                total += 9000;
                co = "tradicional";
                comidapp = comidar[2];
                break;
            default:
                alert("ingresa una decoración válida");
                break;
        }
        swit(comida);
    } while (r==false);
    bebidar[0] = 28000 / invitados;
    bebidar[1] = 20000 / invitados;
    bebidar[2] = 7000 / invitados;
    do {
        bebida = prompt("Ingrese el tipo de bebida: \n1) EXÓTICA: $28,000 (costo por persona: $" + bebidar[0] + ") \n2) DELICIOSA: $20,000 (costo por persona: $" + comidar[1] + ")\n3) TRADICIONAL: $7,000(costo por persona: $" + comidar[2] + ")");
        bebida = parseInt(bebida);
        switch (bebida) {
            case 1:
                alert("EXÓTICA\n+$28,000");
                prbebida = 28000;
                total += 28000;
                be = "exótica";
                bebidapp = bebidar[0];
                break;
            case 2:
                alert("DELICIOSA\n+$20,000");
                prbebida = 20000;
                total += 20000;
                be = "deliciosa";
                bebidapp = bebidar[1];
                break;
            case 3:
                alert("TRADICIONAL\n+$7,000");
                prbebida = 7000;
                total += 7000;
                be = "tradicional";
                bebidapp = bebidar[2];
                break;
            default:
                alert("ingresa una decoración válida");
                break;
        }
        swit(bebida);
    } while (r==false);
    do {
        entre = prompt("Ingrese el entretenimiento (3 horas): \n1) VARIAS: $30,000 \n2) COMEDIA: $21,000 \n3) MÚSICA: $12,000");
        entre = parseInt(entre);
        switch (entre) {
            case 1:
                alert("VARIAS\n+$30,000");
                prentre = 30000;
                total += 30000;
                en = "varias";
                break;
            case 2:
                alert("COMEDIA\n+$21,000");
                prentre = 21000;
                total += 21000;
                en = "comedia";
                break;
            case 3:
                alert("MÚSICA\n+$12,000");
                prentre = 12000;
                total += 12000;
                en = "musica";
                break;
            default:
                alert("ingresa una decoración válida");
                break;
        }
        swit(entre);
    } while (r==false);
    do {
        ex = prompt("desea ingresar algo extra?\n1) si\n2) no");
    } while (ex === null || ex === "" || ex < 1 || ex > 2);
    if (ex == 1) {
        do {
            extra = prompt("Nombre de lo extra: ");
           letras(extra);
        } while (r==false);
        do {
            prextra = prompt("Precio :");

                    if (prextra < 100000) {

                            alert("Precio: " + prextra);
                            prextra=parseInt(prextra);
                            total += prextra;
                        }     
                    else {
                        alert("es muy alto ese precio.");
                    }
        } while (prextra === null || prextra < 0 || prextra > 100000 || prextra === "" || isNaN(prextra));

        alert("FECHA: " + fecha.getDate() + "-" + fecha.getMonth() + "-" + fecha.getFullYear() + "\nHORA: " + fecha.getHours() + ":" + fecha.getMinutes() + "\nCLIENTE: " + nombre);
        alert("COTIZACIÓN: " + (ix + 1) + "\n" + elementos[0]+ " : " + be + " $" + prbebida + "\n" + elementos[1] + " : " + co + " $" + prcomida + "\n" + elementos[2] + " : " + de + " $" + prdeco + "\n" + elementos[3] + " : " + en + " $" + prentre + "\n");
        alert(elementos[4] + " : " + extra + " $" + prextra + "\n" + elementos[5] + " : " + dia + "/" + mes + "\n" + elementos[6] + " : " + hora + "\n" + elementos[7] + " : " + invitados + "\n" + elementos[8] + " : " + lu + " $" + prlugar + "\n" + elementos[9] + " : " + ti);
        alert("TOTAL: $"+total);
    }
    else {
        alert("FECHA: " + fecha.getDate() + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear() + "\nHORA: " + fecha.getHours() + ":" + fecha.getMinutes() + "\nCLIENTE: " + nombre);
        alert("COTIZACIÓN: " +(ix + 1) + "\n" + elementos[0] + " : " + be + " $" + prbebida + "\n" + elementos[1] + " : " + co + " $" + prcomida + "\n" + elementos[2] + " : " + de + " $" + prdeco + "\n" + elementos[3] + " : " + en + " $" + prentre + "\n");
        alert(elementos[5] + " : " + dia + "/" + mes + "\n" + elementos[6] + " : " + hora + "\n" + elementos[7] + " : " + invitados + "\n" + elementos[8] + " : " + lu + " $" + prlugar + "\n" + elementos[9] + " : " + ti);
        alert("COTIZACIÓN POR INVITADO: " + (ix + 1) + "\nprecio de comida por persona: $" + comidapp + " \n " + "precio de bebiidas por persona: $" + bebidapp);
        alert("TOTAL: $"+total);
    }
    respuesta = confirm("desea cotizar otra fiesta?\nPulse aceptar para si.");
    alert(respuesta);
    if (respuesta == true) {
        ix++;
    }
    tt = comidapp + bebidapp;
    document.write("<div id=materia>");
    document.write("<h2>COTIZACIÓN:" + (ix+1) + "</h2>");
    alert("cotizacion");
    document.write("<h3>CLIENTE:" + nombre + "</h2>");
    document.write("<pre>" + elementos[5] + " : " + dia + "/" + mes + "      HORA:" + hora + "</pre>");
    document.write("<pre>" + elementos[8] + " : " + lu + "</pre>");
    document.write("<pre>COTIZACIÓN POR INVITADO: $" + tt + "</pre>");
    document.write("<pre>COTIZACIÓN DE LA FIESTA: $" + total + "</pre>");
    document.write("</div>");

} while (respuesta == true);