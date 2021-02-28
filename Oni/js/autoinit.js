$(document).ready(function () {
  $("input.autocomplete").autocomplete({
    limit: 4,
    data: {
      /* Музыка
================================================== */
      Музыка: null,
      loop: null,
      play: null,
      remove: null,
      shuffle: null,
      volume: null,
      pause: null,
      lyrics: null,
      pruning: null,
      resume: null,
      skipto: null,
      playlist: null,
      np: null,
      queue: null,
      search: null,
      stop: null,
      skip: null,

      /* Арты и пикчи
================================================== */
      Арты: null,
      Пикчи: null,
      neko: null,
      nekogif: null,
      foxgirl: null,
      kemonomimi: null,
      meow: null,

      /* Взаимодействия
================================================== */
      Взаимодействие: null,
      smug: null,

      /* Развлечения
================================================== */
      Развлечения: null,
      iq: null,

      /* Модерация
================================================== */
      Модерация: null,
      addemote: null,
      ban: null,
      unban: null,
      prune: null,

      /* Информация
================================================== */
      Информация: null,
      stats: null,
      ping: null,
      help: null,
      invite: null,

      /* Для владельца
================================================== */
      Владелец: null,
      reboot: null,
      setname: null,
      shutdown: null,

      /* Утилиты
================================================== */
      Утилиты: null,
      afk: null,
      avatar: null,
      profile: null,
      say: null,
      serverinfo: null,
      userinfo: null,
      embed: null,
      vote: null,

      /* Магазин
================================================== */
      balance: null,
      inventory: null,
      transfer: null,
      buy: null,
      shop: null,
      leaderboard: null,
    },
  });
});
