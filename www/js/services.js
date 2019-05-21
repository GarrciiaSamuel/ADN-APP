angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'EL EMBARAZO',
    lastText: 'El embarazo humano dura unas 40 semanas desde el primer día de la última menstruación o 38 desde la fecundación, aproximadamente unos 9 meses. El primer trimestre es el momento de mayor riesgo de aborto espontáneo; el inicio del tercer trimestre se considera el punto de viabilidad del feto, es decir, el momento a partir del cual puede sobrevivir extraútero.',
    face: 'img/1b.png'
  }, {
    id: 1,
    name: 'LA FECUNDACION',
    lastText: 'La fecundación, es el proceso por el cual dos gametos (masculino y femenino) se fusionan durante la reproducción sexual para crear un nuevo individuo con un genoma derivado de ambos progenitores. Los dos fines principales de la fecundación son la combinación de genes derivados de ambos progenitores y la generación de un nuevo individuo.',
    face: 'img/2b.jpg'
  }, {
    id: 2,
    name: 'METODOS ANTICONCEPTIVOS',
    lastText: 'La forma más eficaz de evitar el embarazo es la abstinencia sexual, es decir, abstenerse de mantener relaciones sexuales. De todos modos, durante el primer año de comprometerse en la abstinencia, muchas parejas se acaban quedando embarazadas porque acaban manteniendo relaciones sexuales no planificadas sin usar ningún tipo de protección. Por lo tanto, es una buena idea que hasta las personas que no tengan la intención de mantener relaciones sexuales se informen bien sobre los métodos anticonceptivos.',
    face: 'img/3b.jpg'
  }, {
    id: 3,
    name: 'LA IMPORTANCIA DEL AGUA',
    lastText: 'Vamos a ver porqué el agua resulta tan importante para la vida. Fuera del mar, el agua potable es apenas solo un 1 por ciento de todo el agua existente, el 96 por ciento restante es agua salada que se encuentra en los mares, y el tres por ciento que falta es el agua que se encuentra en los polos en forma de hielo.Y aunque parezca que llueve a menudo y que disponemos de forma muy gratuita e ilimitada del agua, es todo lo contrario. La tierra cada vez está mas caliente, la desertización va creciendo en zonas que antes gozaban de ríos y pantanos, y la imposibilidad de poder cultivar y regar la tierra se está convirtiendo en el principal problema de hambre a nivel mundial.',
    face: 'img/4b.jpeg'
  }, {
    id: 4,
    name: 'TABLA NUTRICIONAL',
    lastText: 'La nutrición consiste en la incorporación y la transformación de materia y energía para que los organismos (tanto heterótrofos como autótrofos) puedan llevar a cabo tres procesos fundamentales: mantenimiento de las condiciones internas, desarrollo y movimiento,1​ manteniendo el equilibrio homeostático del organismo a nivel molecular y microscópico.La nutrición es el proceso biológico en el que los organismos asimilan los alimentos y los líquidos necesarios para el funcionamiento, el crecimiento y el mantenimiento de sus funciones vitales. La nutrición también es el estudio de la relación que existe entre los alimentos, la salud y especialmente en la determinación de una dieta.',
    face: 'img/5b.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
