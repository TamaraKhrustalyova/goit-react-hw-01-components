import { styled } from 'styled-components';

export const SectionProfile = styled.div`
    padding: 60px;
    width: 400px;
    height: 500px;
    background-color: rgb(236, 236, 236);
    font-size: 20px;
`

export const UserInfo = styled.div`
    padding: 50px 0;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    box-shadow: 3px 0px 3px 5px rgba(212, 212, 212, 1);
    text-align: center;
`

export const UserPic = styled.img`
    width: 100px;
    display: block;
    margin: 0 auto;
    border-radius: 100%;
`

export const ProfileText = styled.p`
    font-size: 18px; 
    color: gray;
`

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 600;
`

export const Stats = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    background-color: #dadada;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: 3px 3px 3px 5px rgba(212, 212, 212, 1);
    border-top: 1px solid #cbcbcb;
`
export const StatsItem = styled.li`
    width: calc(100% / 3);
    padding: 10px;
    font-size: 16px;
    text-align: center;
    &:not(:last-child) {
        border-right: 1px solid #cbcbcb;
  }
`
export const StatsNumber = styled.span`
    font-weight: 600;
    font-size: 20px;
`