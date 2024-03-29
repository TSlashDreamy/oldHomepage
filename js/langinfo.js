function closeinfo() {
  $(".info").css("right", "-100%"),
    $(".info2").css("right", "-100%"),
    $(".mobile-contacts").css("right", "-100%");
}
function html_trigger() {
  $(".info").css("right", "0").delay(3e3),
    $(".info2").css("right", "0").delay(3e3),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("HTML"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки веб-страниц во Всемирной паутине. Код HTML интерпретируется браузерами; полученная в результате интерпретации страница отображается на экране монитора компьютера или мобильного устройства. В настоящее время Консорциум Всемирной паутины разработал HTML версии 5. Черновой вариант спецификации языка появился в Интернете 20 ноября 2007 года."
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/html.svg").show(800);
    });
}
function css_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("CSS"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "CSS (англ. Cascading Style Sheets «каскадные таблицы стилей») — формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL. До появления CSS оформление веб-страниц осуществлялось исключительно средствами HTML, непосредственно внутри содержимого документа. Однако с появлением CSS стало возможным принципиальное разделение содержания и представления документа."
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/css.svg").show(800);
    });
}
function js_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("JavaScript"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам. "
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/js.svg").show(800);
    });
}
function node_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("Node.js"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "Node или Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. "
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/node.svg").show(800);
    });
}
function react_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("React"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость, простоту и масштабируемость. В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как MobX, Redux и GraphQL."
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/react.svg").show(800);
    });
}
function materialize_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("Materialize"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "Материальный дизайн, созданный и разработанный Google, представляет собой язык дизайна, сочетающий в себе классические принципы успешного дизайна, инновации и технологии. Цель Google - разработать систему дизайна, позволяющую унифицировать пользовательский интерфейс для всех своих продуктов на любой платформе."
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/materialize.svg").show(800);
    });
}
function vsc_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("Visual Studio Code"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "Visual Studio Code — редактор исходного кода, разработанный Microsoft для Windows, Linux и macOS. Позиционируется как «лёгкий» редактор кода для кроссплатформенной разработки веб- и облачных приложений. Включает в себя отладчик, инструменты для работы с Git, подсветку синтаксиса, IntelliSense и средства для рефакторинга. Имеет широкие возможности для кастомизации: пользовательские темы, сочетания клавиш и файлы конфигурации. "
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/vsc.svg").show(800);
    });
}
function git_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("Git"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "Git (произносится «гит») — распределённая система управления версиями. Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux, первая версия выпущена 7 апреля 2005 года. На сегодняшний день его поддерживает Джунио Хамано. Среди проектов, использующих Git — ядро Linux, Swift, Android, Drupal, Cairo, GNU Core Utilities, Mesa, Wine, Chromium, Compiz Fusion, FlightGear, jQuery, PHP, NASM, MediaWiki, DokuWiki, Qt, ряд дистрибутивов Linux. "
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/git.svg").show(800);
    });
}
function bt_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("Bootstrap"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "Bootstrap (также известен как Twitter Bootstrap) — свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и прочих компонентов веб-интерфейса, включая JavaScript-расширения. Bootstrap использует современные наработки в области CSS и HTML, поэтому необходимо быть внимательным при поддержке старых браузеров."
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/bootstrap.svg").show(800);
    });
}
function java_trigger() {
  $(".info").css("right", "0"),
    $(".info2").css("right", "0"),
    $(".info-heading").css("opacity", "0"),
    $(".info-heading")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"), $(this).html("Java"), next();
      }),
    $(".info-description").css("opacity", "0"),
    $(".info-description")
      .delay(800)
      .queue(function (next) {
        $(this).css("opacity", "1"),
          $(this).html(
            "Java — строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle). Разработка ведётся сообществом, организованным через Java Community Process; язык и основные реализующие его технологии распространяются по лицензии GPL. Права на торговую марку принадлежат корпорации Oracle. "
          ),
          next();
      }),
    $(".info-logo").hide(300, function () {
      $(this).attr("src", "./src/skillssvg/java.svg").show(800);
    });
}
