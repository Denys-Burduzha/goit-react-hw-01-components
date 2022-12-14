

import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
        {title ? <h2 className={styles.title}>{title}</h2> : ' '}

    <ul className={styles.statList}>
        {stats.map(data => (
            <li
            key={data.id} 
            style={{ backgroundColor: getRandomHexColor() }}
            className={styles.item}
            >
              <span className={styles.label}>{data.label}</span>
              <span className={styles.percentage}>{data.percentage}%</span>
            </li>
        ))}
    </ul>
  </section>
);
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};