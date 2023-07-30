import PropTypes from 'prop-types';
import { SectionProfile, ProfileText, UserName, UserPic, UserInfo, Stats, StatsItem, StatsNumber } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    const {followers, views, likes} = stats;
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
   
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  };
