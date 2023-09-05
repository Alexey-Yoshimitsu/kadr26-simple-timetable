
window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    try {
      //const reg = await navigator.serviceWorker.register("/sw.js");
      console.log("Service worker register success", reg);
    } catch (e) {
      console.log("Service worker register fail");
      console.log(e)
    }
  }

  await loadPosts();
});





const timetable = {
  chet: [
    [
      {
        title: "Разговоры о важном",
        kab: "не указан",
        name: "не указан",
        time: "9:30 - 10:30",
      },
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "МДК.02.01 теория и практика лабораторных микробиологических исследований",
        kab: "502",
        name: "БЕЛОВ И.О",
        time: "13:00 - 14:30",
      },
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "13:00-14:30",
      },
      {
        title: "ОП.01 безопасность жизнидеятельности",
        kab:"311",
        name:"МЕЛЬНИКОВА С.Р.",
        time:"14:50 - 16:20"
      }
    ],
    [
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "9:00 - 10:30",
      },
      {
        title: "ОП.04 информационные технологии в профессиональной деятельности",
        kab: "210",
        name: "СЕРГЕЕВ И.В.",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "ОП.02 физическая культура",
        kab: "Спортзал",
        name: "ГУСЬКОВА Н.М.",
        time: "13:00 - 14:30",
      },
      {
        title: "ОП.06 основы бережливого производства",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "14:50 - 16:20",
      },
    ],
    [
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "ОП.01 безопасность жизнидеятельности",
        kab:"311",
        name:"МЕЛЬНИКОВА С.Р.",
        time: "13:00 - 14:30",
      },
      {
        title: "ОП.03 иностранный язык в профессиональной деятельности",
        kab: "403",
        name: "ФЕТИСКИН А.В.",
        time: "14:50 - 16:20",
      },
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "16:30 - 18:00",
      },
    ],
    [
      {
        title: "МДК.02.01 теория и практика лабораторных микробиологических исследований",
        kab: "502",
        name: "БЕЛОВ И.О",
        time: "9:00-10:30",
      },
      {
        title: "МДК.04.01 методы химического и физико-химического анализа",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "МДК.02.01 теория и практика лабораторных микробиологических исследований",
        kab: "502",
        name: "БЕЛОВ И.О",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "ОП.02 физическая культура",
        kab: "Спортзал",
        name: "ГУСЬКОВА Н.М.",
        time: "9:00-10:30",
      },
      {
        title: "ОП.05 основы бизнеса, коммуникаций и финансовой грамотности",
        kab: "507",
        name: "ФЕОФАНОВА  Т.В.",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "МДК.04.01 методы химического и физико-химического анализа",
        kab: "407/406",
        name: "ЧУЛКОВА М.А.",
        time: "13:00-14:30",
      }
    ],
  ],
  nechet: [
    [
      {
        title: "Разговоры о важном",
        kab: "не указан",
        name: "не указан",
        time: "9:30 - 10:30",
      },
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "МДК.02.01 теория и практика лабораторных микробиологических исследований",
        kab: "502",
        name: "БЕЛОВ И.О",
        time: "13:00 - 14:30",
      },
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "13:00-14:30",
      },
      {
        title: "ОУД.08 Информатика",
        kab:"210",
        name:"СЕРГЕЕВ И.В.",
        time:"14:50 - 16:20"
      }
    ],
    [
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "9:00 - 10:30",
      },
      {
        title: "ОП.04 информационные технологии в профессиональной деятельности",
        kab: "210",
        name: "СЕРГЕЕВ И.В.",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "ОП.02 физическая культура",
        kab: "Спортзал",
        name: "ГУСЬКОВА Н.М.",
        time: "13:00 - 14:30",
      },
      {
        title: "ОП.06 основы бережливого производства",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "14:50 - 16:20",
      },
    ],
    [
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "ОП.01 безопасность жизнидеятельности",
        kab:"311",
        name:"МЕЛЬНИКОВА С.Р.",
        time: "13:00 - 14:30",
      },
      {
        title: "МДК.04.01 методы химического и физико-химического анализа",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "14:50 - 16:20",
      },
      {
        title: "МДК.01.01 подготовка рабочего места, лабораторных условий, средств измерений, измерительного оборудования, проб и растворов для проведения химических анализов",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "16:30 - 18:00",
      },
    ],
    [
      {
        title: "ОП.03 иностранный язык в профессиональной деятельности",
        kab: "403",
        name: "ФЕТИСКИН А.В.",
        time: "9:00-10:30",
      },
      {
        title: "МДК.04.01 методы химического и физико-химического анализа",
        kab: "209",
        name: "ЧУЛКОВА М.А.",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "МДК.02.01 теория и практика лабораторных микробиологических исследований",
        kab: "502",
        name: "БЕЛОВ И.О",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "ОУД.03 История",
        kab: "403",
        name: "ФЕТИСКИН А.В.",
        time: "9:00-10:30",
      },
      {
        title: "ОП.05 основы бизнеса, коммуникаций и финансовой грамотности",
        kab: "507",
        name: "ФЕОФАНОВА Т.В.",
        time: "10:50-11:35 - 11:55-12:40",
      },
      {
        title: "МДК.04.01 методы химического и физико-химического анализа",
        kab: "407/406",
        name: "ЧУЛКОВА М.А.",
        time: "13:00-14:30",
      }
    ],
  ]
};

//let groupName = "1СА-11-22"
//window.localStorage.setItem("group",groupName)
//console.log(window.localStorage.getItem("group"))



let dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
const date = new Date().toLocaleDateString();
//console.log(date);
var currentdate = new Date();
// флюгегехаймэн
Date.prototype.getWeek = function(){
  var day_miliseconds = 86400000,
      onejan = new Date(this.getFullYear(),0,1,0,0,0),
      onejan_day = (onejan.getDay()==0) ? 7 : onejan.getDay(),
      days_for_next_monday = (8-onejan_day),
      onejan_next_monday_time = onejan.getTime() + (days_for_next_monday * day_miliseconds),
      // If one jan is not a monday, get the first monday of the year
      first_monday_year_time = (onejan_day>1) ? onejan_next_monday_time : onejan.getTime(),
      this_date = new Date(this.getFullYear(), this.getMonth(),this.getDate(),0,0,0),// This at 00:00:00
      this_time = this_date.getTime(),
      days_from_first_monday = Math.round(((this_time - first_monday_year_time) / day_miliseconds));

  var first_monday_year = new Date(first_monday_year_time);

  // We add 1 to "days_from_first_monday" because if "days_from_first_monday" is *7,
  // then 7/7 = 1, and as we are 7 days from first monday,
  // we should be in week number 2 instead of week number 1 (7/7=1)
  // We consider week number as 52 when "days_from_first_monday" is lower than 0,
  // that means the actual week started before the first monday so that means we are on the firsts
  // days of the year (ex: we are on Friday 01/01, then "days_from_first_monday"=-3,
  // so friday 01/01 is part of week number 52 from past year)
  // "days_from_first_monday<=364" because (364+1)/7 == 52, if we are on day 365, then (365+1)/7 >= 52 (Math.ceil(366/7)=53) and thats wrong

  return (days_from_first_monday>=0 && days_from_first_monday<364) ? Math.ceil((days_from_first_monday+1)/7) : 52;
}
var result = (new Date()).getWeek()
let dayName = new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format()
document.querySelector(".h2").innerHTML  = `${dayName.toUpperCase(  )}, ${date}`
const container = document.querySelector("#posts");
const container2 = document.querySelector(".container2")
let toDay = currentdate.getDay()-1// день недели в числовом формате от 0-6
console.log(result)


if (toDay > 4){toDay = 0}

if (toDay == -1){toDay = 0}

function createBlock(obj, day) {
  let block = document.createElement('div')
  block.classList.add('block')
  let daytitle = document.createElement('p')
  daytitle.textContent = `-----  ${dayNames[day]}`
  block.append(daytitle)

  for (let para of obj) {
    let paraBlock = document.createElement('div')
    paraBlock.classList.add('para-block')
    let timeInBlock = document.createElement('div')
    let titleInBlock = document.createElement('div')
    let kabInBlock = document.createElement('div')
    let teacherInBlock = document.createElement('div')
    timeInBlock.textContent = para.time
    titleInBlock.textContent = para.title
    kabInBlock.textContent = `Кабинет ${para.kab}`
    teacherInBlock.textContent = `Преподаватель ${para.name}`
    paraBlock.append(timeInBlock, titleInBlock, kabInBlock, teacherInBlock)
    block.append(paraBlock)
  }
  container.append(block)
}

function createAllDays(obj, day) {
  let block = document.createElement('div')
  block.classList.add('block2')
  let daytitle = document.createElement('p')
  daytitle.textContent = `-----  ${dayNames[day]}`
  block.append(daytitle)
  for (let para of obj) {
    let paraBlock = document.createElement('div')
    paraBlock.classList.add('para-block2')
    let timeInBlock = document.createElement('div')
    let titleInBlock = document.createElement('div')
    let kabInBlock = document.createElement('div')
    let teacherInBlock = document.createElement('div')
    timeInBlock.textContent = para.time
    titleInBlock.textContent = para.title
    kabInBlock.textContent = `Кабинет ${para.kab}`
    teacherInBlock.textContent = `Преподаватель ${para.name}`
    paraBlock.append(timeInBlock, titleInBlock, kabInBlock, teacherInBlock)
    block.append(paraBlock)
  }
  container2.append(block)
}



async function loadPosts() {
  let nextDay = toDay == 4 ? 0 : toDay + 1
  //console.log(result)
  if (result % 2 == 0){
    createBlock(timetable.chet[toDay], toDay)
    nextDay == 0 ? createBlock(timetable.nechet[nextDay], nextDay) : createBlock(timetable.chet[nextDay],nextDay)
    for(let i = 0; i<5; i++){
      createAllDays(timetable.chet[i], i)
      
    }
  } else {
    createBlock(timetable.nechet[toDay], toDay)
    nextDay == 0 ? createBlock(timetable.chet[nextDay], nextDay) : createBlock(timetable.nechet[nextDay],nextDay)
    for(let i = 0; i<5; i++){
      createAllDays(timetable.nechet[i], i)
      
    }
  }
  
}
let state = true

const close = ()=>{
  document.querySelector(".container").style.display= "block"
  document.querySelector(".close").style.display="none"
  document.querySelector(".container2").style.display="none"
}

const h2 = () =>{
  document.querySelector(".container").style.display= "none"
  document.querySelector(".close").style.display="block"
  document.querySelector(".container2").style.display="block"
}



document.querySelector(".h2").addEventListener("touchstart",()=>{h2()})
document.querySelector(".close").addEventListener("touchstart",()=>{close()})
document.querySelector(".h2").addEventListener("click",()=>{h2()})
document.querySelector(".close").addEventListener("click",()=>{close()})

