import React from "react";
import {
  CreateMembersdiv,
  CreateMembersForm,
  Inputform,
  TitleForm,
} from "./CreateMembersStyles";

const CreateMembers = () => {
  return (
    <CreateMembersdiv>
      <CreateMembersForm>
        <TitleForm>Crear nuevo miembro</TitleForm>
        <Inputform />
      </CreateMembersForm>
    </CreateMembersdiv>
  );
};

export default CreateMembers;
