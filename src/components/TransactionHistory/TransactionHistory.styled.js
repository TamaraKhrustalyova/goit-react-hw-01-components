import { styled } from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableTitleEl = styled.th`
    width: 150px;
    padding: 10px 0;
    background-color: rgb(9, 77, 213);
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    &:not(:last-child) {
    border-right: 1px solid #ffffff;
    }
`;

export const TableData = styled.td`
    padding: 10px 0;
    color: gray;
    text-align: center;
    font-size: 16px;
    &:not(:last-child) {
    border-right: 1px solid #e9e9e9;
    }
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #eeeeee;
  }
`;