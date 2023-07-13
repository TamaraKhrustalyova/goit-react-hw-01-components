import { styled } from 'styled-components';

export const SectionStats = styled.section`
  width: 400px;
  padding: 60px;
  background-color: rgb(236, 236, 236);
  color: gray;
  text-align: center;
`;

export const StatsTitle = styled.h2`
   text-transform: uppercase;
   background-color: white;
   margin: 0;
   padding: 20px 10px;
   font-weight: 600;
`;

export const StatsData = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

export const StatEl = styled.li`
    width: calc(100% / 5);
    padding: 10px;
    color:  rgb(255, 255, 255);
    font-size: 14px;
    text-align: center;

    background-color: ${({ docType }) => {
        switch (docType) {
            case '.docx':
                return 'rgb(146, 189, 151)'; 
            case '.pdf':
                return 'rgb(68, 221, 232)';
            case '.mp3':
                return  'rgb(213, 39, 9)';
            case '.psd':
                return 'rgb(68, 128, 232)';
            // case '.pdf':
            //     return 'rgb(213, 152, 9)';
            default:
                return 'black';
        }
     }};
  `;

  export const StatDocType = styled.span`
    font-size: 14px;
    display: block;
    margin-bottom: 5px;
  `;

  export const StatPercentage = styled.span`
     font-size: 20px;
  `;