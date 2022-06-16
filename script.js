'use strict';

const img = document.querySelectorAll('img')
const body = document.querySelector('body')

let backPopup = document.createElement('div')
backPopup.classList.add('back-pop-up')

body.append(backPopup)

const planetInfo = [{
        "id": "3",
        "name": "ЗЕМЛЯ",
        "info": `Земля – это третья по удаленности от Солнца планета 
        Земля вместе с Меркурием, Венерой и Марсом образует земную группу планет Солнечной системы.
        У Земли есть один естественный спутник – Луна, а также множество искусственных, крупнейший из которых – Международная космическая станция.
        Соседями Земли являются Венера и Марс.
        Наружный слой Земли представляет собой твердую оболочку, состоящую главным образом из силикатов. Твердая кора и вязкая верхняя часть мантии составляют литосферу. 
        Под литосферой находится астеносфера, слой относительно низкой вязкости, твердости и прочности в верхней мантии. Земля имеет ярко выраженное жидкое внешнее и твердое внутреннее ядро.
        Земля – единственная известная планета с активной тектоникой плит.)
        Земля – пятая по размеру планета в Солнечной системе.
        Температура на поверхности Земли колеблется в пределах от -89,2 до +56,7°C.
        Экваториальный радиус Земли составляет 6378,1 километра.
        Площадь поверхности Земли составляет 510,072 миллиона квадратных километров.
        Средняя плотность Земли составляет 5,5153 грамм на кубический сантиметр.
        Масса Земли равна 5,9726 х 1024 килограмма.`
    },
    {
        "id": "0",
        "name": "СОЛНЦЕ",
        "info": `Солнце является  типичной звездой, одной из 100 000 000 000 звезд в нашей Галактике. Спектральный класс Солнца G2V,  на диаграмме Герцшпрунга-Рессела  оно находится  ближе к холодному концу главной последовательности, и  относится к классу желтых карликов.
        Солнце- центральное светило нашей планетной системы, и физические процессы, протекающие в нем, в значительной степени определяют также физику планет, по крайней мере ближайших к Солнцу. Среднее расстояние от Земли до Солнца- 150 миллионов километров- свет проходит его за 8 минут. Для сравнения- следующая ближайшая к нам звезда Проксима Центавра находится на расстоянии 4 световых лет...
        Имея диаметр почти  1 392 000 км ( примерно в 109 раз больше диаметра Земли)  и массу 1.9891х1030кг (это составляет 98% массы солнечной системы), Солнце является мощным источником энергии- источником всей жизни на Земле.
        Ядро Солнца очень горячее (порядка 15 млн К) и давление в нем очень высокое (примерно в 300 млрд раз больше атмосферного давления на Земле) и атомы подходят так близко, что могут сливаться`
    },
    {
        "id": "1",
        "name": "МЕРКУРИЙ",
        "info": `Меркурий – это ближайшая к Солнцу планета (первая планета Солнечной системы).
        Меркурий относится к планетам земной группы и назван в честь древнеримского бога торговли. У Меркурия нет естественных спутников. Имеет очень разреженную атмосферу.
        Меркурий известен людям с древних времен.
        Единственной соседкой Меркурия является Венера.
        Меркурий обладает крупным железным ядром, которое составляет 83% от объема и 60% от массы планеты и является источником магнитного поля.
        Ядро Меркурия окружено силикатной мантией толщиной примерно 550 километров. Толщина коры планеты составляет от 100 до 300 километров.
        Поверхность Меркурия испещрена ударными кратерами от воздействий метеоритов и комет и напоминает поверхность Луны.
        Из-за близкого расположения к Солнцу Меркурий сложно наблюдать с поверхности Земли.`
    },
    {
        "id": "2",
        "name": "ВЕНЕРА",
        "info": `Венера – это вторая по удаленности от Солнца планета (вторая планета Солнечной системы).
        Венера относится к планетам земной группы и названа в честь древнеримской богини любви и красоты. У Венеры нет естественных спутников. Обладает плотной атмосферой.
        Венера известна людям с древних времен.
        Соседями Венеры являются Меркурий и Земля.
        Строение Венеры является предметов споров. Наиболее вероятным считается: железное ядро с массой 25% от массы планеты, мантия (простирается на 3300 километров вглубь планеты) и кора толщиной 16 километров.
        Значительная часть поверхности Венеры (90%) покрыта застывшей базальтовой лавой. На ней встречаются обширные возвышенности, крупнейшие из которых сравнимы по размеру с земными материками, горы и десятки тысяч вулканов. Ударные кратеры на Венере практически отсутствуют.
        У Венеры нет магнитного поля.
        Венера является третьим по яркости объектом на земном небе после Солнца и Луны.Объект, весящий на Земле 100 килограмм, на Венере будет весить 91 килограмм.
        Солнце на Венере восходит на западе, а садится на востоке.
        Среди всех планет Солнечной системы только Венера и Меркурий не имеют естественных спутников.
        Венера является самой «горячей» планетой Солнечной системы.
        Продолжительность суток на Венере (243 земных суток) больше продолжительности года (224,7 земных суток).`
    },
    {
        "id": "4",
        "name": "МАРС",
        "info": `Марс – это четвертая по удаленности от Солнца планета (четвертая планета Солнечной системы).
        Марс относится к планетам земной группы и назван в честь древнеримского бога войны, аналога древнегреческому Аресу.
        У Марса есть два естественных спутника – Фобос и Деймос (обозначают «страх» и «ужас»). Имена даны лунам в честь персонажей греческой мифологии, сыновей Ареса.
        Марс известен людям с древних времен, когда люди наблюдали за перемещением по небосводу красной звезды, предвестника войн и катаклизмов.
        Марс обладает разреженной атмосферой.
        Соседями Марса являются Земля и Юпитер, который отделен от Красной планеты поясом астероидов.
        Модели предполагают, что Марс состоит из коры со средней толщиной 50 километров (максимальная оценка – не более 125 километров), силикатной мантии и ядра радиусом от 1480 до 1800 километров.
        Основными особенностями поверхностного рельефа Марса считаются ударные кратеры, вулканы, долины, пустыни и полярные ледниковые шапки. Самая высокая гора на планетах Солнечной системы Олимп – это потухший марсианский вулкан.
        У Марса обнаружено слабое магнитное поле.Объект, весящий на Земле 100 килограмм, на Марсе будет весить 37,8 килограмм.
        Марсианский потухший вулкан гора Олимп – самая высокая известная гора на планетах Солнечной системы.
        Из-за низкого давления вода не может существовать в жидком состоянии на большей части (около 70%) поверхности Марса. `
    },
    {
        "id": "5",
        "name": "ЮПИТЕР",
        "info": `Юпитер – это пятая по удаленности от Солнца планета (пятая планета Солнечной системы).
        Юпитер относится к газовым гигантам и назван в честь верховного древнеримского бога, аналога древнегреческому Зевсу.
        У Юпитера на данный моменты обнаружены 79 естественных спутников.
        Юпитер известен людям с древних времен. В месопотамской культуре планета называлась «Белая звезда». Подробное описание 12-летнего цикла движения Юпитера было дано китайскими астрономами, называвшими планету «Звезда года». Греки именовали его «Звезда Зевса».
        Соседями Юпитера являются Сатурн и Марс, который отделен от гиганта поясом астероидов.
        Наиболее признанная модель строения Юпитера предполагает, что он состоит из атмосферы, слоя металлического водорода и каменного ядра.
        Форма магнитного поля у Юпитера сильно сплюснута и напоминает диск.
        Юпитер обладает мощными радиационными поясами. Космический аппарат «Galileo» при облете гиганта получил дозу радиации, превышающую смертельный для человека уровень в 25 раз.
        У Юпитера есть слабые кольца, обнаруженные во время прохождения «Voyager-1» мимо планеты в 1979 году.
        
         `
    },
    {
        "id": "6",
        "name": "САТУРН",
        "info": `Сатурн – вторая по размеру планета в Солнечной системе.
        Средний радиус Сатурна составляет 58 232 ± 6 километров, то есть около 9 радиусов Земли.
        Площадь поверхности Сатурна составляет 42,72 миллиарда квадратных километров.
        Средняя плотность Сатурна составляет 0,687 грамм на кубический сантиметр.
        Ускорение свободного падения на Сатурне равно 10,44 метра на секунду в квадрате (1,067 g).
        Масса Сатурна равна 5,6846 х 1026 килограмм, что составляет около 95 масс Земли.
        Средняя плотность Сатурна составляет всего 0,687 грамма на кубический сантиметр, что делает его единственной планетой Солнечной системы, чья средняя плотность ниже плотности воды.
        За счет горячего ядра, температура которого достигает 11 700 градусов Цельсия, Сатурн излучает в космос в 2,5 раза больше энергии, чем получает от Солнца.
        Облака на северном полюсе Сатурна образуют гигантский шестиугольник, и каждая его сторона составляет приблизительно 13 800 километров.
        Некоторые спутники Сатурна, например Пан и Мимас, являются «пастухами колец»: их гравитация играет роль в удержании колец на их местах за счет резонанса с определенными участками кольцевой системы.
        Считается, что Сатурн поглотит свои кольца через 100 миллионов лет.
        В 1921 году пронесся слух, что кольца Сатурна исчезли. Это было связано с тем, что в момент наблюдений кольцевая система была обращена к Земле ребром и не могла быть рассмотрена с оборудованием того времени.
         `
    },
    {
        "id": "7",
        "name": "УРАН",
        "info": `Уран – это седьмая по удаленности от Солнца планета (седьмая планета Солнечной системы).
        Уран относится к ледяным гигантам и назван в честь греческого бога неба Урана.
        У Урана на данный моменты обнаружены 27 естественных спутников.
        Соседями Урана являются Сатурн и Нептун, за которым начинается пояс Койпера.
        Так же, как у газовых гигантов Солнечной системы, у Урана имеется магнитосфера.
        Ориентация Урана в пространстве отличается от остальных планет Солнечной системы. Его ось вращения лежит «на боку» под углом 97,86˚ относительно плоскости орбиты этой планеты.
        Стандартная модель Урана предполагает, что он состоит из трех частей: в центре – каменное ядро, в середине – ледяная оболочка, снаружи – водородно-гелиевая атмосфера.
        У Урана есть слабо выраженная система колец, состоящая из очень темных частиц диаметром от микрометров до долей метра.
         `
    },
    {
        "id": "8",
        "name": "НЕПТУН",
        "info": `Нептун – это восьмая и последняя по удаленности от Солнца планета (восьмая планета Солнечной системы).
        Нептун относится к ледяным гигантам и назван в честь римского бога морей Нептуна.
        У Нептуна на данный моменты обнаружены 14 естественных спутников.
        Соседом Нептуна является Уран.
        За Нептуном начинается область транснептуновых объектов (ТНО) – Пояс Койпера.
        Так же, как у газовых гигантов Солнечной системы, у Нептуна имеется магнитосфера.
        Стандартная модель Нептуна предполагает, что его строение включает верхнюю атмосферу; атмосферу состоящую из водорода, гелия и метана; мантию из водяного, аммиачного и метанового льдов; каменно-ледяное ядро.
        У Нептуна есть система колец красноватого оттенка, состоящая из 5 компонентов.
         `
    },
    {
        "id": "9",
        "name": "МКС",
        "info": `Этот сайт посвещён планетам солнечной системы.Здесь можно узнать базовую информацию об планетах и их особеностях.
        Если тебе интересны не только планеты ,но и космические станции ты можешь перейти по этой ссылке <a href="https://ksem1t1l.github.io/Astronauts-ISS/">https://ksem1t1l.github.io/Astronauts-ISS/</a> .
         `
    }
]

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {

        backPopup = document.querySelector('.back-pop-up')
        backPopup.style.display = 'flex'

        let idImg = img[i].getAttribute('id')
        planetInfo.forEach(planet => {
            if (idImg == planet.id) {
                backPopup.innerHTML = `
                    <div class="pop-up">
                        <h3>${planet.name}</h3><br>
                        <p>${planet.info}</p>
                        <div class="close">
                        <img src="крест.png" width="30" class="crest" alt="крестик">
                        </div
                    </div>`
            }
        })

        let close = document.querySelector('.close')
        close.addEventListener('click', function() {
            backPopup.style.display = 'none'
        })

        backPopup.addEventListener('click', function(e) {
            let popUp = document.querySelector('.pop-up')
            if (!popUp.contains(e.target)) {
                backPopup.style.display = 'none'
            }
        })
    })
}