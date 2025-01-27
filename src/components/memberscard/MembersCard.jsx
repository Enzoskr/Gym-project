import React from "react";
import { MembersContainer, MemberCard, ContentCard } from "./MembersCardStyles";
import { membersData } from "../data/DataMembers";

const MembersCard = () => {
  return (
    <>
      <MembersContainer>
        {membersData.map((member) => (
          <MemberCard key={member.id}>
            <ContentCard>
              <div className="name">{member.name}</div>
              <div className="plan">Plan: {member.planType}</div>
              <div className="expiration">
                Vencimiento: {member.expirationDate}
              </div>
            </ContentCard>
          </MemberCard>
        ))}
      </MembersContainer>
    </>
  );
};

export default MembersCard;
