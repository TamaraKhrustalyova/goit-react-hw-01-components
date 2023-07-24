import PropTypes from 'prop-types';
import {FriendItem, Status, FriendName} from './FriendListItem.styled'


export const Friend = ({data}) => {
    const {avatar, name, isOnline, id} = data
    return  <FriendItem key={id}>
                <Status isOnline={isOnline}></Status>
                <img src={avatar} alt={name} width="48" />
                <FriendName>{name}</FriendName>
            </FriendItem>
};


Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};