import PropTypes from 'prop-types';
import { Friend } from 'components/FriendListItem/FriendListItem';
import { UserList } from './FriendList.styled';


export const FriendList = ({userFriends}) => {
    return (
        <UserList>
            {userFriends.map(Friend)}      
        </UserList>
    )
};

