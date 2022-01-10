import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListItem, Item } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
         <ListItem>
            {friends.map(friend => (
                <Item key={friend.id}>
                    <FriendListItem
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />
                </Item>
            ))}
        </ListItem>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};