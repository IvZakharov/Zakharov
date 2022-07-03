import styles from './Contacts.module.scss';
import Link from 'next/link';


export const Contacts = () => {


  return (
   <div className={styles.contacts}>
     <div className={'container'}>
       <ul className={styles.list}>
         <li><Link href={''}>
           <a>Telegram</a>
         </Link></li>
         <li><Link href={''}>
           <a>Instagram</a>
         </Link></li>
         <li><Link href={''}>
           <a>GitHub</a>
         </Link></li>
       </ul>
     </div>
   </div>
  );
};
