import { IProduct } from "types/productTypes";
import gprox from "./assets/img/gprox.png";
import gproxBig from "./assets/img/gproxBig.png";
import gproxBig2 from "./assets/img/gproxBig2.png";
import gproxBig3 from "./assets/img/gproxBig3.png";
import gproxBig4 from "./assets/img/gproxBig4.png";
import gproxBig5 from "./assets/img/gproxBig5.png";
import g102 from "./assets/img/g102.png";
import g102big from "./assets/img/g102big.png";
import g102big2 from "./assets/img/g102big2.png";
import g102big3 from "./assets/img/g102big3.png";
import g102big4 from "./assets/img/g102big4.png";
import g304 from "./assets/img/g304.png";
import g304big from "./assets/img/g304big.png";
import g304big2 from "./assets/img/g304big2.png";
import g304big3 from "./assets/img/g304big3.png";
import g304big4 from "./assets/img/g304big4.png";
import g304big5 from "./assets/img/g304big5.png";
import g304big6 from "./assets/img/g304big6.png";
import g403 from "./assets/img/g403.png";
import g403big from "./assets/img/g403big.png";
import g403big2 from "./assets/img/g403big2.png";
import g403big3 from "./assets/img/g403big3.png";
import g403big4 from "./assets/img/g403big4.png";
import g403big5 from "./assets/img/g403big5.png";
import g502 from "./assets/img/g502.png";
import g502big from "./assets/img/g502big.png";
import g502big2 from "./assets/img/g502big2.png";
import g502big3 from "./assets/img/g502big3.png";
import g502big4 from "./assets/img/g502big4.png";
import g502big5 from "./assets/img/g502big5.png";
import g603 from "./assets/img/g603.png";
import g603big from "./assets/img/g603big.png";
import gpro from "./assets/img/gpro.png";
import gproBig from "./assets/img/gproBig.png";
import gproBig2 from "./assets/img/gproBig2.png";
import gproBig3 from "./assets/img/gproBig3.png";
import gproBig4 from "./assets/img/gproBig4.png";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Мышь беспроводная Logitech G PRO X SUPERLIGHT",
    manufacturer: "logitech",
    altName: "logitechGproXSuperlight",
    imgSmall: gprox,
    imgBig: [gproxBig, gproxBig2, gproxBig3, gproxBig4, gproxBig5],
    description:
      "Менее 63 грамм. Усовершенствованная беспроводная связь LIGHTSPEED с низкой задержкой. Субмикронная точность благодаря датчику HERO 25K. Устраните все препятствия с помощью нашей самой легкой и быстрой мыши PRO.",
    price: 14899,
    specifications: {
      physicalSpecifications: {
        length: 125,
        width: 63.5,
        height: 40,
        weight: 63,
      },
      technicalSpecifications: {
        sensor: "HERO",
        maxDpi: 25600,
        pollingFrequency: 2000,
        microswitches: "Kailh TTC Omron",
        encoder: "TTC White",
        type: "Беспроводная",
        batteryLife: 70,
      },
    },
    reviews: [
      {
        id: 1,
        author: "Иван Петров",
        body: "Очень легкая и удобная мышь, идеально подходит для игр с высокими требованиями к скорости и точности. Беспроводное соединение без задержек позволяет полностью погрузиться в игровой процесс.",
        evaluation: 5,
      },
      {
        id: 2,
        author: "Анна Сидорова",
        body: "Отличная мышь, которая идеально лежит в руке. Удобная конструкция и высокая скорость реакции делают ее идеальным выбором для любого геймера.",
        evaluation: 5,
      },
      {
        id: 3,
        author: "Петр Иванов",
        body: "Недорогая, но качественная мышь. Легкая и удобная, позволяет эффективно управлять курсором и выполнять сложные действия в играх.",
        evaluation: 4,
      },
      {
        id: 4,
        author: "Елена Николаева",
        body: "Отличный выбор для профессиональных геймеров. Высокая точность и скорость реакции делают игровой процесс более динамичным и увлекательным.",
        evaluation: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Мышь проводная Logitech G102 LIGHTSYNC",
    manufacturer: "logitech",
    altName: "logitechG102lightsync",
    imgSmall: g102,
    imgBig: [g102big, g102big2, g102big3, g102big4],
    description:
      "Мышь Logitech G102 LIGHTSYNC позволяет геймеру проходить игры с максимальным комфортом и эффективностью. Данная модель манипулятора обеспечивает стабильное подключение по проводному интерфейсу USB и быструю реакцию на перемещения курсора благодаря датчику с показателем чувствительности до 8000 dpi.",
    price: 2499,
    specifications: {
      physicalSpecifications: {
        length: 116.6,
        width: 62,
        height: 38.2,
        weight: 85,
      },
      technicalSpecifications: {
        sensor: "Mercury",
        maxDpi: 8000,
        pollingFrequency: 1000,
        microswitches: "Omron",
        encoder: "Неизвестно",
        type: "Проводная",
      },
    },
    reviews: [
      {
        id: 1,
        author: "Максим Смирнов",
        body: "Отличная проводная мышь для игр. Удобная форма и высокая чувствительность позволяют эффективно управлять курсором в играх любого жанра.",
        evaluation: 2,
      },
      {
        id: 2,
        author: "Анна Иванова",
        body: "Качественная и недорогая мышь. Проводное соединение обеспечивает стабильную и быструю передачу данных, что важно при игре в онлайн-игры.",
        evaluation: 2,
      },
      {
        id: 3,
        author: "Елизар Семёнов",
        body: "Мышь понравилась своей простотой и надежностью. Отличный выбор для тех, кто предпочитает проводные устройства и не нуждается в лишних функциях.",
        evaluation: 4,
      },
      {
        id: 4,
        author: "Елена Сидорова",
        body: "У меня эта мышь уже несколько месяцев, и я не очень довольна ею. Работает не стабильно, есть проблемы с подключением, форма удобная для долгих игровых сессий.",
        evaluation: 3,
      },
    ],
  },
  {
    id: 3,
    name: "Мышь беспроводная Logitech G304 LIGHTSPEED",
    manufacturer: "logitech",
    altName: "logitechG304lightspeed",
    imgSmall: g304,
    imgBig: [g304big, g304big2, g304big3, g304big4, g304big5, g304big6],
    description:
      "Оснащенная 6 программируемыми кнопками мышь беспроводная Logitech G304 LIGHTSPEED [910-005286] подходит для комплектации ноутбуков и стационарных компьютеров, преимущественно используемых для игр. ",
    price: 4199,
    specifications: {
      physicalSpecifications: {
        length: 116.6,
        width: 62.1,
        height: 38.2,
        weight: 99,
      },
      technicalSpecifications: {
        sensor: "Mercury",
        maxDpi: 8000,
        pollingFrequency: 1000,
        microswitches: "Omron",
        encoder: "Неизвестно",
        type: "Беспроводная",
        batteryLife: 80,
      },
    },
    reviews: [
      {
        id: 1,
        author: "Александр Иванов",
        body: "Отличная беспроводная мышь. Прекрасно лежит в руке, удобно управлять кнопками. Батарея держится долго, что особенно важно для длительных игровых сессий.",
        evaluation: 5,
      },
      {
        id: 2,
        author: "Мария Петрова",
        body: "У меня уже вторая такая мышь, и я полностью довольна. Быстрое и стабильное подключение, отличная чувствительность и долгий срок службы батареи.",
        evaluation: 5,
      },
      {
        id: 3,
        author: "Павел Сидоров",
        body: "Хорошая мышь за свою цену. Проста в использовании, хорошо подходит для игр и повседневной работы за компьютером. Рекомендую.",
        evaluation: 4,
      },
      {
        id: 4,
        author: "Ольга Николаева",
        body: "Мышь G304 LIGHTSPEED - отличный выбор для геймеров. Быстрый отклик и высокая точность позволяют наслаждаться игровым процессом без задержек и сбоев.",
        evaluation: 5,
      },
      {
        id: 5,
        author: "Евгений Козлов",
        body: "Пользуюсь мышью около месяца и очень доволен. Отличное качество сборки, удобная эргономика, хороший дизайн. Рекомендую к покупке.",
        evaluation: 5,
      },
    ],
  },
  {
    id: 4,
    name: "Мышь проводная Logitech G502 HERO",
    manufacturer: "logitech",
    altName: "logitechG502hero",
    imgSmall: g502,
    imgBig: [g502big, g502big2, g502big3, g502big4, g502big5],
    description:
      "Мышь проводная Logitech G502 HERO – игровой манипулятор с 11 кнопками в конструкции. Устройство располагает встроенной памятью, в которую можно сохранить настройки разрешения, конфигурацию программируемых кнопок и параметры RGB-подсветки.",
    price: 4699,
    specifications: {
      physicalSpecifications: {
        length: 132,
        width: 75,
        height: 40,
        weight: 121,
      },
      technicalSpecifications: {
        sensor: "Mercury",
        maxDpi: 16000,
        pollingFrequency: 1000,
        microswitches: "Omron",
        encoder: "Неизвестно",
        type: "Проводная",
      },
    },
    reviews: [
      {
        id: 1,
        author: "Алексей Смирнов",
        body: "Отличная проводная мышь для игр. Высокая точность и скорость реакции позволяют с легкостью справляться с самыми сложными игровыми задачами.",
        evaluation: 5,
      },
      {
        id: 2,
        author: "Екатерина Иванова",
        body: "Мышь супер! Удобная, функциональная, отлично подходит для игр. Особенно порадовало наличие 11 программируемых кнопок, которые можно настроить под свои нужды.",
        evaluation: 5,
      },
      {
        id: 3,
        author: "Андрей Петров",
        body: "Мышь Logitech G502 HERO - это просто бомба! Идеально подходит для игр любого жанра. Удобная, точная, с множеством настроек. Рекомендую к покупке.",
        evaluation: 5,
      },
      {
        id: 4,
        author: "Марина Сидорова",
        body: "Отличная проводная мышь, качество сборки на высоте. Чувствительность настраивается под любые нужды, много программных настроек. Советую!",
        evaluation: 5,
      },
    ],
  },
  {
    id: 5,
    name: "Мышь проводная Logitech G403 HERO",
    manufacturer: "logitech",
    altName: "logitechG403hero",
    imgSmall: g403,
    imgBig: [g403big, g403big2, g403big3, g403big4, g403big5],
    description:
      "Мышь проводная Logitech G403 HERO [910-005636] – игровая модель с черным дизайном для хвата правой рукой. Система регулировки веса с набором грузиков в комплекте позволяет настраивать удобную массу устройства. ",
    price: 5999,
    specifications: {
      physicalSpecifications: {
        length: 124,
        width: 68,
        height: 43,
        weight: 87.3,
      },
      technicalSpecifications: {
        sensor: "Omron",
        maxDpi: 256000,
        pollingFrequency: 1000,
        microswitches: "Kailh TTC Omron",
        encoder: "TTC White",
        type: "Проводная",
      },
    },
    reviews: [
      {
        id: 1,
        author: "Игорь Козлов",
        body: "Отличная проводная мышь, удобно лежит в руке, кнопки нажимаются легко. Настройка веса - большой плюс, можно подобрать оптимальный вариант для себя.",
        evaluation: 5,
      },
      {
        id: 2,
        author: "Анастасия Петрова",
        body: "Мышь Logitech G403 HERO - идеальный выбор для геймеров. Удобная форма, высокая чувствительность, отличное качество сборки. Рекомендую!",
        evaluation: 5,
      },
      {
        id: 3,
        author: "Артем Сидоров",
        body: "Пользуюсь этой мышью уже несколько месяцев и полностью доволен. Отличное качество, точность и удобство использования. Быстрый отклик на движения.",
        evaluation: 5,
      },
      {
        id: 4,
        author: "Екатерина Иванова",
        body: "Мышь G403 HERO - прекрасный выбор для игр и повседневной работы за компьютером. Удобная форма, точная работа, никаких проблем с подключением.",
        evaluation: 5,
      },
      {
        id: 5,
        author: "Денис Смирнов",
        body: "Отличная проводная мышь для игр. Удобная, хорошо лежит в руке, чувствительность можно настроить под свои нужды. Рекомендую к покупке.",
        evaluation: 5,
      },
    ],
  },
  {
    id: 6,
    name: "Мышь беспроводная Logitech G603 LIGHTSPEED",
    manufacturer: "logitech",
    altName: "logitechG603lightspeed",
    imgSmall: g603,
    imgBig: [g603big],
    description:
      "Мышь беспроводная Logitech G603 LIGHTSPEED – модель с расширенным функционалом и лаконичным серо-черным цветом корпуса, обеспечивающая максимум комфорта при повседневной работе за компьютером. ",
    price: 6199,
    specifications: {
      physicalSpecifications: {
        length: 124,
        width: 68,
        height: 43,
        weight: 88.9,
      },
      technicalSpecifications: {
        sensor: "Mercury",
        maxDpi: 12000,
        pollingFrequency: 1000,
        microswitches: "Kailh TTC Omron",
        encoder: "Неизвестно",
        type: "Беспроводная",
        batteryLife: 160,
      },
    },
    reviews: [
      {
        id: 1,
        author: "Наталья Козлова",
        body: "Отличная беспроводная мышь. Удобная форма, хорошая чувствительность, долгий срок службы батареи - все, что нужно для комфортной работы за компьютером.",
        evaluation: 5,
      },
      {
        id: 2,
        author: "Алексей Петров",
        body: "Мышь G603 LIGHTSPEED превзошла мои ожидания. Удобная, легкая, беспроводная, долго держит заряд. Очень доволен покупкой!",
        evaluation: 5,
      },
      {
        id: 3,
        author: "Елена Сидорова",
        body: "Использую эту мышь уже несколько месяцев и только положительные впечатления. Удобная форма, стабильное подключение, долгий срок работы без зарядки.",
        evaluation: 5,
      },
      {
        id: 4,
        author: "Иван Иванов",
        body: "Отличная мышь за свои деньги. Батарейки держат долго, удобно лежит в руке, хорошая чувствительность. Рекомендую к покупке.",
        evaluation: 5,
      },
    ],
  },
  {
    id: 7,
    name: "Мышь беспроводная/проводная Logitech G PRO Wireless",
    manufacturer: "logitech",
    altName: "logitechGPro",
    imgSmall: gpro,
    imgBig: [gproBig, gproBig2, gproBig3, gproBig4],
    description:
      "Мышь Logitech G PRO Wireless [910-005272] с возможностью проводного и беспроводного соединения является универсальным решением для геймеров. ",
    price: 9999,
    specifications: {
      physicalSpecifications: {
        length: 132,
        width: 75,
        height: 40,
        weight: 121,
      },
      technicalSpecifications: {
        sensor: "Mercury",
        maxDpi: 25600,
        pollingFrequency: 1000,
        microswitches: "Kailh TTC Omron",
        encoder: "Неизвестно",
        type: "Беспроводная/проводная",
        batteryLife: 60,
      },
    },
    reviews: [
      {
        id: 1,
        author: "Михаил Иванов",
        body: "Отличная мышь, удобно лежит в руке, легкая, точная. Возможность использовать как беспроводную, так и проводную - большой плюс. Рекомендую!",
        evaluation: 5,
      },
      {
        id: 2,
        author: "Анна Петрова",
        body: "Мышь G PRO Wireless - лучшее, что я пробовала. Удобная, точная, отличное качество сборки. Использую как для игр, так и для работы за компьютером.",
        evaluation: 5,
      },
      {
        id: 3,
        author: "Павел Сидоров",
        body: "Отличная мышь, я доволен покупкой. Возможность использовать как проводную, так и беспроводную - это очень удобно. Рекомендую всем!",
        evaluation: 5,
      },
      {
        id: 4,
        author: "Елена Иванова",
        body: "Мышь Logitech G PRO Wireless превзошла мои ожидания. Удобная, точная, отлично лежит в руке. Очень довольна покупкой.",
        evaluation: 5,
      },
    ],
  },
];
