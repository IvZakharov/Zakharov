import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Ivan Zakharov <br/>
        Web Developer
      </h1>
    </section>
  );
};
