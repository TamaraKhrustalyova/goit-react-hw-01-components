import PropTypes from 'prop-types';
import {SectionStats, StatsTitle, StatsData, StatEl, StatDocType, StatPercentage} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
        return (
            <SectionStats>
              {title && <StatsTitle>{title}</StatsTitle>}
              <StatsData>
                {stats.map(({ id, label, percentage }) => {
                    return <StatEl key={id}>
                                <StatDocType>{label} </StatDocType>
                                <StatPercentage>{percentage}%</StatPercentage>
                            </StatEl>
                     })}
              </StatsData>
            </SectionStats>
        );
    }; 
    
Statistics.propTypes = {
    key: PropTypes.string,
    label: PropTypes.string, 
    percentage: PropTypes.number,
}
       
