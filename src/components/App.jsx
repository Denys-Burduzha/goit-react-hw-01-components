

import Profiles from "./Profile/Profile";
import user from "../data/user.json";

import Statistics from "./Statistics/Statistics";
import data from "../data/data.json";

import FriendList from "./FriendList/FriendList";
import friens from "../data/friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions.json"

export const App = () => {
  return (
  <div>
    <div>
    <Profiles
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    </div> 
   <div>
    <Statistics title="Upload stats" stats={data} />
   </div>

   <div>
    <FriendList friends={friens} />
   </div>

   <div>
    <TransactionHistory items={transactions} />
   </div>
  </div>
  );
}