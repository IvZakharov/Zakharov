import styles from './Prices.module.scss';
import { Link } from 'react-router-dom';

import ServicesBlock from '../ServicesBlock/ServicesBlock';

function Services() {
  const servicesList = [
    {
      title: 'Landing Page',
      text: 'Проектирование структуры сайта. Интервью, сбор контента. Написание текстов. Формирование прототипа. Индивидуальный дизайн с разработкой дизайн-концепции. Внедрение анимации. Верстка, программирование.',
      priceMin: '15 000',
      priceMax: '80 000',
    },

    {
      title: 'Корпоративный или промосайт',
      text: 'Проектирование структуры сайта. Интервью, сбор контента. Написание текстов. Формирование прототипа. Индивидуальный дизайн с разработкой дизайн-концепции. Внедрение анимации. Верстка, программирование.',
      priceMin: '30 000',
      priceMax: '300 000',
    },

    {
      title: 'Интернет-магазин',
      text: 'Проектирование структуры сайта. Интервью, сбор контента. Написание текстов. Формирование прототипа. Индивидуальный дизайн с разработкой дизайн-концепции. Внедрение анимации. Верстка, программирование.',
      priceMin: '30 000',
      priceMax: '200 000',
    },

    {
      title: 'Доработка ваших проектов',
      text: 'Редизайн, поиск ошибок, верстка, программирование',
      priceMin: '10$',
      priceMax: 'за час',
    },
  ];

  return (
    <section className={`${styles.services} row`}>
      <div className="col-12">
        <h2 className={styles.title}>Рразработка сайта</h2>
        <p className={styles.subtitle}>
          Ниже приведены примерные цены <br /> Оканчательная стоимость рассчитывается индивидуально
          для каждого проекта
        </p>
      </div>

      {servicesList.map((obj) => (
        <ServicesBlock />
      ))}

      <div className="row">
        <div className="col">
          <img src="" alt="" />
          <h2>Портфолио</h2>
        </div>
        <Link to="" className="col">
          <img src="" alt="" />
          <h2>Разработка сайтов</h2>
        </Link>
      </div>
    </section>
  );
}

export default Services;
