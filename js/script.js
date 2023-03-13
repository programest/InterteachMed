window.addEventListener('load', () => { 
  const preloader = document.querySelector('.preloader')
  preloader.classList.add('preloader_hidden')
})
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function show() {
    var a = document.getElementById("pwd");
    var b = document.getElementById("eye");
    if (a.type == "password") {
      a.type = "text";
      b.src ="/img/eye_hide.svg";
    } else {
      a.type = "password";
      b.src = "/img/eye_show.svg"; 
    }
  }

  document.addEventListener("DOMContentLoaded", (function() {
    var phoneInputs = document.querySelectorAll("input[data-tel-input]");
    var getInputNumbersValue = function(input) {
        return input.value.replace(/\D/g, "");
    };
    var onPhonePaste = function(e) {
        var input = e.target, inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData("Text");
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    };
    var onPhoneInput = function(e) {
        var input = e.target, inputNumbersValue = getInputNumbersValue(input), selectionStart = input.selectionStart, formattedInputValue = "";
        if (!inputNumbersValue) return input.value = "";
        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) input.value = inputNumbersValue;
            return;
        }
        if ([ "7", "8", "9" ].indexOf(inputNumbersValue[0]) > -1) {
            if ("9" == inputNumbersValue[0]) inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = "8" == inputNumbersValue[0] ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
            if (inputNumbersValue.length >= 5) formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
            if (inputNumbersValue.length >= 8) formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
            if (inputNumbersValue.length >= 10) formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        } else formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
        input.value = formattedInputValue;
    };
    var onPhoneKeyDown = function(e) {
        var inputValue = e.target.value.replace(/\D/g, "");
        if (8 == e.keyCode && 1 == inputValue.length) e.target.value = "";
    };
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener("keydown", onPhoneKeyDown);
        phoneInput.addEventListener("input", onPhoneInput, false);
        phoneInput.addEventListener("paste", onPhonePaste, false);
    }
    
}));
var dateStart = document.getElementById("date__start");
var dateEnd = document.getElementById("date__end");
var dateBirthday = document.getElementById("dateBirthday1");
var datePasport = document.getElementById("datePasportStart1");
var dateSelected = document.getElementById("dateSelected");
var dates = document.querySelectorAll('.dates__form')


var MyAlert = document.querySelector('.toast')
var BsAlert = new bootstrap.Toast(MyAlert)

if (dateStart){
    new AirDatepicker('#date__start',{
        autoClose: true,
        onSelect: function(formattedDate, date) {
            console.log(dateStart.value)
            dateSelected.innerHTML = 'С' + '  ' + dateStart.value + ' ' + 'по' + ' ' + dateEnd.value;
          }
    })
}
if (dateEnd){
    new AirDatepicker('#date__end',{
        autoClose: true,
        onSelect: function(formattedDate, date) {
            console.log(dateStart.value)
            dateSelected.innerHTML = 'С' + '  ' + dateStart.value + ' ' + 'по' + ' ' + dateEnd.value;
          }
       
    })
}
if (dateBirthday){
    new AirDatepicker('#dateBirthday1',{
        autoClose: true,

       
    })
}
if (datePasport){
    new AirDatepicker('#datePasportStart1',{
        autoClose: true,
       
    })
}
if (document.querySelector('.select')){
    new MultiSelectTag('country')
}

var country = document.querySelector('.btn-container');
var countryInput = document.querySelector('.rounded')
var countrySelect = document.getElementById('countrySelected')
var totalCountry = document.getElementById("total-country");
if (country){
countryInput.addEventListener("click", function() {
    var ButtonChild = document.querySelector('.btn-container').children
    var countryAll = []
    var ListCountry = document.querySelectorAll('.item-label')
    for (var i = 0; i < ListCountry.length; i++) {
        if (ListCountry[i] === countryAll) {
        
        }else{
            if(countryAll.length < 3){
                var content = ListCountry[i].innerHTML.trim()
                countryAll.push(content)
            }else{
                function checkValue(){
                    var d = ButtonChild.disabled = true;
                    console.log(d)
                }
                checkValue()
            }
        }
       
        console.log(ListCountry[i].textContent)
        countrySelect.innerHTML = countryAll.join(',  ');
    }
    console.log(countryAll)
})
}

function Logic(){
    var program = document.getElementById("program");
    var visiblyInput = document.querySelector('.hidden-month')
    var insuranceforms = document.querySelector('.insurance__forms')
    if (insuranceforms){
        program.addEventListener("change", function() {
            if (program.value == '2'){
                visiblyInput.style.display = 'block';
            }else{
                visiblyInput.style.display = 'none';
            }
        })
        document.getElementById("target").addEventListener("click", function() {
            if ( document.getElementById("target").value == '2'){
                document.querySelector('.hidden-sportype').style.display = 'block';
                document.querySelector('.hidden-sportcategory').style.display = 'block';
                document.getElementById('sporttype').setAttribute("required",true);

            }else{
                document.querySelector('.hidden-sportype').style.display = 'none';
                document.querySelector('.hidden-sportcategory').style.display = 'none';
                document.getElementById('sporttype').removeAttribute("required");
            }
        })
    }
    

}
Logic()
function Pages() {
    var buttonReplace = document.querySelector('.insurance__button');
    var buttonReplaceSecondSection = document.querySelector('.insurance__button-second-section');
    var block1 = document.querySelector('.block__insurance-form1');
    var block2 = document.querySelector('.block__insurance-form2');
    var block3 = document.querySelector('.block__insurance-form3');
    if (buttonReplace){
        buttonReplace.addEventListener("click", function() {
            block2.style.display = 'flex';
            block1.style.display = 'none';
        })
        buttonReplaceSecondSection.addEventListener("click", function() {
            console.log('asd')
            block2.style.display = 'none';
            block3.style.display = 'block';
        })
    }
    

}
Pages()

 var x = 0;
function AddPeople(){
    var add = document.querySelector('.form__add-people-block');
    var remove = document.querySelectorAll('.form__remove-people-block');
    var forms = document.querySelector('.sub-forms');
   
   
        if (x < 4){
            var form = document.createElement('form');
            form.innerHTML = '<div  class="d-flex mt-5 "><div class="row"><div class="insurance__first me-lg-5 col"><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class="insurance__program-label mb-lg-1 mb-1">Имя</label><input type="text" class="insurance__program-aria" id="Name1"></div><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class="insurance__program-label mb-lg-1 mb-1">ИИН</label><input type="text" class="insurance__program-aria" id="IIN2"></div><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class=" insurance__program-label mb-lg-1 mb-1">Дата рождения:</label><input type="text" class="dates__form insurance__program-aria" onclick="dateSel()" id="datePasportStart1" placeholder="06.01.2023"></div><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><div class="form__input-file"><label for="" class=" insurance__program-label mb-lg-1 mb-1">Копии документов:</label><input class="visually-hidden" type="file" id="uploaddocs1"><label for="file" class="insurance__program-aria insurance-upload d-flex align-items-center justify-content-between pe-0"><span class="file-text">Выбрать файл</span><div class="file-img" style="background:#0172B7;border-left:1px solid #000;"><img src="/img/upload.svg" alt=""></div></label></div></div></div></div><div class="row"><div class="insurance__two  col me-lg-5 col"><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class="insurance__program-label mb-lg-1 mb-1">Фамилия</label><input type="text" class="insurance__program-aria" id="LastName1"></div><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class="insurance__program-label mb-lg-1 mb-1">Номер паспорта</label><input type="text" class="insurance__program-aria" id="pasport1"></div><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class=" insurance__program-label mb-lg-1 mb-1">Дата выдачи паспорта:</label><input type="text" class="dates__form insurance__program-aria" onclick="dateSel()" placeholder="06.01.2023" id="datePasportEnd1"></div></div></div><div class="row"><div class="insurance__three  col"><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class="insurance__program-label mb-lg-1 mb-1">Номер телефона</label><input type="tel" class="insurance__program-aria" id="Phone1"></div><div class="insurance__program  insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class="insurance__program-label mb-lg-1 mb-1">Укажите страну</label><select class="insurance__program-aria select" aria-label="Пример выбора по умолчанию" id="country-people1"><option value="">Вы резидент РК?</option><option value="1">Да</option><option value="2">Нет</option></select></div><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><label for="" class="insurance__program-label mb-lg-1 mb-1">Адрес</label><input type="text" class="insurance__program-aria" id="adress1"></div><div class="insurance__program insurance__form-block flex-column d-flex mb-lg-4 mb-3"><div class="form__action-people "><div onclick="AddPeople()"  class="form__add-people-block d-flex align-items-center form__action-block mb-lg-3"><p class="form__add-people-text form__action-text">Добавить</p><div class="form__add-people-img form__action-img ms-3"><img  src="/img/plus-tourist.svg" alt=""></div></div><div onclick="RemovePeople()"   class="form__remove-people-block   d-flex align-items-center form__action-block" ><p class="form__remove-people-text form__action-text">Удалить</p><div class="form__remove-people-img ms-3"><img src="/img/mines-tourist.svg" alt="" ></div></div></div></div></div></div></div>'
            forms.appendChild(form);
            x++;
        }else{
            var toastBody = document.querySelector('.toast-body')
            toastBody.innerHTML = 'Не может быть больше 5 туристов '
            BsAlert.show();
        }
   
}
function RemovePeople(){
    var parent = event.target
    console.log(parent)
    parent.innerHTML=''
    --x
    console.log(x)
}


    let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.file-text').innerText;
  
      input.addEventListener('change', function (e) {
        console.log('asd')
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.file-text').innerText = 'Вы выбрали: ' + countFiles + ' файлов';
        else
          label.querySelector('.file-text').innerText = labelVal;
      });
    })






   //Автоматический перевод


   let ru = document.getElementById('ru');
   let en =  document.getElementById('en');
   
   function coook(a) {
       let cookie = setCookie('lang', a)
   }

   var changeLocaleService = (function () {
       var locale;
   
       function loadLocale(defLang) {
       
           var xhr = new XMLHttpRequest();
           xhr.open("GET", 'lang.json', true);
           xhr.onreadystatechange = saveLocale.bind(this);
           xhr.onerror = function () { console.log("no found page"); };
           xhr.send();
           let cookie = getCookie('lang')
       
           function saveLocale() {
               if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                   locale = JSON.parse(xhr.responseText);
                   console.log("locale loaded");
                   if (defLang) changeLocale(defLang);
                   if (cookie === 'kz') {
                       changeLocale('kz')
                   } else if (cookie === 'ru') {
                       changeLocale('ru')
                   } else if (cookie === 'lat') {
                       changeLocale('lat')
                   } else{
                          changeLocale('ru')
                   }
               }
           }
       }
   
       function changeLocale(lang) {
           if (!locale[lang]) return console.log("no found language");
           else changeText('locale', locale[lang]);
       
           function changeText(name, object, startIndex) {
               for (key in object)
                   if (Array.isArray(object[key]) && typeof object[key] != 'string' && typeof object[key][0] == 'string') getArrayText(key, object, name);
                   else if (typeof object[key] == "object") {
                       if (isNaN(key)) changeText(name + "-" + key, object[key]);
                       else changeText(name, object[key], key);
                   }
                   else getText(key, object, name, startIndex);
           }
           function getText(key, object, name, startIndex) {
               var elementKey = 0;
               if (startIndex) elementKey = startIndex;
           
               for (; elementKey < document.getElementsByClassName(name + "-" + key).length; elementKey++)
                   if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].textContent = object[key];
           
           }
           function getArrayText(key, object, name, startIndex) {
               var elementKey = 0;
               if (startIndex) elementKey = startIndex;
           
               for (; elementKey < document.getElementsByClassName(name + "-" + key).length; elementKey++)
                   if (!isNaN(elementKey)) document.getElementsByClassName(name + "-" + key)[elementKey].textContent = object[key][elementKey % object[key].length];
           }
       
       }
   
       return {
           loadLocale: loadLocale,
           changeLocale: changeLocale
       }
   })();





    //Google Translate


    const googleTranslateConfig = {
        /* Original language */
        lang: "ru",
        /* The language we translate into on the first visit*/
        /* Язык, на который переводим при первом посещении */
        // langFirstVisit: 'en',
        /* Если скрипт не работает на поддомене, 
        раскомментируйте и
        укажите основной домен в свойстве domain */
        /* domain: "Get-Web.Site" */
    };
    document.addEventListener("DOMContentLoaded", (event) => {
        /* Подключаем виджет google translate */
        /* Connecting the google translate widget */
        let script = document.createElement("script");
        script.src = `//translate.google.com/translate_a/element.js?cb=TranslateWidgetIsLoaded`;
        document.getElementsByTagName("head")[0].appendChild(script);
    });
    
    function TranslateWidgetIsLoaded() {
        TranslateInit(googleTranslateConfig);
    }
    function TranslateInit() {
    
        if (googleTranslateConfig.langFirstVisit && !Cookies.get('googtrans')) {
            // Если установлен язык перевода для первого посещения и куки не назначены
            TranslateCookieHandler("/auto/" + googleTranslateConfig.langFirstVisit);
        }
    
        let code = TranslateGetCode();
        // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
        if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
            document.querySelector('[data-google-lang="' + code + '"]').classList.add('language__img_active');
        }
    
        if (code == googleTranslateConfig.lang) {
            // Если язык по умолчанию, совпадает с языком на который переводим
            // То очищаем куки
            TranslateCookieHandler(null, googleTranslateConfig.domain);
        }
    
        // Инициализируем виджет с языком по умолчанию
        new google.translate.TranslateElement({
            pageLanguage: googleTranslateConfig.lang,
        });
        // Вешаем событие  клик на флаги
        TranslateEventHandler('click', '[data-google-lang]', function (e) {
            TranslateCookieHandler("/" + googleTranslateConfig.lang + "/" + e.getAttribute("data-google-lang"), googleTranslateConfig.domain);
            // Перезагружаем страницу
            window.location.reload();
        });
    }
    
    function TranslateGetCode() {
        // Если куки нет, то передаем дефолтный язык
        let lang = (Cookies.get('googtrans') != undefined && Cookies.get('googtrans') != "null") ? Cookies.get('googtrans') : googleTranslateConfig.lang;
        return lang.match(/(?!^\/)[^\/]*$/gm)[0];
    }
    
    function TranslateCookieHandler(val, domain) {
        // Записываем куки /язык_который_переводим/язык_на_который_переводим
        Cookies.set('googtrans', val);
        Cookies.set("googtrans", val, {
            domain: "." + document.domain,
        });
    
        if (domain == "undefined") return;
        // записываем куки для домена, если он назначен в конфиге
        Cookies.set("googtrans", val, {
            domain: domain,
        });
    
        Cookies.set("googtrans", val, {
            domain: "." + domain,
        });
    }
    
    function TranslateEventHandler(event, selector, handler) {
        document.addEventListener(event, function (e) {
            let el = e.target.closest(selector);
            if (el) handler(el);
        });
    }













 