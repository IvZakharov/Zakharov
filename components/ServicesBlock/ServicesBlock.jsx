import styles from './ServicesBlock.module.scss';

function ServicesBlock({ title, text, priceMin, priceMax }) {
  return (
    <div className="col-12 col-xl-10 offset-xl-1">
      <div className={styles.servicesBlock}>
        <div className={styles.header}>
          <div className="col-12 col-md-6">
            <h4 className={styles.title}>{title}</h4>
          </div>
          <div className="col-12 col-md-6">
            <p className={styles.description}>{text}</p>
          </div>
        </div>
        <div className={`${styles.bottom} row`}>
          <div className="col-12 col-md-6">
            <p className={styles.price}>от {priceMin} &#8381</p>
          </div>
          <div className="col-12 col-md-6">
            <p className={styles.price}>до {priceMax} &#8381</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBlock;
