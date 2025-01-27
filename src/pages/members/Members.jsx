import React from "react";
import MembersCard from "../../components/memberscard/MembersCard";
import { CreateMember } from "./MembersStyles";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Buttons/Buttons";

const Members = () => {
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
      <MembersCard />
    </>
  );
};

export default Members;
