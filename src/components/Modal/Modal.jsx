import { useSelector, useDispatch } from "react-redux";
import { modalAction } from '../../redux/actions';
import styles from './Modal.module.scss';

export default function Modal() {
    const dispatch = useDispatch();
    const information = useSelector((store) => store.getOneCountryReducer);

    const getTotall = () => {
        let cases = 0;
        let deaths = 0;
        let recovered = 0;
        let name;
        if (information.length) {
            name = information[0].Country;
            // eslint-disable-next-line array-callback-return
            information.map((item) => {
              cases += item.Confirmed;
              deaths += item.Deaths;
              recovered += item.Recovered;
            });
          }

          return { name, cases, deaths, recovered };
    };

    const modalClose = () => {
        dispatch(modalAction(false));
    }

    return (
        
    <div className={styles.popup}>
    <div className={styles.content_block}>
      <h2 className={styles.title}>{getTotall().name}</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <svg
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7616 13.2852L15.8495 19.1094C15.498 19.8184 14.4785 19.7949 14.1562 19.0742L10.8222 11.6738L9.0644 15.875H3.55073L14.2441 26.8027C14.6601 27.2305 15.3339 27.2305 15.7499 26.8027L26.4491 15.875H20.0566L18.7616 13.2852ZM27.7558 3.33008L27.6152 3.18359C24.5976 0.101562 19.6581 0.101562 16.6347 3.18359L14.9999 4.85937L13.3652 3.18945C10.3476 0.101562 5.40229 0.101562 2.38472 3.18945L2.24409 3.33008C-0.609419 6.24805 -0.732466 10.8945 1.81636 14H7.81635L9.91986 8.94922C10.2363 8.19336 11.3027 8.17578 11.6425 8.92578L15.0527 16.502L17.9238 10.7656C18.2695 10.0742 19.2538 10.0742 19.5995 10.7656L21.2167 14H28.1835C30.7323 10.8945 30.6093 6.24805 27.7558 3.33008Z"
              fill="#666666"
            />
          </svg>
          <p className={styles.text}>Total Confirmed</p>
          <p className={styles.numbers}>{getTotall().cases}</p>
        </li>

        <li className={styles.item}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0C6.71484 0 0 5.87695 0 13.125C0 17.2324 2.16211 20.8945 5.53711 23.3027C6.09961 23.707 6.42773 24.3633 6.32812 25.0547L5.77734 28.9336C5.69531 29.4961 6.12891 30 6.69727 30H11.25V26.7188C11.25 26.4609 11.4609 26.25 11.7188 26.25H12.6562C12.9141 26.25 13.125 26.4609 13.125 26.7188V30H16.875V26.7188C16.875 26.4609 17.0859 26.25 17.3438 26.25H18.2812C18.5391 26.25 18.75 26.4609 18.75 26.7188V30H23.3027C23.8711 30 24.3047 29.4961 24.2227 28.9336L23.6719 25.0547C23.5723 24.3691 23.8945 23.707 24.4629 23.3027C27.8379 20.8945 30 17.2324 30 13.125C30 5.87695 23.2852 0 15 0ZM9.375 18.75C7.30664 18.75 5.625 17.0684 5.625 15C5.625 12.9316 7.30664 11.25 9.375 11.25C11.4434 11.25 13.125 12.9316 13.125 15C13.125 17.0684 11.4434 18.75 9.375 18.75ZM20.625 18.75C18.5566 18.75 16.875 17.0684 16.875 15C16.875 12.9316 18.5566 11.25 20.625 11.25C22.6934 11.25 24.375 12.9316 24.375 15C24.375 17.0684 22.6934 18.75 20.625 18.75Z"
              fill="#666666"
            />
          </svg>
          <p className={styles.text}>Total Deaths</p>
          <p className={styles.numbers}>{getTotall().deaths}</p>
        </li>
        <li className={styles.item}>
          <svg
            width="23"
            height="30"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.0898 6.15234L16.3535 0.410156C16.0898 0.146484 15.7324 0 15.3574 0H15V7.5H22.5V7.14258C22.5 6.77344 22.3535 6.41602 22.0898 6.15234ZM13.125 7.96875V0H1.40625C0.626953 0 0 0.626953 0 1.40625V28.5938C0 29.373 0.626953 30 1.40625 30H21.0938C21.873 30 22.5 29.373 22.5 28.5938V9.375H14.5312C13.7578 9.375 13.125 8.74219 13.125 7.96875ZM16.875 17.3438V20.1562C16.875 20.4141 16.6641 20.625 16.4062 20.625H13.125V23.9062C13.125 24.1641 12.9141 24.375 12.6562 24.375H9.84375C9.58594 24.375 9.375 24.1641 9.375 23.9062V20.625H6.09375C5.83594 20.625 5.625 20.4141 5.625 20.1562V17.3438C5.625 17.0859 5.83594 16.875 6.09375 16.875H9.375V13.5938C9.375 13.3359 9.58594 13.125 9.84375 13.125H12.6562C12.9141 13.125 13.125 13.3359 13.125 13.5938V16.875H16.4062C16.6641 16.875 16.875 17.0859 16.875 17.3438Z"
              fill="#666666"
            />
          </svg>
          <p className={styles.text}>Total Recovered</p>
          <p className={styles.numbers}>{getTotall().recovered}</p>
        </li>
      </ul>
      <button className={styles.button} onClick={modalClose}>
        OK
      </button>
    </div>
  </div>
);
}