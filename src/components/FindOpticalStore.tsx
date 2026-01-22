import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Search, Navigation, MessageCircle } from "lucide-react";

interface OpticalStore {
  id: number;
  name: string;
  address: string;
  region: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
}

const stores: OpticalStore[] = [
  // RUTA LARGA C1
  { id: 1, name: "Dreams Óptica", address: "Orotina, 50 oeste servicentro Los reyes, frente bodegas Alpace, local #1", region: "Ruta Larga C1", whatsapp: "89332223", phone: "84126336" },
  { id: 2, name: "Aldajo Orotina", address: "Diagonal al Colono Orotina Centro, a la par de dormicentro", region: "Ruta Larga C1", whatsapp: "88212216", phone: "24285046" },
  { id: 3, name: "Optica Bustamante", address: "Orotina centro frente al Banco Nacional", region: "Ruta Larga C1", whatsapp: "63205870", phone: "24289428" },
  { id: 4, name: "La Óptica", address: "Atenas centro, Plaza la fuente local #02", region: "Ruta Larga C1", whatsapp: "72708090", phone: "88440863" },
  { id: 5, name: "Optica Rosa Murillo", address: "Alajuela. Atenas, centro comercial plaza central 150m este del Banco de CR", region: "Ruta Larga C1", whatsapp: "88820285", phone: "24464581", email: "info@opticacv.com" },
  { id: 6, name: "Optomelgar", address: "Atenas, 25 oeste y 25 sur de estacion de bomberos", region: "Ruta Larga C1", phone: "83135481" },
  { id: 7, name: "Araw (Óptica Atenas)", address: "ATENAS CENTRO", region: "Ruta Larga C1", whatsapp: "88550717", phone: "24463509" },
  { id: 8, name: "Opticlinica", address: "Grecia, 75m este hospital San francisco de Asis", region: "Ruta Larga C1", whatsapp: "64041626", phone: "60428302" },
  { id: 9, name: "Óptica Las Mercedes", address: "40m norte de esquina noroeste del mercado municipal, Gracia Centro", region: "Ruta Larga C1", whatsapp: "70165992", phone: "21027123" },
  { id: 10, name: "Opticenter", address: "Grecia, 75 oeste del mercado Municipal de Grecia", region: "Ruta Larga C1", whatsapp: "83101654", email: "opticentergrecia@gmail.com" },
  { id: 11, name: "Centro Grecia", address: "COSTADO SUR PARQUE GRECIA CENTRO", region: "Ruta Larga C1", whatsapp: "63323888", phone: "24944305", email: "optica.centro96@gmail.com" },
  { id: 12, name: "Óptica Versa", address: "Grecia, 400mts este del BCR, clinica medica Sanchez", region: "Ruta Larga C1", whatsapp: "87907645" },
  { id: 13, name: "Multiópticas Barrantes", address: "175m este del pali de gracia", region: "Ruta Larga C1", whatsapp: "88161212", phone: "24951212" },
  { id: 14, name: "Optilus Grecia", address: "50m sur del mercado frente a Torre morales", region: "Ruta Larga C1", whatsapp: "61650506", phone: "24943729" },
  { id: 15, name: "Centro Monge", address: "GRECIA CENTRO, 100 oeste y 50 norte de los Bomberos", region: "Ruta Larga C1", whatsapp: "70036873", phone: "24944220" },
  { id: 16, name: "Óptica Borbón", address: "250m este de la municipalidad de Grecia", region: "Ruta Larga C1", whatsapp: "88248161", phone: "24945444" },
  { id: 17, name: "Cadivi, Hisatera", address: "50m oeste del banco Popular, Grecia centro", region: "Ruta Larga C1", whatsapp: "89457620", phone: "24443422" },
  { id: 18, name: "Dr Rodolfo Alfaro", address: "Grecia, santa gertrudis norte", region: "Ruta Larga C1", whatsapp: "70290504", phone: "24443476" },
  { id: 19, name: "Óptica Gri (Sarchí)", address: "25m sur del parque de sarchí norte", region: "Ruta Larga C1", whatsapp: "83875548", phone: "24543957" },
  { id: 20, name: "Optica Audivisión", address: "Alajuela Naranjo, costado del", region: "Ruta Larga C1", whatsapp: "84864141", phone: "24514141" },
  { id: 21, name: "OPtica San Judas Tadeo", address: "Alajuela Naranjo 100 mtrs al oeste del mercado municipal de Naranjo", region: "Ruta Larga C1", whatsapp: "88694444", phone: "24511898" },
  { id: 22, name: "Optica Sancho Palmares", address: "Palmares centro frente a tienda Vargas", region: "Ruta Larga C1", whatsapp: "22602007", phone: "24530939" },
  { id: 23, name: "Optica Rosán", address: "Al costado norte del banco nacional, Alajuela", region: "Ruta Larga C1", phone: "24457295" },
  { id: 24, name: "Optica Nueva Imagen", address: "100 METROS SUR DEL HOSPITAL DE SAN RAMON, mano izquierda edificio esquinero", region: "Ruta Larga C1", phone: "24456507" },
  { id: 25, name: "C.OP.Occidente", address: "ESQUINA SUR OESTE DE LA IGLESIA CATOLICA, FRENTE AL PARQUE", region: "Ruta Larga C1", whatsapp: "88603687", phone: "24477248" },
  { id: 26, name: "Optica El Pueblo", address: "DENTRO DE FARMACIA EL PUEBLO SAN RAMON", region: "Ruta Larga C1", whatsapp: "24476161", phone: "24476161" },
  { id: 27, name: "Optica Edificio Rosán", address: "Al costado sur del parque, 75m oeste de la parroquia de san ramón", region: "Ruta Larga C1", phone: "24453152" },
  { id: 28, name: "Óptica San Ramón", address: "San Ramon, Costado Oeste del mercado municipal", region: "Ruta Larga C1", whatsapp: "83696262", phone: "24476060" },
  { id: 29, name: "Optika Sol/REGENERA", address: "San Ramon, Clinica Regenera", region: "Ruta Larga C1", phone: "88781963" },
  { id: 30, name: "Multiopt Barrantes Jazor", address: "Naranjo, 50m este del mercado municipal", region: "Ruta Larga C1", whatsapp: "84992111" },
  { id: 31, name: "DR Mynor Torres", address: "Grecia Centro, del Liceo Deportivo de Grecia 25m al oeste", region: "Ruta Larga C1", whatsapp: "89856036" },
  { id: 32, name: "Optica Panorama", address: "Clínica médica Sanchez en Grecia", region: "Ruta Larga C1", whatsapp: "88119142", phone: "72150203", email: "panorama.clinicavisual@gmail.com" },
  { id: 33, name: "ÓPTICA FOCUS MJ", address: "Diagonal a la municipalidad de Naranjo", region: "Ruta Larga C1", whatsapp: "84552222", phone: "24501949" },
  { id: 34, name: "CV MAS ÓPTICA", address: "San Ramon, Frente a Perimercados", region: "Ruta Larga C1", whatsapp: "21016073", phone: "87297289" },
  { id: 35, name: "ÓPTICA CAOBA", address: "Atenas Centro, Costado Noroeste De La Municipalidad, Contiguo a La Farmacia Puntarenas", region: "Ruta Larga C1", whatsapp: "89494989", email: "opticacaoba@gmail.com" },
  { id: 36, name: "DR OCULAR S.A.", address: "Turrucares, Del banco nacional 225m oeste", region: "Ruta Larga C1", whatsapp: "72849083" },
  { id: 37, name: "Punto Visual", address: "Ruta Larga C1", region: "Ruta Larga C1", phone: "88615033" },

  // HEREDIA
  { id: 38, name: "PriceSmart LLORENTE", address: "30 mtrs Este de la Escuela de Anselmo de Llorente", region: "Heredia" },
  { id: 39, name: "Zara Carter Oxígeno", address: "ALAJUELA, SAN CARLOS", region: "Heredia" },
  { id: 40, name: "MONGE HEREDIA", address: "FRENTE TIENDA ROSABAL, HEREDIA CENTRO", region: "Heredia" },
  { id: 41, name: "PRICE SMART HEREDIA", address: "200 mtrs norte de Mabe, carretera a Heredia", region: "Heredia" },
  { id: 42, name: "Optica BERMÚDEZ", address: "100M NORTE DE TACO BELL", region: "Heredia", whatsapp: "85710961", email: "info@opticasbermudez.com" },
  { id: 43, name: "OPT SANTO DOMINGO", address: "COMERCIAL CASA VIEJA AL COSTADO ESTE DEL BANCO NACIONAL SANTO DOMINGO DE HEREDIA", region: "Heredia", whatsapp: "87441895", email: "cosdinfo@gmail.com" },
  { id: 44, name: "ÓPTICA KRISTAL", address: "Santo Domingo, Santo Tomas, Plaza Faroles, frente al MXM", region: "Heredia", whatsapp: "88081062", email: "oopticakristal@gmail.com" },
  { id: 45, name: "Optica AUGEN (ROSO)", address: "Santo Domingo de Heredia, 200 este del MasxMenos contiguo a pintura sur", region: "Heredia", whatsapp: "87355917", email: "opticaaugen@hotmail.com" },
  { id: 46, name: "CENTRO OCULAR CR", address: "San Isidro, San francisco 30 sur de la iglesia catolica", region: "Heredia", whatsapp: "84234444" },
  { id: 47, name: "Dr SARA MENA", address: "San Rafael de Heredia, 200 este, 75 norte de la fuerza publica. Plaza cristina 2do piso", region: "Heredia", whatsapp: "72835714", email: "consultorioopticosm@gmail.com" },
  { id: 48, name: "Optica LUNETTE", address: "San Rafael, CC el Campanario, contiguo a la municipalidad de San rafael de heredia", region: "Heredia", whatsapp: "64273232", email: "opticalunettecr@gmail.com" },
  { id: 49, name: "Optica BUENA VISTA (BARVA)", address: "100 OESTE Y 25 SUR DEL BANCO DE COSTA RICA DE BARBA DE HEREDIA", region: "Heredia", whatsapp: "89080406", email: "Jusamainversiones@gmail.com" },
  { id: 50, name: "STYLOS ÓPTICOS", address: "900 METROS OESTE DEL BANCO DE COSTA RICA SAN ROQUE BARBA DE HEREDIA", region: "Heredia", whatsapp: "72921092", email: "stylos_opticos@hotmail.com" },
  { id: 51, name: "MUNDO Visual", address: "100m oeste de la Clínica san joaquin Jorge Volio sobre calle principal", region: "Heredia", whatsapp: "71196924", email: "kmundo_visual@yahoo.com" },
  { id: 52, name: "VISUAL CENTER", address: "Heredia San Francisco plaza multiflores local 4", region: "Heredia", whatsapp: "86907408", email: "info@visualcentercr.com" },
  { id: 53, name: "VISUAL PRO", address: "HEREDIA, SAN FRANCISCO, 50MTS NORTE DE LA ENTRADA PRINCIPAL HOSPITAL SAN VICENTE DE PAUL", region: "Heredia", whatsapp: "62741133", email: "heredia1@opticasvisualpro.com" },
  { id: 54, name: "SEPRO", address: "310 m al norte del Palacio de Deportes Heredia", region: "Heredia", whatsapp: "83366582" },
  { id: 55, name: "ÓPTICA NUEVA VISTA", address: "Por asembis De correos de cr 300m oeste", region: "Heredia", whatsapp: "85953434", email: "clinicanuevavista@gmail.com" },
  { id: 56, name: "PUNTO DE VISTA", address: "75 NORTE DE CRUZ ROJA DE HEREDIA", region: "Heredia", whatsapp: "89450210" },
  { id: 57, name: "ÓPTICA LOOK HEREDIA", address: "Heredia 75m al norte de la casa de la cultura", region: "Heredia", whatsapp: "70342495", email: "recepcion@opticalook.com" },
  { id: 58, name: "SANCHO HEREDIA", address: "HEREDIA CENTRO, Del Correo 100 Oeste y 150 Sur", region: "Heredia", whatsapp: "22602007", email: "opticasancho@gmail.com" },
  { id: 59, name: "FLIC VISUAL", address: "Tribunales de Heredia 50 mts al este parqueo central, local #3", region: "Heredia", whatsapp: "89792922", email: "anteojeriatecnica@gmail.com" },
  { id: 60, name: "Optica BARTOLONE", address: "Barva, 75 norte del BCR", region: "Heredia", whatsapp: "89466244", email: "romespinozalvarez@gmail.com" },
  { id: 61, name: "IRIS", address: "Heredia Centro, 175 metros SUR de la POPS de Parque Central", region: "Heredia", whatsapp: "71580041" },
  { id: 62, name: "Óptica Zurquí", address: "San Isidro, del BCR 50 norte, edificio neredi, local 3 planta baja", region: "Heredia", whatsapp: "63828923", email: "opticazurqui@gmail.com" },
  { id: 63, name: "Optique SN Josecito", address: "San Isidro, Costado Norte de la parroquia de San Josecito", region: "Heredia", whatsapp: "70200462" },
  { id: 64, name: "OFTALMO ÓPTICAS S.A.", address: "San pablo de heredia, 75 Oeste del MXM", region: "Heredia", whatsapp: "70214201" },
  { id: 65, name: "Óptica Arte Ocular", address: "San Pablo de Heredia", region: "Heredia", whatsapp: "60784924" },
  { id: 66, name: "Centro Ocular Óptica", address: "Heredia", region: "Heredia", whatsapp: "88140623" },

  // PERIFÉRICA
  { id: 67, name: "Optica SIMAN", address: "San José", region: "Periférica" },
  { id: 68, name: "Price ZAPOTE", address: "Zapote", region: "Periférica" },
  { id: 69, name: "SIGLO 21", address: "Aserri centro costado oeste de Banco de Costa Rica", region: "Periférica", whatsapp: "85611414" },
  { id: 70, name: "VIKMAC", address: "San Rafael Arriba Desamparados, 1kl al sur del centro comercial expresso plaza del sur", region: "Periférica", whatsapp: "85796497" },
  { id: 71, name: "Optica BARRANTES", address: "CORONADO CENTRO 200 sur de la cruz Roja", region: "Periférica", whatsapp: "70268588" },
  { id: 72, name: "Optica CSG", address: "Multiplaza del este, 175 al noroeste, mano derecha, casa porton blanco", region: "Periférica", whatsapp: "88321137" },
  { id: 73, name: "ULTRA VISIÓN", address: "DEL CORREO DE CURRIDABAT 100 ESTE Y 150 SUR MANO DERECHA, EDIFICIO AZUL PLANTA BAJA", region: "Periférica", whatsapp: "83573398" },
  { id: 74, name: "ALDAJO Escazú", address: "FRENTE A SUPERMERCADO JUMBO EN SAN ANTONIO DE DESAMPARADOS", region: "Periférica", whatsapp: "62478945" },
  { id: 75, name: "HIGUERONES", address: "Desamparados, San Rafael abajo, detras de plaza Higuerones. Local 23", region: "Periférica", whatsapp: "72760215" },
  { id: 76, name: "Óptica San Miguel", address: "Desamprados, San Miguel, frente Iglesia catolica", region: "Periférica", whatsapp: "88046001" },
  { id: 77, name: "TRESBO Nova Centro", address: "Centro Comercial Novacentro, local 12 a la par de la Heladeria POPS", region: "Periférica", whatsapp: "73007741" },
  { id: 78, name: "Oftálmica Global", address: "DE LA FARMACIA HOSPITAL LA CATOLICA 5M HACÍA EL NORTE, EDIFICIO AZUL ZONA OPTICA", region: "Periférica", whatsapp: "61260555" },
  { id: 79, name: "Estilo Visual", address: "Guadalupe centro diagonal correos de Costa Rica", region: "Periférica" },
  { id: 80, name: "CREVIC/LUXIME", address: "San José, Montes de Oca Mercedes, 200m este de la rotanda de la Betania en dirreción a Sabanilla", region: "Periférica", whatsapp: "84851513" },
  { id: 81, name: "Optica NOVA SAN PEDRO", address: "San Pedro Montes de Oca, edificio Bisnes Center, diagonal al parque de San Pedro", region: "Periférica", whatsapp: "60062676" },
  { id: 82, name: "San Pedro Cristal", address: "Centro comercial plaza cristal, de la pops 600m sur", region: "Periférica", whatsapp: "60772020" },
  { id: 83, name: "ALDAJO ZAPOTE", address: "ZAPOTE, costa sur de la iglesia católica", region: "Periférica", whatsapp: "89091616" },
  { id: 84, name: "CLÍNICA SN FRANCISCO", address: "Clinica San Francisco Dos Rios Parque Los Sauces 100 Norte, detras de Faro del Caribe", region: "Periférica", whatsapp: "70872496" },
  { id: 85, name: "Genfar", address: "San Sebastián, a la par del BCR diagonal al walmart", region: "Periférica", whatsapp: "61983006" },
  { id: 86, name: "NEUROLIFE", address: "Gravilias, frente a la estacion de bomberos, centro medico evenezer", region: "Periférica", whatsapp: "71981117" },
  { id: 87, name: "COMER. PRODUCTOS ÓPTICOS", address: "400 Sur Plaza del Sol - Curridabat", region: "Periférica" },
  { id: 88, name: "ÓPTICAS CILIARE S.R.L.", address: "Desamparados, Costado sur de la clinica Dr Marcial Fallas", region: "Periférica", whatsapp: "85015790" },
  { id: 89, name: "OPTOCLINIC", address: "Del AyA de desamparados 150m al norte camino hacía la cruz de desemaparados", region: "Periférica", whatsapp: "83099284" },
  { id: 90, name: "MIRARTE", address: "Desamprados, Edificio Torres Medicas latinoamericas diagonal a la entreada prinmcipal clinica marcial fallas", region: "Periférica", whatsapp: "70760640" },
  { id: 91, name: "Gafas", address: "Zapote, Plaza cristal. Local 56", region: "Periférica", whatsapp: "86236600" },
  { id: 92, name: "Natural Óptica", address: "Centro Comercial Uniplaza frente a clínica Jiménez Núñez de Guadalupe, local 15", region: "Periférica", whatsapp: "72896396" },
  { id: 93, name: "Aldajo DESAMPARADOS", address: "FRENTE A SUPERMERCADO JUMBO EN SAN ANTONIO DE DESAMPARADOS", region: "Periférica", whatsapp: "85786516" },
  { id: 94, name: "Opti Care", address: "Centro Comercial San Antonio, Desamparados, local 12., San José, Costa Rica", region: "Periférica", whatsapp: "72770127" },

  // ALAJUELA
  { id: 95, name: "PRICE SMART ALAJUELA", address: "SAN PABLO DE ALAJUELA", region: "Alajuela" },
  { id: 96, name: "WBS URUCA", address: "FRENTE AGENCIA AUTOS HONDA LA URUCA, SAN JOSE", region: "Alajuela", whatsapp: "83622667" },
  { id: 97, name: "Salud Ocular", address: "Uruca, frente a la clinica oftalmologica de CCSS", region: "Alajuela", whatsapp: "70079333" },
  { id: 98, name: "Visari", address: "CENTRO OFTALMOLOGICO, ALAJUELA DE LA CRUZ ROJA 275M AL SUR, AL PURO FRENTE DE LABORATORIO CARTÍN", region: "Alajuela", whatsapp: "83815025" },
  { id: 99, name: "LHS Oftalmología Belén", address: "Costado Sur del cementerio de la Rivera de Belén", region: "Alajuela", whatsapp: "60057787" },
  { id: 100, name: "ÓPTICA FLORES", address: "Belen, San Antonio, frente a parqueo de Pali", region: "Alajuela" },
  { id: 101, name: "Centro Ocular Elizondo", address: "San Antonio costado sur oeste de la plaza deportes Belen", region: "Alajuela", whatsapp: "83136059" },
  { id: 102, name: "ÁLVAREZ Y MOLINA (POAS)", address: "Alajuela San Pedro de Poas del Banco de Costa Rica 200 mtrs sur y 25 mtrs oeste, al frente de M Express", region: "Alajuela", whatsapp: "24483939" },
  { id: 103, name: "ÓPTIMAS (POAS)", address: "FRENTE AL CAJERO DEL BANCO DE COSTA RICA DE SAN PEDRO DE POAS", region: "Alajuela", whatsapp: "83120834" },
  { id: 104, name: "NUEVA VISIÓN (POAS)", address: "400 METROS SUR DE TEMPLO CATOLICO DE SAN PEDRO DE POAS", region: "Alajuela", whatsapp: "84156595" },
  { id: 105, name: "ÓPTICA CENTRAL", address: "FRENTE AL PARQUE JUAN SANTAMARIA ALAJUELA CENTRO", region: "Alajuela" },
  { id: 106, name: "UNÓPTICA", address: "75 este del teatro municipal", region: "Alajuela", whatsapp: "88412080" },
  { id: 107, name: "Optica ÁLVAREZ Y MOLINA", address: "25m norte del banco de cr san pedro de poas", region: "Alajuela", whatsapp: "24406905" },
  { id: 108, name: "ÓPTICA M Y M", address: "50 METROS SUR DE CRUZ ROJAS ALAJUELA", region: "Alajuela", whatsapp: "64031539" },
  { id: 109, name: "INST DE OFTALMOLOGÍA", address: "25 METROS OESTE DE LA ESQUINA SUROESTE DE LA PISCINA DEL INSTITUTO DE ALAJUELA", region: "Alajuela", whatsapp: "71043445" },
  { id: 110, name: "OPEN VISION", address: "De Correos de CR 100 sur y 25 oeste", region: "Alajuela" },
  { id: 111, name: "ÓPTICA ALAVISTA", address: "ALAJUELA 100 SUR Y 50 OESTE DE ALMACEN LLOBET CONTIGUO LABORATORIO LAURENT", region: "Alajuela", whatsapp: "85751010" },
  { id: 112, name: "CLÍNICA CENTRAL DE OJOS DE ALAJUELA", address: "125 al este del antiguo hospital, centro medico Peña", region: "Alajuela", whatsapp: "64398221" },
  { id: 113, name: "SALUD SIN FRONTERAS", address: "125 sur Llobeth continuo a la joyeria toscana", region: "Alajuela" },
  { id: 114, name: "VISUAL PRO ALAJUELA", address: "ALAJUELA, frente a la gosolinera Alagas", region: "Alajuela", whatsapp: "61874427" },
  { id: 115, name: "DR EYES", address: "25m norte de la escuela maría pacheco frente al parque, casa blanca, urbanización monte negro", region: "Alajuela", whatsapp: "64226539" },
  { id: 116, name: "OCOS OPTICAL", address: "Plaza de deportes 100 oeste y 150 sur", region: "Alajuela", whatsapp: "63688282" },
  { id: 117, name: "OPTIKPLUS ALAJUELA", address: "MANGO PLAZA ALAJUELA, CONTIGUO AL WALMART", region: "Alajuela" },
  { id: 118, name: "ÓPTICA CENTROAMÉRICA", address: "Costado oeste del Museo Juan Santa María", region: "Alajuela", whatsapp: "87960606" },

  // OCCIDENTE
  { id: 119, name: "Siman Escazú", address: "Multiplaza escazu, 5ta etapa", region: "Occidente" },
  { id: 120, name: "PRICE ESCAZÚ", address: "CALLE PARALELA RUTA 27", region: "Occidente" },
  { id: 121, name: "PRICE SANTA ANA", address: "1 km al oeste de Forum 1", region: "Occidente" },
  { id: 122, name: "Optigroup Rohrmoser", address: "125m Oeste CASA OSCAR ARIAS", region: "Occidente", whatsapp: "63084888" },
  { id: 123, name: "Percepción Visual Rohrmoser", address: "Pavas, 1.5km al norte de la embajada americana", region: "Occidente", whatsapp: "60325269" },
  { id: 124, name: "ÓPTICA TOFA", address: "Pavas, Clinica TOFA. 100m este de la agencia BN. Costado de la embajada Americana", region: "Occidente", whatsapp: "70422574" },
  { id: 125, name: "Óptica IZAK", address: "Guachipelin, centro comercial plaza florencia, local 3", region: "Occidente" },
  { id: 126, name: "Optica Sime", address: "Diagonal a plaza Roohmoser dentro de Clínica Salud sin Frontera Pavas", region: "Occidente", whatsapp: "87463686", email: "marileo09@hotmail.com" },
  { id: 127, name: "Clínica Dr Goyenga", address: "DE LA TERMINAL DE BUSES DE HATILLO 7 125 METROS ESTE 125 SOBRE LA CALLE PARALELA HATILLO 7 SAN JOSE", region: "Occidente" },
  { id: 128, name: "Mundial Hatillo", address: "Del centro comercial Topacio 25m al este", region: "Occidente", whatsapp: "85281944" },
  { id: 129, name: "GMD Alajuelita-Mundial", address: "200 metros oeste y 25 sur de la Iglesia de Alajuelita, Alajuelita Centro, San Jose", region: "Occidente", whatsapp: "84632521" },
  { id: 130, name: "ALDAJO Escazú", address: "Costado norte del parque de escazú, diagonal por la panadería samuelito", region: "Occidente", whatsapp: "62478945" },
  { id: 131, name: "Aldajo San Antonio", address: "San Antonio, de la iglesia catolica 150m oeste", region: "Occidente", whatsapp: "60884669" },
  { id: 132, name: "Service CIMA", address: "Segunda torre del hospital Cima, primer piso contiguo avenida escazú", region: "Occidente", whatsapp: "22088190" },
  { id: 133, name: "Charpentier Villa Colón", address: "SANTIAGO DE PURISCAL, al aldo de la sucursal del CCSS", region: "Occidente", whatsapp: "88427937" },
  { id: 134, name: "Villa Colón", address: "Ciudad colon centro comercial via colon local numero 11", region: "Occidente", whatsapp: "85503502" },
  { id: 135, name: "Optiselbor", address: "CIUDAD COLON. 75 MTS S. DE SERVICENTRO LOS ANGELES", region: "Occidente", whatsapp: "72242213" },
  { id: 136, name: "Óptica Veo", address: "500m al este de la cruz roja en Santa Ana, a la par de Super Baterias", region: "Occidente", whatsapp: "71619840" },
  { id: 137, name: "Optikplus Santa Ana", address: "Frente Plaza de Deportes de Pozos de Santa Ana", region: "Occidente" },
  { id: 138, name: "Solar Santa Ana", address: "CONTIGUO AL BANCO DE COSTA RICA EN SANTANA", region: "Occidente" },
  { id: 139, name: "Xinia de los Ángeles", address: "Puriscal, contiguo al BCR", region: "Occidente", whatsapp: "87915083" },
  { id: 140, name: "Óptica Solís", address: "San Jose, Santa Ana, entrada a pozos 500mts norte", region: "Occidente" },
  { id: 141, name: "ÓPTICA ESCAZÚ", address: "300 metros este de la Municipalidad de Escazu, Escazu, Centro", region: "Occidente" },
  { id: 142, name: "Natalia Durán / EYE CARE", address: "Centro comercial Santa Ana, modulo 5", region: "Occidente", whatsapp: "87423369" },
  { id: 143, name: "LeBlanc", address: "Escazu, plaza tempo, Local 4", region: "Occidente", whatsapp: "89890858" },
  { id: 144, name: "SERV. OFTALMOLÓGICOS GUEM", address: "TREJOS MONTEALEGRE 50 METROS SUR DE RESTAURANTE ROSTIPOLLOS SAN RAFAEL ESCAZU", region: "Occidente", whatsapp: "88771473" },
  { id: 145, name: "ZARAH CARTER ESCAZÚ", address: "Escazu, San rafael centro comercial 7 barcas", region: "Occidente" },
  { id: 146, name: "PUNTO DE VISTA SABANA", address: "San Jose, frente al costado norte del estadio nacional, plaza gran campo", region: "Occidente", whatsapp: "86776831" },
  { id: 147, name: "ÓPTICA CAVARRÍA S.A", address: "San José paseo colón, de la pizza hut 50m sur", region: "Occidente", whatsapp: "60952020" },
  { id: 148, name: "Óptica House", address: "San Rafael, Plaza Florencia 300 norte del bac san jose del paco local 3", region: "Occidente", whatsapp: "86220028", email: "opticahousecr@gmail.com" },
  { id: 149, name: "Siloe Escazú", address: "San José, San Rafael de Escazu, del peaje de Escazu 200 oeste, calle paralela a la pista 27. Contiguo a Jazz Café", region: "Occidente", whatsapp: "60763112" },
  { id: 150, name: "Optikinder", address: "Hospital Cima Torre 1, (Torre de la farmacia Fishell) 5to piso consultorio 514", region: "Occidente", whatsapp: "22081514" },

  // CENTRO
  { id: 151, name: "VARGAS", address: "De la entrada principal de la C.C.S.S. 350 mts sur, fte a entrada de buses de Lumaca", region: "Centro", email: "opticavargascentral@hotmail.com" },
  { id: 152, name: "HD CARMEN", address: "Contiguo a Grupo Nacion", region: "Centro" },
  { id: 153, name: "OPTICRIL", address: "DE LA ENTRADA DE EMERGENCIAS DEL HOSPITAL DE NIÑOS 100 M OESTE Y 75M AL NORTE", region: "Centro", email: "opticentro1@gmail.com" },
  { id: 154, name: "SILOE", address: "Clinica Biblica tercer piso Grupo Optico Siloe Internacional S.A", region: "Centro" },
  { id: 155, name: "OPTICLINIC", address: "Barrio lujan del pani 100m sur y 25 este", region: "Centro" },
  { id: 156, name: "ÓPTICA SION", address: "Centro Comercial de Sur segundo piso local 3", region: "Centro", email: "opticalsion@gmail.com" },
  { id: 157, name: "LO LA ÓPTICA", address: "San José diagonal al hospital de niños torre medica edificio celeste con gris 5to piso", region: "Centro", email: "factura-torre@lolaoptica.com" },
  { id: 158, name: "VGP VISION", address: "San Jose, condominio las americas, local c2-16", region: "Centro" },
  { id: 159, name: "Óptica 20/20", address: "225m al este de la clinica biblica avenida 14 entre calle 5 y 7", region: "Centro" },
  { id: 160, name: "CONCEPTO VISUAL", address: "AVENIDA 3 FRENTE ANTIGUO ABONOS AGRO", region: "Centro", email: "conceptovisualinc@yahoo.es" },
  { id: 161, name: "LOOP ÓPTICA", address: "San Jose, Centro Comercial del sur, Local 19", region: "Centro" },
  { id: 162, name: "CLUB DE LEONES", address: "BARRIO DENT FRENTE A BANCO DE LA VIVIENDA EDIFICIO AFL COSTA RICA", region: "Centro" },
  { id: 163, name: "ILSE MÉNDEZ", address: "125 metros oeste de Taco Bell edificio Davinchi primer piso CONSULTORIO NÚMERO 1", region: "Centro" },
  { id: 164, name: "FRECHEN", address: "300 oeste de Taco Bell, Barrio Dent, San Pedro de Montes de Oca, San José", region: "Centro", email: "optica.rivera@gmail.com" },
  { id: 165, name: "CREDILENTES", address: "Avenida Central, calle 1, altos de la farmacia la bomba", region: "Centro" },
  { id: 166, name: "ÓPTICA LUX", address: "Plaza Viquez, frente a piscinas", region: "Centro" },
  { id: 167, name: "RONALD VARGAS", address: "ESCAZU SANTA TERESA", region: "Centro", email: "polimerosopticoscr@gmail.com" },
  { id: 168, name: "Óptica F Y F", address: "San Jose, frente hotel Diora", region: "Centro" },
  { id: 169, name: "Óptica Alpina", address: "CALLE 3 AVE 1 EDIFICIO MURRAY 1 PISO", region: "Centro", email: "opticaalpina@hotmail.com" },
  { id: 170, name: "Óptica Fonseca", address: "Costado Noroeste del Parque de Tibas", region: "Centro" },
  { id: 171, name: "ÓPTICAS POPULAR", address: "San Jose, 100m sur centro comercial del sur ROTONDA LA YGRIEGA", region: "Centro" },
  { id: 172, name: "ÓPTICA SALUD OCULAR", address: "Uruca, frente a la clinica oftalmologica de CCSS", region: "Centro" },

  // CARTAGO
  { id: 173, name: "Price Tres Ríos", address: "Contiguo a Terra Campus y Terramall", region: "Cartago" },
  { id: 174, name: "Fundación L Y S", address: "150 METROS AL ESTE DE LA FERRETERIA EPA CURRIDABAT", region: "Cartago" },
  { id: 175, name: "Lola Pinares", address: "Centro Comercial Momentum Pinares torre medica consultario C54 5to piso", region: "Cartago" },
  { id: 176, name: "El Guarco", address: "Costado Norte De La Escuela Ricardo Jiménez Oreamuno, Tejar De El Guarco, Cartago", region: "Cartago" },
  { id: 177, name: "Arce Paraíso", address: "DEL MERCADO 100 NORTE Y 25 OESTE PARAISO", region: "Cartago" },
  { id: 178, name: "Paraíso", address: "75 METROS AL SUR DEL MERCADO CENTRAL DE PARAISO DE CARTAGO", region: "Cartago" },
  { id: 179, name: "DALASI", address: "CONTIGUO A MUCAP SAN RAFAEL DE OREAMUNO", region: "Cartago" },
  { id: 180, name: "Tabárez", address: "200 SUR Y 150 ESTE DE LA BASILICA DE CARTAGO TORRE MEDICA 2DO PISO", region: "Cartago" },
  { id: 181, name: "Vives Los Ángeles", address: "125m METROS OESTE DE LA BASILICA DE CARTAGO", region: "Cartago" },
  { id: 182, name: "Imagen", address: "Diagonal a coopealianza los angeles", region: "Cartago" },
  { id: 183, name: "Tobosí", address: "400 metros al Sur y 100 metros al Oeste del Instituto Tecnológico de Costa Rica", region: "Cartago" },
  { id: 184, name: "Pereira", address: "50m oeste del antigua farmacia Fishell al frente de almacén Jerusalen", region: "Cartago" },
  { id: 185, name: "Óptica Madriz", address: "Cartago, 75 mts Sur de la Estación de Bomberos, Óptica Madriz", region: "Cartago" },
  { id: 186, name: "ARCE Cartago", address: "COSTADO SUR DE LA ESCUELA ASCENSION ESQUIVEL, CARTAGO CENTRO", region: "Cartago" },
  { id: 187, name: "Nova", address: "COSTADO OESTE DE HOSPITAL MAX PERALTA FRENTE A LA MORGE CARTAGO CENTRO", region: "Cartago" },
  { id: 188, name: "Optica Hospital", address: "Frente a la farmacia del Hospital Max Peralta", region: "Cartago" },
  { id: 189, name: "Optica Troyo", address: "75 METROS SUR DE LA ESCUELA JESUS JIMENEZ CARTAGO CENTRO", region: "Cartago" },
  { id: 190, name: "Óptica Brenes", address: "Avenida del Comercio contiguo a la tienda Pigo Pérez, frente a la Bomba Raúl Molina", region: "Cartago" },
  { id: 191, name: "Optica Santa Lucía", address: "375 METROS OESTE DEL MERCADO CENTRAL DE CARTAGO CENTRO av1 entre calle 10 y 12", region: "Cartago" },
  { id: 192, name: "Optica Grisol", address: "BARRIO EL MOLINO 200 METROS ESTE DE METRO CENTRO FRENTE A FERRETERIA EL POCHOTE CARTAGO CENTRO", region: "Cartago" },
  { id: 193, name: "Vives Molino", address: "125 METROS OESTE de La iglesia Maria auxiliadora de Cartago", region: "Cartago" },
  { id: 194, name: "Optica Jade", address: "100 METROS SUR DE RENO CITY TEJAR CARTAGO", region: "Cartago" },
  { id: 195, name: "Óptica del Este Michelle Araya", address: "Cartago, costado este de Ekono en villas de Ayarco, edificio esquinero", region: "Cartago" },
  { id: 196, name: "ÓPTICA 360", address: "Walmart de curridabat 1k al este plaza musical local número 2", region: "Cartago" },
  { id: 197, name: "SARA EYES CARE", address: "Curridabat, Plaza Express Guayabos, Local 6", region: "Cartago" },
  { id: 198, name: "CR WORLD", address: "100 Mtrs norte de la iglesia catolica de guadalupe", region: "Cartago" },
  { id: 199, name: "Óptica Visum", address: "Tejar, 250m este del bar restaurangte el quijongo, en la entrada barrio nuevo", region: "Cartago" },
  { id: 200, name: "GALERÍA VISUAL J J S.R.L.", address: "Paraiso, 175m norte diagonal a la biblioteca publica", region: "Cartago" },
  { id: 201, name: "ÓPTICA PLUS +", address: "200M OESTE de Pígo Pérez, frente a empeños prestaful", region: "Cartago" },
  { id: 202, name: "SAJU (PLAZA CRONOS)", address: "Curridabat, plaza Cronos, piso 2, local 30", region: "Cartago" },
  { id: 203, name: "Halabi", address: "COSTADO OESTE DE LA RUINAS DE CARTAGO CENTRO", region: "Cartago" },
  { id: 204, name: "SALUD ÓPTICA", address: "Cartago Centro 50m este del Scotiabank", region: "Cartago" },
  { id: 205, name: "PROVISIÓN", address: "Cartago central Carmen, del puente bailey 150 este plaza Baily", region: "Cartago" },
  { id: 206, name: "Óptica 360 (Tres Ríos)", address: "Multiplaza del este 300m al este plaza premier local 8 calle vieja 3 rios", region: "Cartago" },
  { id: 207, name: "Optimar", address: "Cartago de San rafael de Oreamuno, de la esquina suroeste del parque 200m sur, centro medico universal", region: "Cartago" },
  { id: 208, name: "Laporte Visual", address: "Cartago Centro, contiguo al parqueo la Funeraria la última joya", region: "Cartago" },

  // ENCOMIENDAS
  { id: 209, name: "Price Liberia", address: "Solarium, frente aeropuerto Daniel Oduber 10km oeste del cruce", region: "Encomiendas" },
  { id: 210, name: "COMBO ÓPTICAS (GUÁPILES)", address: "GUÁPILES", region: "Encomiendas" },
  { id: 211, name: "COMBO ÓPTICAS (LIBERIA)", address: "GUANACASTE, LIBERIA", region: "Encomiendas" },
  { id: 212, name: "Karina Zúñiga", address: "PUNTARENAS, PASO CANOAS, CARRETERA A AL CUESTA 25 M NORTE", region: "Encomiendas", whatsapp: "84641570" },
  { id: 213, name: "Clínica Visual Pacific", address: "PUNTARENAS, Parrita, la palma, 100m de los bomberos, clinica Arena Blanca", region: "Encomiendas", whatsapp: "61732557" },
  { id: 214, name: "Coto Brus", address: "PUNTARENAS, Frente a empeños Pelón", region: "Encomiendas", whatsapp: "84435010" },
  { id: 215, name: "CB Neily", address: "Corredores, Puntarenas, Ciudad Neily contiguo a Tierra Cafe Frente al Parque Ciudad Neily Zona Sur", region: "Encomiendas", whatsapp: "87833005" },
  { id: 216, name: "CB Golfito", address: "Golfito, contiguo al INS", region: "Encomiendas", whatsapp: "87294292" },
  { id: 217, name: "CB San Vito", address: "CB SAN VITO EN EL BOULEVAR CONTIGUO AL PARQUE", region: "Encomiendas", whatsapp: "84215110" },
  { id: 218, name: "Yaniecer Murillo", address: "PUNTARENAS OSA PALMAR NORTE, CALLE EL COMERCIO CONTIGUO A FARMACIA IBARRA", region: "Encomiendas", whatsapp: "86612981" },
  { id: 219, name: "Cindy Salazar", address: "Palmar Norte Calle del Comercio por Tracopa Centro de Palmar Norte, Calle 143 Av. 9", region: "Encomiendas", whatsapp: "87210059" },
  { id: 220, name: "Santa Marta", address: "Entrada Principal, cuidad Neily Contiguo Chicken Bros", region: "Encomiendas", whatsapp: "85426398" },
  { id: 221, name: "CB Buenos Aires", address: "Buenos Aires, Puntarenas", region: "Encomiendas", whatsapp: "85797222" },
  { id: 222, name: "Quepos", address: "sobre la calle del comercio frente a la licorera 32", region: "Encomiendas", whatsapp: "85525888" },
  { id: 223, name: "Sully Cascante", address: "Parrita, Town Center, Bejuco Esterillos, local 14B", region: "Encomiendas", whatsapp: "62114568" },
  { id: 224, name: "Visual Care", address: "Puntarenas, garabito, jaco. Plaza coral, local#17", region: "Encomiendas", whatsapp: "70140094" },
  { id: 225, name: "Swaby Óptica", address: "Limon Centro, 100M NORTE DEL NUEVO REGISTRO CIVIL Av 6 calle 6 edicio esquinero", region: "Encomiendas", whatsapp: "86052894" },
  { id: 226, name: "Optica La Isla", address: "Limón centro del supermercado MXM 250 metros al norte edificio blanco con azul, dentro de la clínica Santa Tereza", region: "Encomiendas", whatsapp: "87153881" },
  { id: 227, name: "Optivero", address: "Guápiles costado este del Estadio Ebal R Plaza Caribe local #14", region: "Encomiendas", whatsapp: "83214110" },
  { id: 228, name: "Nueva Luz", address: "275 m al sur del mega super Guápiles centro", region: "Encomiendas", whatsapp: "83744118" },
  { id: 229, name: "Miles", address: "SIQUIRRES", region: "Encomiendas" },
  { id: 230, name: "ÓPTICA ALFARO GUÁPILES", address: "costado oeste del parque central de guapiles", region: "Encomiendas", whatsapp: "88470694" },
  { id: 231, name: "Optica A su Alcance", address: "Terminal de caribeños, limon centro local 3", region: "Encomiendas" },
  { id: 232, name: "Ver Más Limón", address: "LIMÓN, LIMÓN, DEL SUPERMERCADO MAS X MENOS 100 MTS NORTE", region: "Encomiendas" },
  { id: 233, name: "Tony Frank", address: "Ciudad Quesada, al costado este de escuela Juan Chaves, continuo a la Clinica Asembis", region: "Encomiendas", whatsapp: "84681480" },
  { id: 234, name: "Silvia Herrera", address: "175m este del BCR, frente a tienda americana SINAI", region: "Encomiendas", whatsapp: "83228873" },
  { id: 235, name: "Yency Farrier", address: "Contiguo a Pizzeria Napoles", region: "Encomiendas" },
  { id: 236, name: "Carolina Flores", address: "100M AL NORTE DE IMPORTADORA MONGE EN AGUAZARCAS", region: "Encomiendas", whatsapp: "85438186" },
  { id: 237, name: "D´Arce Florencia", address: "Centro comercial plaza florencia local #5", region: "Encomiendas", whatsapp: "63724681" },
  { id: 238, name: "Optica Oxo", address: "Calle el desvío, 100 norte de Maxi Pali, carretera principal", region: "Encomiendas", whatsapp: "83060808" },
  { id: 239, name: "Optica D'Arce", address: "25m NORTE DE LA ESCUELA JUAN CHAVES", region: "Encomiendas", whatsapp: "83175961" },
  { id: 240, name: "Optica Zarcero", address: "25 METROS SUR DEL BANCO NACIONAL DE ZARCERO", region: "Encomiendas", whatsapp: "89630178" },
  { id: 241, name: "Del Valle", address: "CENTRO COMERCIAL PEDRO PEREZ LOCAL NO 10 COSTADO SUR DEL PARQUE DE SAN ISIDRO DE PEREZ ZELEDON", region: "Encomiendas", whatsapp: "87720349" },
  { id: 242, name: "Danke", address: "Costado norte de la Bomba Fersol, San Isidro del General, San José Province", region: "Encomiendas", whatsapp: "83578888" },
  { id: 243, name: "Optica Elizondo", address: "PEREZ ZELEDON, SAN ISIDRO FRENTE AL PARQUE CENTRAL A UN COSTADO DEL BAR Y RESTAURANTE LA REINA DEL VALLE", region: "Encomiendas", whatsapp: "89194856" },
  { id: 244, name: " Dr Karen Padilla", address: "PEREZ ZELEDON", region: "Encomiendas" },
  { id: 245, name: "Optica Gmo", address: "San Isidro Perez Zeledon por encomienda", region: "Encomiendas", whatsapp: "70119777" },
  { id: 246, name: "Óptica Sol de Uvita", address: "Osa, bahia ballena Uvita, 150m norte de la gasolinera", region: "Encomiendas", whatsapp: "88020122" },
  { id: 247, name: "Imagen Visual Puntarenas", address: "Puntarenas, contiguo a mega super, local #1", region: "Encomiendas", whatsapp: "70124190" },
  { id: 248, name: "CVP", address: "PUNTARENAS CASA D12 BARRIO FIESTA DEL MAR EL ROBLE PUNTARENAS", region: "Encomiendas" },
  { id: 249, name: "ENFOQUE VISUAL PUNTARENAS", address: "Puntarenas es: Plaza la sirena, frente al Hotel Fiesta Resort", region: "Encomiendas" },
  { id: 250, name: "Apuy", address: "COSTO OESTE DEL PALI, CAÑAS GUANACASTE", region: "Encomiendas", whatsapp: "84352155" },
  { id: 251, name: "Optica San Juan Upala", address: "UPALA, 100m oeste de las oficinas el INDER", region: "Encomiendas", whatsapp: "85644396" },
  { id: 252, name: "Oftálmica Liberia", address: "100m sur de Pizza Hut, Liberia", region: "Encomiendas" },
  { id: 253, name: "Clínica Visual Santa Cruz", address: "EDIFICIO BUENOS AIRES", region: "Encomiendas", whatsapp: "70183098" },
  { id: 254, name: "Optica Padilla", address: "175 METROS ESTE DE COOPEALIANZA, NICOYA", region: "Encomiendas", whatsapp: "88205781" },
  { id: 255, name: "Optica Pacífico (Tamarindo)", address: "TAMARINDO, Santa Cruz Tempate cruce de guacas centro comercial las americas local 5y6", region: "Encomiendas", whatsapp: "87226790" },
  { id: 256, name: "Pacífico (Nosara)", address: "NOSARA, La mini plaa atrás de la bomba locaL 17", region: "Encomiendas", whatsapp: "88994556" },
  { id: 257, name: "Visual Optics", address: "Nicoya, clinica monte de la cruz, frente polideportivo nicoya", region: "Encomiendas" },
  { id: 258, name: "Sanchun", address: "Guanacaste Nicoya, frente a la musmani nicoya centro", region: "Encomiendas" },
  { id: 259, name: "San Ignacio", address: "Acosta, San ignacio, contiguo a Farmacia San Ignacio", region: "Encomiendas", whatsapp: "85292382" },
  { id: 260, name: "Luximed", address: "100 mtrs este del banco popular, frente a soda y haladeria caprichos", region: "Encomiendas", whatsapp: "63036763" },
  { id: 261, name: "BLUE EYES ÓPTICA", address: "FRENTE A LA DISTRIBUIDORA CAMPO, roble puntarenas", region: "Encomiendas", whatsapp: "63421049" },
  { id: 262, name: "ÓPTICA VISUALUD", address: "Santa Cruz, 200 norte y 100 este de la antigua municiopalidad de Santa Cruz", region: "Encomiendas", whatsapp: "86860201" },
  { id: 263, name: "Zara Carter", address: "San Carlos, Ciudad Quesada, plaza el encuentro", region: "Encomiendas" },
  { id: 264, name: "Óptica Gafas", address: "Distrito Cahuita, lugar Puerto Viejo frente al torno del Caribe", region: "Encomiendas", whatsapp: "83075290" },
  { id: 265, name: "Óptica Cóbano", address: "CABANO, PUNTARENAS", region: "Encomiendas", whatsapp: "61371796" },
  { id: 266, name: "ÓPTICA JICARAL", address: "Jicaral, contiguo a pali", region: "Encomiendas", whatsapp: "89423531" },
  { id: 267, name: "Aparicio", address: "Sardinal, Playa del Coco, plaza colonial, diagonal al BCR, local núm. 3", region: "Encomiendas", whatsapp: "84075308" },
  { id: 268, name: "Óptica Aparicio Potrero", address: "Playa protero, plaza medica potrero", region: "Encomiendas", whatsapp: "84075309" },
  { id: 269, name: "SOFIA ARROYO AMADOR (AMATORE)", address: "Bijagua de Upala, sobre carretera principal contiguo a Farmacia la puebla", region: "Encomiendas", whatsapp: "86357719" },
  { id: 270, name: "Óptica Lenshop", address: "cobano de Puntarenas en el centro comercial plaza Cóbano segunda piso local#7", region: "Encomiendas", whatsapp: "85244902" },
  { id: 271, name: "Numancia", address: "Guápiles, Pococí, Limón, Edificio Clínica Medical Numancia, diagonal a Almacén el Rey", region: "Encomiendas", whatsapp: "88884323" },
  { id: 272, name: "Óptica On Natural", address: "Cañas, 80m este de Coopealianza", region: "Encomiendas", whatsapp: "86579608" },
  { id: 273, name: "Casa de Salud Vida Sana", address: "Puntarenas, 50m este del Super mercado BM en buenos aires", region: "Encomiendas", whatsapp: "27300709" },
  { id: 274, name: "Óptica Mirarte", address: "500 metros Este de Agroujarras, contiguo a Restaurante La Minita", region: "Encomiendas", whatsapp: "22033942" },
  { id: 275, name: "Óptica Chacón", address: "Provincia Alajuela, Canton Guatuso, costado de la asada de guatuso", region: "Encomiendas", whatsapp: "86107202" },
  { id: 276, name: "Óptica Lumania", address: "La Cruz de Guanacaste, 125m al oeste del Banco Nacional, contiguo a Farmacia Monte de Sion", region: "Encomiendas", whatsapp: "61362423" },
  { id: 277, name: "Óptica Abangares", address: "Guanacaste/Abangares/Las juntas centro diagonal al supermercado Bolpa de abangares centro", region: "Encomiendas", whatsapp: "85215777" },
  { id: 278, name: "ÓPTICAS ALFARO CARIARI", address: "Cariari, Limón", region: "Encomiendas" },
  { id: 279, name: "ÓPTICAS ALFARO GUÁCIMO", address: "Guácimo, Limón", region: "Encomiendas" },

];

const regions = [
  "Todas",
  "Ruta Larga C1",
  "Heredia",
  "Periférica",
  "Alajuela",
  "Occidente",
  "Centro",
  "Cartago",
  "Encomiendas"
];

const FindOpticalStore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Todas");

  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      const matchesSearch = searchQuery.trim() === "" || 
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.region.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = selectedRegion === "Todas" || store.region === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const formatPhone = (phone: string) => {
    return phone.replace(/[^0-9]/g, '');
  };

  return (
    <section id="opticas" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Distribuidores Autorizados</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Encuentra tu <span className="text-primary">punto rojo</span> Shamir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Localiza el distribuidor Shamir más cercano a ti en Costa Rica y agenda tu evaluación visual personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="relative h-[500px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border">
            <div className="absolute inset-0 bg-secondary/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2015770.3308693757!2d-85.5097236!3d9.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fa63b0e4ae7eb%3A0x6c88cfcd4ea6c0e0!2sCosta%20Rica!5e0!3m2!1ses!2scr!4v1702500000000!5m2!1ses!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ópticas Shamir en Costa Rica"
              />
            </div>
            
            <div className="absolute top-4 left-4 bg-white dark:bg-card rounded-lg shadow-lg p-3 z-10">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">{filteredStores.length} ópticas encontradas</span>
              </div>
            </div>
          </div>

          {/* Store List */}
          <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nombre, dirección o región..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12"
                  data-testid="input-search-stores"
                />
              </div>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full sm:w-48 h-12" data-testid="select-region">
                  <SelectValue placeholder="Región" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Store Cards */}
            <div className="space-y-3 max-h-[550px] overflow-y-auto pr-2">
              {filteredStores.map((store) => (
                <Card 
                  key={store.id} 
                  className="border-border hover:border-primary/50 transition-all duration-300"
                  data-testid={`card-store-${store.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-foreground text-sm truncate">{store.name}</h3>
                          <Badge variant="outline" className="text-[10px] shrink-0">
                            {store.region}
                          </Badge>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{store.address}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {store.phone && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="h-8 text-xs"
                              asChild
                            >
                              <a href={`tel:+506${formatPhone(store.phone)}`}>
                                <Phone className="h-3 w-3 mr-1" />
                                Llamar
                              </a>
                            </Button>
                          )}
                          {store.whatsapp && (
                            <Button 
                              size="sm" 
                              className="h-8 text-xs bg-green-600 hover:bg-green-700"
                              asChild
                            >
                              <a 
                                href={`https://wa.me/506${formatPhone(store.whatsapp)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <MessageCircle className="h-3 w-3 mr-1" />
                                WhatsApp
                              </a>
                            </Button>
                          )}
                          <Button 
                            size="sm" 
                            variant="secondary"
                            className="h-8 text-xs"
                            asChild
                          >
                            <a 
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address + ', Costa Rica')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Navigation className="h-3 w-3 mr-1" />
                              Cómo llegar
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredStores.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No se encontraron ópticas con esa búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindOpticalStore;
