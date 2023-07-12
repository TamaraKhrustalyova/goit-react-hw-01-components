import PropTypes from 'prop-types';
import {FriendItem, Status, FriendName} from './FriendListItem.styled'


export const Friend = ({avatar, name, isOnline, id}) => {
    return  <FriendItem key={id}>
                <Status isOnline={isOnline}></Status>
                <img src={avatar} alt={name} width="48" />
                <FriendName>{name}</FriendName>
            </FriendItem>
};


Friend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};