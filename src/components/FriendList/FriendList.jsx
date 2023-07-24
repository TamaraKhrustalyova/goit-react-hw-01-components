import PropTypes from 'prop-types';
import { Friend } from 'components/FriendListItem/FriendListItem';
import { UserList } from './FriendList.styled';


export const FriendList = ({userFriends}) => {
    return (
        <UserList>
            {userFriends.map((friend)  => {
                return (
                    <Friend 
                    key={friend.id}
                    data={friend}
                    />)}  
                )}    
        </UserList>
    )
};

FriendList.propTypes = {
    userFriends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
}