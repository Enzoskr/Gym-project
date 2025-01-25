import React from "react";
import {
  MembersContainer,
  MemberCard,
  ContentCard,
  CreateMember,
} from "./MembersCardStyles";
import { membersData } from "../data/DataMembers";
import Button from "../../UI/Buttons/Buttons";
import { Link } from "react-router-dom";

const MembersCard = () => {
  const handleCreateMember = () => {
    alert("Create member");
  };

  return (
    <>
      <CreateMember>
        <Link to="/members/create">
          <Button onClick={handleCreateMember}>Create member</Button>
        </Link>
      </CreateMember>
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
