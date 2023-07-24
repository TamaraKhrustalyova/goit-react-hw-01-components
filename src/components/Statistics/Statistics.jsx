import PropTypes from 'prop-types';
import {SectionStats, StatsTitle, StatsData, StatEl, StatDocType, StatPercentage} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
        return (
            <SectionStats>
              {title && <StatsTitle>{title}</StatsTitle>}
              <StatsData>
                {stats.map(({ id, label, percentage }) => {
                    return <StatEl key={id} docType={label}>
                                <StatDocType>{label} </StatDocType>
                                <StatPercentage>{percentage}%</StatPercentage>
                            </StatEl>
                     })}
              </StatsData>
            </SectionStats>
        );
    }; 
    
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}
       
