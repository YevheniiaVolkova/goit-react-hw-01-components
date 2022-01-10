import PropTypes from "prop-types";
import { SectionProfile, User, Avatar, UserName , Tag, Location, StatsList, StatsItem, StatsName, StatsQuantity } from "./Profile.styled";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <SectionProfile >
      <User>
        <Avatar
                  src={avatar}
          alt={username}
          
        />
        <UserName >{username}</UserName>
        <Tag >@{tag}</Tag>
        <Location >{location}</Location>
      </User>

      <StatsList>
        <StatsItem>
          <StatsName >Followers</StatsName>
          <StatsQuantity >{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsName >Views</StatsName>
          <StatsQuantity >{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsName >Likes</StatsName>
          <StatsQuantity >{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </SectionProfile>
  );
 
}

Profile.protoTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.number.isRequired,
    
}

