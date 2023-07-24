import PropTypes from 'prop-types';
import { SectionProfile, ProfileText, UserName, UserPic, UserInfo, Stats, StatsItem, StatsNumber } from './Profile.styled';

export const Profile = ({user}) => {
    const {avatar, tag, location, username} = user;
    const {followers, views, likes} = user.stats;
    return (
        <SectionProfile>
            <UserInfo>
                <UserPic
                    width='150px'
                    src={avatar}
                    alt="User avatar"
                />
                <UserName>{username}</UserName>
                <ProfileText>{tag}</ProfileText>
                <ProfileText>{location}</ProfileText>
            </UserInfo>

            <Stats>
                <StatsItem>
                    <span>Followers<br></br></span>
                    <StatsNumber>{followers}</StatsNumber>
                </StatsItem>
                <StatsItem>
                    <span>Views<br></br></span>
                    <StatsNumber>{views}</StatsNumber>
                </StatsItem>
                <StatsItem>
                    <span>Likes<br></br></span>
                    <StatsNumber>{likes}</StatsNumber>
                </StatsItem>
            </Stats>
        </SectionProfile>
    );
};

Profile.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    user: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
  };
