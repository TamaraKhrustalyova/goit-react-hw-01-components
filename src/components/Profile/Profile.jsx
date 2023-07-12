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
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  };
