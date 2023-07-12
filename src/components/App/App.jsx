import { Profile } from 'components/Profile/Profile';
import userData from '../../user.json';
import { Statistics } from 'components/Statistics/Statistics';
import statsData from '../../data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../../friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';

import { Container } from './App.styled';


export const App = () => {
  return (
    <Container>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList userFriends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
 