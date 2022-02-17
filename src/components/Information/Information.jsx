import { useSelector, useDispatch } from "react-redux";
import { getOneCountryAction, modalAction } from "../../redux/actions";
import styles from "./Information.module.scss";
import Modal from "../Modal";

export default function Information() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => {
    return store.allCountriesReducer;
  });
  const filter = useSelector((store) => {
    return store.filteredCountriesReducer;
  });
  console.log(filter);

  const modalStatus = useSelector((store) => store.modalReducer);

  const modalOpen = () => {
    dispatch(modalAction(true));
  };

  const getInformationByCountry = (country) => {
    dispatch(getOneCountryAction(country));
    modalOpen();
  };

  let counter = 0;
  return (
    <div className="container">
      <div className={styles.table__title}>
        <p className={styles.table__title_text_numbers}>№</p>
        <span className={styles.title__separator}></span>
        <p className={styles.table__title__text_countries}>Country</p>
        <span className={styles.title__separator}></span>
        <p className={styles.table__title__text_cases}>Total Confirmed</p>
      </div>

      <ul>
        {filter.length
          ? filter.map((country) => {
              const { ID, Country, TotalConfirmed } = country;
              counter++;
              return (
                <li className={styles.main_table__item} key={ID}>
                  <p className={styles.main_table__text_numbers}>{counter}</p>
                  <span className={styles.main_table__separator}></span>
                  <p
                    className={styles.main_table__text_countries}
                    onClick={() => getInformationByCountry(Country)}
                  >
                    {Country}
                  </p>
                  <span className={styles.main_table__separator}></span>
                  <p className={styles.main_table__text_cases}>
                    {TotalConfirmed}
                  </p>
                </li>
              );
            })
          : countries.map((country) => {
              const { ID, Country, TotalConfirmed } = country;
              counter++;
              return (
                <li className={styles.main_table__item} key={ID}>
                  <p className={styles.main_table__text_numbers}>{counter}</p>
                  <span className={styles.main_table__separator}></span>
                  <p
                    className={styles.main_table__text_countries}
                    onClick={() => getInformationByCountry(Country)}
                  >
                    {Country}
                  </p>
                  <span className={styles.main_table__separator}></span>
                  <p className={styles.main_table__text_cases}>
                    {TotalConfirmed}
                  </p>
                </li>
              );
            })}
      </ul>
      {modalStatus && <Modal />}
    </div>
  );
}