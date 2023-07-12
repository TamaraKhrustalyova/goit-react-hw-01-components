import { styled } from 'styled-components';

export const FriendItem = styled.li`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 380px;
    padding: 10px;
    box-shadow: 1px 1px 3px 1px rgba(143, 143, 143, 1);
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 100%;
  margin-right: 25px;
`;

export const FriendName = styled.p`
    font-size: 20px;
    margin-left: 10px;
`