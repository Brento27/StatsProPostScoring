import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TeamsCollection } from '../api/Teams';
export const Teams = () => {
  const teams = useTracker(() => {
    return TeamsCollection.find().fetch();
  });

  return (
    <div>
      <ul>
        {teams.map((team) => (
          <li key={team._id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};
